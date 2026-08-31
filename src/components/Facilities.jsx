import { useMultiReveal } from '../hooks/useScrollReveal';
import { facilities } from '../data/siteData';
import { useState } from 'react';

export default function Facilities() {
  const ref = useMultiReveal();
  const [lightbox, setLightbox] = useState(null);

  return (
    <section className="facilities" id="facilities">
      <div className="container" ref={ref}>
        <div className="facilities-header reveal">
          <div className="section-label">The VITALIS Experience / 04</div>
          <h2 className="section-title">Designed for Healing.</h2>
        </div>
        <div className="facilities-gallery">
          {facilities.map((f, i) => (
            <div
              className={`facility-item reveal reveal-delay-${(i % 4) + 1}`}
              key={f.id}
              onClick={() => setLightbox(f)}
              role="button"
              tabIndex={0}
              aria-label={`View ${f.name}`}
              onKeyDown={(e) => e.key === 'Enter' && setLightbox(f)}
            >
              <img className="facility-img" src={f.image} alt={f.name} loading="lazy" />
              <div className="facility-overlay">
                <span className="facility-label">{f.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="modal-overlay open"
          onClick={(e) => e.target === e.currentTarget && setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.name}
        >
          <div style={{ maxWidth: 900, width: '100%', position: 'relative' }}>
            <button
              className="modal-close"
              onClick={() => setLightbox(null)}
              aria-label="Close"
              style={{ position: 'absolute', top: -50, right: 0, background: 'rgba(255,255,255,.9)' }}
            >
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </button>
            <img
              src={lightbox.image}
              alt={lightbox.name}
              style={{ width: '100%', borderRadius: 16, maxHeight: '80vh', objectFit: 'cover' }}
            />
            <p style={{ color: '#fff', textAlign: 'center', marginTop: 16, fontSize: '1rem', fontWeight: 600 }}>{lightbox.name}</p>
          </div>
        </div>
      )}
    </section>
  );
}
