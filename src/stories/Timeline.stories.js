import { PLACEHOLDER_IMAGE } from './utils/placeholders';

export default {
  title: 'Components/Timeline',
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'timeline component styles',
  },
  
};

// Available classes from timeline.css:
// timeline-card, timeline-container, timeline-item, timeline-marker, timeline-content, timeline-date

export const TimelineSection = (args) => {
  const { title, subtitle, items } = args;
  return `
    <div class="content-card timeline-card">
      <div class="card-header">
        <h2>${title}</h2>
        <span class="subtitle">${subtitle}</span>
      </div>
      <div class="timeline-container">
        ${items.map(item => `
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <span class="timeline-date">${item.date}</span>
              <h3>${item.heading}</h3>
              <p>${item.description}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
};

TimelineSection.args = {
  title: 'Timeline',
  subtitle: '3 months total',
  items: [
    { date: 'Month 1', heading: 'Discovery & Research', description: 'Initial research and concept development phase' },
    { date: 'Month 2', heading: 'MVP Development', description: 'Core gameplay and basic functionality' },
    { date: 'Month 3', heading: 'MLP & Art', description: 'Final polish and visual improvements' },
  ],
};

TimelineSection.argTypes = {
  title: { control: 'text', name: 'Timeline Title' },
  subtitle: { control: 'text', name: 'Timeline Subtitle' },
  items: { control: 'object', name: 'Timeline Items' },
};