export default {
  base: process.env.BASE_URL || '/',
  build: {
    outDir: '../dist',
    emptyOutDir: true
  },
  publicDir: 'assets',
  root: 'src'
} 