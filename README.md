# Mohammed Ehab — Portfolio

Personal portfolio website. Dark theme with cyan/teal neon accents.
Built with vanilla HTML, CSS, and JavaScript — no frameworks, no build tools.
Just open `index.html` in a browser.

---

## Folder Structure

```
portfolio/
│
├── index.html                  ← All sections, all real data
│
├── css/
│   ├── reset.css               ← Browser default overrides
│   ├── variables.css           ← All colors, fonts, spacing (edit theme here)
│   ├── base.css                ← Body, typography, shared buttons/tags
│   ├── nav.css                 ← Fixed navigation bar
│   ├── hero.css                ← Hero / landing section
│   ├── skills.css              ← Tech stack cards
│   ├── projects.css            ← Project cards
│   ├── experience.css          ← Internship timeline
│   ├── certifications.css      ← 11 certificate cards
│   ├── education.css           ← Academic record
│   ├── achievements.css        ← Achievements section
│   ├── contact.css             ← Contact form + resume downloads
│   ├── footer.css              ← Footer
│   └── responsive.css          ← Mobile / tablet breakpoints
│
├── js/
│   ├── nav.js                  ← Active link highlight + mobile hamburger
│   ├── typewriter.js           ← Typewriter effect in hero
│   ├── animations.js           ← Scroll-triggered fade-in
│   └── contact.js              ← Form validation (+ email service notes)
│
└── assets/
    ├── photo.jpg               ← YOUR PHOTO (add this)
    ├── Resume_FullStack.pdf    ← YOUR RESUME (add this)
    ├── Resume_Blockchain.pdf   ← YOUR RESUME (add this)
    └── Resume_DataML.pdf       ← YOUR RESUME (add this)
```

---

## Checklist Before Going Live

- [ ] Add your photo → `assets/photo.jpg`
      Then in `index.html`, find the hero section and replace:
        `<div class="avatar-initials">ME</div>`
      with:
        `<img src="assets/photo.jpg" alt="Mohammed Ehab">`

- [ ] Add your 3 resume PDFs to `assets/` folder:
        `Resume_FullStack.pdf`
        `Resume_Blockchain.pdf`
        `Resume_DataML.pdf`

- [ ] Add GitHub repo links to each project card (search for `href="#"` in projects)

- [ ] Add Live Demo links once projects are deployed

- [ ] Add verification URLs to each certificate card (`cert-verify` links)

- [ ] Update portfolio URL in all 3 resumes once hosted

---

## How to Update Resumes Later

1. Export updated resume as PDF
2. Name it exactly: `Resume_FullStack.pdf` / `Resume_Blockchain.pdf` / `Resume_DataML.pdf`
3. Drop it into `assets/` folder, replacing the old file
4. Done — no code changes needed

---

## Wiring Up the Contact Form

By default the form shows a success message but does not send an email.
See `js/contact.js` for two easy options:

**Option A — Formspree** (recommended, no backend needed):
1. Go to https://formspree.io and create a free account
2. Create a form and get your endpoint URL
3. Add `action="https://formspree.io/f/YOUR_ID" method="POST"` to the `<form>` tag in index.html
4. Remove the JS submit handler in contact.js

**Option B — EmailJS** (send from JavaScript, no backend):
1. Go to https://emailjs.com
2. Add their SDK: `<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>`
3. Follow the comments in `js/contact.js`

---

## Adding a New Project

In `index.html`, find the `projects-grid` div and copy-paste a project card block.
Update the number, title, description, highlights, and stack tags.

---

## Hosting for Free

**GitHub Pages** (recommended for students):
1. Push the `portfolio/` folder contents to a GitHub repo
2. Go to repo → Settings → Pages → Source → main branch → root
3. Your site will be live at `https://mohammedehab2k4.github.io/portfolio`
4. Paste this URL into all 3 resumes and your LinkedIn

**Vercel** (even easier, better performance):
1. Go to https://vercel.com and sign in with GitHub
2. Click "New Project" → Import your repo
3. Click Deploy
4. You get a URL like `https://mohammed-ehab.vercel.app`
