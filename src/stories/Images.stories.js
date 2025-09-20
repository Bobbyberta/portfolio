import { PLACEHOLDER_IMAGE } from './utils/placeholders';

export default {
  title: 'Components/Images',
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'images component styles',
  },
  
};

// Available classes from images.css:
// img-container, img-responsive, content-image, case-study-image-container, case-study-hero, hero-image, outcomes-image, image-modal, active, modal-content, modal-close, full-width, full-height, natural-size


export const DefaultImage = {
  render: (args) => `
    <div class="img-container">
      <img src="${args.src}" alt="${args.alt}" class="img-responsive" loading="lazy" />
      <p class="image-caption">${args.caption}</p>
    </div>
  `,
  args: {
    src: '../../assets/images/bubble-function-sketch.png',
    alt: 'Default responsive image example',
    caption: 'Default image container with responsive behavior'
  },
  argTypes: {
    src: { control: 'text', name: 'Image Source' },
    alt: { control: 'text', name: 'Alt Text' },
    caption: { control: 'text', name: 'Caption' },
  },
};

export const FullWidthImage = {
  render: (args) => `
    <div class="img-container full-width">
      <img src="${args.src}" alt="${args.alt}" class="img-responsive" loading="lazy" />
      <p class="image-caption">${args.caption}</p>
    </div>
  `,
  args: {
    src: '../../assets/images/ai-workflow-title-page-itterations.png',
    alt: 'Full width comparison image showing before and after',
    caption: 'Full width display - ideal for comparisons and iterations'
  },
  argTypes: {
    src: { control: 'text', name: 'Image Source' },
    alt: { control: 'text', name: 'Alt Text' },
    caption: { control: 'text', name: 'Caption' },
  },
};

export const FullHeightImage = {
  render: (args) => `
    <div class="img-container full-height">
      <img src="${args.src}" alt="${args.alt}" class="img-responsive" loading="lazy" />
      <p class="image-caption">${args.caption}</p>
    </div>
  `,
  args: {
    src: '../../assets/images/ai-workflow-CI.png',
    alt: 'Full height workflow diagram showing CI/CD pipeline',
    caption: 'Full height display - perfect for workflows and diagrams'
  },
  argTypes: {
    src: { control: 'text', name: 'Image Source' },
    alt: { control: 'text', name: 'Alt Text' },
    caption: { control: 'text', name: 'Caption' },
  },
};

export const NaturalSizeImage = {
  render: (args) => `
    <div class="img-container natural-size">
      <img src="${args.src}" alt="${args.alt}" class="img-responsive" loading="lazy" />
      <p class="image-caption">${args.caption}</p>
    </div>
  `,
  args: {
    src: '../../assets/images/bubble-function-logo.png',
    alt: 'Natural size image example',
    caption: 'Natural size display - shows image at original dimensions'
  },
  argTypes: {
    src: { control: 'text', name: 'Image Source' },
    alt: { control: 'text', name: 'Alt Text' },
    caption: { control: 'text', name: 'Caption' },
  },
};

export const ExpandableImage = {
  render: (args) => `
    <div>
      <div class="img-container">
        <img src="${args.thumbSrc}" alt="${args.thumbAlt}" class="img-responsive" id="story-img-thumb" />
      </div>
      <div class="image-modal" id="modal" role="dialog">
        <div class="modal-content">
          <button class="modal-close" id="closeBtn" aria-label="Close image">&times;</button>
          <img src="${args.fullSrc}" alt="${args.fullAlt}" />
        </div>
      </div>
    </div>
  `,
  args: {
    thumbSrc: '../../assets/images/bubble-function-sketch.png',
    thumbAlt: 'Design process visualization (thumbnail)',
    fullSrc: '../../assets/images/bubble-function-sketch.png',
    fullAlt: 'Design process visualization (full size)',
  },
  argTypes: {
    thumbSrc: { control: 'text', name: 'Thumbnail Image Source' },
    thumbAlt: { control: 'text', name: 'Thumbnail Alt Text' },
    fullSrc: { control: 'text', name: 'Full Image Source' },
    fullAlt: { control: 'text', name: 'Full Image Alt Text' },
  },
  play: async ({ canvasElement }) => {
    const thumb = canvasElement.querySelector('#story-img-thumb');
    const modal = canvasElement.querySelector('#modal');
    const closeBtn = canvasElement.querySelector('#closeBtn');
    if (!thumb || !modal || !closeBtn) return;
    thumb.onclick = () => { modal.classList.add('active'); };
    closeBtn.onclick = () => { modal.classList.remove('active'); };
    modal.onclick = (e) => { if (e.target === modal) modal.classList.remove('active'); };
  }
};