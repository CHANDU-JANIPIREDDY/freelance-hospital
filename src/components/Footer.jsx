export default function Footer() {
  const scrollTo = (e, id) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="navbar-logo">VITALIS</div>
            <div className="navbar-logo-sub">Advanced Healthcare</div>
            <p>Delivering world-class healthcare with precision, compassion, and innovation since 2001.</p>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-title">Specialties</h4>
            <a href="#specialties" onClick={(e) => scrollTo(e, '#specialties')}>Cardiology</a>
            <a href="#specialties" onClick={(e) => scrollTo(e, '#specialties')}>Neurology</a>
            <a href="#specialties" onClick={(e) => scrollTo(e, '#specialties')}>Orthopedics</a>
            <a href="#specialties" onClick={(e) => scrollTo(e, '#specialties')}>Oncology</a>
            <a href="#specialties" onClick={(e) => scrollTo(e, '#specialties')}>Pediatrics</a>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-title">Doctors</h4>
            <a href="#doctors" onClick={(e) => scrollTo(e, '#doctors')}>Find a Doctor</a>
            <a href="#doctors" onClick={(e) => scrollTo(e, '#doctors')}>Specialists</a>
            <a href="#doctors" onClick={(e) => scrollTo(e, '#doctors')}>Book Consultation</a>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-title">Services</h4>
            <a href="#technology" onClick={(e) => scrollTo(e, '#technology')}>Technology</a>
            <a href="#facilities" onClick={(e) => scrollTo(e, '#facilities')}>Facilities</a>
            <a href="#about" onClick={(e) => scrollTo(e, '#about')}>About Us</a>
            <a href="#contact" onClick={(e) => scrollTo(e, '#contact')}>Contact</a>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-title">Legal</h4>
            <a href="#contact">Privacy Policy</a>
            <a href="#contact">Terms of Service</a>
            <a href="#emergency" onClick={(e) => scrollTo(e, '#emergency')}>Emergency</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">&copy; {new Date().getFullYear()} VITALIS Advanced Healthcare. All rights reserved.</p>
          <div className="footer-social">
            <a href="#contact" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#contact" aria-label="Twitter">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
            </a>
            <a href="#contact" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#contact" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
