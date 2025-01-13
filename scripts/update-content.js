const fs = require('fs');
const path = require('path');

// Read the exported content
const contentFile = process.argv[2];
const content = JSON.parse(fs.readFileSync(contentFile, 'utf-8'));

// Update the page
const { pageId, content: pageContent } = content;
const filePath = path.join(__dirname, 'src', 'pages', `${pageId}.html`);

// Read the existing file
const html = fs.readFileSync(filePath, 'utf-8');

// Replace the main content
const updatedHtml = html.replace(
    /<main[^>]*>([\s\S]*?)<\/main>/i,
    `<main>${pageContent}</main>`
);

// Write the updated content
fs.writeFileSync(filePath, updatedHtml); 