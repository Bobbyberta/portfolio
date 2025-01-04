import { Navigation } from './components/navigation.js';
import { setupAnimations } from './utils/animations.js';
import { setupForms } from './components/form.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize navigation
    new Navigation();
    
    // Setup animations
    setupAnimations();
    
    // Setup forms
    setupForms();
}); 