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

    // Enhanced scroll animations for feature cards (optional - cards already animate on load)
    // This ensures cards are visible when scrolled into view if they weren't initially
    const featureCardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe all feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
        featureCardObserver.observe(card);
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

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    }

    lastScroll = currentScroll;
});

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Error handling for missing images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function () {
        this.style.display = 'none';
        console.warn('Image failed to load:', this.src);
    });
});

// Analytics placeholder (replace with your analytics code)
function trackEvent(eventName, eventData) {
    // Replace with your analytics service
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
    console.log('Event tracked:', eventName, eventData);
}

// Track CTA clicks
document.querySelectorAll('.btn-cta, .btn-hero, .btn-primary').forEach(button => {
    button.addEventListener('click', function () {
        trackEvent('cta_click', {
            button_text: this.textContent.trim(),
            button_location: this.closest('section')?.id || 'unknown'
        });
    });
});

// Track feature card interactions
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('click', function () {
        const featureTitle = this.querySelector('h3')?.textContent.trim() || 'Unknown';
        trackEvent('feature_card_click', {
            feature_name: featureTitle,
            section: 'features'
        });

        // Optional: Add visual feedback on click
        this.style.transform = 'translateY(-4px) scale(0.98)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });

    // Track hover interactions (optional)
    let hoverStartTime = null;
    card.addEventListener('mouseenter', function () {
        hoverStartTime = Date.now();
    });

    card.addEventListener('mouseleave', function () {
        if (hoverStartTime) {
            const hoverDuration = Date.now() - hoverStartTime;
            if (hoverDuration > 1000) { // Track if hovered for more than 1 second
                const featureTitle = this.querySelector('h3')?.textContent.trim() || 'Unknown';
                trackEvent('feature_card_hover', {
                    feature_name: featureTitle,
                    hover_duration: hoverDuration
                });
            }
            hoverStartTime = null;
        }
    });
});
// Professional Download Handler
document.querySelectorAll('.download-trigger').forEach(trigger => {
    trigger.addEventListener('click', function (e) {
        // We don't preventDefault so the standard download still triggers
        // but we add a nice visual feedback (toast/notification)
        showDownloadFeedback();

        trackEvent('apk_download_initiated', {
            location: this.classList.contains('nav-link') ? 'navbar' :
                this.classList.contains('btn-primary') ? 'header' : 'hero'
        });
    });
});

function showDownloadFeedback() {
    // Create a toast notification if it doesn't exist
    let toast = document.getElementById('download-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'download-toast';
        toast.style.cssText = `
            position: fixed;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            background: #e91e63;
            color: white;
            padding: 12px 24px;
            border-radius: 50px;
            box-shadow: 0 4px 15px rgba(233, 30, 99, 0.4);
            z-index: 10000;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 10px;
            opacity: 0;
            transition: all 0.3s ease;
        `;
        toast.innerHTML = '<span>🚀 Starting your download...</span>';
        document.body.appendChild(toast);
    }

    // Show toast
    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.bottom = '40px';
    }, 100);

    // Hide toast after 3 seconds
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.bottom = '30px';
    }, 3000);
}
