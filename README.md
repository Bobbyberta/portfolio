# Portfolio Website

Personal portfolio website showcasing UX, Games & UI Design work.

## Development

Built with:
- Vite
- HTML/CSS/JavaScript
- Storybook for component documentation
- GitHub Pages for hosting

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Start Storybook
npm run storybook
```

## Component Documentation

The project uses Storybook to document and test UI components in isolation.

### Running Storybook

```bash
# Start Storybook development server
npm run storybook

# Build static Storybook
npm run build-storybook
```

### Managing Component Documentation

There are three ways to manage component documentation:

```bash
# 1. One-time update of all stories and style guide
npm run update-storybook

# 2. Watch for changes during development
npm run watch-storybook

# 3. Manually generate component stories
npm run generate-stories
```

#### Update Storybook
- Updates the style guide with current design tokens
- Generates stories for new components
- Removes stories for deleted components
- Best for initial setup or major updates

#### Watch Storybook
- Watches CSS files for changes in real-time
- Automatically updates stories and style guide
- Best for active development

#### Generate Stories
- Core functionality used by other scripts
- Manually generate stories from CSS components
- Useful for targeted updates

Stories are located in `src/stories/` and follow these conventions:
- One story file per component
- Stories show individual CSS classes
- Interactive controls for configurable components
- Visual documentation of component variants

### Style Guide

The style guide (`StyleGuide.mdx`) documents design tokens:
- Colors
- Spacing
- Typography
- Shadows
- Border radius
- Transitions

## Blog Post Management

The blog section uses a template-based system for creating new posts. Here's how to add a new blog post:

### 1. Create a New Blog Post

1. Copy the template file:
```bash
cp src/pages/blog/blog-post-template.html src/pages/blog/your-post-name.html
```

2. Update the following in your new blog post file:
   - Meta description
   - Title
   - Open Graph and Twitter card metadata
   - Blog post content
   - Category, date, and read time
   - Social share image (place in `src/assets/images/`)

### 2. Update the Blog Listing

Add your new post to `src/pages/blog.html`:
1. Copy an existing article card
2. Update the content:
   - Title and subtitle
   - Date and read time
   - Blog excerpt
   - Link to your new post
   - Optional: Add a featured image

### 3. Update Build Configuration

Add your new blog post to `vite.config.mjs`:
1. Add a new entry in the `rollupOptions.input` object:
```javascript
'pages/blog/your-post-name': resolve(__dirname, 'src/pages/blog/your-post-name.html'),
```

### 4. Preview and Test

```bash
# Start development server
npm run dev

# Build for production
npm run build
```

### Adding new styling or components
Don't forget to add it to main.css

### Blog Post Structure

Each blog post should include:
- Clear title and subtitle
- Category tag
- Publication date
- Estimated read time
- Engaging introduction
- Well-structured content with headings
- Images (if applicable)
- Call-to-action section at the end

### Best Practices

- Keep blog posts focused and concise
- Use clear, descriptive headings
- Include relevant images with alt text
- Link to related content when appropriate
- Maintain consistent formatting
- Test all links and images
- Preview on different devices

## Cursor Rules

The project uses automated Cursor rules to improve code suggestions. The rules are automatically updated when files change and when code is pushed.

### Automatic Updates

Cursor rules are automatically updated in three ways:

1. **Pre-push hook**: Updates rules before every `git push`
2. **GitHub Actions**: Updates rules on push to main branch
3. **File watcher**: Real-time updates during development

### Manual Usage

```bash
# Start file watcher for real-time updates during development
npm run watch-cursor

# Manually update rules
npm run update-cursor

# Check if rules need updating
npm run check-rules
```

### How It Works

The automated rules system:
- **Scans 144 CSS classes** from your actual stylesheets
- **Analyzes 86 HTML classes** in active use
- **Captures 54 custom properties** for design tokens
- **Indexes 570 selectors** for comprehensive context
- **Tracks accessibility attributes** for ARIA compliance
- **Updates on file changes** to CSS, HTML, and config files
- **Auto-commits updates** via GitHub Actions when rules change

### Git Integration

- **Pre-push hook**: Ensures rules are current before pushing
- **GitHub workflow**: Automatically commits rule updates
- **Smart detection**: Only commits when rules actually change
- **Skip CI**: Rule commits don't trigger unnecessary builds

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the main branch.

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

Visit the live site at: https://bobbyberta.github.io/

View the component documentation at: https://bobbyberta.github.io/storybook/

## Project Structure

```
.
├── .cursor/          # Cursor rules configuration
├── .storybook/       # Storybook configuration
├── scripts/          # Build and utility scripts
│   ├── generate-stories.js    # Core story generation
│   ├── update-storybook.js    # One-time updates
│   └── watch-storybook.js     # Development watcher
├── src/
│   ├── assets/      # Static assets
│   ├── js/          # JavaScript files
│   ├── pages/       # HTML pages
│   ├── stories/     # Storybook component stories
│   │   └── StyleGuide.mdx    # Design system documentation
│   ├── styles/      # CSS styles
│   └── index.html   # Main entry point
└── dist/            # Production build output
```

Last updated: 1.2.25
