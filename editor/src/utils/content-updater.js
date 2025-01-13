export class ContentUpdater {
    static async updatePage(jsonFile) {
        try {
            // Read the JSON file
            const content = await jsonFile.text();
            const data = JSON.parse(content);
            
            // Extract the content and metadata
            const { pageId, content: pageContent } = data;
            
            // Convert the annotated content back to HTML
            const cleanContent = this.cleanExportedContent(pageContent);
            
            // Update content via GitHub
            await GitHubUpdater.updateContent(pageId, cleanContent);
            
            return true;
        } catch (error) {
            console.error('Failed to update content:', error);
            return false;
        }
    }

    static cleanExportedContent(content) {
        // Remove the CSS class annotations
        return content.replace(/<!--\s*CSS Classes:[^>]+?-->/g, '');
    }
} 