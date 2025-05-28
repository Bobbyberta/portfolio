import { PLACEHOLDER_IMAGE } from './utils/placeholders';

export default {
  title: 'Components/TagItems',
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'tag-items component styles',
  },
  
};

// Available classes from tag-items.css:
// tag-item, tag-text, active, tags-grid, tags-list

export const TagsSection = (args) => {
  const { heading, tags } = args;
  return `
    <div class="skills">
      <h2>${heading}</h2>
      <ul class="tags-grid">
        ${tags.map(tag => `<li class="tag-item"><span class="tag-text">${tag}</span></li>`).join('')}
      </ul>
    </div>
  `;
};

TagsSection.args = {
  heading: 'Skills & Expertise',
  tags: [
    'Strong Communication',
    'Visual Thinking',
    'Workshop Facilitation',
    'User Research',
    'Collaborative Tools (Miro)',
    'Usability Testing (Maze)',
    'UI/UX Design',
    'Game Design',
    'Basic Coding Knowledge',
  ],
};

TagsSection.argTypes = {
  heading: { control: 'text', name: 'Section Heading' },
  tags: { control: 'object', name: 'Tags' },
};