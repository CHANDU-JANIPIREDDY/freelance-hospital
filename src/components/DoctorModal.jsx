import { useEffect } from 'react';

export default function DoctorModal({ doctor, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  const handleBook = () => {
    onClose();
    setTimeout(() => {
      document.querySelector('#appointment')?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <div className={`modal-overlay open`} onClick={(e) => e.target === e.currentTarget && onClose()} role="dialog" aria-modal="true" aria-label={`${doctor.name} profile`}>
      <div className="modal">
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <svg width="18" height="18" viewBox="0 0 16 16" fill="none"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </button>
        <div className="modal-content">
          <img className="modal-img" src={doctor.image} alt={`${doctor.name} portrait`} />
          <div className="modal-details">
            <p className="modal-specialty">{doctor.specialty}</p>
            <h2 className="modal-name">{doctor.name}</h2>
            <div className="modal-section">
              <p className="modal-section-title">Qualifications</p>
              <p>{doctor.qualifications}</p>
            </div>
            <div className="modal-section">
              <p className="modal-section-title">Experience</p>
              <p>{doctor.experience} of clinical experience</p>
            </div>
            <div className="modal-section">
              <p className="modal-section-title">Areas of Expertise</p>
              <ul>
                {doctor.expertise.map(e => <li key={e}>{e}</li>)}
              </ul>
            </div>
            <div className="modal-section">
              <p className="modal-section-title">Availability</p>
              <div className="modal-availability">
                {doctor.availability.map(d => <span key={d}>{d}</span>)}
              </div>
            </div>
            <div className="modal-book-btn">
              <button className="btn-primary" onClick={handleBook}>
                Book Appointment
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
