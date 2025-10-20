        // Global mobile menu state
        let isMenuOpen = false;
        let isMobileMenuInitialized = false;

        // Global function to close mobile menu
        function closeMobileNavFunc(e) {
            if (e) {
                e.preventDefault();
                e.stopPropagation();
            }
            
            const mobileNav = document.getElementById('mobileNav');
            const mobileNavOverlay = document.getElementById('mobileNavOverlay');
            const hamburgerBtn = document.getElementById('hamburgerBtn');
            
            if (mobileNav) mobileNav.classList.remove('open');
            if (mobileNavOverlay) mobileNavOverlay.classList.remove('show');
            if (hamburgerBtn) hamburgerBtn.classList.remove('active');
            document.body.classList.remove('mobile-menu-open');
            isMenuOpen = false;
        }

        // Global function to open mobile menu
        function openMobileNav(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const mobileNav = document.getElementById('mobileNav');
            const mobileNavOverlay = document.getElementById('mobileNavOverlay');
            const hamburgerBtn = document.getElementById('hamburgerBtn');
            
            if (mobileNav) mobileNav.classList.add('open');
            if (mobileNavOverlay) mobileNavOverlay.classList.add('show');
            if (hamburgerBtn) hamburgerBtn.classList.add('active');
            document.body.classList.add('mobile-menu-open');
            isMenuOpen = true;
        }

        // Mobile Navigation functionality
        function initializeMobileMenu() {
            // Prevent multiple initializations
            if (isMobileMenuInitialized) {
                console.log('Mobile menu already initialized');
                return true;
            }

            const hamburgerBtn = document.getElementById('hamburgerBtn');
            const mobileNav = document.getElementById('mobileNav');
            const mobileNavOverlay = document.getElementById('mobileNavOverlay');
            const closeMobileNav = document.getElementById('closeMobileNav');
            const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

            // Check if mobile menu elements exist
            if (!hamburgerBtn || !mobileNav || !mobileNavOverlay) {
                console.log('Mobile menu elements not found, retrying...');
                return false;
            }

            console.log('Initializing mobile menu...');

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

            // Handle orientation change
            function handleOrientationChange() {
                setTimeout(() => {
                    if (window.innerWidth >= 768 && isMenuOpen) {
                        closeMobileNavFunc();
                    }
                }, 100);
            }

            if (hamburgerBtn) {
                hamburgerBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    openMobileNav(e);
                });
            }
            
            if (closeMobileNav) {
                closeMobileNav.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    closeMobileNavFunc(e);
                });
            }
            
            if (mobileNavOverlay) {
                mobileNavOverlay.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    closeMobileNavFunc(e);
                });
            }

            // Close mobile nav when clicking on a link
            mobileNavLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    // Check if it's an internal link
                    const href = link.getAttribute('href');
                    if (href && href.startsWith('/')) {
                        // For internal links, close menu and navigate
                        closeMobileNavFunc();
                        
                        // If it's a link to home page sections, handle smooth scrolling
                        if (href.includes('#') && href.includes('index.html')) {
                            e.preventDefault();
                            const targetId = href.split('#')[1];
                            const targetElement = document.getElementById(targetId);
                            if (targetElement) {
                                const headerHeight = document.querySelector('.hero-nav-header')?.offsetHeight || 0;
                                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                                window.scrollTo({
                                    top: targetPosition,
                                    behavior: 'smooth'
                                });
                            }
                        }
                    }
                });
            });

            // Mobile dropdown functionality
            const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
            mobileDropdownToggles.forEach(toggle => {
                toggle.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    const dropdown = toggle.closest('.mobile-dropdown');
                    const dropdownMenu = dropdown.querySelector('.mobile-dropdown-menu');
                    const isActive = dropdown.classList.contains('active');
                    
                    // Close all other dropdowns
                    document.querySelectorAll('.mobile-dropdown').forEach(dd => {
                        dd.classList.remove('active');
                        const menu = dd.querySelector('.mobile-dropdown-menu');
                        if (menu) {
                            menu.classList.add('hidden');
                        }
                    });
                    
                    // Toggle current dropdown
                    if (!isActive) {
                        dropdown.classList.add('active');
                        if (dropdownMenu) {
                            dropdownMenu.classList.remove('hidden');
                        }
                    } else {
                        dropdown.classList.remove('active');
                        if (dropdownMenu) {
                            dropdownMenu.classList.add('hidden');
                        }
                    }
                });
            });

            // Add global event listeners
            document.addEventListener('keydown', handleEscapeKey);
            window.addEventListener('resize', handleResize);
            window.addEventListener('orientationchange', handleOrientationChange);

            isMobileMenuInitialized = true;
            console.log('Mobile menu initialized successfully');
            return true;
        }

        // Initialize mobile menu when DOM is loaded
        function initMobileMenuWhenReady() {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', initializeMobileMenu);
            } else {
                initializeMobileMenu();
            }
        }

        // Initialize immediately
        initMobileMenuWhenReady();

        // Also initialize on window load as backup
        window.addEventListener('load', () => {
            setTimeout(() => {
                if (typeof initializeMobileMenu === 'function') {
                    initializeMobileMenu();
                }
            }, 100);
        });

        // Retry mechanism for dynamically loaded content
        let retryCount = 0;
        const maxRetries = 10;
        function retryMobileMenuInit() {
            if (retryCount < maxRetries) {
                retryCount++;
                console.log(`Retrying mobile menu initialization (attempt ${retryCount})`);
                setTimeout(() => {
                    if (typeof initializeMobileMenu === 'function') {
                        const success = initializeMobileMenu();
                        if (!success && retryCount < maxRetries) {
                            retryMobileMenuInit();
                        }
                    } else {
                        retryMobileMenuInit();
                    }
                }, 300 * retryCount);
            } else {
                console.error('Failed to initialize mobile menu after maximum retries');
            }
        }

        // Expose retry function globally
        window.retryMobileMenuInit = retryMobileMenuInit;

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

        if (contactForm && submitButton) {
            contactForm.addEventListener('submit', function (e) {
                e.preventDefault();

                // Simple form validation
                const name = contactForm.querySelector('input[type="text"]')?.value;
                const email = contactForm.querySelector('input[type="email"]')?.value;
                const message = contactForm.querySelector('textarea')?.value;
                
                const currentLang = window.languageManager ? window.languageManager.getCurrentLanguage() : 'en';
                const errorText = currentLang === 'ja' ? 'すべての必須項目を入力してください。' : 'Please fill in all required fields.';
                const emailErrorText = currentLang === 'ja' ? '有効なメールアドレスを入力してください。' : 'Please enter a valid email address.';

                if (!name || !email || !message) {
                    alert(errorText);
                    return;
                }

                // Email validation
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    alert(emailErrorText);
                    return;
                }

                // Simulate form submission
                const originalButtonText = submitButton.innerHTML;
                const sendingText = currentLang === 'ja' ? '送信中...' : 'Sending...';
                const successText = currentLang === 'ja' ? 'お問い合わせありがとうございます！まもなくご連絡いたします。' : 'Thank you for your message! We\'ll get back to you soon.';
                
                submitButton.textContent = sendingText;
                submitButton.disabled = true;

                setTimeout(() => {
                    alert(successText);
                    contactForm.reset();
                    submitButton.innerHTML = originalButtonText;
                    submitButton.disabled = false;
                }, 2000);
            });
        }

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

        // Make functions globally accessible
        window.closeMobileNavFunc = closeMobileNavFunc;
        window.openMobileNav = openMobileNav;

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

        // Smooth scrolling for anchor links
        function initializeSmoothScrolling() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    const href = this.getAttribute('href');
                    const targetId = href.substring(1);
                    const target = document.getElementById(targetId);
                    
                    if (target) {
                        e.preventDefault();
                        const headerHeight = document.querySelector('.hero-nav-header')?.offsetHeight || 0;
                        const targetPosition = target.offsetTop - headerHeight - 20;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                        
                        // Close mobile menu if open
                        if (isMenuOpen) {
                            closeMobileNavFunc();
                        }
                    }
                });
            });
        }

        // Handle cross-page navigation
        function initializeCrossPageNavigation() {
            document.querySelectorAll('a[href*="index.html"]').forEach(link => {
                link.addEventListener('click', function(e) {
                    const href = this.getAttribute('href');
                    
                    // If it's a link to home page sections from other pages
                    if (href.includes('#') && !window.location.pathname.includes('index.html')) {
                        e.preventDefault();
                        
                        // Navigate to home page first
                        window.location.href = href;
                    }
                });
            });
        }

        // Initialize smooth scrolling when DOM is loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                initializeSmoothScrolling();
                initializeCrossPageNavigation();
            });
        } else {
            initializeSmoothScrolling();
            initializeCrossPageNavigation();
        }

        // Initialize mobile menu when DOM is ready
        function initializeMobileMenuOnReady() {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => {
                    setTimeout(() => {
                        if (!initializeMobileMenu()) {
                            retryMobileMenuInit();
                        }
                        // Re-initialize navigation after mobile menu is loaded
                        setTimeout(() => {
                            initializeCrossPageNavigation();
                        }, 200);
                    }, 100);
                });
            } else {
                setTimeout(() => {
                    if (!initializeMobileMenu()) {
                        retryMobileMenuInit();
                    }
                    // Re-initialize navigation after mobile menu is loaded
                    setTimeout(() => {
                        initializeCrossPageNavigation();
                    }, 200);
                }, 100);
            }
        }

        // Run initialization
        initializeMobileMenuOnReady();