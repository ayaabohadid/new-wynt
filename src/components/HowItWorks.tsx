import type { ReactNode } from 'react';

type Step = { num: string; title: string; body: string; meta: ReactNode };

const STEPS: Step[] = [
  {
    num: '01',
    title: 'Upload your CV',
    body: 'PDF, DOCX, or LinkedIn URL. Wynt parses your skills, timelines, and impact instantly.',
    meta: (
      <>
        <span className="kbd">⌘</span>+<span className="kbd">U</span> to upload
      </>
    ),
  },
  {
    num: '02',
    title: 'Tell us your goal',
    body: 'Target roles, locations, salary range. Wynt benchmarks you against thousands of recent hires.',
    meta: 'Supports English & Arabic',
  },
  {
    num: '03',
    title: 'Apply with confidence',
    body: "Get a tailored CV, cover letter, and a shortlist where you're a top-10% fit. Apply with one click.",
    meta: 'One-click applications',
  },
];

export default function HowItWorks() {
  return (
    <section className="how" id="how">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow eyebrow-muted">How it works</span>
          <h2 className="headline">From CV to offer, in three steps.</h2>
          <p className="sub">
            Most candidates run the full flow in under 10 minutes — then let Wynt work in the
            background.
          </p>
        </div>

        <ol className="steps">
          {STEPS.map((step) => (
            <li key={step.num} className="step reveal">
              <span className="step-num">{step.num}</span>
              <div className="step-body">
                <h3>{step.title}</h3>
                <p>{step.body}</p>
                <div className="step-meta">{step.meta}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
