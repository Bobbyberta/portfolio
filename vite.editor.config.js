import { resolve } from 'path'
import { defineConfig } from 'vite'
import fs from 'fs'
import path from 'path'

// Plugin to serve website content
function websiteContentPlugin() {
  console.log('Plugin created');

  return {
    name: 'website-content',
    configureServer(server) {
      console.log('Configure server called');
      
      server.middlewares.use((req, res, next) => {
        // Basic request logging
        console.log(`Request: ${req.url}`);

        if (!req.url?.startsWith('/website-content/')) {
          return next();
        }

        // Simple file serving
        const rootDir = process.cwd();
        const requestedFile = req.url.replace('/website-content/', '');
        
        // Handle different file paths
        let filePath;
        if (requestedFile === 'index.html') {
          // Index is in the root src directory
          filePath = path.join(rootDir, 'src', 'index.html');
        } else if (requestedFile === 'blog.html' || requestedFile === 'blog/index.html') {
          // Blog index can be accessed either way
          filePath = path.join(rootDir, 'src', 'pages', 'blog.html');
        } else {
          // All other files are in pages
          filePath = path.join(rootDir, 'src', 'pages', requestedFile);
        }

        console.log('Looking for file:', filePath);

        if (fs.existsSync(filePath)) {
          const content = fs.readFileSync(filePath, 'utf-8');
          console.log('Found file:', filePath);
          res.setHeader('Content-Type', 'text/plain');
          res.end(content);
        } else {
          console.log('File not found:', filePath);
          console.log('Available files in src:', fs.readdirSync(path.join(rootDir, 'src')));
          console.log('Available files in pages:', fs.readdirSync(path.join(rootDir, 'src', 'pages')));
          next();
        }
      });
    }
  };
}

export default defineConfig({
  base: '/portfolio/',
  root: resolve(__dirname, 'editor/src'),
  publicDir: false,
  server: {
    port: 3000,
    fs: {
      strict: false,
      allow: ['..', '../..']
    }
  },
  resolve: {
    alias: {
      // Create an alias for the src directory
      '/@src': resolve(__dirname, 'src'),
      '@editor': resolve(__dirname, 'editor/src')
    }
  },
  build: {
    outDir: resolve(__dirname, 'dist/editor'),
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, 'editor/src/index.html')
    }
  },
  optimizeDeps: {
    include: [
      './components/wysiwyg-editor.js',
      './components/content-manager.js',
      './components/content-export.js',
      './utils/content-updater.js',
      './utils/github-updater.js',
      './config.js'
    ]
  },
  css: {
    preprocessorOptions: {
      css: {
        additionalData: `@import "/@src/styles/base/variables.css";`
      }
    }
  },
  define: {
    'process.env.BASE_URL': JSON.stringify('/portfolio/')
  },
  plugins: [websiteContentPlugin()]
})