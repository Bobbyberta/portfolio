const fs = require('fs');
const path = require('path');

// Configuration
const COMPONENTS_DIR = path.join(__dirname, '../src/styles/components');
const STORIES_DIR = path.join(__dirname, '../src/stories');
const MAIN_CSS = path.join(__dirname, '../src/styles/main.css');

// Ensure stories directory exists
if (!fs.existsSync(STORIES_DIR)) {
  fs.mkdirSync(STORIES_DIR, { recursive: true });
}

// Helper to convert kebab-case to PascalCase
const toPascalCase = (str) => {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
};

// Helper to create story template
const createStoryTemplate = (componentName, cssContent) => {
  // Extract CSS classes and deduplicate them
  const classNames = [...new Set(
    [...cssContent.matchAll(/\.([\w-]+)\s*{/g)]
      .map(match => match[1])
      .filter(className => !className.includes(':'))
      .filter(className => !className.includes('.'))
  )];

  const pascalName = toPascalCase(componentName);
  
  return `import { PLACEHOLDER_IMAGE } from './utils/placeholders';

export default {
  title: 'Components/${pascalName}',
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: '${componentName} component styles',
  },
  ${componentName === 'buttons' ? `
  argTypes: {
    label: { control: 'text' },
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    showIcon: { control: 'boolean' },
  },` : ''}
};

// Available classes from ${componentName}.css:
// ${classNames.join(', ')}

${generateStoriesForComponent(componentName, classNames)}`;
};

// Helper to generate appropriate stories based on component name and classes
const generateStoriesForComponent = (componentName, classes) => {
  switch (componentName) {
    case 'buttons':
      return `
export const Regular = {
  render: ({ label }) => \`
    <button class="button">\${label}</button>
  \`,
  args: {
    label: 'Click me',
  },
};

export const CTAButton = {
  render: ({ label, variant, showIcon }) => \`
    <div class="cta-buttons">
      <a href="#" class="cta-button \${variant}">
        \${label}
        \${showIcon ? \`
          <svg class="arrow-icon" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        \` : ''}
      </a>
    </div>
  \`,
  args: {
    label: 'Learn More',
    variant: 'primary',
    showIcon: true,
  },
};

export const CTAButtonGroup = {
  render: () => \`
    <div class="cta-buttons">
      <a href="#" class="cta-button primary">
        Primary CTA
        <svg class="arrow-icon" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
      <a href="#" class="cta-button secondary">
        Secondary CTA
        <svg class="arrow-icon" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
    </div>
  \`,
};`;

    case 'cards':
      return `
export const ContentCard = {
  render: ({ title, description, category, date, readTime }) => \`
    <div class="content-card">
      <div class="content-card-image">
        <img src="\${PLACEHOLDER_IMAGE}" alt="Card image" />
      </div>
      <div class="content-card-content">
        <span class="content-category">\${category}</span>
        <h3>\${title}</h3>
        <p>\${description}</p>
        <div class="content-meta">
          <span>\${date}</span>
          <span>\${readTime}</span>
        </div>
      </div>
    </div>
  \`,
  args: {
    title: 'Card Title',
    description: 'Card description text',
    category: 'Category',
    date: 'Jan 1, 2024',
    readTime: '5 min read',
  },
};`;

    // Add more component-specific story generators as needed
    default:
      // Generate a basic story for each unique class
      const usedNames = new Set();
      return classes
        .map(className => {
          let storyName = toPascalCase(className);
          let counter = 1;
          
          while (usedNames.has(storyName)) {
            storyName = `${toPascalCase(className)}${counter}`;
            counter++;
          }
          
          usedNames.add(storyName);
          
          return `
export const ${storyName} = {
  render: () => \`
    <div class="${className}">
      ${className} component
    </div>
  \`,
};`;
        })
        .join('\n\n');
  }
};

// Main function to generate stories
const generateStories = () => {
  // Read main.css to find component imports
  const mainCssContent = fs.readFileSync(MAIN_CSS, 'utf8');
  const componentImports = [...mainCssContent.matchAll(/components\/([\w-]+)\.css/g)]
    .map(match => match[1]);

  // Generate stories for each component
  componentImports.forEach(componentName => {
    const cssPath = path.join(COMPONENTS_DIR, `${componentName}.css`);
    const storyPath = path.join(STORIES_DIR, `${toPascalCase(componentName)}.stories.js`);

    if (fs.existsSync(cssPath)) {
      const cssContent = fs.readFileSync(cssPath, 'utf8');
      const storyContent = createStoryTemplate(componentName, cssContent);
      
      // Delete any existing Button.stories.js if we're generating Buttons.stories.js
      if (componentName === 'buttons') {
        const oldButtonPath = path.join(STORIES_DIR, 'Button.stories.js');
        if (fs.existsSync(oldButtonPath)) {
          fs.unlinkSync(oldButtonPath);
        }
      }
      
      fs.writeFileSync(storyPath, storyContent);
      console.log(`Generated story for ${componentName}`);
    }
  });

  // Create placeholders.js if it doesn't exist
  const placeholdersPath = path.join(STORIES_DIR, 'utils/placeholders.js');
  if (!fs.existsSync(path.dirname(placeholdersPath))) {
    fs.mkdirSync(path.dirname(placeholdersPath), { recursive: true });
  }
  
  const placeholderContent = `
export const PLACEHOLDER_IMAGE = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="150" viewBox="0 0 300 150"%3E%3Crect width="300" height="150" fill="%23cccccc"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="16" fill="%23666666"%3EPlaceholder Image%3C/text%3E%3C/svg%3E';
`;
  
  fs.writeFileSync(placeholdersPath, placeholderContent.trim());
  console.log('Generated placeholders.js');
};

// Run the generator
generateStories(); 