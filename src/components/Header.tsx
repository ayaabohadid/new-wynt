import { useState } from 'react';
import BrandLogo from './BrandLogo';

const NAV_LINKS = [
  { href: '#features', label: 'Features' },
  { href: '#how', label: 'How it works' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="nav" id="nav">
      <div className="container nav-inner">
        <a href="#" className="brand" aria-label="Wynt home">
          <BrandLogo />
          <span className="brand-name">
            Wynt<span className="brand-dot">.AI</span>
          </span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-cta">
          <a href="#" className="btn btn-ghost">
            Log in
          </a>
          <a href="#hero-cta" className="btn btn-primary">
            Get started free
          </a>
        </div>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className="mobile-menu" data-open={open ? 'true' : undefined} hidden={!open}>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <a href="#" className="btn btn-ghost btn-block" onClick={closeMenu}>
          Log in
        </a>
        <a href="#hero-cta" className="btn btn-primary btn-block" onClick={closeMenu}>
          Get started free
        </a>
      </div>
    </header>
  );
}
