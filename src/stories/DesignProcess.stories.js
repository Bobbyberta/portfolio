import { PLACEHOLDER_IMAGE } from './utils/placeholders';

export default {
  title: 'Components/DesignProcess',
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'design-process component styles',
  },
  
};

// Available classes from design-process.css:
// design-process-section, design-process, process-step, process-content, process-image, process-description, process-background

export const DesignApproachSection = (args) => {
  const { sectionTitle, steps } = args;
  return `
    <section class="case-study-approach">
      <h2>${sectionTitle}</h2>
      <div class="approach-grid">
        ${steps.map(step => `
          <div class="approach-item">
            <h3>${step.title}</h3>
            <p>${step.description}</p>
          </div>
        `).join('')}
      </div>
    </section>
  `;
};

DesignApproachSection.args = {
  sectionTitle: 'My Approach',
  steps: [
    { title: 'Understanding the User', description: 'Analyzing existing user feedback and collaborating with sales and support teams.' },
    { title: 'Conceptualization', description: 'Combining function machine concept with bubble shooter mechanic.' },
    { title: 'Rapid Prototyping', description: 'Utilizing paper prototypes and a reusable game template.' },
    { title: 'User Testing', description: 'Conducting sessions with target users in school settings.' },
  ],
};

DesignApproachSection.argTypes = {
  sectionTitle: { control: 'text', name: 'Section Title' },
  steps: {
    control: 'object',
    name: 'Steps',
    description: 'Array of approach steps (title and description)',
  },
};

export const ProcessStepSection = (args) => {
  const { stepNumber, stepTitle, descriptionParagraphs, imageSrc, imageAlt } = args;
  return `
    <div class="process-step">
      <h3>${stepNumber}. ${stepTitle}</h3>
      <div class="process-content">
        <div class="process-description">
          ${descriptionParagraphs.map(p => `<p>${p}</p>`).join('')}
        </div>
        <div class="img-container process-image">
          <img src="${imageSrc}" 
               alt="${imageAlt}" 
               class="img-responsive"
               loading="lazy">
        </div>
      </div>
    </div>
  `;
};

ProcessStepSection.args = {
  stepNumber: 1,
  stepTitle: 'Define',
  descriptionParagraphs: [
    'Replacing an old game - Mangahigh were discontinuing Algebra Meltdown and wanted a new algebra game to take its place. After speaking with sales and support, users loved the function machine element but found the game as a whole too difficult.',
    'I focused on the function machine element and started looking at a way to simplify the mechanic.'
  ],
  imageSrc: '../../assets/images/bubble-function-algebra-meltdown.PNG',
  imageAlt: 'Original Algebra Meltdown game screenshot',
};

ProcessStepSection.argTypes = {
  stepNumber: { control: 'number', name: 'Step Number' },
  stepTitle: { control: 'text', name: 'Step Title' },
  descriptionParagraphs: { control: 'object', name: 'Description Paragraphs' },
  imageSrc: { control: 'text', name: 'Image Source' },
  imageAlt: { control: 'text', name: 'Image Alt Text' },
};