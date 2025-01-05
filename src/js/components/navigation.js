export class Navigation {
    constructor() {
        this.mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        this.navLinks = document.querySelector('.nav-links');
        this.init();
    }

    init() {
        if (this.mobileMenuBtn && this.navLinks) {
            this.mobileMenuBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleMenu();
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!e.target.closest('nav')) {
                    this.closeMenu();
                }
            });

            // Close menu with Escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    this.closeMenu();
                }
            });
        }
    }

    toggleMenu() {
        const isExpanded = this.mobileMenuBtn.getAttribute('aria-expanded') === 'true';
        this.navLinks.classList.toggle('active');
        this.mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
    }

    closeMenu() {
        this.navLinks.classList.remove('active');
        this.mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }
} 