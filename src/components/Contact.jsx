import { useState } from 'react';
import { useMultiReveal } from '../hooks/useScrollReveal';

const contactItems = [
  {
    title: 'Hospital Address',
    text: '1200 Medical Center Drive, Suite 100\nNew York, NY 10001',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  },
  {
    title: 'Phone',
    text: '+1 (555) 123-4567',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
  },
  {
    title: 'Email',
    text: 'info@vitalis.health',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 6L2 7"/></svg>,
  },
  {
    title: 'Emergency',
    text: '+1 (555) 911-HELP',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
  },
];

export default function Contact() {
  const ref = useMultiReveal();
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="contact" id="contact">
      <div className="container" ref={ref}>
        <div className="reveal" style={{ marginBottom: 64 }}>
          <div className="section-label">Get in Touch</div>
          <h2 className="section-title">Contact VITALIS.</h2>
        </div>
        <div className="contact-inner">
          <div className="reveal">
            <div className="contact-info-list">
              {contactItems.map(item => (
                <div className="contact-info-item" key={item.title}>
                  <div className="contact-info-icon">{item.icon}</div>
                  <div>
                    <p className="contact-info-title">{item.title}</p>
                    <p className="contact-info-text" style={{ whiteSpace: 'pre-line' }}>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="contact-map">
              <iframe
                title="VITALIS Medical Center location"
                src="https://www.google.com/maps?q=1200%20Medical%20Center%20Drive%2C%20New%20York%2C%20NY%2010001&output=embed"
                style={{ width: '100%', height: '100%', border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="contact-form-wrap reveal reveal-delay-1">
            {submitted ? (
              <div className="contact-success" role="status">
                <div className="contact-success-icon">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
                </div>
                <h3 className="contact-success-title">Message Sent</h3>
                <p className="contact-success-text">
                  Thank you for your message. We have received it and will get back to you shortly.
                </p>
                <button className="btn-secondary" onClick={() => setSubmitted(false)}>Send Another Message</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="ct-name">Name</label>
                  <input id="ct-name" className="form-input" type="text" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="ct-email">Email</label>
                  <input id="ct-email" className="form-input" type="email" placeholder="Your email" required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="ct-phone">Phone</label>
                  <input id="ct-phone" className="form-input" type="tel" placeholder="Your phone" />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="ct-subject">Subject</label>
                  <input id="ct-subject" className="form-input" type="text" placeholder="How can we help?" required />
                </div>
                <div className="form-group full">
                  <label className="form-label" htmlFor="ct-message">Message</label>
                  <textarea id="ct-message" className="form-textarea" placeholder="Your message" required />
                </div>
                <div className="form-submit">
                  <button className="btn-primary" type="submit">
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
