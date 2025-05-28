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

export const BlogSectionHeader = (args) => {
  const { title, category, date, readTime } = args;
  return `
    <div class="page-header">
      <h1>${title}</h1>
      <div class="page-meta">
        <span class="meta-item category">${category}</span>
        <span class="meta-item date">${date}</span>
        <span class="meta-item read-time">${readTime}</span>
      </div>
    </div>
  `;
};

BlogSectionHeader.args = {
  title: 'Expanding Functionality: Enhancing the Usability of Bulk Actions in Health Tech',
  category: 'UX Design',
  date: 'September 2023',
  readTime: '5 min read',
};

BlogSectionHeader.argTypes = {
  title: { control: 'text', name: 'Blog Title' },
  category: { control: 'text', name: 'Category' },
  date: { control: 'text', name: 'Date' },
  readTime: { control: 'text', name: 'Read Time' },
};