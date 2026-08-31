import { useMultiReveal } from '../hooks/useScrollReveal';

const serviceCards = [
  {
    id: '24-7',
    title: '24/7',
    desc: 'Always available, whenever you need us.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    id: 'emergency-dept',
    title: 'Emergency Department',
    desc: 'Advanced emergency care with expert team.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 4v16M4 12h16" />
        <rect x="3" y="3" width="18" height="18" rx="4" />
      </svg>
    ),
  },
  {
    id: 'ambulance-support',
    title: 'Ambulance Support',
    desc: 'Fast ambulance service with equipped vehicles.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 17h4V5H2v12h3m5 0h4m-4 0a2 2 0 1 0 4 0m-9 0a2 2 0 1 0 4 0m9 0h2l3-4V9h-5v8z" />
        <path d="M6 9h4" />
      </svg>
    ),
  },
  {
    id: 'immediate-care',
    title: 'Immediate Care',
    desc: 'Immediate assessment and critical care.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
];

const floatingInfoCols = [
  {
    id: 'safety',
    titleLine1: 'Your Safety',
    titleLine2: 'Our Priority',
    desc: 'Advanced facilities and infection-safe environment.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    id: 'team',
    titleLine1: 'Expert',
    titleLine2: 'Medical Team',
    desc: 'Highly trained professionals available round the clock.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: 'compassion',
    titleLine1: 'Compassionate',
    titleLine2: 'Care',
    desc: 'We treat every patient with empathy and respect.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

const statsData = [
  {
    value: '24/7',
    label: 'Emergency Support',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    value: '10+',
    label: 'Emergency Specialists',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    value: '100%',
    label: 'Commitment',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    value: '5 mins',
    label: 'Avg. Response Time',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
];

export default function EmergencyCare() {
  const ref = useMultiReveal();

  const handleContactClick = (e) => {
    e.preventDefault();
    const target = document.querySelector('#contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="emergency" id="emergency" aria-label="Emergency Care Services">
      <div className="emergency-wrapper" ref={ref}>
        <div className="container emergency-container">
          <div className="emergency-main-grid">
            {/* Left Content Area */}
            <div className="emergency-content reveal">
              <div className="emergency-eyebrow">
                <span className="emergency-eyebrow-line" />
                <span>EMERGENCY CARE</span>
              </div>
              <h2 className="emergency-title">
                Here When You<br />
                Need <span className="emergency-title-highlight">Us.</span>
              </h2>
              <p className="emergency-desc">
                24/7 emergency services supported by experienced medical teams and advanced facilities. Your safety is our priority.
              </p>

              {/* 2x2 Service Cards Grid */}
              <div className="emergency-services-grid">
                {serviceCards.map((card, i) => (
                  <div
                    className={`emergency-service-card reveal reveal-delay-${i + 1}`}
                    key={card.id}
                  >
                    <div className="emergency-service-icon" aria-hidden="true">
                      {card.icon}
                    </div>
                    <div className="emergency-service-text">
                      <h3 className="emergency-service-title">{card.title}</h3>
                      <p className="emergency-service-desc">{card.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency CTA Button */}
              <div className="emergency-actions reveal reveal-delay-3">
                <a
                  href="#contact"
                  className="emergency-cta-btn"
                  onClick={handleContactClick}
                  role="button"
                >
                  <span className="emergency-phone-circle" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <span className="emergency-cta-text">CONTACT EMERGENCY SERVICES</span>
                  <svg className="emergency-cta-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Visual Area with Curved Boundary */}
            <div className="emergency-visual-wrap reveal reveal-delay-2">
              <div className="emergency-curved-frame">
                <img
                  src="https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=1600&h=1000&fit=crop"
                  alt="Modern hospital emergency entrance with illuminated ambulance at twilight"
                  className="emergency-hospital-img"
                  loading="lazy"
                />
                <div className="emergency-image-overlay" aria-hidden="true" />
              </div>

              {/* Floating Emergency Information Panel */}
              <div className="emergency-floating-panel reveal reveal-delay-3" aria-label="Emergency Care Highlights">
                {/* 24/7 Badge Column */}
                <div className="emergency-badge-column">
                  <div className="emergency-badge-glow">
                    <div className="emergency-badge-inner">
                      <span className="emergency-badge-num">24/7</span>
                      <span className="emergency-badge-label">EMERGENCY CARE</span>
                    </div>
                  </div>
                </div>

                {/* 3 Information Columns */}
                <div className="emergency-info-columns">
                  {floatingInfoCols.map((col) => (
                    <div className="emergency-info-col" key={col.id}>
                      <div className="emergency-info-icon" aria-hidden="true">
                        {col.icon}
                      </div>
                      <h4 className="emergency-info-title">
                        {col.titleLine1}<br />{col.titleLine2}
                      </h4>
                      <p className="emergency-info-desc">{col.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Statistics Bar */}
          <div className="emergency-stats-bar reveal reveal-delay-3" aria-label="Emergency Statistics">
            {statsData.map((stat, i) => (
              <div className="emergency-stat-item" key={i}>
                <div className="emergency-stat-icon" aria-hidden="true">
                  {stat.icon}
                </div>
                <div className="emergency-stat-content">
                  <div className="emergency-stat-val">{stat.value}</div>
                  <div className="emergency-stat-lbl">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
