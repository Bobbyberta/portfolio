export class ContentManager {
    static saveContent(pageId, content) {
        localStorage.setItem(`page_${pageId}`, content);
    }

    static loadContent(pageId) {
        if (!pageId) {
            console.log('No page selected');
            return '';
        }

        // First try to load from localStorage (for unsaved changes)
        const savedContent = localStorage.getItem(`page_${pageId}`);
        if (savedContent && pageId !== 'about') {  // Skip cache for about page
            return savedContent;
        }

        // If no saved content, fetch the actual page
        return this.fetchPageContent(pageId);
    }

    static async fetchPageContent(pageId) {
        try {
            console.log('Fetching page:', pageId);
            
            // Map page IDs to file paths
            let pagePath;
            if (pageId === 'index') {
                pagePath = '/website-content/index.html';
            } else if (pageId === 'blog/index') {
                pagePath = '/website-content/blog.html';
            } else {
                pagePath = `/website-content/${pageId}.html`;
            }
            
            console.log('Request path:', pagePath);

            const response = await fetch(pagePath);
            console.log('Response status:', response.status);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const html = await response.text();
            console.log('Received content length:', html.length);

            // Create a unique ID for this template
            const templateId = `original-content-${pageId.replace('/', '-')}`;
            
            // Remove any existing template for this page
            const existingTemplate = document.getElementById(templateId);
            if (existingTemplate) {
                existingTemplate.remove();
            }

            // Create and store the new template
            const template = document.createElement('template');
            template.id = templateId;
            template.innerHTML = html;
            document.body.appendChild(template);
            console.log('Stored template with ID:', templateId);

            // Extract main content for editor
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const mainContent = doc.querySelector('main')?.innerHTML || '';
            console.log('Extracted main content length:', mainContent.length);

            return mainContent;
        } catch (error) {
            console.error('Error:', error);
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