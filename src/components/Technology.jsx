import { useMultiReveal } from '../hooks/useScrollReveal';

const features = [
  { title: 'Advanced Imaging', desc: 'State-of-the-art MRI, CT, and PET scanning for precise diagnostics.' },
  { title: 'Robotic-Assisted Surgery', desc: 'Minimally invasive procedures with enhanced precision and faster recovery.' },
  { title: 'AI-Supported Diagnostics', desc: 'Machine learning algorithms assisting in early detection and accurate diagnosis.' },
  { title: 'Digital Patient Monitoring', desc: 'Real-time health tracking with integrated electronic health records.' },
];

export default function Technology() {
  const ref = useMultiReveal();

  return (
    <section className="technology" id="technology">
      <div className="tech-decor" />
      <div className="container" ref={ref}>
        <div className="reveal">
          <div className="section-label">Innovation / 03</div>
          <h2 className="section-title">The Future of Medicine,<br />Today.</h2>
        </div>
        <div className="tech-grid">
          <div className="reveal">
            <img
              className="tech-main-img"
              src="https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=900&h=600&fit=crop"
              alt="Advanced medical imaging technology in a modern hospital"
              loading="lazy"
            />
          </div>
          <div className="tech-features">
            {features.map((f, i) => (
              <div className={`tech-feature reveal reveal-delay-${i + 1}`} key={f.title}>
                <h3 className="tech-feature-title">{f.title}</h3>
                <p className="tech-feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
