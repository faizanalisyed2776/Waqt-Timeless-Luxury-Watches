// Animation functionality is handled by AOS library and CSS animations
// This file can be used for additional custom animations if needed

// Example: Animate elements when they come into view
document.addEventListener('DOMContentLoaded', function() {
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('[data-aos]');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('aos-animate');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
});

// Example: Add hover animations to buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.classList.add('hover-grow');
    });
    
    btn.addEventListener('mouseleave', function() {
        this.classList.remove('hover-grow');
    });
});

// Example: Add subtle animation to cards
document.querySelectorAll('.collection-card, .watch-card, .accessory-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 10px 25px var(--shadow-color)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = '';
        this.style.boxShadow = '';
    });
});