import { config } from '../config.js';

export class ContentManager {
    static saveContent(pageId, content) {
        localStorage.setItem(`page_${pageId}`, content);
    }

    static async loadContent(pageId) {
        if (!pageId) {
            console.log('No page selected');
            return '';
        }

        try {
            console.log('Loading content for page:', pageId);
            
            // Always fetch the actual page from GitHub
            const content = await this.fetchPageContent(pageId);
            
            // Store in localStorage for backup
            if (content) {
                localStorage.setItem(`page_${pageId}`, content);
                console.log('Content cached in localStorage');
            }
            
            return content;
        } catch (error) {
            console.error('Error loading content:', error);
            
            // Try to load from localStorage as fallback
            const savedContent = localStorage.getItem(`page_${pageId}`);
            if (savedContent) {
                console.log('Using cached content from localStorage');
                return savedContent;
            }
            
            return '';
        }
    }

    static async fetchPageContent(pageId) {
        try {
            console.log('Starting content fetch for page:', pageId);
            
            // First try to fetch from src/pages
            let pagePath;
            if (pageId === 'index') {
                pagePath = 'src/index.html';
            } else if (pageId === 'blog/index') {
                pagePath = 'src/pages/blog.html';
            } else {
                pagePath = `src/pages/${pageId}.html`;
            }
            
            console.log('Attempting to fetch from GitHub:', pagePath);
            
            // Construct the GitHub API URL
            const apiUrl = `https://api.github.com/repos/${config.owner}/${config.repo}/contents/${pagePath}`;
            console.log('GitHub API URL:', apiUrl);
            
            // Fetch from GitHub API
            const response = await fetch(apiUrl, {
                headers: {
                    'Authorization': `token ${config.githubToken}`,
                    'Accept': 'application/vnd.github.v3+json'
                }
            });
            
            if (!response.ok) {
                console.error('GitHub API Error:', {
                    status: response.status,
                    statusText: response.statusText,
                    url: apiUrl
                });
                return '';
            }
            
            // Parse the response
            const data = await response.json();
            console.log('GitHub response:', {
                path: data.path,
                size: data.size,
                sha: data.sha
            });
            
            // Decode the content
            const html = atob(data.content);
            console.log('Decoded HTML length:', html.length);
            
            // Parse and extract main content
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            
            // Find the main section
            const mainSection = doc.querySelector('main');
            if (!mainSection) {
                console.error('No main tag found in HTML');
                console.log('Document structure:', doc.documentElement.outerHTML.substring(0, 500));
                return '';
            }
            
            // Get the content
            const content = mainSection.innerHTML;
            console.log('Extracted content preview:', {
                length: content.length,
                preview: content.substring(0, 200)
            });
            
            return content;
        } catch (error) {
            console.error('Content fetch error:', error);
            console.error('Error stack:', error.stack);
            return '';
        }
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