export default {
  base: process.env.BASE_URL || '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true
  },
  publicDir: 'src/assets',
  root: 'src'
} 