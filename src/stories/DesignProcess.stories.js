import { PLACEHOLDER_IMAGE } from './utils/placeholders';

export default {
  title: 'Components/DesignProcess',
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'design-process component styles',
  },
};

// Interactive ProcessStepSection
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