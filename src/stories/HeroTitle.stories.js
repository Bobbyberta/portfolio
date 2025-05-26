import { PLACEHOLDER_IMAGE } from './utils/placeholders';

export default {
  title: 'Components/HeroTitle',
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'hero-title component styles',
  },
  argTypes: {
    firstName: { control: 'text' },
    lastName: { control: 'text' },
    subtitle: { control: 'text' },
    aboutLink: { control: 'text' },
  },
};

// Available classes from hero-title.css:
// hero-content, hero-image, hero-title, hero-name, last-name, hero-subtitle, highlight, hero-background


const Template = ({ firstName, lastName, subtitle, aboutLink }) => `
  <div class="hero-content">
    <h1 class="hero-title">
      <span class="hero-name">
        <span class="first-name">${firstName}</span>
        <span class="last-name">${lastName}</span>
      </span>
    </h1>
    <p class="hero-subtitle">
      ${subtitle}
    </p>
    <a href="${aboutLink}" class="cta-button primary">
      About Me
      <svg class="arrow-icon" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
    </a>
  </div>
`;

export const Default = Template.bind({});
Default.args = {
  firstName: 'Bobbie',
  lastName: 'Allsop',
  subtitle: 'Designer of <span class="highlight">UX</span>, <span class="highlight">Games</span> & <span class="highlight">UI</span>',
  aboutLink: '/pages/about.html',
};