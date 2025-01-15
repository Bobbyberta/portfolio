import { resolve } from 'path'
import { copyFileSync, mkdirSync, readdirSync, readFileSync } from 'fs'
import { join, dirname } from 'path'
import { defineConfig } from 'vite'

function getBlogPosts() {
    const blogDir = resolve(__dirname, 'src/pages/blog');
    try {
        const blogFiles = readdirSync(blogDir).filter(file => file.endsWith('.html'));
        return blogFiles.map(file => resolve(blogDir, file));
    } catch (error) {
        console.warn('Warning: Could not read blog directory', error);
        return []; // Return empty array if directory doesn't exist or can't be read
    }
}

function copyDir(src, dest) {
  mkdirSync(dest, { recursive: true })
  
  const entries = readdirSync(src, { withFileTypes: true })

  for (const entry of entries) {
    const srcPath = join(src, entry.name)
    const destPath = join(dest, entry.name)

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath)
    } else {
      copyFileSync(srcPath, destPath)
    }
  }
}

// Plugin to handle HTML imports
function htmlImportsPlugin() {
  return {
    name: 'vite-plugin-html-imports',
    enforce: 'pre',
    transformIndexHtml(html, { filename }) {
      // Skip processing for non-HTML files
      if (!filename.endsWith('.html')) {
        return html;
      }

      // For pages that import index.html, return just the content
      if (filename.includes('/pages/') && html.includes('index.html')) {
        return {
          html,
          tags: []
        };
      }

      return html;
    }
  };
}

export default defineConfig({
  base: '/portfolio/',
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: [
        resolve(__dirname, 'src/index.html'),
        resolve(__dirname, 'src/pages/about.html'),
        resolve(__dirname, 'src/pages/blog.html'),
        resolve(__dirname, 'src/pages/contact.html'),
        resolve(__dirname, 'src/pages/blog/deepest-ocean-case-study.html'),
        resolve(__dirname, 'src/pages/case-study/bubble-function-case-study.html'),
        resolve(__dirname, 'src/pages/blog/bubble-function-blog.html'),
        ...getBlogPosts()
      ],
      output: {
        dir: 'dist',
        preserveEntrySignatures: 'strict',
        assetFileNames: ({ name }) => {
          if (name.endsWith('.css')) return 'styles/[name][extname]'
          if (name.endsWith('.js')) return 'js/[name][extname]'
          if (/\.(woff2?|ttf|eot)$/.test(name)) return 'fonts/[name][extname]'
          if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(name)) {
            return 'images/[name][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    },
    html: {
      inject: true,
      minify: false
    },
    cssCodeSplit: false,
    cssMinify: true,
    css: {
      modules: false,
      postcss: null,
      preprocessorOptions: {
        css: {
          charset: false
        }
      }
    }
  },
  publicDir: false,
  root: resolve(__dirname, 'src'),
  plugins: [
    htmlImportsPlugin(),
    {
      name: 'copy-assets',
      closeBundle() {
        // Copy entire assets directory structure
        try {
          copyDir(
            resolve(__dirname, 'src/assets'),
            resolve(__dirname, 'dist/assets')
          )
        } catch (err) {
          console.warn('Warning: Could not copy assets directory', err)
        }

        // Copy pages to editor's website-content directory
        try {
          // Create the website-content directory
          mkdirSync(resolve(__dirname, 'dist/editor/website-content'), { recursive: true })
          
          // Copy all HTML files from src/pages to website-content
          function copyPages(src, dest) {
            const entries = readdirSync(src, { withFileTypes: true })
            
            for (const entry of entries) {
              const srcPath = join(src, entry.name)
              const destPath = join(dest, entry.name)
              
              if (entry.isDirectory()) {
                mkdirSync(destPath, { recursive: true })
                copyPages(srcPath, destPath)
              } else if (entry.name.endsWith('.html')) {
                copyFileSync(srcPath, destPath)
              }
            }
          }
          
          // Copy pages from src/pages
          copyPages(
            resolve(__dirname, 'src/pages'),
            resolve(__dirname, 'dist/editor/website-content')
          )

          // Copy index.html to website-content
          copyFileSync(
            resolve(__dirname, 'src/index.html'),
            resolve(__dirname, 'dist/editor/website-content/index.html')
          )

          // Copy blog.html to website-content
          copyFileSync(
            resolve(__dirname, 'src/pages/blog.html'),
            resolve(__dirname, 'dist/editor/website-content/blog.html')
          )

        } catch (err) {
          console.warn('Warning: Could not copy pages to website-content', err)
        }

        // Copy remaining assets
        try {
          copyDir(resolve(__dirname, 'src/assets/images'), resolve(__dirname, 'dist/images'))
          copyDir(resolve(__dirname, 'src/assets/icons'), resolve(__dirname, 'dist/images/icons'))
          copyDir(resolve(__dirname, 'src/assets/favicon'), resolve(__dirname, 'dist/favicon'))
          copyDir(resolve(__dirname, 'src/styles'), resolve(__dirname, 'dist/styles'))
        } catch (err) {
          console.warn('Warning: Could not copy assets', err)
        }
      }
    }
  ],
  server: {
    fs: {
      // Allow serving files from one level up from the package root
      allow: ['..']
    }
  },
  resolve: {
    alias: {
      // Create an alias for the src directory
      '/@src': resolve(__dirname, '../src'),
      '@': resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      css: {
        additionalData: `@import "/@src/styles/base/variables.css";`
      }
    }
  }
})