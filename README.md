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

## Cursor Rules

The project uses automated Cursor rules to improve code suggestions. The rules are automatically updated when files change.

### Usage

Start the file watcher to automatically update Cursor rules:
```bash
npm run watch-cursor
```

Or manually update rules:
```bash
npm run update-cursor
```

The rules system:
- Scans CSS files for classes and selectors
- Updates component and layout contexts
- Maintains a list of common selectors
- Auto-updates when files change
- Provides intelligent code suggestions

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the main branch.

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

Visit the live site at: https://bobbyberta.github.io/portfolio/

View the component documentation at: https://bobbyberta.github.io/portfolio/storybook/

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
