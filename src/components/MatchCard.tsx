import { useScoreCountUp } from '../hooks/useScoreCountUp';

type Skill = { name: string; pct: number; warn?: boolean };

const SKILLS: Skill[] = [
  { name: 'Design systems', pct: 96 },
  { name: 'Product strategy', pct: 88 },
  { name: 'User research', pct: 81 },
  { name: 'Motion / Prototyping', pct: 62, warn: true },
];

export default function MatchCard() {
  const scoreRef = useScoreCountUp(87);

  return (
    <div className="match-card">
      <header className="match-head">
        <div className="avatar">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
          </svg>
        </div>
        <div>
          <div className="match-title">AI Match Analysis</div>
          <div className="match-sub">Senior Product Designer · Careem</div>
        </div>
        <span className="badge badge-live">● live</span>
      </header>

      <div className="match-hero">
        <div className="score-ring">
          <svg viewBox="0 0 140 140" width="156" height="156">
            <circle cx="70" cy="70" r="60" stroke="#efeaff" strokeWidth="14" fill="none" />
            <circle
              cx="70"
              cy="70"
              r="60"
              stroke="url(#ring)"
              strokeWidth="14"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="377"
              strokeDashoffset="49"
              transform="rotate(-90 70 70)"
            />
            <defs>
              <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#6C3AED" />
                <stop offset="1" stopColor="#A855F7" />
              </linearGradient>
            </defs>
          </svg>
          <div className="score-value">
            <strong ref={scoreRef}>
              87<span>%</span>
            </strong>
            <span>Strong Match</span>
          </div>
        </div>

        <ul className="skill-list">
          {SKILLS.map((skill) => (
            <li key={skill.name}>
              <span className="skill-name">{skill.name}</span>
              <div className={`bar${skill.warn ? ' warn' : ''}`}>
                <i style={{ width: `${skill.pct}%` }} />
              </div>
              <span className={`skill-pct${skill.warn ? ' warn' : ''}`}>{skill.pct}%</span>
            </li>
          ))}
        </ul>
      </div>

      <footer className="match-foot">
        <div className="suggestion">
          <span className="tip">💡</span>
          <p>
            Add <b>Framer</b> and <b>After Effects</b> to close a 12% skill gap and jump to a 94%
            match.
          </p>
        </div>
      </footer>
    </div>
  );
}
