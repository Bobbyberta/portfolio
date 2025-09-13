#!/usr/bin/env node

/**
 * Read Time Calculator for Blog Posts
 * 
 * This tool calculates estimated read time for blog posts and can automatically
 * update the [Read time] placeholder in blog post HTML files.
 * 
 * Usage:
 * node scripts/calculate-read-time.js <blog-post-file.html>
 * node scripts/calculate-read-time.js --content "Your article content here"
 * node scripts/calculate-read-time.js --update src/pages/blog/your-post.html
 */

import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuration
const WORDS_PER_MINUTE = 200; // Average reading speed
const MIN_READ_TIME = 1; // Minimum read time in minutes

/**
 * Extract text content from HTML, removing tags and preserving meaningful text
 * @param {string} html - HTML content
 * @returns {string} - Plain text content
 */
function extractTextFromHTML(html) {
    // Remove script and style tags and their content
    let text = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    text = text.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');
    
    // Remove HTML comments
    text = text.replace(/<!--[\s\S]*?-->/g, '');
    
    // Remove all HTML tags but preserve spacing
    text = text.replace(/<[^>]+>/g, ' ');
    
    // Decode common HTML entities
    text = text.replace(/&nbsp;/g, ' ');
    text = text.replace(/&amp;/g, '&');
    text = text.replace(/&lt;/g, '<');
    text = text.replace(/&gt;/g, '>');
    text = text.replace(/&quot;/g, '"');
    text = text.replace(/&#39;/g, "'");
    
    // Clean up whitespace
    text = text.replace(/\s+/g, ' ').trim();
    
    return text;
}

/**
 * Count words in text content
 * @param {string} text - Plain text content
 * @returns {number} - Word count
 */
function countWords(text) {
    if (!text || text.trim().length === 0) {
        return 0;
    }
    
    // Split by whitespace and filter out empty strings
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    return words.length;
}

/**
 * Calculate estimated read time
 * @param {number} wordCount - Number of words
 * @param {number} wpm - Words per minute (default: 200)
 * @returns {string} - Formatted read time (e.g., "3 min read")
 */
function calculateReadTime(wordCount, wpm = WORDS_PER_MINUTE) {
    if (wordCount === 0) {
        return "1 min read";
    }
    
    const minutes = Math.max(MIN_READ_TIME, Math.ceil(wordCount / wpm));
    return `${minutes} min read`;
}

/**
 * Extract blog content from HTML file (content within blog-post-content div)
 * @param {string} html - Full HTML content
 * @returns {string} - Blog post content only
 */
function extractBlogContent(html) {
    // Look for content within blog-post-content div using a more robust approach
    const startTag = '<div class="blog-post-content">';
    const startIndex = html.indexOf(startTag);
    
    if (startIndex === -1) {
        console.log('⚠️  No blog-post-content div found, using fallback methods');
        
        // Fallback: look for main content area
        const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/);
        if (mainMatch) {
            return mainMatch[1];
        }
        
        // Last resort: use entire HTML
        return html;
    }
    
    // Find the matching closing div by counting nested divs
    let divCount = 1;
    let currentIndex = startIndex + startTag.length;
    
    while (currentIndex < html.length && divCount > 0) {
        const nextOpenDiv = html.indexOf('<div', currentIndex);
        const nextCloseDiv = html.indexOf('</div>', currentIndex);
        
        // If no more closing divs, something is wrong
        if (nextCloseDiv === -1) {
            console.log('⚠️  Malformed HTML: no matching closing div found');
            break;
        }
        
        // If there's an opening div before the next closing div, increment count
        if (nextOpenDiv !== -1 && nextOpenDiv < nextCloseDiv) {
            divCount++;
            currentIndex = nextOpenDiv + 4; // Move past '<div'
        } else {
            // Found a closing div
            divCount--;
            if (divCount === 0) {
                // This is our matching closing div
                const content = html.substring(startIndex + startTag.length, nextCloseDiv);
                console.log(`✅ Extracted ${content.length} characters from blog-post-content div`);
                return content;
            }
            currentIndex = nextCloseDiv + 6; // Move past '</div>'
        }
    }
    
    // If we get here, we couldn't find the matching closing div
    console.log('⚠️  Could not find matching closing div, using content from start tag to end');
    return html.substring(startIndex + startTag.length);
}

