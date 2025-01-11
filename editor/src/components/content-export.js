export class ContentExport {
    static exportContent() {
        const allPages = ContentManager.getAllPages();
        const content = {};
        
        // Export all page types
        Object.values(allPages).flat().forEach(pageId => {
            content[pageId] = localStorage.getItem(`page_${pageId}`);
        });

        this.downloadJSON(content, 'portfolio-content.json');
    }

    static exportPage(pageId) {
        const content = {
            [pageId]: localStorage.getItem(`page_${pageId}`)
        };
        
        this.downloadJSON(content, `${pageId.replace('/', '-')}-content.json`);
    }

    static downloadJSON(content, filename) {
        const blob = new Blob([JSON.stringify(content, null, 2)], 
            { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        
        URL.revokeObjectURL(url);
    }
} 