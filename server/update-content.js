const express = require('express');
const fs = require('fs/promises');
const path = require('path');

const app = express();
app.use(express.json());

app.post('/api/update-content', async (req, res) => {
    try {
        const { pageId, content } = req.body;
        const filePath = path.join(__dirname, 'src', 'pages', `${pageId}.html`);
        
        // Read the existing file
        const html = await fs.readFile(filePath, 'utf-8');
        
        // Replace the main content
        const updatedHtml = html.replace(
            /<main[^>]*>([\s\S]*?)<\/main>/i,
            `<main>${content}</main>`
        );
        
        // Write the updated content
        await fs.writeFile(filePath, updatedHtml);
        
        res.json({ success: true });
    } catch (error) {
        console.error('Update failed:', error);
        res.status(500).json({ error: 'Failed to update content' });
    }
}); 