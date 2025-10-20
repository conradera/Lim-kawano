        // Mobile Navigation functionality
        const hamburgerBtn = document.getElementById('hamburgerBtn');
        const mobileNav = document.getElementById('mobileNav');
        const mobileNavOverlay = document.getElementById('mobileNavOverlay');
        const closeMobileNav = document.getElementById('closeMobileNav');
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

        function openMobileNav() {
            if (mobileNav) mobileNav.classList.add('open');
            if (mobileNavOverlay) mobileNavOverlay.classList.add('show');
            if (hamburgerBtn) hamburgerBtn.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeMobileNavFunc() {
            if (mobileNav) mobileNav.classList.remove('open');
            if (mobileNavOverlay) mobileNavOverlay.classList.remove('show');
            if (hamburgerBtn) hamburgerBtn.classList.remove('active');
            document.body.style.overflow = '';
        }

        if (hamburgerBtn) hamburgerBtn.addEventListener('click', openMobileNav);
        if (closeMobileNav) closeMobileNav.addEventListener('click', closeMobileNavFunc);
        if (mobileNavOverlay) mobileNavOverlay.addEventListener('click', closeMobileNavFunc);

        // Close mobile nav when clicking on a link
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', closeMobileNavFunc);
        });

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
        window.initializeMobileMenu = function() {
            const hamburgerBtn = document.getElementById('hamburgerBtn');
            const mobileNav = document.getElementById('mobileNav');
            const mobileNavOverlay = document.getElementById('mobileNavOverlay');
            const closeMobileNav = document.getElementById('closeMobileNav');
            const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

            if (hamburgerBtn && mobileNav && mobileNavOverlay && closeMobileNav) {
                function openMobileNav() {
                    mobileNav.classList.add('open');
                    mobileNavOverlay.classList.add('show');
                    hamburgerBtn.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }

                function closeMobileNavFunc() {
                    mobileNav.classList.remove('open');
                    mobileNavOverlay.classList.remove('show');
                    hamburgerBtn.classList.remove('active');
                    document.body.style.overflow = '';
                }

                // Remove existing event listeners
                hamburgerBtn.replaceWith(hamburgerBtn.cloneNode(true));
                closeMobileNav.replaceWith(closeMobileNav.cloneNode(true));
                mobileNavOverlay.replaceWith(mobileNavOverlay.cloneNode(true));

                // Add new event listeners
                document.getElementById('hamburgerBtn').addEventListener('click', openMobileNav);
                document.getElementById('closeMobileNav').addEventListener('click', closeMobileNavFunc);
                document.getElementById('mobileNavOverlay').addEventListener('click', closeMobileNavFunc);

                // Close mobile nav when clicking on a link
                mobileNavLinks.forEach(link => {
                    link.addEventListener('click', closeMobileNavFunc);
                });
            }
        };

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

        // Add scroll-based navbar background
        const fixedHeader = document.querySelector('.fixed-header');
        let lastScrollY = window.scrollY;

        if (fixedHeader) {
            window.addEventListener('scroll', () => {
                const currentScrollY = window.scrollY;

                if (currentScrollY > 50) {
                    fixedHeader.classList.add('scrolled');
                } else {
                    fixedHeader.classList.remove('scrolled');
                }

                lastScrollY = currentScrollY;
            });
        }

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