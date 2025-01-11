import { config } from '../config.js';

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

        console.log('Sending repository dispatch event to:', `${owner}/${repo}`);
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
                        content: content
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
} 