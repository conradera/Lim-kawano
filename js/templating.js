document.addEventListener('DOMContentLoaded', function() {
    const loadTemplate = (url, elementId, callback) => {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById(elementId).innerHTML = data;
                if (callback) callback();
            })
            .catch(error => {
                console.error(`Error loading ${url}:`, error);
            });
    };

    // Load header first, then initialize mobile menu
    loadTemplate('/pages/_header.html', 'header-placeholder', function() {
        // Wait a bit for the DOM to settle
        setTimeout(() => {
            if (typeof initializeMobileMenu === 'function') {
                console.log('Initializing mobile menu from templating.js');
                const success = initializeMobileMenu();
                if (!success && typeof retryMobileMenuInit === 'function') {
                    retryMobileMenuInit();
                }
            }
        }, 100);
    });
    
    loadTemplate('/pages/_footer.html', 'footer-placeholder');
});
