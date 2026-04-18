// nav.js — active link on scroll + mobile hamburger toggle

(function () {
  const sections  = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-links a');
  const toggle    = document.getElementById('navToggle');
  const navLinksEl = document.getElementById('navLinks');

  // Active link on scroll
  function setActiveLink() {
    let current = '';
    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - 90) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', setActiveLink);
  setActiveLink();

  // Mobile toggle
  toggle.addEventListener('click', () => {
    navLinksEl.classList.toggle('open');
  });

  // Close on link click (mobile)
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navLinksEl.classList.remove('open');
    });
  });
})();
