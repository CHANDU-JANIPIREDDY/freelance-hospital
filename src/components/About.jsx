import { useMultiReveal } from '../hooks/useScrollReveal';

const values = [
  'Evidence-based medicine guided by the latest research',
  'Patient-first philosophy in every decision',
  'Seamless integration of technology and compassion',
  'Transparent communication and ethical practice',
];

const stats = [
  { num: '25+', label: 'Years of Excellence' },
  { num: '150+', label: 'Specialists' },
  { num: '30+', label: 'Specialties' },
  { num: '24/7', label: 'Care' },
];

export default function About() {
  const ref = useMultiReveal();

  return (
    <section className="about" id="about">
      <div className="container about-inner" ref={ref}>
        <div className="about-img-wrap reveal">
          <img
            className="about-img"
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=700&fit=crop"
            alt="VITALIS hospital exterior with modern architecture"
            loading="lazy"
          />
          <div className="about-stats">
            {stats.map(s => (
              <div key={s.label}>
                <div className="about-stat-num">{s.num}</div>
                <div className="about-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="about-text reveal reveal-delay-1">
          <div className="section-label">About VITALIS</div>
          <h2 className="section-title">Medicine With a<br />Human Purpose.</h2>
          <p className="section-desc">
            For over two decades, VITALIS has been at the forefront of healthcare excellence — combining world-class medical expertise with genuine compassion to deliver care that truly makes a difference.
          </p>
          <div className="about-values">
            {values.map(v => (
              <div className="about-value" key={v}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l4 4 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                {v}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
