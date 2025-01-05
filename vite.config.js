import { resolve } from 'path'

export default {
  base: process.env.BASE_URL || '/',
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        about: resolve(__dirname, 'src/pages/about.html'),
        blog: resolve(__dirname, 'src/pages/blog.html'),
        contact: resolve(__dirname, 'src/pages/contact.html'),
        bubbleFunction: resolve(__dirname, 'src/pages/blog/bubble-function-case-study.html'),
        deepestOcean: resolve(__dirname, 'src/pages/blog/deepest-ocean-case-study.html')
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
            return `assets/css/[name]-[hash][extname]`
          }
          return `assets/[name]-[hash][extname]`
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        preserveModules: true,
        preserveModulesRoot: 'src'
      }
    }
  },
  publicDir: resolve(__dirname, 'src/assets'),
  root: resolve(__dirname, 'src'),
  experimental: {
    renderBuilderOutput: true
  }
}