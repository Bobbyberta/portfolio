document.addEventListener('DOMContentLoaded', () => {
    const collapsibleTriggers = document.querySelectorAll('.collapsible-trigger');

    collapsibleTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
            trigger.setAttribute('aria-expanded', !isExpanded);
        });
    });

    const chips = document.querySelectorAll('.skill-item, .software-item');
    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            chip.classList.toggle('active');
        });
    });
}); 