// typewriter.js — cycles through dev titles in the hero

(function () {
  const titles = [
    'Full Stack Developer',
    'React.js Developer',
    'Node.js Developer',
    'Blockchain Enthusiast',
    'Problem Solver',
  ];

  const el = document.getElementById('typedText');
  if (!el) return;

  let titleIndex = 0;
  let charIndex  = 0;
  let deleting   = false;

  function type() {
    const current = titles[titleIndex];

    if (!deleting) {
      el.textContent = current.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(type, 1800); // pause before deleting
        return;
      }
    } else {
      el.textContent = current.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        deleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
      }
    }

    setTimeout(type, deleting ? 60 : 90);
  }

  type();
})();
