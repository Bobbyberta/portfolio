const chokidar = require('chokidar');
const updateCursorRules = require('./update-cursor-rules');

// Watch for file changes
chokidar.watch('src/**/*', {
    ignored: [
        /(^|[\/\\])\../, // Ignore dot files
        '**/node_modules/**', // Ignore node_modules
        '**/dist/**' // Ignore dist directory
    ],
    persistent: true
}).on('all', (event, path) => {
    if (event === 'add' || event === 'unlink' || event === 'change') {
        console.log(`File ${path} has been ${event}`);
        updateCursorRules();
    }
});

console.log('Watching for file changes...'); 