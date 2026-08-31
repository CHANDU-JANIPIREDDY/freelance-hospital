export default function Hero() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span /> VITALIS / Advanced Healthcare
          </div>
          <h1 className="hero-headline">
            <span className="line"><span>Care,</span></span>
            <span className="line"><span>Re<em>imagined.</em></span></span>
          </h1>
          <p className="hero-desc">
            Advanced medicine, exceptional expertise, and compassionate care — designed around you.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => scrollTo('#appointment')}>
              Book an Appointment
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button className="btn-secondary" onClick={() => scrollTo('#specialties')}>
              Explore Our Care
            </button>
          </div>
          <div className="hero-trust">
            <div className="hero-trust-item">
              <span className="hero-trust-num">24/7</span>
              <span className="hero-trust-label">Care</span>
            </div>
            <div className="hero-trust-item">
              <span className="hero-trust-num">150+</span>
              <span className="hero-trust-label">Specialists</span>
            </div>
            <div className="hero-trust-item">
              <span className="hero-trust-num">30+</span>
              <span className="hero-trust-label">Specialties</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <img
              className="hero-image"
              src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&h=900&fit=crop"
              alt="Modern hospital interior with medical professionals providing patient care"
              loading="eager"
            />
          </div>
          <div className="hero-float-card">
            <div className="hero-float-card-label">Specialist Care</div>
            <div className="hero-float-card-value">150+ Experts</div>
            <div className="hero-float-card-sub">Across 30+ specialties</div>
          </div>
        </div>
      </div>
    </section>
  );
}
