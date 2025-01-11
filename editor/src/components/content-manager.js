export class ContentManager {
    static saveContent(pageId, content) {
        localStorage.setItem(`page_${pageId}`, content);
    }

    static loadContent(pageId) {
        // First try to load from localStorage (for unsaved changes)
        const savedContent = localStorage.getItem(`page_${pageId}`);
        if (savedContent) {
            return savedContent;
        }

        // If no saved content, fetch the actual page
        return this.fetchPageContent(pageId);
    }

    static async fetchPageContent(pageId) {
        try {
            const pagePath = `/website-content/${pageId}.html`;
            const response = await fetch(pagePath, {
                headers: {
                    'Accept': 'text/plain'
                }
            });
            
            console.log('Fetching page:', pagePath);
            
            if (!response.ok) {
                console.error('Failed to fetch:', pagePath, response.status);
                throw new Error(`Failed to load page: ${pagePath}`);
            }

            const html = await response.text();
            console.log('Received HTML content:', html.substring(0, 200));
            
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            
            // Get the entire document structure
            const docClone = doc.cloneNode(true);
            
            // Store template parts
            this.templateHead = docClone.head.innerHTML;
            this.templateHeader = docClone.querySelector('header').outerHTML;
            this.templateFooter = docClone.querySelector('footer').outerHTML;
            
            // Get the main content for editing
            const mainContent = docClone.querySelector('main');
            if (!mainContent) {
                console.error('No main content found');
                return '';
            }

            // Create a container for the content
            const container = document.createElement('div');
            
            // Get all sections from main
            Array.from(mainContent.children).forEach(child => {
                console.log('Processing element:', child.tagName, child.className);
                container.appendChild(child.cloneNode(true));
            });

            // Process each element to add class annotations
            const processedContent = this.annotateContent(container);
           
            // Check if we got content
            if (!processedContent) {
                console.error('No processed content generated');
                return '';
            }

            console.log('Processed content:', processedContent.substring(0, 200) + '...');
            return processedContent;
        } catch (error) {
            console.error('Error loading page:', error);
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
            pages: ['about', 'blog', 'contact'],
            blogPosts: ['blog/bubble-function-blog', 'blog/deepest-ocean-case-study'],
            caseStudies: ['case-study/bubble-function-case-study']
        };
    }

    static getPageTitle(pageId) {
        const titles = {
            'about': 'About',
            'blog': 'Blog',
            'contact': 'Contact',
            'blog/bubble-function-blog': 'Bubble Function Blog',
            'blog/deepest-ocean-case-study': 'Deepest Ocean Case Study',
            'case-study/bubble-function-case-study': 'Bubble Function Case Study'
        };
        return titles[pageId] || pageId;
    }

    static getFullPageContent(editedContent) {
        // Create a new HTML document
        const fullPage = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                ${this.templateHead}
            </head>
            <body>
                ${this.templateHeader}
                <main>
                    ${editedContent}
                </main>
                ${this.templateFooter}
            </body>
            </html>
        `;
        return fullPage;
    }
} 