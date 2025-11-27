// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Enhanced Scroll Animations with staggered delays
document.addEventListener('DOMContentLoaded', () => {
    // Improved observer options for smoother animations
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px', // Trigger slightly before element enters viewport
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0] // Multiple thresholds for progressive animation
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add staggered delay for multiple elements
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.add('is-visible');
                }, delay);
                
                // Keep observing for re-animation on scroll up (optional)
                // observer.unobserve(entry.target);
            } else {
                // Optional: Remove class when out of view for re-animation
                // entry.target.classList.remove('is-visible');
            }
        });
    }, observerOptions);

    // Observe all animate-on-scroll elements with staggered delays
    document.querySelectorAll('.animate-on-scroll').forEach((element, index) => {
        // Add data-delay attribute for staggered animation
        if (!element.dataset.delay) {
            element.dataset.delay = index * 100; // 100ms delay between each element
        }
        observer.observe(element);
    });

    // Smooth scroll behavior enhancement
    let lastScrollTop = 0;
    let ticking = false;

    function updateScrollEffects() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add scroll-based effects here if needed
        // For example: parallax, header opacity, etc.
        
        lastScrollTop = scrollTop;
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    }, { passive: true });
});
