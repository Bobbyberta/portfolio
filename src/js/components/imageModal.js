export class ImageModal {
    constructor() {
        this.init();
    }

    init() {
        // Create modal element
        this.modal = document.createElement('div');
        this.modal.className = 'image-modal';
        this.modal.innerHTML = `
            <div class="modal-content">
                <button class="modal-close" aria-label="Close image">×</button>
                <img src="" alt="" />
            </div>
        `;
        document.body.appendChild(this.modal);

        // Get modal elements
        this.modalImg = this.modal.querySelector('img');
        this.closeBtn = this.modal.querySelector('.modal-close');

        // Add click handlers to all responsive images
        document.querySelectorAll('.img-responsive').forEach(img => {
            img.addEventListener('click', () => this.openModal(img));
        });

        // Add close handlers
        this.closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.closeModal();
        });
        this.modal.addEventListener('click', () => this.closeModal());

        // Handle escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.closeModal();
        });
    }

    openModal(img) {
        this.modalImg.src = img.src;
        this.modalImg.alt = img.alt;
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    closeModal() {
        this.modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }
} 