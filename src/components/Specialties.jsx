import { useMultiReveal } from '../hooks/useScrollReveal';
import { specialties } from '../data/siteData';

const icons = {
  heart: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
      <path d="M7 12h2l1.5 -3l2 6l1.5 -3h3" />
    </svg>
  ),
  brain: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v20M8 5a3.5 3.5 0 0 0-4 3.5c0 1.2.6 2.3 1.5 3a4 4 0 0 0 0 6A3.5 3.5 0 0 0 9 21M16 5a3.5 3.5 0 0 1 4 3.5c0 1.2-.6 2.3-1.5 3a4 4 0 0 1 0 6A3.5 3.5 0 0 1 15 21" />
      <path d="M8 9a2 2 0 0 1 4-1M8 15a2 2 0 0 0 4 1M16 9a2 2 0 0 0-4-1M16 15a2 2 0 0 1-4 1" />
    </svg>
  ),
  bone: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 4a2 2 0 1 0-4 0v16a2 2 0 1 0 4 0" />
      <path d="M10 4a2 2 0 1 0-4 0v16a2 2 0 1 0 4 0" />
      <ellipse cx="12" cy="12" rx="4" ry="2" />
    </svg>
  ),
  oncology: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3c-3 0-5 2.5-5 5.5c0 2.5 2 4.5 5 7.5c3-3 5-5 5-7.5c0-3-2-5.5-5-5.5z" />
      <path d="M9 14l-4 7M15 14l4 7" />
    </svg>
  ),
  child: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <circle cx="9" cy="10" r="1.2" fill="currentColor" />
      <circle cx="15" cy="10" r="1.2" fill="currentColor" />
      <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
      <path d="M12 3a2 2 0 0 1 2 2" />
    </svg>
  ),
  women: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="9" r="6" />
      <path d="M12 15v7M9 19h6" />
    </svg>
  ),
  stomach: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v3c0 3-1 4-3 5c-3 1.5-4 4.5-3 7.5c1 3 3.5 4.5 6.5 4.5c4.5 0 7.5-3 7.5-8c0-5-3.5-9-8-12z" />
    </svg>
  ),
  skin: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2.5 2.5M16.5 16.5L19 19M19 5l-2.5 2.5M7.5 16.5L5 19" />
    </svg>
  ),
  emergency: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4a6 6 0 0 0-6 6v4h12v-4a6 6 0 0 0-6-6zM4 18h16M12 2v2M4.93 4.93l1.41 1.41M19.07 4.93l-1.41 1.41M2 11h2M20 11h2" />
    </svg>
  ),
};

const trustItems = [
  {
    id: 1,
    title: '24/7 Care',
    desc: 'Round-the-clock medical support',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    id: 2,
    title: '150+ Specialists',
    desc: 'Highly experienced medical professionals',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: 3,
    title: '30+ Specialties',
    desc: 'Comprehensive care under one roof',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <path d="M9 22v-4h6v4M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01M11 6h2M12 5v2" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Patient First',
    desc: 'Compassionate care that puts you first',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        <path d="M12 11h.01" />
      </svg>
    ),
  },
];

export default function Specialties() {
  const ref = useMultiReveal();

  const handleLearnMore = () => {
    const el = document.querySelector('#appointment');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="specialties" id="specialties" aria-label="Medical Specialties">
      <div className="container" ref={ref}>
        {/* Section Header */}
        <div className="specialties-header reveal">
          <div className="specialties-header-left">
            <div className="section-label">SPECIALTIES / 01</div>
            <h2 className="section-title">
              Expert Care,<br />Every Step of the Way.
            </h2>
            <p className="specialties-subtitle">
              Advanced medicine. Specialized expertise.<br />
              Compassionate care for you and your loved ones.
            </p>
          </div>
          <div className="specialties-header-right">
            <a href="#appointment" className="specialties-all-btn" onClick={() => handleLearnMore('all')}>
              <span>VIEW ALL SPECIALTIES</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* 3x3 Specialties Grid */}
        <div className="specialties-grid">
          {specialties.map((s, i) => (
            <article
              className={`specialty-card reveal reveal-delay-${(i % 3) + 1}`}
              key={s.id}
              onClick={() => handleLearnMore(s.name)}
              tabIndex={0}
              role="button"
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleLearnMore(s.name); }}
            >
              <div className="specialty-card-body">
                {/* Top: Icon + Number */}
                <div className="specialty-card-top">
                  <div className="specialty-icon-bubble" aria-hidden="true">
                    {icons[s.icon]}
                  </div>
                  <span className="specialty-num-badge">{s.num || `0${s.id}`}</span>
                </div>

                {/* Text Content */}
                <h3 className="specialty-card-title">{s.name}</h3>
                <p className="specialty-card-desc">{s.desc}</p>

                {/* Interaction CTA */}
                <div className="specialty-learn-more">
                  <span>LEARN MORE</span>
                  <svg className="specialty-arrow-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Integrated Visual on Right with Organic Curve */}
              <div className="specialty-card-media-wrapper">
                <img
                  className="specialty-card-img"
                  src={s.image}
                  alt={`${s.name} specialized care at VITALIS`}
                  loading="lazy"
                />
                <div className="specialty-card-media-overlay" aria-hidden="true" />
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Trust Information Bar */}
        <div className="specialties-trust-bar reveal reveal-delay-2" aria-label="Hospital highlights">
          {trustItems.map((item) => (
            <div className="specialties-trust-item" key={item.id}>
              <div className="specialties-trust-icon" aria-hidden="true">
                {item.icon}
              </div>
              <div className="specialties-trust-text">
                <h4 className="specialties-trust-title">{item.title}</h4>
                <p className="specialties-trust-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
