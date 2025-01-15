import { config } from '../config.js';
import { Octokit } from '@octokit/rest';

export async function testGitHubToken() {
    try {
        const octokit = new Octokit({
            auth: config.token,  // Use direct token, not Bearer
            baseUrl: 'https://api.github.com'
        });

        console.log('Testing GitHub token for:', {
            owner: config.owner,
            repo: config.repo,
            tokenPrefix: config.token.substring(0, 4)
        });

        const { data } = await octokit.repos.get({
            owner: config.owner,
            repo: config.repo
        });

        console.log('GitHub connection successful:', {
            repoName: data.name,
            permissions: data.permissions
        });
        return true;
    } catch (error) {
        console.error('GitHub token test failed:', error);
        return false;
    }
} 