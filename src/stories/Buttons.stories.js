import { PLACEHOLDER_IMAGE } from './utils/placeholders';

export default {
  title: 'Components/Buttons',
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'buttons component styles',
  },
  
  argTypes: {
    label: { control: 'text' },
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    showIcon: { control: 'boolean' },
  },
};

// Available classes from buttons.css:
// button, cta-buttons, cta-button, primary, arrow-icon, secondary


export const Regular = {
  render: ({ label }) => `
    <button class="button">${label}</button>
  `,
  args: {
    label: 'Click me',
  },
};

export const CTAButton = {
  render: ({ label, variant, showIcon }) => `
    <div class="cta-buttons">
      <a href="#" class="cta-button ${variant}">
        ${label}
        ${showIcon ? `
          <svg class="arrow-icon" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        ` : ''}
      </a>
    </div>
  `,
  args: {
    label: 'Learn More',
    variant: 'primary',
    showIcon: true,
  },
};

export const CTAButtonGroup = {
  render: () => `
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
  `,
};