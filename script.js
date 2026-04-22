// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle
const toggle = document.querySelector('.nav-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
if (toggle && mobileMenu) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    if (!open) {
      mobileMenu.hidden = false;
      mobileMenu.setAttribute('data-open', 'true');
    } else {
      mobileMenu.removeAttribute('data-open');
      mobileMenu.hidden = true;
    }
  });
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      mobileMenu.removeAttribute('data-open');
      mobileMenu.hidden = true;
    });
  });
}

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// File drop preview: reflect filename when selected
const fileInput = document.getElementById('cv-file');
const fileLabel = document.querySelector('.file-drop span');
if (fileInput && fileLabel) {
  const defaultText = fileLabel.innerHTML;
  fileInput.addEventListener('change', () => {
    const file = fileInput.files && fileInput.files[0];
    fileLabel.innerHTML = file ? `Selected: <u>${file.name}</u>` : defaultText;
  });

  const drop = fileInput.closest('.file-drop');
  if (drop) {
    ['dragenter', 'dragover'].forEach(ev => drop.addEventListener(ev, e => {
      e.preventDefault(); drop.style.background = '#f5f5ff';
    }));
    ['dragleave', 'drop'].forEach(ev => drop.addEventListener(ev, e => {
      e.preventDefault(); drop.style.background = '';
    }));
    drop.addEventListener('drop', e => {
      const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
      if (f) {
        fileInput.files = e.dataTransfer.files;
        fileInput.dispatchEvent(new Event('change'));
      }
    });
  }
}

// Subtle parallax on hero cards
const cardScore = document.querySelector('.card-score');
const cardMatch = document.querySelector('.card-match');
const heroVisual = document.querySelector('.hero-visual');
if (heroVisual && cardScore && cardMatch && !matchMedia('(pointer: coarse)').matches) {
  heroVisual.addEventListener('mousemove', (e) => {
    const rect = heroVisual.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    cardScore.style.transform = `rotate(${-1.2 + x * 1.2}deg) translate(${x * 8}px, ${y * 8}px)`;
    cardMatch.style.transform = `rotate(${2.2 + x * -1.2}deg) translate(${x * -10}px, ${y * -6}px)`;
  });
  heroVisual.addEventListener('mouseleave', () => {
    cardScore.style.transform = '';
    cardMatch.style.transform = '';
  });
}
