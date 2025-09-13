import { resolve } from 'path'
import { copyFileSync, mkdirSync, readdirSync } from 'fs'
import { join } from 'path'
import { defineConfig } from 'vite'
import { fileURLToPath } from 'url'

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
  base: '/',
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
        'pages/blog/coding-education-blog': resolve(__dirname, 'src/pages/blog/coding-education-blog.html'),
        'pages/blog/google-integration-blog': resolve(__dirname, 'src/pages/blog/google-integration-blog.html'),
        'pages/blog/bulk-actions-blog': resolve(__dirname, 'src/pages/blog/bulk-actions-blog.html'),
        'pages/blog/usability-testing-blog': resolve(__dirname, 'src/pages/blog/usability-testing-blog.html'),
        'pages/blog/accessibility-journey-blog': resolve(__dirname, 'src/pages/blog/accessibility-journey-blog.html'),
        'pages/blog/little-raincloud-blog': resolve(__dirname, 'src/pages/blog/little-raincloud-blog.html'),
        'pages/blog/using-storybook-as-a-design-system': resolve(__dirname, 'src/pages/blog/using-storybook-as-a-design-system.html'),
        'pages/blog/ai-powered-portfolio': resolve(__dirname, 'src/pages/blog/ai-powered-portfolio.html'),
        'pages/blog/live-music-visualizer-blog': resolve(__dirname, 'src/pages/blog/live-music-visualizer-blog.html'),
        'pages/blog/android-ai-development-blog': resolve(__dirname, 'src/pages/blog/android-ai-development-blog.html'),
        'pages/blog/sci-fi-storytelling-blog': resolve(__dirname, 'src/pages/blog/sci-fi-storytelling-blog.html'),
        'pages/blog/ai-prototyping-sprint-blog': resolve(__dirname, 'src/pages/blog/ai-prototyping-sprint-blog.html'),
      },
      output: {
        dir: 'dist',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const extType = info[info.length - 1]
          if (extType === 'css') {
            return 'styles/[name][extname]'
          }
          if (extType === 'js') {
            return 'js/[name][extname]'
          }
          if (/\.(png|jpe?g|gif|svg|ico)$/.test(extType)) {
            return assetInfo.name // Preserve original asset paths
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    },
    cssCodeSplit: false, // Prevent CSS code splitting
    cssMinify: true
  },
  publicDir: 'src/assets',
  root: resolve(__dirname, 'src'),
  
  plugins: [{
    name: 'copy-assets',
    closeBundle() {
      // Copy images to root images directory
      try {
        copyDir(
          resolve(__dirname, 'src/assets/images'),
          resolve(__dirname, 'dist/assets/images')
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
  }],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})