import { useState, useEffect, useCallback } from 'react';
import { useMultiReveal } from '../hooks/useScrollReveal';
import { testimonials } from '../data/siteData';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const ref = useMultiReveal();

  const next = useCallback(() => setCurrent(p => (p + 1) % testimonials.length), []);
  const prev = useCallback(() => setCurrent(p => (p - 1 + testimonials.length) % testimonials.length), []);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="testimonials" id="testimonials">
      <div className="container" ref={ref}>
        <div className="testimonials-header reveal">
          <div className="section-label" style={{ justifyContent: 'center' }}>Patient Experiences / 05</div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Care People Remember.</h2>
        </div>
        <div className="testimonials-carousel reveal">
          <div className="testimonials-track">
            <div className="testimonials-slides" style={{ transform: `translateX(-${current * 100}%)` }}>
              {testimonials.map(t => (
                <div className="testimonial-card" key={t.id}>
                  <div className="testimonial-inner">
                    <div className="testimonial-stars">
                      {[...Array(t.rating)].map((_, i) => (
                        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                      ))}
                    </div>
                    <p className="testimonial-text">"{t.review}"</p>
                    <h4 className="testimonial-author-name">{t.name}</h4>
                    <p className="testimonial-author-detail">{t.treatment} — {t.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="testimonial-controls">
            <button className="testimonial-btn" onClick={prev} aria-label="Previous testimonial">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button className="testimonial-btn" onClick={next} aria-label="Next testimonial">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
          <div className="testimonial-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`testimonial-dot ${i === current ? 'active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
