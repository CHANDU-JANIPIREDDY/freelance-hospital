import { useMultiReveal } from '../hooks/useScrollReveal';

const features = [
  { label: '24/7', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg> },
  { label: 'Emergency Department', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 12h4l3-9 4 18 3-9h4"/></svg> },
  { label: 'Ambulance Support', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="1" y="6" width="15" height="10" rx="2"/><path d="M16 10h4l3 3v3h-7V10z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg> },
  { label: 'Immediate Care', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg> },
];

export default function EmergencyCare() {
  const ref = useMultiReveal();

  return (
    <section className="emergency" id="emergency">
      <div className="container emergency-inner" ref={ref}>
        <div className="emergency-content reveal">
          <div className="section-label">Emergency</div>
          <h2 className="section-title">Here When You<br />Need Us.</h2>
          <p className="section-desc">
            24/7 emergency services supported by experienced medical teams and advanced facilities. Your safety is our priority.
          </p>
          <div className="emergency-features">
            {features.map((f, i) => (
              <div className={`emergency-feature reveal reveal-delay-${i + 1}`} key={f.label}>
                <div className="emergency-feature-icon">{f.icon}</div>
                <span className="emergency-feature-text">{f.label}</span>
              </div>
            ))}
          </div>
          <a href="#contact" className="btn-primary" onClick={(e) => {
            e.preventDefault();
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Contact Emergency Services
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
        <div className="emergency-visual reveal reveal-delay-2">
          <div className="emergency-circle">
            <div className="emergency-circle-inner">
              <span className="emergency-circle-num">24/7</span>
              <span className="emergency-circle-label">Emergency Care</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
