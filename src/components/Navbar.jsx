import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Specialties', href: '#specialties' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Services', href: '#technology' },
  { label: 'Technology', href: '#technology' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="container navbar-inner">
          <a href="#hero" className="navbar-brand" onClick={(e) => handleNav(e, '#hero')}>
            <span className="navbar-logo">VITALIS</span>
            <span className="navbar-logo-sub">Advanced Healthcare</span>
          </a>

          <div className="navbar-links">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={(e) => handleNav(e, link.href)}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="navbar-cta">
            <a href="#appointment" className="navbar-book-btn" onClick={(e) => handleNav(e, '#appointment')}>
              Book Appointment
            </a>
          </div>

          <button
            className={`hamburger ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`} role="dialog" aria-label="Mobile navigation">
        {navLinks.map(link => (
          <a key={link.href} href={link.href} onClick={(e) => handleNav(e, link.href)}>
            {link.label}
          </a>
        ))}
        <a href="#appointment" className="mobile-book btn-primary" onClick={(e) => handleNav(e, '#appointment')} style={{ marginTop: 24, textAlign: 'center', justifyContent: 'center' }}>
          Book Appointment
        </a>
      </div>
    </>
  );
}
