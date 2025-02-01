const chokidar = require('chokidar');
const { exec } = require('child_process');
const path = require('path');

// Configuration
const STYLES_DIR = path.join(__dirname, '../src/styles');
const STORIES_DIR = path.join(__dirname, '../src/stories');

// Helper to run generate-stories script
const regenerateStories = () => {
  console.log('🔄 Styles changed, regenerating stories...');
  exec('npm run generate-stories', (error, stdout, stderr) => {
    if (error) {
      console.error('❌ Error regenerating stories:', error);
      return;
    }
    if (stderr) {
      console.error('⚠️ Warnings:', stderr);
    }
    console.log('✅ Stories regenerated:', stdout);
  });
};

// Helper to update style guide
const updateStyleGuide = () => {
  const variablesCss = path.join(STYLES_DIR, 'base/variables.css');
  const styleGuideMdx = path.join(STORIES_DIR, 'StyleGuide.mdx');

  try {
    const variables = require('fs').readFileSync(variablesCss, 'utf8');
    
    // Extract colors
    const colors = {
      primary: {},
      accent: {},
      text: {},
      background: {}
    };

    variables.replace(/--([^:]+):\s*([^;]+);/g, (match, name, value) => {
      if (name.startsWith('primary')) colors.primary[`--${name}`] = value.trim();
      if (name.startsWith('accent')) colors.accent[`--${name}`] = value.trim();
      if (name.startsWith('text')) colors.text[`--${name}`] = value.trim();
      if (name.startsWith('bg') || name === 'border') colors.background[`--${name}`] = value.trim();
    });

    // Extract spacing, border-radius, shadows
    const spacing = {};
    const borderRadius = {};
    const shadows = {};

    variables.replace(/--spacing-([^:]+):\s*([^;]+);/g, (match, name, value) => {
      spacing[name] = value.trim();
    });

    variables.replace(/--border-radius-([^:]+):\s*([^;]+);/g, (match, name, value) => {
      borderRadius[name] = value.trim();
    });

    variables.replace(/--shadow-([^:]+):\s*([^;]+);/g, (match, name, value) => {
      shadows[name] = value.trim();
    });

    // Generate updated StyleGuide.mdx content
    const styleGuideContent = `import { Meta, ColorPalette, ColorItem, Title, Subtitle } from '@storybook/blocks';

<Meta title="Style Guide" />

<Title>Style Guide</Title>

<Subtitle>Design tokens and visual guidelines for the portfolio website</Subtitle>

## Colors

<ColorPalette>
  <ColorItem 
    title="Primary Colors" 
    colors={${JSON.stringify(colors.primary, null, 2)}} 
  />
  <ColorItem 
    title="Accent Colors" 
    colors={${JSON.stringify(colors.accent, null, 2)}} 
  />
  <ColorItem 
    title="Text Colors" 
    colors={${JSON.stringify(colors.text, null, 2)}} 
  />
  <ColorItem 
    title="Background Colors" 
    colors={${JSON.stringify(colors.background, null, 2)}} 
  />
</ColorPalette>

## Spacing

The spacing system uses a consistent scale:

${Object.entries(spacing)
  .map(([name, value]) => `- \`--spacing-${name}\`: ${value}`)
  .join('\n')}

## Border Radius

Three levels of border radius are available:

${Object.entries(borderRadius)
  .map(([name, value]) => `- \`--border-radius-${name}\`: ${value}`)
  .join('\n')}

## Shadows

Shadow variants for depth:

${Object.entries(shadows)
  .map(([name, value]) => `- \`--shadow-${name}\`: ${value}`)
  .join('\n')}

## Typography

The site uses Roboto as its primary font family:

\`\`\`css
font-family: 'Roboto', sans-serif;
\`\`\`

### Font Sizes

- Headings:
  - H1: 2.5rem (40px)
  - H2: 2rem (32px)
  - H3: 1.75rem (28px)
  - H4: 1.5rem (24px)
  
- Body Text:
  - Regular: 1rem (16px)
  - Small: 0.875rem (14px)
  - XSmall: 0.75rem (12px)

### Line Heights

- Headings: 1.2
- Body Text: 1.5
- Tight: 1.3

## Transitions

Common animation durations:

- Fast: 0.2s
- Regular: 0.3s
- Slow: 0.5s

Default easing: \`ease-in-out\`
`;

    require('fs').writeFileSync(styleGuideMdx, styleGuideContent);
    console.log('✅ Style guide updated');
  } catch (error) {
    console.error('❌ Error updating style guide:', error);
  }
};

// Watch for changes
console.log('👀 Watching for style changes...');

const watcher = chokidar.watch([
  path.join(STYLES_DIR, '**/*.css'),
  path.join(STYLES_DIR, 'base/variables.css')
], {
  ignored: /(^|[\/\\])\../,
  persistent: true
});

watcher
  .on('change', (path) => {
    console.log('📝 Style file changed:', path);
    if (path.includes('variables.css')) {
      updateStyleGuide();
    }
    regenerateStories();
  })
  .on('error', error => console.error('Error:', error)); 