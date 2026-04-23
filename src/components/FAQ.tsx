type QA = { q: string; a: string; defaultOpen?: boolean };

const FAQS: QA[] = [
  {
    q: 'How does the 85% match accuracy work?',
    a: "Wynt's AI reads both your CV and each job description, then scores the overlap across skills, experience level, industry, and keywords. 85%+ means you rank in the top decile of likely applicants.",
    defaultOpen: true,
  },
  {
    q: 'What are tokens?',
    a: 'Tokens power AI actions — analyzing a CV, generating a tailored rewrite, or running an interview rehearsal. The free plan includes 65 tokens; Pro is unlimited.',
  },
  {
    q: 'Which job boards do you cover?',
    a: "50+ boards including LinkedIn, Indeed, Bayt, Wuzzuf, Naukri, Wellfound, Y Combinator's Work at a Startup, and more — with strong MENA coverage.",
  },
  {
    q: 'Is my data private?',
    a: 'Your CV is encrypted at rest, never sold, and never used to train third-party models. You can delete your account and all data anytime.',
  },
  {
    q: 'Does it support Arabic?',
    a: 'Yes — Wynt fully supports Arabic CVs, job descriptions, and interviews, with RTL-aware analysis.',
  },
  {
    q: 'Can I cancel anytime?',
    a: "Yes. Cancel your Pro subscription in one click. You'll keep access until the end of your billing period.",
  },
];

export default function FAQ() {
  return (
    <section className="faq" id="faq">
      <div className="container faq-grid">
        <div className="section-head-left reveal">
          <span className="eyebrow eyebrow-muted">FAQ</span>
          <h2 className="headline">Questions, answered.</h2>
          <p className="sub">
            Still curious? <a href="mailto:support@ayvo.ai">Email the team</a>.
          </p>
        </div>

        <div className="faq-list">
          {FAQS.map((item) => (
            <details key={item.q} className="reveal" open={item.defaultOpen}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
