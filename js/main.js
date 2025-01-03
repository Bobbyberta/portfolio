// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! This is a demo alert - implement your own form handling logic.');
});

// Add animation class when elements come into view
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Add mobile menu functionality
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
    mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
    navLinks.classList.toggle('active');
});

// Close menu with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('nav')) {
        navLinks.classList.remove('active');
    }
});

// Form accessibility improvements
const form = document.getElementById('contact-form');
const formInputs = form.querySelectorAll('input, textarea');

formInputs.forEach(input => {
    // Add aria-invalid attribute when validation fails
    input.addEventListener('invalid', () => {
        input.setAttribute('aria-invalid', 'true');
    });
    
    // Remove aria-invalid attribute when user starts typing
    input.addEventListener('input', () => {
        input.removeAttribute('aria-invalid');
    });
});

// Typing animation
const messages = ['Hello!', 'Welcome!', 'Nice to meet you!'];
let messageIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 200;

function typeText() {
    const typedTextSpan = document.querySelector('.typed-text');
    const currentMessage = messages[messageIndex];
    
    if (isDeleting) {
        typedTextSpan.textContent = currentMessage.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedTextSpan.textContent = currentMessage.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentMessage.length) {
        isDeleting = true;
        typingDelay = 1000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        messageIndex = (messageIndex + 1) % messages.length;
        typingDelay = 200;
    }

    setTimeout(typeText, isDeleting ? 100 : typingDelay);
}

// Start typing animation when page loads
window.onload = () => {
    if (document.querySelector('.typed-text')) {
        typeText();
    }
}; 