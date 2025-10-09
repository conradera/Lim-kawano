// Enhanced Interactivity & Visual Effects

document.addEventListener('DOMContentLoaded', function() {

    // ========================================
    // Scroll Progress Indicator
    // ========================================
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.prepend(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });

    // ========================================
    // Parallax Scrolling Effect
    // ========================================
    const parallaxSections = document.querySelectorAll('.hero-section, .expertise-section');

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;

        parallaxSections.forEach(section => {
            const speed = 0.5;
            section.style.backgroundPositionY = -(scrolled * speed) + 'px';
        });
    });

    // ========================================
    // Enhanced Header with Glassmorphism
    // ========================================
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScrollY = currentScrollY;
    });

    // ========================================
    // Animated Counter for Stats (if needed)
    // ========================================
    function animateCounter(element, target, duration = 2000) {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    }

    // ========================================
    // Intersection Observer for Scroll Animations
    // ========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');

                // Add stagger effect to children
                const children = entry.target.querySelectorAll('.solution-card, .contact-info-item');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.style.opacity = '1';
                        child.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        fadeInObserver.observe(section);
    });

    // ========================================
    // Enhanced Carousel with Touch Support
    // ========================================
    const carouselTrack = document.querySelector('.carousel-track');
    if (carouselTrack) {
        let isDragging = false;
        let startX;
        let scrollLeft;

        carouselTrack.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.pageX - carouselTrack.offsetLeft;
            scrollLeft = carouselTrack.scrollLeft;
            carouselTrack.style.cursor = 'grabbing';
        });

        carouselTrack.addEventListener('mouseleave', () => {
            isDragging = false;
            carouselTrack.style.cursor = 'grab';
        });

        carouselTrack.addEventListener('mouseup', () => {
            isDragging = false;
            carouselTrack.style.cursor = 'grab';
        });

        carouselTrack.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - carouselTrack.offsetLeft;
            const walk = (x - startX) * 2;
            carouselTrack.scrollLeft = scrollLeft - walk;
        });
    }

    // ========================================
    // Magnetic Button Effect (for CTA buttons)
    // ========================================
    const magneticButtons = document.querySelectorAll('.cta-button, .expertise-cta, .submit-button');

    magneticButtons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translate(0, 0)';
        });
    });

    // ========================================
    // Form Enhanced Validation & Animation
    // ========================================
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        const inputs = contactForm.querySelectorAll('.form-input, .form-textarea');

        inputs.forEach(input => {
            // Floating label effect
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
            });

            input.addEventListener('blur', function() {
                if (!this.value) {
                    this.parentElement.classList.remove('focused');
                }
            });

            // Real-time validation
            input.addEventListener('input', function() {
                if (this.validity.valid) {
                    this.style.borderColor = '#4ade80';
                } else {
                    this.style.borderColor = '#ef4444';
                }
            });
        });

        // Enhanced form submission
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const submitButton = this.querySelector('.submit-button');
            const originalText = submitButton.innerHTML;

            // Validate
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;

            if (!name || !email || !message) {
                showNotification(window.currentTranslations?.contact?.form?.error || 'Please fill in all required fields.', 'error');
                return;
            }

            // Simulate submission
            submitButton.innerHTML = `<span class="inline-block animate-spin">⏳</span> ${window.currentTranslations?.contact?.form?.sending || 'Sending...'}`;
            submitButton.disabled = true;

            setTimeout(() => {
                showNotification(window.currentTranslations?.contact?.form?.success || 'Thank you for your message! We\'ll get back to you soon.', 'success');
                contactForm.reset();
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
            }, 2000);
        });
    }

    // ========================================
    // Custom Notification System
    // ========================================
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 16px 24px;
            background: ${type === 'success' ? '#4ade80' : type === 'error' ? '#ef4444' : '#3b82f6'};
            color: white;
            border-radius: 8px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.2);
            z-index: 10000;
            font-weight: 500;
            transform: translateX(400px);
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        `;
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 10);

        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // ========================================
    // Lazy Loading for Images
    // ========================================
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });

    // ========================================
    // Smooth Reveal for Solution Cards
    // ========================================
    const cards = document.querySelectorAll('.solution-card');
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        cardObserver.observe(card);
    });

    // ========================================
    // Typing Effect for Hero Title (Optional)
    // ========================================
    function typeWriter(element, text, speed = 50) {
        let i = 0;
        element.textContent = '';

        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }

        type();
    }

    // ========================================
    // Background Music Control (Optional)
    // ========================================
    let audioContext;

    function initAudio() {
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
    }

    // ========================================
    // Cookie Consent Banner (Optional)
    // ========================================
    function showCookieConsent() {
        if (!localStorage.getItem('cookie-consent')) {
            const banner = document.createElement('div');
            banner.className = 'cookie-consent';
            banner.style.cssText = `
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                background: rgba(20, 57, 77, 0.95);
                backdrop-filter: blur(10px);
                color: white;
                padding: 20px;
                text-align: center;
                z-index: 10000;
                transform: translateY(100%);
                transition: transform 0.3s ease;
            `;
            banner.innerHTML = `
                <p style="margin: 0 0 10px 0;">We use cookies to improve your experience. By continuing, you agree to our use of cookies.</p>
                <button onclick="this.parentElement.style.transform='translateY(100%)'; localStorage.setItem('cookie-consent', 'true');"
                        style="background: #cc9955; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; font-weight: 600;">
                    Accept
                </button>
            `;
            document.body.appendChild(banner);

            setTimeout(() => {
                banner.style.transform = 'translateY(0)';
            }, 1000);
        }
    }

    // Show cookie consent after 2 seconds
    setTimeout(showCookieConsent, 2000);

    // ========================================
    // Performance Monitoring
    // ========================================
    if ('PerformanceObserver' in window) {
        const perfObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                if (entry.duration > 100) {
                    console.warn('Slow task detected:', entry.name, entry.duration + 'ms');
                }
            }
        });

        perfObserver.observe({ entryTypes: ['measure', 'navigation'] });
    }

    // ========================================
    // Easter Egg - Konami Code
    // ========================================
    let konamiCode = [];
    const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.key);
        konamiCode = konamiCode.slice(-10);

        if (konamiCode.join('') === konamiPattern.join('')) {
            document.body.style.animation = 'rainbow 2s infinite';
            showNotification('🎉 You found the secret! 🎉', 'success');
        }
    });

    // Add rainbow animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(style);

    // ========================================
    // Initialize all enhancements
    // ========================================
    console.log('✨ Enhanced interactivity loaded successfully!');
});

// ========================================
// Service Worker for PWA (Optional)
// ========================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment when service worker is ready
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered:', registration))
        //     .catch(err => console.log('SW registration failed:', err));
    });
}
