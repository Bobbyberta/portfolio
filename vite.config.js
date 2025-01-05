import { resolve } from 'path'
import { copyFileSync, mkdirSync, readdirSync, statSync } from 'fs'
import { join } from 'path'

// Helper function to recursively copy directories
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

export default {
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
        'pages/blog/bubble-function-case-study': resolve(__dirname, 'src/pages/blog/bubble-function-case-study.html'),
        'pages/blog/deepest-ocean-case-study': resolve(__dirname, 'src/pages/blog/deepest-ocean-case-study.html')
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
            return 'styles/[name]-[hash][extname]'
          }
          if (extType === 'js') {
            return 'js/[name]-[hash][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    },
    cssCodeSplit: true,
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
    }
  }]
}