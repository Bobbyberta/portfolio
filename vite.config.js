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
      }
    }
  },
  publicDir: resolve(__dirname, 'src/assets'),
  root: resolve(__dirname, 'src')
}