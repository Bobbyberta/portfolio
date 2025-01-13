import { resolve } from 'path'
import { defineConfig } from 'vite'
import fs from 'fs'
import path from 'path'

// Plugin to serve website content
function websiteContentPlugin() {
  return {
    name: 'website-content',
    configureServer(server) {
      return () => {
        server.middlewares.use((req, res, next) => {
          // Let Vite handle all non-website-content requests
          if (!req.url?.startsWith('/website-content/')) {
            return next();
          }

          // Handle website content
          try {
            const portfolioRoot = path.resolve(__dirname);
            const requestedFile = req.url.replace('/website-content/', '');
            
            let filePath;
            if (requestedFile === 'index.html') {
              filePath = path.join(portfolioRoot, 'src', 'index.html');
            } else if (requestedFile === 'blog.html') {
              filePath = path.join(portfolioRoot, 'src', 'pages', 'blog.html');
            } else {
              filePath = path.join(portfolioRoot, 'src', 'pages', requestedFile);
            }
            
            console.log('Attempting to read:', filePath);
            
            if (fs.existsSync(filePath)) {
              const content = fs.readFileSync(filePath, 'utf-8');
              res.setHeader('Content-Type', 'text/plain');
              res.end(content);
              return;
            } else {
              console.error('File not found:', filePath);
            }
          } catch (error) {
            console.error('Error serving file:', error);
          }
          next();
        });
      };
    }
  };
}

export default defineConfig({
  base: '/portfolio/',
  build: {
    outDir: resolve(__dirname, 'dist/editor'),
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, 'editor/src/index.html')
    }
  },
  root: resolve(__dirname, 'editor/src'),
  publicDir: false,
  server: {
    port: 3000,
    fs: {
      strict: false,
      allow: ['..']
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
  define: {
    'process.env.BASE_URL': JSON.stringify('/portfolio/')
  },
  plugins: [websiteContentPlugin()]
}) 