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


export const TagItem = {
  render: () => `
    <div class="tag-item">
      tag-item component
    </div>
  `,
};


export const TagText = {
  render: () => `
    <div class="tag-text">
      tag-text component
    </div>
  `,
};


export const Active = {
  render: () => `
    <div class="active">
      active component
    </div>
  `,
};


export const TagsGrid = {
  render: () => `
    <div class="tags-grid">
      tags-grid component
    </div>
  `,
};


export const TagsList = {
  render: () => `
    <div class="tags-list">
      tags-list component
    </div>
  `,
};