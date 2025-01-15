import { Navigation } from './components/navigation.js';
import { ImageModal } from './components/imageModal.js';
import './overview.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize navigation
    new Navigation();
    // Initialize image modal
    new ImageModal();
}); 