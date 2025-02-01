import { PLACEHOLDER_IMAGE } from './utils/placeholders';

export default {
  title: 'Components/Navigation',
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'navigation component styles',
  },
  
};

// Available classes from navigation.css:
// logo, nav-links, mobile-menu-btn, active


export const Logo = {
  render: () => `
    <div class="logo">
      logo component
    </div>
  `,
};


export const NavLinks = {
  render: () => `
    <div class="nav-links">
      nav-links component
    </div>
  `,
};


export const MobileMenuBtn = {
  render: () => `
    <div class="mobile-menu-btn">
      mobile-menu-btn component
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