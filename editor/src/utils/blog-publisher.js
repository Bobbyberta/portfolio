import { Octokit } from '@octokit/rest';
import { Base64 } from 'js-base64';
import { config } from '../config.js';

export class BlogPublisher {
    constructor() {
        // Check if config exists and has required properties
        if (!config?.token) {
            throw new Error('GitHub token not found in config. Please check your configuration.');
        }

        // Initialize Octokit with your GitHub token from config
        this.octokit = new Octokit({
            auth: `Bearer ${config.token}`,
            baseUrl: 'https://api.github.com'
        });
        
        // Get GitHub details from config
        this.owner = config.owner;
        this.repo = config.repo;
        this.branch = config.branch || 'main';
    }

    async publishBlog(blogData) {
        try {
            // Get the current commit SHA for the branch
            const { data: ref } = await this.octokit.git.getRef({
                owner: this.owner,
                repo: this.repo,
                ref: `heads/${this.branch}`
            });
            const latestCommitSha = ref.object.sha;

            // Create the blog file
            await this.createBlogFile(blogData, latestCommitSha);
            
            // Update blog listing
            await this.updateBlogListing(blogData);
            
            // Update build config
            await this.updateBuildConfig(blogData);
            
            return true;
        } catch (error) {
            console.error('Failed to publish blog:', error);
            return false;
        }
    }

    async createBlogFile({ content, filePath }, commitSha) {
        try {
            // Check if file already exists
            try {
                const { data: existingFile } = await this.octokit.repos.getContent({
                    owner: this.owner,
                    repo: this.repo,
                    path: filePath,
                    ref: this.branch
                });
                
                // If file exists, use its SHA for update
                await this.octokit.repos.createOrUpdateFileContents({
                    owner: this.owner,
                    repo: this.repo,
                    path: filePath,
                    message: `Update blog post: ${filePath}`,
                    content: Base64.encode(content),
                    sha: existingFile.sha,
                    branch: this.branch
                });
            } catch (e) {
                // File doesn't exist, create new file
                await this.octokit.repos.createOrUpdateFileContents({
                    owner: this.owner,
                    repo: this.repo,
                    path: filePath,
                    message: `Add new blog post: ${filePath}`,
                    content: Base64.encode(content),
                    branch: this.branch
                });
            }
        } catch (error) {
            console.error('Failed to create blog file:', error);
            throw error;
        }
    }

    async updateBlogListing({ title, description, date, slug }) {
        try {
            // Get current blog.html content
            const { data: blogFile } = await this.octokit.repos.getContent({
                owner: this.owner,
                repo: this.repo,
                path: 'src/pages/blog.html',
                ref: this.branch
            });

            let content = Base64.decode(blogFile.sha);

            // Create new blog card HTML
            const newBlogCard = `
                <div class="blog-card">
                    <div class="blog-card-content">
                        <h2><a href="/portfolio/pages/blog/${slug}.html">${title}</a></h2>
                        <p>${description}</p>
                        <div class="blog-meta">
                            <span class="date">${date}</span>
                        </div>
                    </div>
                </div>`;

            // Find the blog grid and add the new card
            const updatedContent = content.replace(
                /(<div class="blog-grid">)([\s\S]*?)(<\/div>)/,
                `$1${newBlogCard}$2$3`
            );

            // Update the file
            await this.octokit.repos.createOrUpdateFileContents({
                owner: this.owner,
                repo: this.repo,
                path: 'src/pages/blog.html',
                message: `Add ${slug} to blog listing`,
                content: Base64.encode(updatedContent),
                sha: blogFile.sha,
                branch: this.branch
            });
        } catch (error) {
            console.error('Failed to update blog listing:', error);
            throw error;
        }
    }

    async updateBuildConfig({ slug }) {
        try {
            // Get current vite.config.js content
            const { data: configFile } = await this.octokit.repos.getContent({
                owner: this.owner,
                repo: this.repo,
                path: 'vite.config.js',
                ref: this.branch
            });

            const content = Base64.decode(configFile.sha);

            // Add new blog post to input array
            const updatedContent = content.replace(
                /(input: \[[\s\S]*?)(]\s*,)/,
                `$1,\n        resolve(__dirname, 'src/pages/blog/${slug}.html')$2`
            );

            // Update the file
            await this.octokit.repos.createOrUpdateFileContents({
                owner: this.owner,
                repo: this.repo,
                path: 'vite.config.js',
                message: `Add ${slug} to build config`,
                content: Base64.encode(updatedContent),
                sha: configFile.sha,
                branch: this.branch
            });
        } catch (error) {
            console.error('Failed to update build config:', error);
            throw error;
        }
    }
} 