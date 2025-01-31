const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

function scanCssClasses(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const classRegex = /\.([\w-]+)/g;
    const matches = [...content.matchAll(classRegex)];
    return [...new Set(matches.map(match => match[1]))];
}

function updateCursorRules() {
    try {
        // Read existing rules
        const rulesPath = path.join(__dirname, '../.cursor/rules');
        const currentRules = yaml.load(fs.readFileSync(rulesPath, 'utf8'));

        // Scan directories
        const componentsDir = path.join(__dirname, '../src/styles/components');
        const layoutsDir = path.join(__dirname, '../src/styles/layouts');
        const baseDir = path.join(__dirname, '../src/styles/base');

        // Get all CSS files
        const components = fs.readdirSync(componentsDir).filter(f => f.endsWith('.css'));
        const layouts = fs.readdirSync(layoutsDir).filter(f => f.endsWith('.css'));
        const baseFiles = fs.readdirSync(baseDir).filter(f => f.endsWith('.css'));

        // Collect all CSS classes
        const allClasses = new Set();
        
        [...components, ...layouts, ...baseFiles].forEach(file => {
            let filePath;
            if (components.includes(file)) {
                filePath = path.join(componentsDir, file);
            } else if (layouts.includes(file)) {
                filePath = path.join(layoutsDir, file);
            } else {
                filePath = path.join(baseDir, file);
            }
            
            const classes = scanCssClasses(filePath);
            classes.forEach(c => allClasses.add(c));
        });

        // Update CSS file contexts
        const cssFileConfig = currentRules.files.find(f => f.pattern === 'src/styles/**/*.css');
        if (cssFileConfig) {
            cssFileConfig.context = [
                // Base styles
                ...baseFiles.map(f => `src/styles/base/${f}`),
                // Component styles
                ...components.map(c => `src/styles/components/${c}`),
                // Layout styles
                ...layouts.map(l => `src/styles/layouts/${l}`),
                // Main stylesheet
                'src/styles/main.css'
            ];

            // Update common selectors
            cssFileConfig.symbols = [
                // CSS custom properties from variables.css
                '--primary',
                '--accent',
                '--text',
                '--bg',
                '--spacing',
                '--border-radius',
                // Common selectors found in files
                ...Array.from(allClasses).map(c => `.${c}`)
            ];
        }

        // Write updated rules
        fs.writeFileSync(rulesPath, yaml.dump(currentRules, {
            lineWidth: 120,
            noRefs: true
        }));

        console.log('Successfully updated Cursor rules');
    } catch (error) {
        console.error('Error updating Cursor rules:', error);
    }
}

// Run the update
updateCursorRules();

// Export for use in watch script
module.exports = updateCursorRules; 