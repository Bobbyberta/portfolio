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
          if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i.test(assetInfo.name)) {
            return `assets/media/[name]-[hash][extname]`
          }
          if (/\.(png|jpe?g|gif|svg|webp|ico)(\?.*)?$/i.test(assetInfo.name)) {
            return `assets/images/[name]-[hash][extname]`
          }
          if (/\.(woff2?|eot|ttf|otf)(\?.*)?$/i.test(assetInfo.name)) {
            return `assets/fonts/[name]-[hash][extname]`
          }
          if (extType === 'css') {
            return `styles/[name]-[hash][extname]`
          }
          return `assets/[name]-[hash][extname]`
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js'
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
      // Create all necessary directories
      mkdirSync(resolve(__dirname, 'dist/pages/blog'), { recursive: true })
      mkdirSync(resolve(__dirname, 'dist/favicon'), { recursive: true })
      mkdirSync(resolve(__dirname, 'dist/images'), { recursive: true })
      mkdirSync(resolve(__dirname, 'dist/styles'), { recursive: true })

      const faviconFiles = [
        'favicon.ico',
        'apple-touch-icon.png',
        'favicon-32x32.png',
        'favicon-16x16.png',
        'site.webmanifest',
        'android-chrome-192x192.png',
        'android-chrome-512x512.png'
      ]
      
      faviconFiles.forEach(file => {
        try {
          copyFileSync(
            resolve(__dirname, 'src/assets/favicon', file),
            resolve(__dirname, 'dist/favicon', file)
          )
        } catch (err) {
          console.warn(`Warning: Could not copy ${file}`)
        }
      })

      const imageFiles = [
        'profile-photo2.png'
      ]

      imageFiles.forEach(file => {
        try {
          copyFileSync(
            resolve(__dirname, 'src/assets/images', file),
            resolve(__dirname, 'dist/images', file)
          )
        } catch (err) {
          console.warn(`Warning: Could not copy ${file}`)
        }
      })

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
}