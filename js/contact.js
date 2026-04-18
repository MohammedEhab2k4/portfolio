// contact.js — form validation and submission

(function () {
  const form    = document.getElementById('contactForm');
  const formMsg = document.getElementById('formMsg');
  if (!form) return;

  function showMsg(text, type) {
    formMsg.textContent = text;
    formMsg.className = 'form-msg ' + type;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name    = document.getElementById('name').value.trim();
    const email   = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      showMsg('Please fill in all required fields.', 'error');
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      showMsg('Please enter a valid email address.', 'error');
      return;
    }

    // ── Replace this block with EmailJS or Formspree when ready ──
    showMsg("Thanks " + name + "! I'll get back to you soon.", 'success');
    form.reset();

    /*
    OPTION A — Formspree (no backend, easiest):
      1. Sign up at https://formspree.io
      2. Add action="https://formspree.io/f/YOUR_ID" method="POST" to the <form> tag
      3. Remove this JS submit handler entirely

    OPTION B — EmailJS (JS-only, no backend):
      1. Sign up at https://emailjs.com
      2. Add their SDK script to index.html
      3. Replace the success line above with:
         emailjs.send('SERVICE_ID', 'TEMPLATE_ID', { name, email, message })
           .then(() => showMsg("Thanks " + name + "!", 'success'))
           .catch(() => showMsg('Something went wrong. Try again.', 'error'));
    */
  });
})();
