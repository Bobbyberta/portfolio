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


export const NavigationHeader = (args) => {
  const { logoText, navLinks, menuOpen } = args;
  return `
    <style>
      .nav-links {
        display: none;
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .nav-links.active {
        display: block;
      }
      @media (min-width: 600px) {
        .nav-links { display: flex !important; }
        .mobile-menu-btn { display: none; }
      }
      .mobile-menu-btn {
        background: none;
        border: none;
        font-size: 2rem;
        cursor: pointer;
      }
    </style>
    <header>
      <nav>
        <div class="logo">${logoText}</div>
        <button class="mobile-menu-btn" aria-label="Toggle menu" aria-expanded="${menuOpen}" aria-controls="nav-links" id="menuBtn">
          <span class="sr-only">Menu</span>
          ☰
        </button>
        <ul class="nav-links${menuOpen ? ' active' : ''}" id="nav-links">
          ${navLinks.map(link => `<li><a href="${link.href}"${link.current ? ' aria-current=\"page\"' : ''}>${link.label}</a></li>`).join('')}
        </ul>
      </nav>
    </header>
    <script>
      const navLinks = document.currentScript.previousElementSibling.querySelector('#nav-links');
      const menuBtn = document.currentScript.previousElementSibling.querySelector('#menuBtn');
      menuBtn.onclick = () => {
        const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
        menuBtn.setAttribute('aria-expanded', !expanded);
        navLinks.classList.toggle('active');
      };
    </script>
  `;
};

NavigationHeader.args = {
  logoText: 'Bobbie Allsop',
  navLinks: [
    { href: '/', label: 'Home', current: true },
    { href: '/pages/about.html', label: 'About', current: false },
    { href: '/pages/blog.html', label: 'Blog', current: false },
    { href: '/pages/contact.html', label: 'Contact', current: false },
  ],
  menuOpen: false,
};

NavigationHeader.argTypes = {
  logoText: { control: 'text', name: 'Logo Text' },
  navLinks: { control: 'object', name: 'Navigation Links' },
  menuOpen: { control: 'boolean', name: 'Menu Open (default)' },
};

export const NavigationHeaderMobile = (args) => {
  const { logoText, navLinks, menuOpen } = args;
  return `
    <style>
      .nav-links {
        display: none;
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .nav-links.active {
        display: block;
      }
      /* Force mobile styles regardless of viewport */
      .mobile-menu-btn { display: inline-block !important; }
      .nav-links { display: none !important; }
      .nav-links.active { display: block !important; }
      .mobile-menu-btn {
        background: none;
        border: none;
        font-size: 2rem;
        cursor: pointer;
      }
    </style>
    <header>
      <nav>
        <div class="logo">${logoText}</div>
        <button class="mobile-menu-btn" aria-label="Toggle menu" aria-expanded="${menuOpen}" aria-controls="nav-links" id="menuBtnMobile">
          <span class="sr-only">Menu</span>
          ☰
        </button>
        <ul class="nav-links${menuOpen ? ' active' : ''}" id="nav-links-mobile">
          ${navLinks.map(link => `<li><a href="${link.href}"${link.current ? ' aria-current=\"page\"' : ''}>${link.label}</a></li>`).join('')}
        </ul>
      </nav>
    </header>
  `;
};

NavigationHeaderMobile.args = {
  logoText: 'Bobbie Allsop',
  navLinks: [
    { href: '/', label: 'Home', current: true },
    { href: '/pages/about.html', label: 'About', current: false },
    { href: '/pages/blog.html', label: 'Blog', current: false },
    { href: '/pages/contact.html', label: 'Contact', current: false },
  ],
  menuOpen: false,
};

NavigationHeaderMobile.argTypes = {
  logoText: { control: 'text', name: 'Logo Text' },
  navLinks: { control: 'object', name: 'Navigation Links' },
  menuOpen: { control: 'boolean', name: 'Menu Open (default)' },
};

NavigationHeaderMobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
};

NavigationHeaderMobile.play = async ({ canvasElement }) => {
  const navLinks = canvasElement.querySelector('#nav-links-mobile');
  const menuBtn = canvasElement.querySelector('#menuBtnMobile');
  if (!navLinks || !menuBtn) return;
  menuBtn.onclick = () => {
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', !expanded);
    navLinks.classList.toggle('active');
  };
};