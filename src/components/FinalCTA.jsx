import { useMultiReveal } from '../hooks/useScrollReveal';

export default function FinalCTA() {
  const ref = useMultiReveal();

  return (
    <section className="final-cta" id="final-cta">
      <div className="final-cta-decor" />
      <div className="final-cta-decor" />
      <div className="container" ref={ref} style={{ position: 'relative', zIndex: 2 }}>
        <div className="reveal">
          <h2 className="final-cta-title">Your Health Deserves Better.</h2>
          <p className="final-cta-desc">
            Take the first step toward expert, compassionate care.
          </p>
          <div className="final-cta-actions">
            <a href="#appointment" className="btn-primary" onClick={(e) => {
              e.preventDefault();
              document.querySelector('#appointment')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Book an Appointment
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="#contact" className="btn-secondary" onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Contact VITALIS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
