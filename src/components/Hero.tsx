import { useHeroParallax } from '../hooks/useHeroParallax';
import MatchCard from './MatchCard';

export default function Hero() {
  const { visualRef, matchCardRef, pillCardRef } = useHeroParallax();

  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-copy reveal">
          <span className="eyebrow">
            <span className="dot"></span> AI-Powered Career Intelligence · MENA
          </span>
          <h1 className="display">
            Your <span className="grad-text">AI-powered</span>
            <br />
            career hub.
          </h1>
          <p className="lede">
            Wynt matches your CV to real jobs across 50+ boards, finds your skill gaps, prepares you
            for interviews, and tracks every application — so you land offers 10× faster.
          </p>

          <div className="hero-cta" id="hero-cta">
            <a href="#" className="btn btn-primary btn-lg">
              Get started free
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="#how" className="btn btn-ghost btn-lg">
              See how it works
            </a>
          </div>

          <p className="hero-hint">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Free tier · 65 tokens included · No credit card
          </p>
        </div>

        <div className="hero-visual reveal" ref={visualRef}>
          <div ref={matchCardRef}>
            <MatchCard />
          </div>

          <div className="floaty pill-card" ref={pillCardRef}>
            <span className="pill-dot"></span>
            <div>
              <div className="pill-title">New match · 2m ago</div>
              <div className="pill-sub">Linear · Remote · $140k–$180k</div>
            </div>
            <span className="pill-score">92</span>
          </div>
        </div>
      </div>
    </section>
  );
}
