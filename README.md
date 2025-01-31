# Portfolio Website

Personal portfolio website showcasing UX, Games & UI Design work.

## Development

Built with:
- Vite
- HTML/CSS/JavaScript
- GitHub Pages for hosting

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

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

## Project Structure

```
.
├── .cursor/          # Cursor rules configuration
├── scripts/          # Build and utility scripts
├── src/
│   ├── assets/      # Static assets
│   ├── js/          # JavaScript files
│   ├── pages/       # HTML pages
│   ├── styles/      # CSS styles
│   └── index.html   # Main entry point
└── dist/            # Production build output
```

Last updated: 31.1.25
