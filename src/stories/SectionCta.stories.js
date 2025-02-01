import { PLACEHOLDER_IMAGE } from './utils/placeholders';

export default {
  title: 'Components/SectionCta',
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'section-cta component styles',
  },
  
};

// Available classes from section-cta.css:
// section-cta, cta-content, cta-text


export const SectionCta = {
  render: () => `
    <div class="section-cta">
      section-cta component
    </div>
  `,
};


export const CtaContent = {
  render: () => `
    <div class="cta-content">
      cta-content component
    </div>
  `,
};


export const CtaText = {
  render: () => `
    <div class="cta-text">
      cta-text component
    </div>
  `,
};