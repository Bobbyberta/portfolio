export default {
  base: process.env.BASE_URL || '/',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'pages/about.html',
        blog: 'pages/blog.html',
        contact: 'pages/contact.html',
        bubbleFunction: 'pages/blog/bubble-function-case-study.html',
        deepestOcean: 'pages/blog/deepest-ocean-case-study.html'
      }
    }
  },
  publicDir: 'assets',
  root: 'src'
} 