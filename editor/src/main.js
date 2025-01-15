import { BlogCreator } from './components/blog-creator.js';
import { BlogForm } from './components/blog-form.js';
import { BlogPublisher } from './utils/blog-publisher.js';
import { WYSIWYGEditor } from './components/wysiwyg-editor.js';

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
    // Get existing containers
    const editorContainer = document.getElementById('editor-container');
    const editorControls = document.getElementById('editor-controls');

    if (!editorContainer || !editorControls) {
        console.error('Required containers not found');
        return;
    }

    // Add "New Blog Post" button
    const newBlogBtn = document.createElement('button');
    newBlogBtn.textContent = 'New Blog Post';
    newBlogBtn.className = 'editor-button new-blog-btn';
    
    newBlogBtn.addEventListener('click', () => {
        console.log('New Blog button clicked'); // Debug log
        
        // Clear existing editor content
        editorContainer.innerHTML = '';
        
        // Create new blog form
        const blogCreator = new BlogCreator();
        const publisher = new BlogPublisher();
        
        // Initialize WYSIWYG editor for blog content
        const contentEditor = new WYSIWYGEditor('#blog-content-editor');
        
        new BlogForm(editorContainer, async (data) => {
            try {
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
            } catch (error) {
                console.error('Error creating blog post:', error);
                alert('An error occurred while creating the blog post.');
            }
        });
    });

    editorControls.appendChild(newBlogBtn);
}); 