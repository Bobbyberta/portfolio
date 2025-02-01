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


export const DesignProcessSection = {
  render: () => `
    <div class="design-process-section">
      design-process-section component
    </div>
  `,
};


export const DesignProcess = {
  render: () => `
    <div class="design-process">
      design-process component
    </div>
  `,
};


export const ProcessStep = {
  render: () => `
    <div class="process-step">
      process-step component
    </div>
  `,
};


export const ProcessContent = {
  render: () => `
    <div class="process-content">
      process-content component
    </div>
  `,
};


export const ProcessImage = {
  render: () => `
    <div class="process-image">
      process-image component
    </div>
  `,
};


export const ProcessDescription = {
  render: () => `
    <div class="process-description">
      process-description component
    </div>
  `,
};


export const ProcessBackground = {
  render: () => `
    <div class="process-background">
      process-background component
    </div>
  `,
};