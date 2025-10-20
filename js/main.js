        // Mobile Navigation functionality
        function initializeMobileMenu() {
            const hamburgerBtn = document.getElementById('hamburgerBtn');
            const mobileNav = document.getElementById('mobileNav');
            const mobileNavOverlay = document.getElementById('mobileNavOverlay');
            const closeMobileNav = document.getElementById('closeMobileNav');
            const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

            let isMenuOpen = false;

            function openMobileNav(e) {
                e.preventDefault();
                e.stopPropagation();
                
                if (mobileNav) mobileNav.classList.add('open');
                if (mobileNavOverlay) mobileNavOverlay.classList.add('show');
                if (hamburgerBtn) hamburgerBtn.classList.add('active');
                document.body.style.overflow = 'hidden';
                isMenuOpen = true;
            }

            function closeMobileNavFunc(e) {
                if (e) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                
                if (mobileNav) mobileNav.classList.remove('open');
                if (mobileNavOverlay) mobileNavOverlay.classList.remove('show');
                if (hamburgerBtn) hamburgerBtn.classList.remove('active');
                document.body.style.overflow = '';
                isMenuOpen = false;
            }

            // Handle escape key
            function handleEscapeKey(e) {
                if (e.key === 'Escape' && isMenuOpen) {
                    closeMobileNavFunc();
                }
            }

            // Handle window resize
            function handleResize() {
                if (window.innerWidth >= 768 && isMenuOpen) {
                    closeMobileNavFunc();
                }
            }

            if (hamburgerBtn) {
                hamburgerBtn.addEventListener('click', openMobileNav);
                hamburgerBtn.addEventListener('touchstart', openMobileNav, { passive: false });
            }
            
            if (closeMobileNav) {
                closeMobileNav.addEventListener('click', closeMobileNavFunc);
                closeMobileNav.addEventListener('touchstart', closeMobileNavFunc, { passive: false });
            }
            
            if (mobileNavOverlay) {
                mobileNavOverlay.addEventListener('click', closeMobileNavFunc);
                mobileNavOverlay.addEventListener('touchstart', closeMobileNavFunc, { passive: false });
            }

            // Close mobile nav when clicking on a link
            mobileNavLinks.forEach(link => {
                link.addEventListener('click', closeMobileNavFunc);
                link.addEventListener('touchstart', closeMobileNavFunc, { passive: false });
            });

            // Mobile dropdown functionality
            const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
            mobileDropdownToggles.forEach(toggle => {
                toggle.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    const dropdown = toggle.closest('.mobile-dropdown');
                    const isActive = dropdown.classList.contains('active');
                    
                    // Close all other dropdowns
                    document.querySelectorAll('.mobile-dropdown').forEach(dd => {
                        dd.classList.remove('active');
                    });
                    
                    // Toggle current dropdown
                    if (!isActive) {
                        dropdown.classList.add('active');
                    }
                });
            });

            // Add global event listeners
            document.addEventListener('keydown', handleEscapeKey);
            window.addEventListener('resize', handleResize);
        }

        // Initialize mobile menu when DOM is loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeMobileMenu);
        } else {
            initializeMobileMenu();
        }

        // Handle dropdown menu hover
        const servicesDropdown = document.querySelector('.nav-menu .group');
        if (servicesDropdown) {
            const dropdown = servicesDropdown.querySelector('.absolute');
            if (dropdown) {
                servicesDropdown.addEventListener('mouseenter', () => {
                    dropdown.classList.add('opacity-100', 'visible');
                });
                servicesDropdown.addEventListener('mouseleave', () => {
                    dropdown.classList.remove('opacity-100', 'visible');
                });
            }
        }

        // Function to re-initialize mobile menu (for dynamically loaded content)
        window.initializeMobileMenu = initializeMobileMenu;

        // Form validation and submission
        const contactForm = document.querySelector('.contact-form');
        const submitButton = document.querySelector('.submit-button');

        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Simple form validation
            const formData = new FormData(contactForm);
            const name = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            const message = contactForm.querySelector('textarea').value;

            if (!name || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }

            // Simulate form submission
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;

            setTimeout(() => {
                alert('Thank you for your message! We\'ll get back to you soon.');
                contactForm.reset();
                submitButton.innerHTML = 'Send Message <span class="ml-1">✈</span>';
                submitButton.disabled = false;
            }, 2000);
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements for fade-in animation
        document.querySelectorAll('.solution-card, .contact-info-item, .carousel-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });

        // Add loading state for images
        document.querySelectorAll('img').forEach(img => {
            img.addEventListener('load', function () {
                this.style.opacity = '1';
            });
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.3s ease';
        });

        // Handle window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768) {
                closeMobileNavFunc();
            }
        });

        // Fixed navbar - always visible, no scroll effects needed

        // Enhanced form interactions
        const formInputs = document.querySelectorAll('.form-input, .form-textarea');

        formInputs.forEach(input => {
            input.addEventListener('focus', function () {
                this.parentNode.classList.add('focused');
            });

            input.addEventListener('blur', function () {
                this.parentNode.classList.remove('focused');
                if (this.value) {
                    this.parentNode.classList.add('filled');
                } else {
                    this.parentNode.classList.remove('filled');
                }
            });
        });

        // Add some CSS for enhanced form states
        const style = document.createElement('style');
        style.textContent = `
            .form-group.focused .form-label {
                color: #cc9955;
            }
            
            .form-group.filled .form-input,
            .form-group.filled .form-textarea {
                border-color: #cc9955;
            }
            
            
            /* Loading animation for submit button */
            .submit-button:disabled {
                opacity: 0.7;
                cursor: not-allowed;
            }
            
            /* Enhanced hover effects for desktop */
            @media (min-width: 1024px) {
                .solution-card:hover .solution-image {
                    transform: scale(1.1);
                }
                
                .footer-social-icon:hover {
                    transform: translateY(-2px) scale(1.1);
                }
            }
        `;
        document.head.appendChild(style);