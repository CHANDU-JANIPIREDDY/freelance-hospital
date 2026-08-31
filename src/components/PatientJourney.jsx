import { useEffect, useRef } from 'react';
import { useMultiReveal } from '../hooks/useScrollReveal';

const steps = [
  { num: '01', title: 'Discover', desc: 'Understand your health through advanced diagnostics.' },
  { num: '02', title: 'Plan', desc: 'Build a treatment plan around your needs.' },
  { num: '03', title: 'Treat', desc: 'Receive expert care supported by advanced technology.' },
  { num: '04', title: 'Recover', desc: 'Continue your journey with personalized support.' },
];

export default function PatientJourney() {
  const ref = useMultiReveal();
  const lineRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const line = lineRef.current;
    if (!line) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          line.style.width = '100%';
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(line.parentElement);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="journey" id="journey">
      <div className="container" ref={ref}>
        <div className="journey-header reveal">
          <div className="section-label" style={{ justifyContent: 'center' }}>Patient Experience</div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Care That Moves With You.</h2>
          <p className="section-desc" style={{ textAlign: 'center' }}>
            Your healthcare journey, thoughtfully guided from diagnosis through recovery.
          </p>
        </div>
        <div className="journey-track">
          <div className="journey-line">
            <div className="journey-line-fill" ref={lineRef} />
          </div>
          <div className="journey-steps">
            {steps.map((step, i) => (
              <div className={`journey-step active reveal reveal-delay-${i + 1}`} key={step.num}>
                <div className="journey-step-num">{step.num}</div>
                <div>
                  <h3 className="journey-step-title">{step.title}</h3>
                  <p className="journey-step-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