/**
 * Update read time placeholder in HTML file
 * @param {string} filePath - Path to HTML file
 * @param {string} readTime - Calculated read time
 * @returns {boolean} - Success status
 */
function updateReadTimeInFile(filePath, readTime) {
    try {
        let content = readFileSync(filePath, 'utf8');
        
        // Replace the placeholder
        const updatedContent = content.replace(/\[Read time\]/g, readTime);
        
        // Check if any replacements were made
        if (content === updatedContent) {
            console.log('⚠️  No [Read time] placeholder found in file');
            return false;
        }
        
        // Write back to file
        writeFileSync(filePath, updatedContent, 'utf8');
        console.log(`✅ Updated read time to "${readTime}" in ${filePath}`);
        return true;
    } catch (error) {
        console.error('❌ Error updating file:', error.message);
        return false;
    }
}

/**
 * Process a blog post file and calculate read time
 * @param {string} filePath - Path to HTML file
 * @param {boolean} updateFile - Whether to update the file with calculated read time
 */
function processBlogPost(filePath, updateFile = false) {
    try {
        const html = readFileSync(filePath, 'utf8');
        const blogContent = extractBlogContent(html);
        const text = extractTextFromHTML(blogContent);
        const wordCount = countWords(text);
        const readTime = calculateReadTime(wordCount);
        
        console.log('\n📊 Read Time Analysis');
        console.log('━━━━━━━━━━━━━━━━━━━━');
        console.log(`📄 File: ${filePath}`);
        console.log(`📝 Word count: ${wordCount} words`);
        console.log(`⏱️  Estimated read time: ${readTime}`);
        console.log(`🔢 Calculation: ${wordCount} words ÷ ${WORDS_PER_MINUTE} wpm = ${Math.ceil(wordCount / WORDS_PER_MINUTE)} min`);
        
        if (updateFile) {
            console.log('\n🔄 Updating file...');
            updateReadTimeInFile(filePath, readTime);
        }
        
        return { wordCount, readTime, filePath };
    } catch (error) {
        console.error('❌ Error processing file:', error.message);
        return null;
    }
}

/**
 * Process raw content string
 * @param {string} content - Raw content (HTML or text)
 */
function processContent(content) {
    const text = extractTextFromHTML(content);
    const wordCount = countWords(text);
    const readTime = calculateReadTime(wordCount);
    
    console.log('\n📊 Read Time Analysis');
    console.log('━━━━━━━━━━━━━━━━━━━━');
    console.log(`📝 Word count: ${wordCount} words`);
    console.log(`⏱️  Estimated read time: ${readTime}`);
    console.log(`🔢 Calculation: ${wordCount} words ÷ ${WORDS_PER_MINUTE} wpm = ${Math.ceil(wordCount / WORDS_PER_MINUTE)} min`);
    
    return { wordCount, readTime };
}

/**
 * Main function - handle command line arguments
 */
function main() {
    const args = process.argv.slice(2);
    
    if (args.length === 0) {
        console.log('📖 Read Time Calculator for Blog Posts\n');
        console.log('Usage:');
        console.log('  node scripts/calculate-read-time.js <file.html>');
        console.log('  node scripts/calculate-read-time.js --content "Your content here"');
        console.log('  node scripts/calculate-read-time.js --update <file.html>');
        console.log('\nExamples:');
        console.log('  node scripts/calculate-read-time.js src/pages/blog/my-post.html');
        console.log('  node scripts/calculate-read-time.js --update src/pages/blog/my-post.html');
        console.log('  node scripts/calculate-read-time.js --content "$(pbpaste)"  # macOS clipboard');
        return;
    }
    
    if (args[0] === '--content') {
        // Process raw content
        const content = args[1];
        if (!content) {
            console.error('❌ Please provide content after --content flag');
            process.exit(1);
        }
        processContent(content);
    } else if (args[0] === '--update') {
        // Update file mode
        const filePath = args[1];
        if (!filePath) {
            console.error('❌ Please provide file path after --update flag');
            process.exit(1);
        }
        processBlogPost(filePath, true);
    } else {
        // File analysis mode
        const filePath = args[0];
        processBlogPost(filePath, false);
    }
}

// Export functions for use as module
export {
    extractTextFromHTML,
    countWords,
    calculateReadTime,
    extractBlogContent,
    updateReadTimeInFile,
    processBlogPost,
    processContent
};

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
    main();
}
