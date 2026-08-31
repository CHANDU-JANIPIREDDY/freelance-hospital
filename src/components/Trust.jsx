import { useMultiReveal } from '../hooks/useScrollReveal';

const highlights = [
  {
    title: 'Advanced Medicine',
    desc: 'Modern technology and evidence-led care.',
    image: 'https://images.unsplash.com/photo-1766299892683-d50398e31823?w=800&h=1000&fit=crop',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
      </svg>
    ),
  },
  {
    title: 'Expert Specialists',
    desc: 'Experienced professionals across every major specialty.',
    image: 'https://images.unsplash.com/photo-1581056771392-8a90ddb76831?w=800&h=1000&fit=crop',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    title: 'Human-Centered Care',
    desc: 'Personalized attention at every step.',
    image: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=800&h=1000&fit=crop',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
  },
];

export default function Trust() {
  const ref = useMultiReveal();

  return (
    <section className="trust" id="trust">
      <div className="container" ref={ref}>
        <div className="trust-header reveal">
          <div className="section-label" style={{ justifyContent: 'center' }}>Why VITALIS</div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Expertise You Can Trust.</h2>
          <p className="section-desc" style={{ textAlign: 'center' }}>
            From advanced diagnostics to compassionate treatment, every part of the VITALIS experience is designed around better outcomes and better patient care.
          </p>
        </div>
        <div className="trust-grid">
          {highlights.map((item, i) => (
            <div className={`trust-card reveal reveal-delay-${i + 1}`} key={item.title}>
              <div className="trust-card-media" style={{ backgroundImage: `url(${item.image})` }} />
              <div className="trust-card-content">
                <div className="trust-card-icon">{item.icon}</div>
                <h3 className="trust-card-title">{item.title}</h3>
                <p className="trust-card-text">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
