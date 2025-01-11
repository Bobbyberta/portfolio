import { resolve } from 'path'
import { copyFileSync, mkdirSync, readdirSync } from 'fs'
import { join } from 'path'
import { defineConfig } from 'vite'

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

export default defineConfig({
  base: process.env.BASE_URL || '/',
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        'pages/about': resolve(__dirname, 'src/pages/about.html'),
        'pages/blog': resolve(__dirname, 'src/pages/blog.html'),
        'pages/contact': resolve(__dirname, 'src/pages/contact.html'),
        'pages/blog/deepest-ocean-case-study': resolve(__dirname, 'src/pages/blog/deepest-ocean-case-study.html'),
        'pages/case-study/bubble-function-case-study': resolve(__dirname, 'src/pages/case-study/bubble-function-case-study.html'),
        'pages/blog/bubble-function-blog': resolve(__dirname, 'src/pages/blog/bubble-function-blog.html'),
        'editor/index': resolve(__dirname, 'src/editor/index.html'),
      },
      output: {
        dir: 'dist',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const extType = info[info.length - 1]
          // Keep original paths for images and favicons
          if (assetInfo.name.includes('images/') || assetInfo.name.includes('favicon/')) {
            return assetInfo.name
          }
          // Other assets
          if (extType === 'css') {
            // Don't hash CSS files to maintain consistent names
            return 'styles/[name][extname]'
          }
          if (extType === 'js') {
            return 'js/[name][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    },
    cssCodeSplit: false, // Prevent CSS code splitting
    cssMinify: true
  },
  publicDir: false,
  root: resolve(__dirname, 'src'),
  
  plugins: [{
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

      // Copy images to root images directory
      try {
        copyDir(
          resolve(__dirname, 'src/assets/images'),
          resolve(__dirname, 'dist/images')
        )
      } catch (err) {
        console.warn('Warning: Could not copy images directory', err)
      }

      // Copy favicon to root favicon directory
      try {
        copyDir(
          resolve(__dirname, 'src/assets/favicon'),
          resolve(__dirname, 'dist/favicon')
        )
      } catch (err) {
        console.warn('Warning: Could not copy favicon directory', err)
      }

      // Copy styles directory
      try {
        copyDir(
          resolve(__dirname, 'src/styles'),
          resolve(__dirname, 'dist/styles')
        )
      } catch (err) {
        console.warn('Warning: Could not copy styles directory', err)
      }
    }
  }]
})