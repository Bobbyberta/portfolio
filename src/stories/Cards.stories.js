import { PLACEHOLDER_IMAGE } from './utils/placeholders';

export default {
  title: 'Components/Cards',
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'cards component styles',
  },
  
};

// Available classes from cards.css:
// content-card, content-card-content, content-card-image, content-category, content-meta, content-link, arrow-icon, card-background


export const ContentCard = {
  render: ({ title, description, category, date, readTime }) => `
    <div class="content-card">
      <div class="content-card-image">
        <img src="${PLACEHOLDER_IMAGE}" alt="Card image" />
      </div>
      <div class="content-card-content">
        <span class="content-category">${category}</span>
        <h3>${title}</h3>
        <p>${description}</p>
        <div class="content-meta">
          <span>${date}</span>
          <span>${readTime}</span>
        </div>
      </div>
    </div>
  `,
  args: {
    title: 'Card Title',
    description: 'Card description text',
    category: 'Category',
    date: 'Jan 1, 2024',
    readTime: '5 min read',
  },
};