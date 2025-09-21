        // Mobile Navigation functionality
        const hamburgerBtn = document.getElementById('hamburgerBtn');
        const mobileNav = document.getElementById('mobileNav');
        const mobileNavOverlay = document.getElementById('mobileNavOverlay');
        const closeMobileNav = document.getElementById('closeMobileNav');
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

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

        hamburgerBtn.addEventListener('click', openMobileNav);
        closeMobileNav.addEventListener('click', closeMobileNavFunc);
        mobileNavOverlay.addEventListener('click', closeMobileNavFunc);

        // Close mobile nav when clicking on a link
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', closeMobileNavFunc);
        });

        // Leadership Carousel functionality
        const carouselTrack = document.querySelector('.carousel-track');
        const carouselCards = document.querySelectorAll('.carousel-card');
        const leftArrow = document.querySelector('.carousel-arrow.left');
        const rightArrow = document.querySelector('.carousel-arrow.right');
        const personName = document.querySelector('.person-name');
        const personRole = document.querySelector('.person-role');
        const carouselDots = document.querySelector('.carousel-dots');

        let currentIndex = 0;

        // Create dots
        carouselCards.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('carousel-dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            carouselDots.appendChild(dot);
        });

        const dots = document.querySelectorAll('.carousel-dot');

        function updateCarousel() {
            // Update active card
            carouselCards.forEach((card, index) => {
                if (index === currentIndex) {
                    card.style.transform = 'scale(1.1)';
                    card.style.filter = 'brightness(1)';
                } else {
                    card.style.transform = 'scale(0.9)';
                    card.style.filter = 'brightness(0.7)';
                }
            });

            // Update person info
            const activeCard = carouselCards[currentIndex];
            personName.textContent = activeCard.dataset.name;
            personRole.textContent = activeCard.dataset.role;

            // Update dots
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });

            // Scroll to active card (for mobile)
            const cardWidth = carouselCards[0].offsetWidth + 16; // width + gap
            carouselTrack.scrollTo({
                left: currentIndex * cardWidth - carouselTrack.offsetWidth / 2 + cardWidth / 2,
                behavior: 'smooth'
            });
        }

        function goToSlide(index) {
            currentIndex = index;
            updateCarousel();
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % carouselCards.length;
            updateCarousel();
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + carouselCards.length) % carouselCards.length;
            updateCarousel();
        }

        leftArrow.addEventListener('click', prevSlide);
        rightArrow.addEventListener('click', nextSlide);

        // Click on cards to select them
        carouselCards.forEach((card, index) => {
            card.addEventListener('click', () => goToSlide(index));
        });

        // Initialize carousel
        updateCarousel();

        // Auto-advance carousel every 5 seconds
        setInterval(nextSlide, 5000);

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
            updateCarousel();
        });

        // Add scroll-based navbar background
        const header = document.querySelector('.header');
        let lastScrollY = window.scrollY;

        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > 100) {
                header.style.background = 'rgba(20, 57, 77, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
                header.style.padding = '0.75rem 0';
            } else {
                header.style.background = 'transparent';
                header.style.backdropFilter = 'none';
                header.style.padding = '0';
            }

            lastScrollY = currentScrollY;
        });

        // Keyboard navigation for carousel
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                prevSlide();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
            }
        });

        // Touch/swipe support for mobile carousel
        let touchStartX = 0;
        let touchEndX = 0;

        carouselTrack.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        carouselTrack.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });

        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;

            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    nextSlide();
                } else {
                    prevSlide();
                }
            }
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
            
            @media (max-width: 768px) {
                .carousel-track {
                    scroll-snap-type: x mandatory;
                }
                
                .carousel-card {
                    scroll-snap-align: center;
                }
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