import { PLACEHOLDER_IMAGE } from './utils/placeholders';

export default {
  title: 'Components/PageHeader',
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'page-header component styles',
  },
  
};

// Available classes from page-header.css:
// page-header, page-meta


export const PageHeader = {
  render: () => `
    <div class="page-header">
      page-header component
    </div>
  `,
};


export const PageMeta = {
  render: () => `
    <div class="page-meta">
      page-meta component
    </div>
  `,
};