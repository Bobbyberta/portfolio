const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Configuration
const STYLES_DIR = path.join(__dirname, '../src/styles');
const STORIES_DIR = path.join(__dirname, '../src/stories');
const MAIN_CSS = path.join(__dirname, '../src/styles/main.css');

// Helper to extract component imports from main.css
const getComponentImports = () => {
  const mainCssContent = fs.readFileSync(MAIN_CSS, 'utf8');
  return [...mainCssContent.matchAll(/components\/([\w-]+)\.css/g)]
    .map(match => match[1]);
};

// Helper to get existing story files
const getExistingStories = () => {
  if (!fs.existsSync(STORIES_DIR)) return [];
  return fs.readdirSync(STORIES_DIR)
    .filter(file => file.endsWith('.stories.js'))
    .map(file => file.replace('.stories.js', ''));
};

// Helper to update style guide
const updateStyleGuide = () => {
  console.log('📝 Updating style guide...');
  const variablesCss = path.join(STYLES_DIR, 'base/variables.css');
  const styleGuideMdx = path.join(STORIES_DIR, 'StyleGuide.mdx');

  try {
    const variables = fs.readFileSync(variablesCss, 'utf8');
    
    // Extract design tokens
    const colors = {
      primary: {},
      accent: {},
      text: {},
      background: {}
    };
    const spacing = {};
    const borderRadius = {};
    const shadows = {};

    // Extract colors
    variables.replace(/--([^:]+):\s*([^;]+);/g, (match, name, value) => {
      if (name.startsWith('primary')) colors.primary[`--${name}`] = value.trim();
      if (name.startsWith('accent')) colors.accent[`--${name}`] = value.trim();
      if (name.startsWith('text')) colors.text[`--${name}`] = value.trim();
      if (name.startsWith('bg') || name === 'border') colors.background[`--${name}`] = value.trim();
    });

    // Extract other tokens
    variables.replace(/--spacing-([^:]+):\s*([^;]+);/g, (match, name, value) => {
      spacing[name] = value.trim();
    });

    variables.replace(/--border-radius-([^:]+):\s*([^;]+);/g, (match, name, value) => {
      borderRadius[name] = value.trim();
    });

    variables.replace(/--shadow-([^:]+):\s*([^;]+);/g, (match, name, value) => {
      shadows[name] = value.trim();
    });

    // Update StyleGuide.mdx
    const styleGuideContent = generateStyleGuideContent(colors, spacing, borderRadius, shadows);
    fs.writeFileSync(styleGuideMdx, styleGuideContent);
    console.log('✅ Style guide updated');
  } catch (error) {
    console.error('❌ Error updating style guide:', error);
  }
};

// Helper to generate style guide content
const generateStyleGuideContent = (colors, spacing, borderRadius, shadows) => {
  return `import { Meta, ColorPalette, ColorItem, Title, Subtitle } from '@storybook/blocks';

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
};

// Main update function
const updateStorybook = async () => {
  console.log('🔄 Starting Storybook update...');

  // Ensure stories directory exists
  if (!fs.existsSync(STORIES_DIR)) {
    fs.mkdirSync(STORIES_DIR, { recursive: true });
  }

  // Get current state
  const componentImports = getComponentImports();
  const existingStories = getExistingStories();

  // Check for new or removed components
  const newComponents = componentImports.filter(component => 
    !existingStories.includes(component));
  const removedComponents = existingStories.filter(story => 
    !componentImports.includes(story.toLowerCase()));

  // Handle removed components
  removedComponents.forEach(component => {
    const storyPath = path.join(STORIES_DIR, `${component}.stories.js`);
    if (fs.existsSync(storyPath)) {
      fs.unlinkSync(storyPath);
      console.log(`🗑️  Removed story for ${component}`);
    }
  });

  // Generate new stories
  if (newComponents.length > 0) {
    console.log('📝 Generating new component stories...');
    await new Promise((resolve, reject) => {
      exec('npm run generate-stories', (error, stdout, stderr) => {
        if (error) {
          console.error('❌ Error generating stories:', error);
          reject(error);
          return;
        }
        console.log('✅ New stories generated:', stdout);
        resolve();
      });
    });
  }

  // Update style guide
  updateStyleGuide();

  console.log('✨ Storybook update complete!');
};

// Run the update
updateStorybook().catch(error => {
  console.error('❌ Update failed:', error);
  process.exit(1);
}); 