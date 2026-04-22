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

// File drop: reflect filename + drag/drop
const fileInput = document.getElementById('cv-file');
const fileText = document.querySelector('.file-text');
if (fileInput && fileText) {
  const defaultHTML = fileText.innerHTML;
  fileInput.addEventListener('change', () => {
    const file = fileInput.files && fileInput.files[0];
    if (file) {
      const kb = Math.round(file.size / 1024);
      fileText.innerHTML = `<strong>${file.name}</strong><span>${kb.toLocaleString()} KB · ready to submit</span>`;
    } else {
      fileText.innerHTML = defaultHTML;
    }
  });

  const drop = fileInput.closest('.file-drop');
  if (drop) {
    ['dragenter', 'dragover'].forEach(ev => drop.addEventListener(ev, e => {
      e.preventDefault(); drop.style.background = '#efefff'; drop.style.borderColor = '#6366f1';
    }));
    ['dragleave', 'drop'].forEach(ev => drop.addEventListener(ev, e => {
      e.preventDefault(); drop.style.background = ''; drop.style.borderColor = '';
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

// Submission flow (client-side simulation)
window.__wyntSubmit = function (event) {
  event.preventDefault();
  const status = document.getElementById('submit-status');
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const file = fileInput && fileInput.files && fileInput.files[0];
  if (!file) {
    status.textContent = 'Please attach your resume to continue.';
    status.className = 'submit-status err';
    return false;
  }
  status.textContent = 'Uploading and analyzing with AI…';
  status.className = 'submit-status';
  setTimeout(() => {
    status.innerHTML = `Thanks, ${name.split(' ')[0] || 'there'}! Your AI review is on its way to <b>${email}</b>.`;
    status.className = 'submit-status ok';
  }, 1400);
  return false;
};
