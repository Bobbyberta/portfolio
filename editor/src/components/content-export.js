import { ContentManager } from './content-manager.js';

export class ContentExport {
    static async exportPage(pageId) {
        const content = ContentManager.loadContent(pageId);
        
        // Create a JSON object with the page content
        const exportData = {
            pageId: pageId,
            content: content,
            exportDate: new Date().toISOString()
        };

        // Convert to JSON string
        const jsonString = JSON.stringify(exportData, null, 2);

        // Create blob and download
        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${pageId.replace('/', '-')}-content.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    static async exportContent() {
        const pages = ContentManager.getAllPages();
        const allContent = {};

        // Collect content for all pages
        for (const category in pages) {
            for (const pageId of pages[category]) {
                const content = await ContentManager.loadContent(pageId);
                allContent[pageId] = content;
            }
        }

        // Create export data
        const exportData = {
            exportDate: new Date().toISOString(),
            pages: allContent
        };

        // Convert to JSON and download
        const jsonString = JSON.stringify(exportData, null, 2);
        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'website-content.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
} 