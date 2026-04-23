import type { ReactNode } from 'react';

type Feature = {
  title: string;
  body: string;
  icon: ReactNode;
  featured?: boolean;
  points?: string[];
};

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

const FEATURES: Feature[] = [
  {
    title: 'AI Job Matching',
    body:
      'We scan 50+ job boards and surface only the roles where your CV scores 80%+. No noise, no mass applications.',
    featured: true,
    points: [
      'Real-time matching across MENA & global boards',
      'Salary, visa, and remote filters built in',
      'One-click application with tailored CV',
    ],
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: 'CV Analysis & Scoring',
    body:
      'Instant ATS score, line-by-line feedback, and AI rewrites that keep your voice but get you past filters.',
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="9" y1="15" x2="15" y2="15" />
      </svg>
    ),
  },
  {
    title: 'Interview Preparation',
    body:
      "Rehearse with an AI recruiter trained on your target company's style. Get honest scorecards and playbooks.",
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'LinkedIn Profile Analysis',
    body:
      'Optimize your headline, about, and experience sections against what recruiters actually search for.',
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M8 11v6" />
        <path d="M8 7h.01" />
        <path d="M12 17v-6" />
        <path d="M12 17v-4a3 3 0 0 1 6 0v4" />
      </svg>
    ),
  },
  {
    title: 'Smart Job Search',
    body:
      'Natural-language search: "Remote senior PM, $140k+, hiring now." Wynt understands and delivers.',
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    title: 'Salary Negotiation AI',
    body:
      'Benchmarks from real offers in your market, plus scripts for the conversations that add $10–30k to your comp.',
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: 'Career Coaching AI',
    body:
      '24/7 coach that answers: "Should I take this offer?" "How do I pivot to product?" — with tailored advice.',
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow eyebrow-muted">Every career tool, in one place</span>
          <h2 className="headline">One platform. Every move, smarter.</h2>
          <p className="sub">
            From the moment you upload your CV to the day you accept the offer — Wynt's AI is with
            you at every step.
          </p>
        </div>

        <div className="feature-grid">
          {FEATURES.map((feature) => (
            <article
              key={feature.title}
              className={`feature reveal${feature.featured ? ' feature-lg' : ''}`}
            >
              <div className={`feature-icon${feature.featured ? ' primary' : ''}`}>
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
              {feature.points && (
                <ul className="feature-points">
                  {feature.points.map((point) => (
                    <li key={point}>
                      <span className="check">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
