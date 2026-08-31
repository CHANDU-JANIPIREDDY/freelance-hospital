import { useMultiReveal } from '../hooks/useScrollReveal';
import { healthInsights } from '../data/siteData';

export default function HealthInsights() {
  const ref = useMultiReveal();

  return (
    <section className="insights" id="insights">
      <div className="container" ref={ref}>
        <div className="insights-header reveal">
          <div>
            <div className="section-label">Health & Wellness</div>
            <h2 className="section-title">Know More.<br />Live Better.</h2>
          </div>
          <a href="#insights" className="btn-secondary">
            View All Articles
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
        <div className="insights-grid">
          {healthInsights.map((article, i) => (
            <article className={`insight-card reveal reveal-delay-${(i % 3) + 1}`} key={article.id}>
              <div className="insight-img-wrap">
                <img className="insight-img" src={article.image} alt={article.title} loading="lazy" />
                <span className="insight-category">{article.category}</span>
              </div>
              <div className="insight-content">
                <h3 className="insight-title">{article.title}</h3>
                <p className="insight-desc">{article.desc}</p>
                <a href="#insights" className="insight-link">
                  Read More
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
