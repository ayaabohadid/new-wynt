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
  mobileMenu.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      mobileMenu.removeAttribute('data-open');
      mobileMenu.hidden = true;
    });
  });
}

// Scroll reveal
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
);
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Score count-up animation (hero match score)
const scoreEl = document.querySelector('.score-value strong');
if (scoreEl) {
  const target = 87;
  let current = 0;
  const run = () => {
    const step = () => {
      current = Math.min(target, current + Math.ceil((target - current) / 10) + 1);
      scoreEl.childNodes[0].nodeValue = String(current);
      if (current < target) requestAnimationFrame(step);
    };
    step();
  };
  const scoreObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          run();
          scoreObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 },
  );
  scoreObserver.observe(scoreEl);
}

// Subtle parallax on hero cards
const matchCard = document.querySelector('.match-card');
const pillCard = document.querySelector('.pill-card');
const heroVisual = document.querySelector('.hero-visual');
if (heroVisual && matchCard && pillCard && !matchMedia('(pointer: coarse)').matches) {
  heroVisual.addEventListener('mousemove', (e) => {
    const rect = heroVisual.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    matchCard.style.transform = `rotate(${-1 + x * 1}deg) translate(${x * 8}px, ${y * 8}px)`;
    pillCard.style.transform = `translate(${x * -10}px, ${y * -6}px)`;
  });
  heroVisual.addEventListener('mouseleave', () => {
    matchCard.style.transform = '';
    pillCard.style.transform = '';
  });
}
