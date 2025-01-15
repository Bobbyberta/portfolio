import { config } from '../config.js';
import { Octokit } from '@octokit/rest';

export class ContentManager {
    static octokit = new Octokit({
        auth: config.token,
        baseUrl: 'https://api.github.com'
    });

    static saveContent(pageId, content) {
        localStorage.setItem(`page_${pageId}`, content);
    }

    static async loadContent(pageId) {
        try {
            console.log('Loading content for page:', pageId);
            const content = await this.fetchPageContent(pageId);
            if (!content) {
                throw new Error('No content returned from GitHub');
            }
            return content;
        } catch (error) {
            console.error('Error in loadContent:', error);
            if (error.status === 401) {
                alert('GitHub authentication failed. Please check your token.');
            } else {
                alert(`Failed to load content: ${error.message}`);
            }
            return null;
        }
    }

    static async fetchPageContent(pageId) {
        const path = this.getPagePath(pageId);
        console.log('Fetching content from path:', path);
        
        try {
            const { data } = await this.octokit.repos.getContent({
                owner: config.owner,
                repo: config.repo,
                path: path,
                ref: config.branch || 'main'
            });

            if (!data.content) {
                throw new Error('No content returned from GitHub');
            }

            return atob(data.content);
        } catch (error) {
            console.error('GitHub API Error:', error);
            throw error;
        }
    }

    static getPagePath(pageId) {
        let path;
        
        // Map page IDs to correct file paths
        switch (pageId) {
            case 'index':
                path = 'src/index.html';
                break;
            case 'blog/index':
                path = 'src/pages/blog.html';  // Blog index is actually blog.html
                break;
            case 'blog':
                path = 'src/pages/blog.html';  // Alternative way to reference blog index
                break;
            default:
                // Handle other pages (blog posts, case studies, etc.)
                path = `src/pages/${pageId}.html`;
        }
        
        console.log(`Mapping page ID "${pageId}" to path "${path}"`);
        return path;
    }

    static annotateContent(element) {
        const clone = element.cloneNode(true);
        
        // Function to create class annotation
        const createClassAnnotation = (classes) => {
            return document.createComment(` CSS Classes: ${classes} `);
        };
        
        // Create a TreeWalker to traverse all elements
        const walker = document.createTreeWalker(
            clone,
            NodeFilter.SHOW_ELEMENT,
            null,
            false
        );

        // Keep track of processed nodes to avoid duplicates
        const processedNodes = new Set();

        // Process each node in the tree
        let currentNode;
        while (currentNode = walker.nextNode()) {
            if (processedNodes.has(currentNode)) continue;
            
            const classes = currentNode.className;
            if (classes && typeof classes === 'string') {
                // Create and insert comment node
                const annotation = createClassAnnotation(classes);
                currentNode.parentNode.insertBefore(annotation, currentNode);
                processedNodes.add(currentNode);
            }
        }
        
        return clone.innerHTML;
    }

    static getAllPages() {
        return {
            pages: [
                'about',
                'blog/index',
                'contact',
                'index'
            ],
            blogPosts: [
                'blog/bubble-function-blog',
                'blog/deepest-ocean-case-study'
            ],
            caseStudies: [
                'case-study/bubble-function-case-study'
            ]
        };
    }

    static getPageTitle(pageId) {
        const titles = {
            'about': 'About',
            'blog/index': 'Blog Home',
            'contact': 'Contact',
            'index': 'Home Page',
            'blog/bubble-function-blog': 'Bubble Function Blog',
            'blog/deepest-ocean-case-study': 'Deepest Ocean Case Study',
            'case-study/bubble-function-case-study': 'Bubble Function Case Study'
        };
        return titles[pageId] || pageId;
    }

    static getFullPageContent(content) {
        if (!content) {
            console.error('No content provided to getFullPageContent');
            return '';
        }
        
        console.log('Getting full page content from:', content);
        
        // If content is already a full HTML document, return it
        if (content.trim().startsWith('<!DOCTYPE html>')) {
            return content;
        }
        
        // Get the original template
        const originalContent = document.querySelector('template.original-content');
        if (!originalContent) {
            console.error('Original content template not found');
            return content;
        }
        
        // Parse the original template
        const parser = new DOMParser();
        const doc = parser.parseFromString(originalContent.innerHTML, 'text/html');
        
        // Find the main section
        const mainSection = doc.querySelector('main');
        if (mainSection) {
            // Update the main content
            mainSection.innerHTML = content;
        }
        
        // Return the full document
        return doc.documentElement.outerHTML;
    }
} 