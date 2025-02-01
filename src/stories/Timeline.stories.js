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


export const TimelineCard = {
  render: () => `
    <div class="timeline-card">
      timeline-card component
    </div>
  `,
};


export const TimelineContainer = {
  render: () => `
    <div class="timeline-container">
      timeline-container component
    </div>
  `,
};


export const TimelineItem = {
  render: () => `
    <div class="timeline-item">
      timeline-item component
    </div>
  `,
};


export const TimelineMarker = {
  render: () => `
    <div class="timeline-marker">
      timeline-marker component
    </div>
  `,
};


export const TimelineContent = {
  render: () => `
    <div class="timeline-content">
      timeline-content component
    </div>
  `,
};


export const TimelineDate = {
  render: () => `
    <div class="timeline-date">
      timeline-date component
    </div>
  `,
};