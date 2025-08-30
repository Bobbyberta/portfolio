const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

// Helper function to scan HTML files for classes and patterns
function scanHtmlPatterns(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extract class names from HTML
    const classRegex = /class=["']([^"']*)["']/g;
    const idRegex = /id=["']([^"']*)["']/g;
    const ariaRegex = /aria-[\w-]+=["']([^"']*)["']/g;
    
    const classes = [];
    const ids = [];
    const ariaAttributes = [];
    
    let match;
    while ((match = classRegex.exec(content)) !== null) {
        classes.push(...match[1].split(/\s+/).filter(Boolean));
    }
    
    while ((match = idRegex.exec(content)) !== null) {
        ids.push(match[1]);
    }
    
    while ((match = ariaRegex.exec(content)) !== null) {
        ariaAttributes.push(match[0].split('=')[0]);
    }
    
    return {
        classes: [...new Set(classes)],
        ids: [...new Set(ids)],
        ariaAttributes: [...new Set(ariaAttributes)]
    };
}

function scanCssClasses(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Enhanced regex patterns to capture more CSS context
    const classRegex = /\.([\w-]+)/g;
    const customPropertyRegex = /--(\w[\w-]*)/g;
    const selectorRegex = /([a-zA-Z][\w-]*(?:\[[^\]]*\])?(?:::?[\w-]+(?:\([^\)]*\))?)*)/g;
    
    const classes = [...content.matchAll(classRegex)].map(match => match[1]);
    const customProperties = [...content.matchAll(customPropertyRegex)].map(match => `--${match[1]}`);
    const selectors = [...content.matchAll(selectorRegex)]
        .map(match => match[1])
        .filter(sel => !sel.includes('.') && !sel.includes('#') && sel.length < 20);
    
    return {
        classes: [...new Set(classes)],
        customProperties: [...new Set(customProperties)],
        selectors: [...new Set(selectors)]
    };
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
        
        // Scan HTML files for additional context
        const pagesDir = path.join(__dirname, '../src/pages');
        const blogDir = path.join(__dirname, '../src/pages/blog');
        
        const htmlFiles = [];
        if (fs.existsSync(pagesDir)) {
            htmlFiles.push(...fs.readdirSync(pagesDir)
                .filter(f => f.endsWith('.html'))
                .map(f => path.join(pagesDir, f)));
        }
        if (fs.existsSync(blogDir)) {
            htmlFiles.push(...fs.readdirSync(blogDir)
                .filter(f => f.endsWith('.html'))
                .map(f => path.join(blogDir, f)));
        }

        // Collect all CSS context
        const allClasses = new Set();
        const allCustomProperties = new Set();
        const allSelectors = new Set();
        const allHtmlClasses = new Set();
        const allAriaAttributes = new Set();
        
        [...components, ...layouts, ...baseFiles].forEach(file => {
            let filePath;
            if (components.includes(file)) {
                filePath = path.join(componentsDir, file);
            } else if (layouts.includes(file)) {
                filePath = path.join(layoutsDir, file);
            } else {
                filePath = path.join(baseDir, file);
            }
            
            const cssData = scanCssClasses(filePath);
            cssData.classes.forEach(c => allClasses.add(c));
            cssData.customProperties.forEach(p => allCustomProperties.add(p));
            cssData.selectors.forEach(s => allSelectors.add(s));
        });
        
        // Scan HTML files for actual usage patterns
        htmlFiles.forEach(filePath => {
            try {
                const htmlData = scanHtmlPatterns(filePath);
                htmlData.classes.forEach(c => allHtmlClasses.add(c));
                htmlData.ariaAttributes.forEach(a => allAriaAttributes.add(a));
            } catch (error) {
                console.warn(`Warning: Could not scan HTML file ${filePath}`, error.message);
            }
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

            // Update symbols with comprehensive CSS context
            cssFileConfig.symbols = [
                // CSS custom properties
                ...Array.from(allCustomProperties),
                // CSS classes with dot notation (from CSS files)
                ...Array.from(allClasses).map(c => `.${c}`),
                // Actually used classes in HTML (for better autocomplete)
                ...Array.from(allHtmlClasses).map(c => `.${c}`),
                // HTML selectors and pseudo-classes
                ...Array.from(allSelectors),
                // Accessibility attributes
                ...Array.from(allAriaAttributes),
                // Common CSS values and units
                'rem', 'em', 'px', 'vh', 'vw', '%',
                'flex', 'grid', 'block', 'inline-block',
                'absolute', 'relative', 'fixed', 'sticky',
                'transform', 'transition', 'animation',
                // Media query breakpoints
                '@media', '768px', '1024px', '1200px',
                // Common HTML attributes for better suggestions
                'alt', 'loading="lazy"', 'aria-label', 'aria-expanded', 'aria-controls'
            ].filter(Boolean).sort();
        }

        // Write updated rules
        fs.writeFileSync(rulesPath, yaml.dump(currentRules, {
            lineWidth: 120,
            noRefs: true
        }));

        console.log(`Successfully updated Cursor rules with:`);
        console.log(`  - ${allClasses.size} CSS classes`);
        console.log(`  - ${allHtmlClasses.size} HTML classes in use`);
        console.log(`  - ${allCustomProperties.size} custom properties`);
        console.log(`  - ${allSelectors.size} selectors`);
        console.log(`  - ${allAriaAttributes.size} accessibility attributes`);
    } catch (error) {
        console.error('Error updating Cursor rules:', error);
    }
}

// Run the update
updateCursorRules();

// Export for use in watch script
module.exports = updateCursorRules; 