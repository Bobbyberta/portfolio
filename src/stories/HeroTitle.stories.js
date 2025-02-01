import { PLACEHOLDER_IMAGE } from './utils/placeholders';

export default {
  title: 'Components/HeroTitle',
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'hero-title component styles',
  },
  
};

// Available classes from hero-title.css:
// hero-content, hero-image, hero-title, hero-name, last-name, hero-subtitle, highlight, hero-background


export const HeroContent = {
  render: () => `
    <div class="hero-content">
      hero-content component
    </div>
  `,
};


export const HeroImage = {
  render: () => `
    <div class="hero-image">
      hero-image component
    </div>
  `,
};


export const HeroTitle = {
  render: () => `
    <div class="hero-title">
      hero-title component
    </div>
  `,
};


export const HeroName = {
  render: () => `
    <div class="hero-name">
      hero-name component
    </div>
  `,
};


export const LastName = {
  render: () => `
    <div class="last-name">
      last-name component
    </div>
  `,
};


export const HeroSubtitle = {
  render: () => `
    <div class="hero-subtitle">
      hero-subtitle component
    </div>
  `,
};


export const Highlight = {
  render: () => `
    <div class="highlight">
      highlight component
    </div>
  `,
};


export const HeroBackground = {
  render: () => `
    <div class="hero-background">
      hero-background component
    </div>
  `,
};