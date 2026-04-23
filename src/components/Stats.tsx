type Stat = { value: string; suffix: string; label: string };

const STATS: Stat[] = [
  { value: '50', suffix: '+', label: 'Job boards aggregated' },
  { value: '85', suffix: '%', label: 'Avg match accuracy' },
  { value: '10', suffix: '×', label: 'Faster applications' },
  { value: '24', suffix: '/7', label: 'AI career coach' },
];

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats-grid">
        {STATS.map((stat) => (
          <div key={stat.label} className="stat reveal">
            <strong>
              {stat.value}
              <span>{stat.suffix}</span>
            </strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
