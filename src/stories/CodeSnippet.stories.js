export default {
  title: 'Components/Code Snippet',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Code snippet component for displaying formatted code blocks. Note: Requires code-snippet.css import for full styling.'
      }
    }
  }
};

// Basic code snippet (without CSS import)
export const BasicCodeSnippet = {
  render: () => `
    <div>
      <h3>Basic Code Snippet (Default Browser Styling)</h3>
      <p>A simple code block without custom CSS styling:</p>
      <pre><code>function hello() {
    console.log('Hello, World!');
    return true;
}</code></pre>
      <p><em>Note: This shows default browser styling when code-snippet.css is not imported.</em></p>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Basic code snippet using default browser styling without code-snippet.css import.'
      }
    }
  }
};

// Code snippet with custom styling
export const StyledCodeSnippet = {
  render: () => `
    <style>
      /* Inline CSS for demonstration */
      .demo-code-snippet {
        background: #1e1e1e;
        border-radius: 8px;
        padding: 1.5rem;
        margin: 1.5rem 0;
        overflow-x: auto;
        border: 1px solid #333;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }
      .demo-code-snippet code {
        font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Source Code Pro', monospace;
        font-size: 0.875rem;
        line-height: 1.6;
        color: #d4d4d4;
        display: block;
        white-space: pre;
      }
      .demo-code-block {
        margin: 2rem 0;
      }
      .demo-code-header {
        background: #2d2d2d;
        color: #cccccc;
        padding: 0.75rem 1.5rem;
        border-radius: 8px 8px 0 0;
        font-size: 0.875rem;
        font-weight: 500;
        border: 1px solid #333;
        border-bottom: none;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
      .demo-code-header::before {
        content: "⚡";
        opacity: 0.7;
      }
      .demo-code-block .demo-code-snippet {
        margin: 0;
        border-radius: 0 0 8px 8px;
        border-top: none;
      }
    </style>
    <div>
      <h3>Styled Code Snippet (With CSS)</h3>
      <p>Code snippet with dark theme styling:</p>
      <div class="demo-code-block">
        <div class="demo-code-header">GitHub Actions Workflow (.github/workflows/pages.yml)</div>
        <pre class="demo-code-snippet"><code>name: GitHub Pages Deployment

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: write
  pages: write
  id-token: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build website
        run: npm run build</code></pre>
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Code snippet with full dark theme styling applied via inline CSS for demonstration.'
      }
    }
  }
};

// Blog post style code block (current implementation)
export const BlogPostCodeBlock = {
  render: () => `
    <div>
      <h3>Blog Post Code Block (Current Implementation)</h3>
      <p>A simplified version of the workflow is as follows:</p>
      <div class="code-block">
        <div class="code-header">GitHub Actions Workflow (.github/workflows/pages.yml)</div>
        <pre class="code-snippet"><code>name: GitHub Pages Deployment

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: write
  pages: write
  id-token: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build website
        run: npm run build

      - name: Add CNAME file for custom domain
        run: echo 'bobbieallsop.co.uk' > dist/CNAME

      - name: Deploy to GitHub Pages
        uses: actions/deploy-pages@v4
        with:
          path: dist</code></pre>
      </div>
      <p><em>Note: This matches the exact structure used in the AI-powered portfolio blog post.</em></p>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Exact structure used in the blog post. Requires code-snippet.css import for proper styling.'
      }
    }
  }
};

// Inline code example
export const InlineCode = {
  render: () => `
    <div>
      <h3>Inline Code</h3>
      <p>
        You can use inline code like <code>npm install</code> or <code>git commit -m "message"</code> 
        within paragraphs. This is useful for mentioning specific commands, variables like 
        <code>useState</code>, or file names like <code>package.json</code>.
      </p>
      <p>
        Inline code can also be used for API endpoints like <code>/api/users/:id</code> or 
        CSS classes like <code>.container</code> and <code>#navigation</code>.
      </p>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Inline code styling for use within text content. Uses browser default styling.'
      }
    }
  }
};

// Mixed content example (as used in blog)
export const MixedContent = {
  render: () => `
    <div>
      <h3>Mixed Content Example</h3>
      <p>This example shows how code blocks and other content work together:</p>
      
      <p>I began with a general prompt:</p>
      <blockquote>
        <p>"I want to create a portfolio website that can be hosted on GitHub Pages."</p>
      </blockquote>

      <p>The GitHub Actions pipeline performs the following steps:</p>
      <ol>
        <li>Checks out the code</li>
        <li>Sets up the Node.js environment</li>
        <li>Installs dependencies</li>
        <li>Builds the project</li>
        <li>Deploys the dist folder to the gh-pages branch</li>
      </ol>

      <div class="code-block">
        <div class="code-header">Terminal Commands</div>
        <pre class="code-snippet"><code># Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build</code></pre>
      </div>

      <p>Debugging the workflow involved resolving issues with relative paths and folder structures.</p>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Mixed content example showing how code blocks integrate with other blog post elements.'
      }
    }
  }
};

// CSS Import instruction
export const CSSImportInstructions = {
  render: () => `
    <div>
      <h3>CSS Import Instructions</h3>
      <p>To enable full code snippet styling, add this import to your HTML head:</p>
      <pre><code>&lt;link rel="stylesheet" href="../../styles/components/code-snippet.css"&gt;</code></pre>
      
      <p>Without this import, code blocks will use default browser styling.</p>
      
      <h4>Example with styling:</h4>
      <div class="code-block">
        <div class="code-header">With CSS Import</div>
        <pre class="code-snippet"><code>// Dark background with syntax highlighting
function example() {
  return "Styled code block";
}</code></pre>
      </div>
      
      <h4>Example without styling:</h4>
      <pre><code>// Default browser styling
function example() {
  return "Basic code block";
}</code></pre>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Instructions for enabling code snippet styling and comparison between styled and unstyled versions.'
      }
    }
  }
}; 