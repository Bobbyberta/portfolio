export class BlogCreator {
    constructor() {
        this.template = null;
        this.loadTemplate();
    }

    async loadTemplate() {
        const response = await fetch('/editor/src/templates/blog-post-template.html');
        this.template = await response.text();
    }

    createBlogPost(data) {
        if (!this.template) {
            throw new Error('Template not loaded');
        }

        const slug = this.generateSlug(data.title);
        let content = this.template;

        // Replace template variables
        content = content.replace(/{{title}}/g, data.title)
            .replace(/{{description}}/g, data.description)
            .replace(/{{slug}}/g, slug)
            .replace(/{{date}}/g, data.date)
            .replace(/{{readTime}}/g, data.readTime)
            .replace(/{{content}}/g, data.content);

        return {
            content,
            slug,
            filePath: `src/pages/blog/${slug}.html`
        };
    }

    generateSlug(title) {
        return title.toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
    }
} 