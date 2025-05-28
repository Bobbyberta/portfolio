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

export const CallToActionFooter = (args) => {
  const { heading, ctaText, ctaText2, primaryLabel, primaryHref, secondaryLabel, secondaryHref } = args;
  return `
    <div class="cta-content">
      <h2>${heading}</h2>
      <div class="cta-text">
        <p>${ctaText}</p>
        <p>${ctaText2}</p>
      </div>
      <div class="cta-buttons">
        <a href="${primaryHref}" class="cta-button primary">${primaryLabel}</a>
        <a href="${secondaryHref}" class="cta-button secondary">${secondaryLabel}</a>
      </div>
    </div>
  `;
};

CallToActionFooter.args = {
  heading: 'Thank you for reading my case study!',
  ctaText: 'Want to work with me? Feel free to contact me!',
  ctaText2: '...or just say hello on my social media.',
  primaryLabel: 'Contact Me',
  primaryHref: '/pages/contact.html',
  secondaryLabel: 'Back to Blog',
  secondaryHref: '/pages/blog.html',
};

CallToActionFooter.argTypes = {
  heading: { control: 'text', name: 'Heading' },
  ctaText: { control: 'text', name: 'CTA Text 1' },
  ctaText2: { control: 'text', name: 'CTA Text 2' },
  primaryLabel: { control: 'text', name: 'Primary Button Label' },
  primaryHref: { control: 'text', name: 'Primary Button Link' },
  secondaryLabel: { control: 'text', name: 'Secondary Button Label' },
  secondaryHref: { control: 'text', name: 'Secondary Button Link' },
};