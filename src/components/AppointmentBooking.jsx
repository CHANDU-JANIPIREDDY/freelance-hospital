import { useState } from 'react';
import { useMultiReveal } from '../hooks/useScrollReveal';
import { specialties, doctors } from '../data/siteData';

const timeSlots = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00'];

export default function AppointmentBooking() {
  const ref = useMultiReveal();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', specialty: '', doctor: '', date: '', time: '', message: ''
  });
  const [errors, setErrors] = useState({});

  const filteredDoctors = form.specialty
    ? doctors.filter(d => d.specialty === form.specialty)
    : doctors;

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Enter a valid email';
    if (!form.phone.trim()) errs.phone = 'Phone is required';
    if (!form.specialty) errs.specialty = 'Select a specialty';
    if (!form.doctor) errs.doctor = 'Select a doctor';
    if (!form.date) errs.date = 'Select a date';
    if (!form.time) errs.time = 'Select a time';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleChange = (field, value) => {
    setForm(prev => {
      const next = { ...prev, [field]: value };
      if (field === 'specialty') next.doctor = '';
      return next;
    });
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  const getMinDate = () => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  };

  return (
    <section className="appointment" id="appointment">
      <div className="container appointment-inner" ref={ref}>
        <div className="appointment-info reveal">
          <div className="section-label">Book a Visit</div>
          <h2 className="section-title">Your Health,<br />Your Time.</h2>
          <p className="section-desc" style={{ marginBottom: 40 }}>
            Schedule a consultation with our specialists. Our care team will confirm your appointment within 24 hours.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 40, height: 40, borderRadius: 'var(--radius-sm)', background: 'var(--light-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--medical-blue)', flexShrink: 0 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <p style={{ fontWeight: 600, fontSize: '.9rem' }}>Call Us</p>
                <p style={{ fontSize: '.85rem', color: 'var(--text-gray)' }}>+1 (555) 123-4567</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 40, height: 40, borderRadius: 'var(--radius-sm)', background: 'var(--light-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--medical-blue)', flexShrink: 0 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              </div>
              <div>
                <p style={{ fontWeight: 600, fontSize: '.9rem' }}>Opening Hours</p>
                <p style={{ fontSize: '.85rem', color: 'var(--text-gray)' }}>Mon–Fri: 8:00 AM – 8:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="appointment-form-wrap reveal reveal-delay-1">
          {submitted ? (
            <div className="form-success">
              <div className="form-success-icon">
                <svg width="32" height="32" viewBox="0 0 16 16" fill="none"><path d="M3 8l4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="form-success-title">Appointment Request Received</h3>
              <p className="form-success-text">Our care team will contact you shortly to confirm your appointment.</p>
            </div>
          ) : (
            <form className="appointment-form" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label className="form-label" htmlFor="apt-name">Full Name</label>
                <input id="apt-name" className={`form-input ${errors.name ? 'error' : ''}`} type="text" placeholder="Your full name" value={form.name} onChange={e => handleChange('name', e.target.value)} />
                {errors.name && <span className="form-error">{errors.name}</span>}
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="apt-email">Email</label>
                <input id="apt-email" className={`form-input ${errors.email ? 'error' : ''}`} type="email" placeholder="Your email address" value={form.email} onChange={e => handleChange('email', e.target.value)} />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="apt-phone">Phone</label>
                <input id="apt-phone" className={`form-input ${errors.phone ? 'error' : ''}`} type="tel" placeholder="Your phone number" value={form.phone} onChange={e => handleChange('phone', e.target.value)} />
                {errors.phone && <span className="form-error">{errors.phone}</span>}
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="apt-specialty">Specialty</label>
                <select id="apt-specialty" className={`form-select ${errors.specialty ? 'error' : ''}`} value={form.specialty} onChange={e => handleChange('specialty', e.target.value)}>
                  <option value="">Select specialty</option>
                  {[...new Set(specialties.map(s => s.name))].map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                {errors.specialty && <span className="form-error">{errors.specialty}</span>}
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="apt-doctor">Doctor</label>
                <select id="apt-doctor" className={`form-select ${errors.doctor ? 'error' : ''}`} value={form.doctor} onChange={e => handleChange('doctor', e.target.value)}>
                  <option value="">Select doctor</option>
                  {filteredDoctors.map(d => (
                    <option key={d.id} value={d.name}>{d.name}</option>
                  ))}
                </select>
                {errors.doctor && <span className="form-error">{errors.doctor}</span>}
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="apt-date">Preferred Date</label>
                <input id="apt-date" className={`form-input ${errors.date ? 'error' : ''}`} type="date" min={getMinDate()} value={form.date} onChange={e => handleChange('date', e.target.value)} />
                {errors.date && <span className="form-error">{errors.date}</span>}
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="apt-time">Preferred Time</label>
                <select id="apt-time" className={`form-select ${errors.time ? 'error' : ''}`} value={form.time} onChange={e => handleChange('time', e.target.value)}>
                  <option value="">Select time</option>
                  {timeSlots.map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
                {errors.time && <span className="form-error">{errors.time}</span>}
              </div>
              <div className="form-group full">
                <label className="form-label" htmlFor="apt-message">Message (Optional)</label>
                <textarea id="apt-message" className="form-textarea" placeholder="Describe your symptoms or concerns" value={form.message} onChange={e => handleChange('message', e.target.value)} />
              </div>
              <div className="form-submit">
                <button className="btn-primary" type="submit" disabled={loading}>
                  {loading ? 'Submitting...' : 'Request Appointment'}
                  {!loading && <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
