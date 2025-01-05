export default {
  base: process.env.BASE_URL || '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'src/index.html',
        about: 'src/pages/about.html',
        blog: 'src/pages/blog.html',
        contact: 'src/pages/contact.html',
        // Add other pages as needed
      }
    }
  },
  publicDir: 'public',
  root: '.'
} 