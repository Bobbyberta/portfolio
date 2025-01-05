export default {
  base: process.env.BASE_URL || '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'src/pages/about.html',
        blog: 'src/pages/blog.html',
        contact: 'src/pages/contact.html',
        bubbleFunction: 'src/pages/blog/bubble-function-case-study.html',
        deepestOcean: 'src/pages/blog/deepest-ocean-case-study.html'
      }
    }
  },
  publicDir: 'src/assets',
  root: 'src'
} 