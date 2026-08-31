import { useState, useMemo } from 'react';
import { useMultiReveal } from '../hooks/useScrollReveal';
import { doctors } from '../data/siteData';
import DoctorModal from './DoctorModal';

export default function Doctors() {
  const [search, setSearch] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const ref = useMultiReveal();

  const filtered = useMemo(() => {
    return doctors.filter(d => {
      return d.name.toLowerCase().includes(search.toLowerCase()) || d.specialty.toLowerCase().includes(search.toLowerCase());
    });
  }, [search]);

  return (
    <section className="doctors" id="doctors">
      <div className="container" ref={ref}>
        <div className="doctors-header reveal">
          <div className="section-label">Our Specialists / 02</div>
          <h2 className="section-title">Experience That Makes<br />a Difference.</h2>
          <div className="doctors-controls">
            <input
              type="search"
              className="doctors-search"
              placeholder="Search doctors..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search doctors by name or specialty"
            />
          </div>
        </div>
        <div className="doctors-grid">
          {filtered.map((doctor, i) => (
            <div
              className={`doctor-card reveal reveal-delay-${(i % 4) + 1}`}
              key={doctor.id}
              onClick={() => setSelectedDoctor(doctor)}
              role="button"
              tabIndex={0}
              aria-label={`View profile of ${doctor.name}`}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedDoctor(doctor)}
            >
              <div className="doctor-card-img-wrap">
                <img className="doctor-card-img" src={doctor.image} alt={`${doctor.name}, ${doctor.specialty}`} loading="lazy" />
                <div className="doctor-card-overlay" />
                <div className="doctor-card-view">View Profile</div>
              </div>
              <div className="doctor-card-info">
                <h3 className="doctor-card-name">{doctor.name}</h3>
                <p className="doctor-card-specialty">{doctor.specialty}</p>
                <p className="doctor-card-exp">{doctor.experience} experience</p>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <p style={{ gridColumn: '1/-1', textAlign: 'center', color: 'var(--text-gray)', padding: '60px 0' }}>
              No doctors found matching your criteria.
            </p>
          )}
        </div>
      </div>

      {selectedDoctor && (
        <DoctorModal doctor={selectedDoctor} onClose={() => setSelectedDoctor(null)} />
      )}
    </section>
  );
}
