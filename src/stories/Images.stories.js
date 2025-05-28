import { PLACEHOLDER_IMAGE } from './utils/placeholders';

export default {
  title: 'Components/Images',
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'images component styles',
  },
  
};

// Available classes from images.css:
// img-container, img-responsive, content-image, case-study-image-container, case-study-hero, hero-image, outcomes-image, image-modal, active, modal-content, modal-close


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