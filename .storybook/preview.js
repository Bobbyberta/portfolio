import '../src/styles/base/reset.css';
import '../src/styles/base/variables.css';
import '../src/styles/base/typography.css';
import '../src/styles/components/buttons.css';
import '../src/styles/components/hero-title.css';
import '../src/styles/components/design-process.css';
import '../src/styles/components/images.css';
import '../src/styles/components/navigation.css';
import '../src/styles/components/page-header.css';
import '../src/styles/components/overview.css';
import '../src/styles/components/timeline.css';
import '../src/styles/components/cards.css';
import '../src/styles/components/tag-items.css';

/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => `
      <div style="
        --primary: #00A7E1;
        --primary-dark: #0089B8;
        --primary-light: rgba(0, 167, 225, 0.1);
        --accent: #FF5722;
        --accent-dark: #E64A19;
        --text: #333;
        --text-light: #666;
        --text-dark: #2c3e50;
        --bg: #fff;
        --bg-light: #f8f9fa;
        --border: #ddd;
        --spacing-xxs: 0.25rem;
        --spacing-xsm: 0.75rem;
        --spacing-sm: 1rem;
        --spacing-sm-md: 1.5rem;
        --spacing-md: 2rem;
        --spacing-lg: 3rem;
        --spacing-xl: 4rem;
        --border-radius-small: 4px;
        --border-radius-medium: 12px;
        --border-radius-large: 24px;
        --shadow-sm: 0 2px 5px rgba(0,0,0,0.1);
        --shadow-md: 0 4px 12px rgba(0,0,0,0.1);
      ">
        ${Story()}
      </div>
    `,
  ],
};

export default preview; 