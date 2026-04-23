type Plan = {
  name: string;
  amount: string;
  per?: string;
  sub: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  ctaVariant: 'primary' | 'ghost';
  featured?: boolean;
};

const PLANS: Plan[] = [
  {
    name: 'Free',
    amount: '$0',
    per: '/month',
    sub: 'Everything you need to get started.',
    features: [
      '65 AI tokens included',
      'CV analysis & scoring',
      'Smart job search',
      '10 AI matches / day',
    ],
    ctaLabel: 'Get started',
    ctaHref: '#',
    ctaVariant: 'ghost',
  },
  {
    name: 'Pro',
    amount: '$19',
    per: '/month',
    sub: 'For serious job seekers.',
    features: [
      'Unlimited AI tokens',
      'Unlimited matches & rewrites',
      'Interview coach & mock calls',
      'Salary negotiation AI',
      'Priority support',
    ],
    ctaLabel: 'Start Pro · 7 days free',
    ctaHref: '#',
    ctaVariant: 'primary',
    featured: true,
  },
  {
    name: 'Teams',
    amount: 'Custom',
    sub: 'For universities & bootcamps.',
    features: [
      'Unlimited seats',
      'Admin dashboard & analytics',
      'Custom branding',
      'SSO & dedicated support',
    ],
    ctaLabel: 'Talk to sales',
    ctaHref: 'mailto:support@ayvo.ai',
    ctaVariant: 'ghost',
  },
];

export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow eyebrow-muted">Simple pricing</span>
          <h2 className="headline">Start free. Upgrade when you're winning.</h2>
        </div>

        <div className="pricing-grid">
          {PLANS.map((plan) => (
            <article
              key={plan.name}
              className={`plan reveal${plan.featured ? ' plan-featured' : ''}`}
            >
              {plan.featured && <span className="plan-tag">Most popular</span>}
              <header>
                <h3>{plan.name}</h3>
                <div className="price">
                  <span className="amount">{plan.amount}</span>
                  {plan.per && <span className="per">{plan.per}</span>}
                </div>
                <p className="plan-sub">{plan.sub}</p>
              </header>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <span className="check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={plan.ctaHref}
                className={`btn btn-${plan.ctaVariant} btn-block`}
              >
                {plan.ctaLabel}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
