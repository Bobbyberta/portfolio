import { config } from '../config.js';
import { ContentManager } from '../components/content-manager.js';

export class GitHubUpdater {
    static async getFile(owner, repo, path) {
        const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`);
        if (!response.ok) {
            throw new Error('Failed to get file');
        }
        return response.json();
    }

    static async testAccess() {
        const { githubToken: token, owner, repo } = config;
        
        const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
            headers: {
                'Authorization': `token ${token}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });
        
        if (!response.ok) {
            const error = await response.json();
            throw new Error(`Cannot access repository: ${error.message}`);
        }
        
        return true;
    }

    static async updateContent(pageId, content) {
        // Test access first
        await this.testAccess();

        // GitHub configuration
        const { githubToken: token, owner, repo } = config;

        // For about page reset, use the original content from src/pages
        let contentToUpdate = content;
        if (pageId === 'about') {
            try {
                console.log('Attempting to fetch original about page...');
                const response = await fetch('/website-content/about.html');
                if (response.ok) {
                    contentToUpdate = await response.text();
                    console.log('Original about page content:', contentToUpdate.substring(0, 200) + '...');
                    
                    // Parse and process the content like normal page load
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(contentToUpdate, 'text/html');
                    console.log('Parsed head content:', doc.head.innerHTML.substring(0, 200) + '...');
                    console.log('Parsed body content:', doc.body.innerHTML.substring(0, 200) + '...');
                    
                    // Create container with head and body sections
                    const container = document.createElement('div');
                    
                    const headSection = document.createElement('div');
                    headSection.className = 'head-section';
                    headSection.innerHTML = doc.head.innerHTML;
                    container.appendChild(headSection);
                    
                    const bodySection = document.createElement('div');
                    bodySection.className = 'body-section';
                    bodySection.innerHTML = doc.body.innerHTML;
                    container.appendChild(bodySection);
                    
                    contentToUpdate = container.innerHTML;
                    console.log('Processed content for update:', contentToUpdate.substring(0, 200) + '...');
                } else {
                    console.error('Failed to fetch about page:', response.status);
                }
            } catch (error) {
                console.error('Failed to fetch original about page:', error);
                throw error;
            }
        }

        // Get the full page content
        const fullPageContent = ContentManager.getFullPageContent(contentToUpdate);

        console.log('Sending repository dispatch event to:', `${owner}/${repo}`);
        console.log('Event payload:', {
            event_type: 'content-update',
            client_payload: {
                pageId: pageId,
                contentLength: content.length // Don't log full content
            }
        });

        try {
            // Trigger repository dispatch event
            const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/dispatches`, {
                method: 'POST',
                headers: {
                    'Authorization': `token ${token}`,
                    'Content-Type': 'application/json',
                    'X-GitHub-Api-Version': '2022-11-28'
                },
                body: JSON.stringify({
                    event_type: 'content-update',
                    client_payload: {
                        pageId: pageId,
                        content: fullPageContent
                    }
                })
            });

            // Log the full response for debugging
            console.log('Response status:', response.status);
            const responseText = await response.text();
            console.log('Response body:', responseText);

            if (!response.ok) {
                throw new Error(`GitHub API Error: ${response.status} - ${responseText}`);
            }

            // Wait a moment for the workflow to start
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Get the latest workflow run
            // Check workflow runs after dispatch
            const runsResponse = await fetch(
                `https://api.github.com/repos/${owner}/${repo}/actions/runs?event=repository_dispatch`,
                {
                    headers: {
                        'Authorization': `token ${token}`,
                        'Accept': 'application/vnd.github.v3+json'
                    }
                }
            );
            
            const runsData = await runsResponse.json();
            console.log('Recent workflow runs:', runsData);

            const workflowUrl = `https://github.com/${owner}/${repo}/actions`;
            console.log('Check workflow status at:', workflowUrl);

            return true;

        } catch (error) {
            console.error('Failed to update content on GitHub:', {
                error,
                owner,
                repo,
                tokenLength: token.length
            });
            throw error;
        }
    }

    // Add version tracking
    static async getPageVersions(pageId) {
        const { githubToken: token, owner, repo } = config;
        
        try {
            const response = await fetch(
                `https://api.github.com/repos/${owner}/${repo}/commits?path=src/pages/${pageId}.html`,
                {
                    headers: {
                        'Authorization': `token ${token}`,
                        'Accept': 'application/vnd.github.v3+json'
                    }
                }
            );
            
            if (!response.ok) {
                throw new Error('Failed to fetch page versions');
            }
            
            const commits = await response.json();
            return commits.map(commit => ({
                sha: commit.sha,
                date: new Date(commit.commit.author.date),
                message: commit.commit.message,
                author: commit.commit.author.name
            }));
        } catch (error) {
            console.error('Failed to get page versions:', error);
            throw error;
        }
    }

    static async getPageContent(pageId, version) {
        const { githubToken: token, owner, repo } = config;
        
        try {
            const response = await fetch(
                `https://api.github.com/repos/${owner}/${repo}/contents/src/pages/${pageId}.html?ref=${version}`,
                {
                    headers: {
                        'Authorization': `token ${token}`,
                        'Accept': 'application/vnd.github.v3+json'
                    }
                }
            );
            
            if (!response.ok) {
                throw new Error('Failed to fetch page content');
            }
            
            const data = await response.json();
            const content = atob(data.content);
            return content;
        } catch (error) {
            console.error('Failed to get page content:', error);
            throw error;
        }
    }

    static async rollbackToVersion(pageId, version) {
        try {
            const content = await this.getPageContent(pageId, version);
            return this.updateContent(pageId, content);
        } catch (error) {
            console.error('Failed to rollback:', error);
            throw error;
        }
    }
} 