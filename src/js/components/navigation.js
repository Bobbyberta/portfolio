export class Navigation {
    constructor() {
        this.mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        this.navLinks = document.querySelector('.nav-links');
        this.init();
    }

    init() {
        this.setupMobileMenu();
        this.setupKeyboardNavigation();
        this.setupClickOutside();
    }

    setupMobileMenu() {
        if (this.mobileMenuBtn && this.navLinks) {
            this.mobileMenuBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const isExpanded = this.navLinks.classList.contains('active');
                this.navLinks.classList.toggle('active');
                this.mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
            });
        }
    }

    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.navLinks.classList.contains('active')) {
                this.navLinks.classList.remove('active');
                this.mobileMenuBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }

    setupClickOutside() {
        document.addEventListener('click', (e) => {
            if (!e.target.closest('nav') && this.navLinks.classList.contains('active')) {
                this.navLinks.classList.remove('active');
                this.mobileMenuBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }
} 