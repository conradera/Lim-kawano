// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', function() {
      const navMenu = document.querySelector('.nav-menu');
      if (navMenu) {
        navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
      }
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) { target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
      }
    });
  });

  // Simple 3D carousel logic with autoplay
  (function() {
    const track = document.querySelector('.carousel-track');
    if (!track) return;
    const cards = Array.from(track.children);
    const left = document.querySelector('.carousel-arrow.left');
    const right = document.querySelector('.carousel-arrow.right');
    const nameEl = document.querySelector('.carousel-meta .person-name');
    const roleEl = document.querySelector('.carousel-meta .person-role');
    const dotsWrap = document.querySelector('.carousel-dots');

    let index = 0;
    let autoplayId = null;
    const AUTOPLAY_MS = 3500;

    function layout() {
      cards.forEach((card, i) => {
        const offset = ((i - index + cards.length) % cards.length);
        let position = offset;
        if (offset > cards.length / 2) position = offset - cards.length; // wrap left

        const distance = Math.abs(position);
        const scale = Math.max(0.7, 1 - distance * 0.12);
        const translateX = position * 180;
        const translateZ = -Math.min(0, distance - 1) * 120;
        const rotateY = position * -10;
        const opacity = distance === 0 ? 1 : 0.55 - Math.min(0.35, (distance - 1) * 0.15);

        card.style.zIndex = String(100 - distance);
        card.style.transform = `translateX(-50%) translateX(${translateX}px) translateZ(${translateZ}px) scale(${scale}) rotateY(${rotateY}deg)`;
        card.style.filter = distance === 0 ? 'grayscale(0)' : 'grayscale(100%)';
        card.style.opacity = String(Math.max(0.25, opacity));
      });

      const active = cards[index];
      if (nameEl) nameEl.textContent = active.getAttribute('data-name') || '';
      if (roleEl) roleEl.textContent = active.getAttribute('data-role') || '';
      updateDots();
    }

    function prev() { index = (index - 1 + cards.length) % cards.length; layout(); }
    function next() { index = (index + 1) % cards.length; layout(); }

    if (left) left.addEventListener('click', () => { stopAutoplay(); prev(); startAutoplay(); });
    if (right) right.addEventListener('click', () => { stopAutoplay(); next(); startAutoplay(); });

    // dots
    if (dotsWrap) {
      cards.forEach((_, i) => {
        const b = document.createElement('button');
        b.setAttribute('aria-label', `Go to ${i+1}`);
        b.addEventListener('click', () => { stopAutoplay(); index = i; layout(); startAutoplay(); });
        dotsWrap.appendChild(b);
      });
    }

    function updateDots() {
      if (!dotsWrap) return;
      Array.from(dotsWrap.children).forEach((dot, i) => {
        if (i === index) { dot.setAttribute('aria-current', 'true'); }
        else { dot.removeAttribute('aria-current'); }
      });
    }

    function startAutoplay() {
      stopAutoplay();
      autoplayId = window.setInterval(next, AUTOPLAY_MS);
    }

    function stopAutoplay() {
      if (autoplayId) { window.clearInterval(autoplayId); autoplayId = null; }
    }

    const carousel = document.querySelector('.team-carousel');
    if (carousel) {
      carousel.addEventListener('mouseenter', stopAutoplay);
      carousel.addEventListener('mouseleave', startAutoplay);
      carousel.addEventListener('touchstart', stopAutoplay, { passive: true });
      carousel.addEventListener('touchend', startAutoplay, { passive: true });
    }

    layout();
    startAutoplay();
  })();

  // File upload simulation
  const uploadTarget = document.querySelector('textarea[placeholder="Choose file or drop here."]');
  if (uploadTarget) {
    uploadTarget.addEventListener('click', function() {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = '.pdf,.doc,.docx,.txt';
      input.onchange = function(e) {
        const file = e.target.files[0];
        if (file) { uploadTarget.value = file.name; }
      };
      input.click();
    });
  }
});


