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
        try {
            console.log('Updating content for page:', pageId);
            console.log('Content length:', content.length);
            
            // Get the current file content first
            const originalContent = await this.fetchOriginalContent(pageId);
            
            // Create a new document from the original content
            const parser = new DOMParser();
            const doc = parser.parseFromString(originalContent.content, 'text/html');
            
            // Find and update the main content
            const mainSection = doc.querySelector('main');
            if (mainSection) {
                // Create a wrapper div to parse the content
                const wrapper = document.createElement('div');
                wrapper.innerHTML = content;
                
                // Clean up the content structure
                const mainWrapper = wrapper.querySelector('.main-wrapper');
                if (mainWrapper) {
                    // Fix nested sections
                    this.fixNestedSections(mainWrapper);
                    
                    // Clean up whitespace and structure
                    const cleanContent = this.cleanupContent(mainWrapper.innerHTML);
                    
                    mainSection.innerHTML = cleanContent;
                } else {
                    mainSection.innerHTML = content;
                }
            }
            
            // Format the document with proper indentation
            const beautified = this.formatHTML(doc.documentElement.outerHTML);
            const updatedContent = `<!DOCTYPE html>\n${beautified}`;
            
            // Create the event payload
            const payload = {
                event_type: 'content-update',
                client_payload: {
                    pageId: pageId,
                    content: updatedContent
                }
            };

            console.log('Sending repository dispatch event to:', `${config.owner}/${config.repo}`);
            console.log('Event payload:', {
                pageId: payload.client_payload.pageId,
                contentLength: payload.client_payload.content.length,
                contentPreview: payload.client_payload.content.substring(0, 200) + '...'
            });

            // Send the repository dispatch event
            const response = await fetch(
                `https://api.github.com/repos/${config.owner}/${config.repo}/dispatches`,
                {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/vnd.github.v3+json',
                        'Authorization': `token ${config.githubToken}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(payload)
                }
            );

            console.log('Response status:', response.status);
            const responseText = await response.text();
            console.log('Response body:', responseText);

            if (response.status === 204) {
                // Get recent workflow runs to verify the update was triggered
                const workflowResponse = await fetch(
                    `https://api.github.com/repos/${config.owner}/${config.repo}/actions/runs`,
                    {
                        headers: {
                            'Authorization': `token ${config.githubToken}`,
                            'Accept': 'application/vnd.github.v3+json'
                        }
                    }
                );
                const workflowData = await workflowResponse.json();
                console.log('Recent workflow runs:', workflowData);
                
                if (workflowData.workflow_runs?.length > 0) {
                    const latestRun = workflowData.workflow_runs[0];
                    console.log('Check workflow status at:', latestRun.html_url);
                }
                
                return true;
            }
            return false;
        } catch (error) {
            console.error('Error updating content:', error);
            throw error;
        }
    }

    static formatContent(content) {
        // If content is already a string, return it
        if (typeof content === 'string') {
            return content;
        }

        // If content is an object with innerHTML, use that
        if (content && content.innerHTML) {
            return content.innerHTML;
        }

        // Otherwise, stringify the content
        return JSON.stringify(content);
    }

    static async fetchOriginalContent(pageId) {
        console.log('Attempting to fetch original content for page:', pageId);
        
        // Map page IDs to correct file paths in the repository
        let filePath;
        if (pageId === 'index') {
            filePath = 'src/index.html';
        } else if (pageId === 'blog/index') {
            filePath = 'src/pages/blog.html';
        } else {
            filePath = `src/pages/${pageId}.html`;
        }
        
        console.log('Looking for file at:', filePath);

        // Get the file content from GitHub
        const response = await fetch(
            `https://api.github.com/repos/${config.owner}/${config.repo}/contents/${filePath}`,
            {
                headers: {
                    'Authorization': `token ${config.githubToken}`,
                    'Accept': 'application/vnd.github.v3+json'
                }
            }
        );

        if (!response.ok) {
            const errorData = await response.json();
            console.error('GitHub API error:', errorData);
            throw new Error(`Failed to fetch original content: ${errorData.message}`);
        }

        const data = await response.json();
        const content = atob(data.content);
        console.log('Found file, content preview:', content.substring(0, 200) + '...');

        return {
            content: content,
            sha: data.sha
        };
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

    static fixNestedSections(element) {
        // First, find all nested sections
        const nestedSections = Array.from(element.querySelectorAll('section section'));
        
        // Process them in reverse order (deepest first)
        nestedSections.reverse().forEach(section => {
            const parent = section.parentElement;
            
            // Move all children before the section
            while (section.firstChild) {
                parent.insertBefore(section.firstChild, section);
            }
            
            // Remove the empty section
            parent.removeChild(section);
        });
    }

    static cleanupContent(html) {
        return html
            // Remove extra whitespace between tags
            .replace(/>\s+</g, '><')
            // Add newlines after specific tags
            .replace(/(<\/div>|<\/section>|<\/h[1-6]>|<\/p>)/g, '$1\n')
            // Add newlines before opening tags
            .replace(/(<div|<section|<h[1-6]|<p)/g, '\n$1')
            // Collapse multiple newlines
            .replace(/\n\s*\n/g, '\n')
            // Remove leading/trailing whitespace
            .trim();
    }

    static formatHTML(html) {
        const tab = '    ';  // 4 spaces for indentation
        let result = '';
        let indent = '';
        let inPreTag = false;

        html.split(/(<[^>]+>)/).forEach(part => {
            if (part.startsWith('</')) {
                // Closing tag
                if (!inPreTag) indent = indent.substring(tab.length);
                result += indent + part + '\n';
            } else if (part.startsWith('<')) {
                // Opening tag
                if (part.startsWith('<pre')) inPreTag = true;
                if (part.startsWith('</pre')) inPreTag = false;
                
                result += indent + part + '\n';
                
                if (!part.match(/<(link|meta|img|br|hr|input).*?>/i) && 
                    !part.endsWith('/>') && !inPreTag) {
                    indent += tab;
                }
            } else if (part.trim()) {
                // Text content
                result += indent + part.trim() + '\n';
            }
        });

        return result;
    }
} 