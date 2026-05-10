// =============================================
//  FUTURE_FS_01 — Portfolio JavaScript
//  Author: Heer Patel
// =============================================

/* ---------- CUSTOM CURSOR ---------- */
const cursor = document.getElementById('cursor');
const cursorDot = document.getElementById('cursorDot');

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursorDot.style.transform = `translate(${mouseX - 3}px, ${mouseY - 3}px)`;
});

function animateCursor() {
  cursorX += (mouseX - cursorX) * 0.12;
  cursorY += (mouseY - cursorY) * 0.12;
  cursor.style.transform = `translate(${cursorX - 18}px, ${cursorY - 18}px)`;
  requestAnimationFrame(animateCursor);
}
animateCursor();

document.querySelectorAll('a, button, .project-card, .skill-category').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.style.transform += ' scale(1.5)');
  el.addEventListener('mouseleave', () => cursor.style.transform = cursor.style.transform.replace(' scale(1.5)', ''));
});


/* ---------- NAVBAR SCROLL ---------- */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});


/* ---------- HAMBURGER MENU ---------- */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});


/* ---------- SCROLL REVEAL ---------- */
const revealEls = document.querySelectorAll(
  '.about-text, .about-image-wrap, .skill-category, .project-card, .contact-info, .contact-form, .section-label, .section-title'
);

revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => observer.observe(el));


/* ---------- ACTIVE NAV LINK ---------- */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

function setActiveLink() {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 200) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === `#${current}` ? 'var(--accent2)' : '';
  });
}
window.addEventListener('scroll', setActiveLink);


/* ---------- CONTACT FORM ---------- */
const form = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const formStatus = document.getElementById('formStatus');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = 'Sending...';
    submitBtn.disabled = true;

    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        formStatus.className = 'form-status success';
        formStatus.textContent = '✅ Message sent! I\'ll get back to you soon.';
        form.reset();
      } else {
        throw new Error('Server error');
      }
    } catch (err) {
      formStatus.className = 'form-status error';
      formStatus.textContent = '❌ Something went wrong. Please try emailing me directly.';
    }

    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;

    setTimeout(() => {
      formStatus.className = 'form-status';
      formStatus.textContent = '';
    }, 6000);
  });
}


/* ---------- SKILL BAR ANIMATION ON SCROLL ---------- */
const skillBars = document.querySelectorAll('.skill-fill');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

skillBars.forEach(bar => {
  bar.style.animationPlayState = 'paused';
  skillObserver.observe(bar);
});


/* ---------- TYPING EFFECT ON HERO ---------- */
const titleLines = document.querySelectorAll('.line');
titleLines.forEach((line, i) => {
  line.style.opacity = '0';
  line.style.transform = 'translateY(20px)';
  setTimeout(() => {
    line.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    line.style.opacity = '1';
    line.style.transform = 'translateY(0)';
  }, 300 + i * 150);
});
