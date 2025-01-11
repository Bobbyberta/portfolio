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
          if (req.url?.startsWith('/website-content/')) {
            try {
              // Get the absolute path to the Portfolio directory
              const portfolioRoot = path.resolve(__dirname);
              // Get the requested file path
              const requestedFile = req.url.replace('/website-content/', '');
              // Construct full path to the file
              const filePath = path.join(portfolioRoot, 'src', 'pages', requestedFile);
              
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
          }
          next();
        });
      };
    }
  };
}

export default defineConfig({
  base: '/',
  build: {
    outDir: resolve(__dirname, 'dist-editor'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, './editor/src/index.html')
      }
    }
  },
  root: resolve(__dirname, 'editor/src'),
  publicDir: false,
  server: {
    port: 3000,
  },
  plugins: [websiteContentPlugin()]
}) 