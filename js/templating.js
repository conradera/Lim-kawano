document.addEventListener('DOMContentLoaded', function() {
    const loadTemplate = (url, elementId) => {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById(elementId).innerHTML = data;
            });
    };

    loadTemplate('/pages/_header.html', 'header-placeholder');
    loadTemplate('/pages/_footer.html', 'footer-placeholder');
});
