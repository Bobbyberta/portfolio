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


export const ImgContainer = {
  render: () => `
    <div class="img-container">
      img-container component
    </div>
  `,
};


export const ImgResponsive = {
  render: () => `
    <div class="img-responsive">
      img-responsive component
    </div>
  `,
};


export const ContentImage = {
  render: () => `
    <div class="content-image">
      content-image component
    </div>
  `,
};


export const CaseStudyImageContainer = {
  render: () => `
    <div class="case-study-image-container">
      case-study-image-container component
    </div>
  `,
};


export const CaseStudyHero = {
  render: () => `
    <div class="case-study-hero">
      case-study-hero component
    </div>
  `,
};


export const HeroImage = {
  render: () => `
    <div class="hero-image">
      hero-image component
    </div>
  `,
};


export const OutcomesImage = {
  render: () => `
    <div class="outcomes-image">
      outcomes-image component
    </div>
  `,
};


export const ImageModal = {
  render: () => `
    <div class="image-modal">
      image-modal component
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


export const ModalContent = {
  render: () => `
    <div class="modal-content">
      modal-content component
    </div>
  `,
};


export const ModalClose = {
  render: () => `
    <div class="modal-close">
      modal-close component
    </div>
  `,
};