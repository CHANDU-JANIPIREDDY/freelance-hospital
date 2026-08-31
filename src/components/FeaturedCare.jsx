import { useMultiReveal } from '../hooks/useScrollReveal';

const rows = [
  {
    title: 'Advanced Diagnostics',
    label: 'Precision',
    desc: 'Our diagnostic center combines cutting-edge imaging technology with expert radiologists to deliver accurate, timely results that guide your treatment journey.',
    features: ['3T MRI Scanning', 'Low-Dose CT Imaging', 'Digital X-Ray', 'Ultrasound Diagnostics'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=550&fit=crop',
    alt: 'Advanced diagnostic imaging equipment',
    reverse: false,
  },
  {
    title: 'Surgical Excellence',
    label: 'Expertise',
    desc: 'Our surgical teams use the latest techniques and technology to perform complex procedures with precision, ensuring optimal outcomes and faster recovery.',
    features: ['Minimally Invasive Surgery', 'Robotic-Assisted Procedures', 'Day Surgery Units', 'Advanced Recovery Protocols'],
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=550&fit=crop',
    alt: 'Modern surgical operating room',
    reverse: true,
  },
  {
    title: 'Personalized Treatment',
    label: 'Care',
    desc: 'Every patient receives a tailored treatment plan developed by multidisciplinary teams, ensuring care that addresses your unique needs and health goals.',
    features: ['Multidisciplinary Teams', 'Custom Treatment Plans', 'Patient Education', 'Ongoing Monitoring'],
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=550&fit=crop',
    alt: 'Doctor consulting with patient',
    reverse: false,
  },
  {
    title: 'Rehabilitation',
    label: 'Recovery',
    desc: 'Comprehensive rehabilitation programs combining physical therapy, occupational therapy, and wellness support to restore your quality of life.',
    features: ['Physical Therapy', 'Occupational Therapy', 'Cardiac Rehabilitation', 'Neurological Recovery'],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=550&fit=crop',
    alt: 'Patient in rehabilitation therapy session',
    reverse: true,
  },
];

export default function FeaturedCare() {
  const ref = useMultiReveal();

  return (
    <section className="featured" id="featured">
      <div className="container" ref={ref}>
        <div style={{ textAlign: 'center', marginBottom: 80 }} className="reveal">
          <h2 className="section-title" style={{ margin: '0 auto 16px' }}>Precision When It<br />Matters Most.</h2>
        </div>
        {rows.map((row) => (
          <div className={`featured-row ${row.reverse ? 'reverse' : ''} reveal`} key={row.title}>
            <div className="featured-img-wrap">
              <img className="featured-img" src={row.image} alt={row.alt} loading="lazy" />
            </div>
            <div className="featured-text">
              <div className="section-label">{row.label}</div>
              <h3 className="section-title">{row.title}</h3>
              <p className="section-desc">{row.desc}</p>
              <div className="featured-list">
                {row.features.map(f => (
                  <div className="featured-list-item" key={f}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l4 4 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
