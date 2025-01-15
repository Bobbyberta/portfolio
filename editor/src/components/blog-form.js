export class BlogForm {
    constructor(container, onSubmit) {
        this.container = container;
        this.onSubmit = onSubmit;
        this.render();
    }

    render() {
        const form = document.createElement('form');
        form.className = 'blog-form';
        form.innerHTML = `
            <div class="form-group">
                <label for="blog-title">Title</label>
                <input type="text" id="blog-title" required>
            </div>
            <div class="form-group">
                <label for="blog-description">Description</label>
                <textarea id="blog-description" required></textarea>
            </div>
            <div class="form-group">
                <label for="blog-date">Date</label>
                <input type="date" id="blog-date" required value="${new Date().toISOString().split('T')[0]}">
            </div>
            <div class="form-group">
                <label for="blog-read-time">Read Time (minutes)</label>
                <input type="number" id="blog-read-time" required value="5">
            </div>
            <div class="form-group">
                <label for="blog-content-editor">Content</label>
                <div id="blog-content-editor" class="wysiwyg-container"></div>
            </div>
            <button type="submit" class="submit-btn">Create Blog Post</button>
        `;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit();
        });

        this.container.appendChild(form);
    }

    handleSubmit() {
        const data = {
            title: document.getElementById('blog-title').value,
            description: document.getElementById('blog-description').value,
            date: document.getElementById('blog-date').value,
            readTime: document.getElementById('blog-read-time').value
        };

        this.onSubmit(data);
    }
} 