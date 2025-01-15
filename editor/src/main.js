import { BlogCreator } from './components/blog-creator.js';
import { BlogForm } from './components/blog-form.js';
import { BlogPublisher } from './utils/blog-publisher.js';
import { WYSIWYGEditor } from './components/wysiwyg-editor.js';

// Create editor container if it doesn't exist
const editorContainer = document.querySelector('#editor-container') || document.createElement('div');
editorContainer.id = 'editor-container';

// Create editor controls
const editorControls = document.createElement('div');
editorControls.className = 'editor-controls';

// Add "New Blog Post" button
const newBlogBtn = document.createElement('button');
newBlogBtn.textContent = 'New Blog Post';
newBlogBtn.className = 'editor-button new-blog-btn';
newBlogBtn.addEventListener('click', () => {
    // Clear existing editor content
    editorContainer.innerHTML = '';
    
    // Create new blog form
    const blogCreator = new BlogCreator();
    const publisher = new BlogPublisher();
    
    // Initialize WYSIWYG editor for blog content
    const contentEditor = new WYSIWYGEditor('#blog-content-editor');
    
    new BlogForm(editorContainer, async (data) => {
        // Get the content from WYSIWYG editor
        data.content = await contentEditor.getContent();
        
        // Create and publish blog post
        const blogPost = blogCreator.createBlogPost(data);
        const success = await publisher.publishBlog(blogPost);
        
        if (success) {
            alert('Blog post published successfully!');
            // Optionally redirect to the new blog post
            window.location.href = `/portfolio/pages/blog/${blogPost.slug}.html`;
        } else {
            alert('Failed to publish blog post. Please try again.');
        }
    });
});

editorControls.appendChild(newBlogBtn);
document.body.appendChild(editorControls);
document.body.appendChild(editorContainer); 