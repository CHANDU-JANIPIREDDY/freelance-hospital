import { useMultiReveal } from '../hooks/useScrollReveal';
import { specialties } from '../data/siteData';

const icons = {
  heart: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
  brain: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2a5 5 0 0 1 4.5 2.8A4 4 0 0 1 20 9a4 4 0 0 1-1.5 3.1A5 5 0 0 1 17 17a5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 .5-4.9A4 4 0 0 1 4 9a4 4 0 0 1 3.5-4.2A5 5 0 0 1 12 2z"/><path d="M12 2v20"/></svg>,
  bone: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18.6 3.4a2.4 2.4 0 0 1 3.4 3.4L12 16.8 7.2 12l11.4-8.6zM5.4 20.6a2.4 2.4 0 0 1-3.4-3.4L12 7.2l4.8 4.8L5.4 20.6z"/></svg>,
  oncology: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/></svg>,
  child: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>,
  women: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="8" r="5"/><path d="M12 13v8M9 18h6"/></svg>,
  stomach: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2C8 2 6 6 6 10c0 4 2 8 2 10h8c0-2 2-6 2-10 0-4-2-8-6-8z"/></svg>,
  skin: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/></svg>,
  emergency: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
};

export default function Specialties() {
  const ref = useMultiReveal();

  return (
    <section className="specialties" id="specialties">
      <div className="container" ref={ref}>
        <div className="specialties-header reveal">
          <div>
            <div className="section-label">Specialties / 01</div>
            <h2 className="section-title">Expert Care, Every Step<br />of the Way.</h2>
          </div>
          <a href="#specialties" className="btn-secondary" style={{ alignSelf: 'flex-end' }}>
            View All Specialties
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
        <div className="specialties-grid">
          {specialties.map((s, i) => (
            <div className={`specialty-card reveal reveal-delay-${(i % 3) + 1}`} key={s.id} role="article">
              <div className="specialty-media" style={{ backgroundImage: `url(${s.image})` }} />
              <div className="specialty-inner">
                <div className="specialty-icon">{icons[s.icon]}</div>
                <h3 className="specialty-name">{s.name}</h3>
                <p className="specialty-desc">{s.desc}</p>
                <div className="specialty-arrow">
                  <svg width="20" height="20" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
