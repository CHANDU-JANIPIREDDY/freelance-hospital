import { useEffect, useRef } from 'react';
import { useMultiReveal } from '../hooks/useScrollReveal';

const journeySteps = [
  {
    num: '01',
    title: 'DISCOVER',
    desc: 'Understand your health through advanced diagnostics.',
    cta: 'Learn more',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop',
    theme: 'blue',
    accent: '#1a6fb5',
    bg: '#f8fbfe',
    border: '#e2eaf4',
    badgeRing: 'rgba(26, 111, 181, 0.25)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.35-4.35" />
        <path d="M11 8.5c-.83 0-1.5.67-1.5 1.5 0 1.2 1.5 2.2 1.5 2.2s1.5-1 1.5-2.2c0-.83-.67-1.5-1.5-1.5z" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'PLAN',
    desc: 'Build a treatment plan around your needs.',
    cta: 'Learn more',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
    theme: 'teal',
    accent: '#0d9488',
    bg: '#f7fbf9',
    border: '#e0efe7',
    badgeRing: 'rgba(13, 148, 136, 0.25)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="4" width="14" height="17" rx="2" />
        <path d="M9 2h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" />
        <path d="M12 10v6M9 13h6" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'TREAT',
    desc: 'Receive expert care supported by advanced technology.',
    cta: 'Learn more',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=600&fit=crop',
    theme: 'indigo',
    accent: '#2563eb',
    bg: '#f6f9fd',
    border: '#e1ecf8',
    badgeRing: 'rgba(37, 99, 235, 0.25)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'RECOVER',
    desc: 'Continue your journey with personalized support.',
    cta: 'Learn more',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800&h=600&fit=crop',
    theme: 'purple',
    accent: '#7c3aed',
    bg: '#faf8fd',
    border: '#ece4f7',
    badgeRing: 'rgba(124, 58, 237, 0.25)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 11V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v5" />
        <path d="M12 8.5c-1.1 0-2 .9-2 2 0 1.5 2 3 2 3s2-1.5 2-3c0-1.1-.9-2-2-2z" fill="currentColor" stroke="none" />
        <path d="M6 14c-1.5 1-2 2.5-2 4a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3c0-1.5-.5-3-2-4" />
      </svg>
    ),
  },
];

export default function PatientJourney() {
  const ref = useMultiReveal();
  const trackRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const track = trackRef.current;
    if (!track) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          track.classList.add('journey-active');
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(track);
    return () => observer.disconnect();
  }, []);

  const handleCardClick = () => {
    document.querySelector('#appointment')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="journey" id="journey" aria-label="Patient Experience">
      <div className="container" ref={ref}>
        {/* Section Header */}
        <div className="journey-header reveal">
          <div className="journey-eyebrow">
            <span className="journey-eyebrow-line" />
            <span>PATIENT EXPERIENCE</span>
            <span className="journey-eyebrow-line" />
          </div>
          <h2 className="journey-title">
            Care That Moves With <span className="journey-title-highlight">You.</span>
          </h2>
          <p className="journey-desc">
            Your healthcare journey, thoughtfully guided from diagnosis through recovery.
          </p>

          {/* Step Pill Indicator */}
          <div className="journey-indicator" aria-hidden="true">
            <span className="journey-indicator-bar" />
            <span className="journey-indicator-dot" />
            <span className="journey-indicator-dot" />
            <span className="journey-indicator-dot" />
          </div>
        </div>

        {/* 4-Card Track with Continuous Flowing Journey Connector */}
        <div className="journey-track" ref={trackRef}>
          {/* Continuous Flowing Blue Journey Wave SVG */}
          <svg
            className="journey-wave-svg"
            viewBox="0 0 1200 120"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              className="journey-wave-path-bg"
              d="M-20,40 C60,40 80,75 150,75 C220,75 250,55 300,55 C350,55 380,75 450,75 C520,75 550,55 600,55 C650,55 680,75 750,75 C820,75 850,55 900,55 C950,55 980,75 1050,75 C1120,75 1160,45 1220,45"
            />
            <path
              className="journey-wave-path"
              d="M-20,40 C60,40 80,75 150,75 C220,75 250,55 300,55 C350,55 380,75 450,75 C520,75 550,55 600,55 C650,55 680,75 750,75 C820,75 850,55 900,55 C950,55 980,75 1050,75 C1120,75 1160,45 1220,45"
            />
          </svg>

          {/* Journey Cards Grid */}
          <div className="journey-cards-grid">
            {journeySteps.map((step, i) => (
              <div key={step.num} className="journey-card-container">
                <article
                  className={`journey-card journey-card-${step.theme} reveal reveal-delay-${i + 1}`}
                  style={{
                    backgroundColor: step.bg,
                    borderColor: step.border,
                  }}
                  onClick={handleCardClick}
                  tabIndex={0}
                  role="button"
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleCardClick(); }}
                >
                  {/* Top Image & Curved Wave Mask */}
                  <div className="journey-card-media">
                    <img
                      src={step.image}
                      alt={`${step.title} stage at VITALIS`}
                      className="journey-card-img"
                      loading="lazy"
                    />
                    {/* Floating Icon in Top Left */}
                    <div
                      className={`journey-floating-icon journey-floating-icon-${step.theme}`}
                      style={{ color: step.accent }}
                      aria-hidden="true"
                    >
                      {step.icon}
                    </div>
                  </div>

                  {/* Centered Number Badge on Boundary */}
                  <div className="journey-badge-wrap">
                    <div
                      className={`journey-badge journey-badge-${step.theme}`}
                      style={{
                        color: step.accent,
                        boxShadow: `0 0 0 4px ${step.badgeRing}, 0 4px 12px rgba(0,0,0,0.06)`,
                      }}
                    >
                      {step.num}
                    </div>
                  </div>

                  {/* Card Body Text */}
                  <div className="journey-card-body">
                    <h3 className="journey-card-title">{step.title}</h3>
                    <p className="journey-card-desc">{step.desc}</p>
                    <div
                      className="journey-card-cta"
                      style={{ color: step.accent }}
                    >
                      <span>{step.cta}</span>
                      <svg className="journey-cta-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </article>

                {/* Connector Arrow Node between cards (Desktop) */}
                {i < journeySteps.length - 1 && (
                  <div className="journey-node-arrow" aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="#1a6fb5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
