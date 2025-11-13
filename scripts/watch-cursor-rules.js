const chokidar = require('chokidar');
const updateCursorRules = require('./update-cursor-rules');

// Watch for file changes that affect Cursor rules
chokidar.watch(['src/**/*.css', 'src/**/*.html', 'vite.config.mjs', 'package.json'], {
    ignored: [
        /(^|[\/\\])\../, // Ignore dot files
        '**/node_modules/**', // Ignore node_modules
        '**/dist/**' // Ignore dist directory
    ],
    persistent: true
}).on('all', (event, path) => {
    if (event === 'add' || event === 'unlink' || event === 'change') {
        console.log(`File ${path} has been ${event}`);
        
        // Debounce updates to avoid excessive rule regeneration
        clearTimeout(updateTimeout);
        updateTimeout = setTimeout(() => {
            console.log('Updating Cursor rules...');
            updateCursorRules();
        }, 1000);
    }
});

let updateTimeout;

console.log('Watching for file changes in CSS, HTML, and config files...');
console.log('The following files will trigger rule updates:');
console.log('  - src/**/*.css (styling changes)');
console.log('  - src/**/*.html (template and class usage changes)');
console.log('  - vite.config.mjs (build configuration changes)');
console.log('  - package.json (dependency changes)');
console.log('\nCursor rules will automatically update when these files change.');
console.log('Press Ctrl+C to stop watching.\n'); 