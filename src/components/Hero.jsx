import { useState, useRef, useEffect } from 'react';
import heroVideo from '../../assets/Create_a_second_ultra_premi_gwr_video_mvp.mp4';

export default function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay policy fallback: muted video ensures play on most browsers
        });
      }
    }
  }, []);

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero" aria-label="Hero section">
      {/* Full-Screen Edge-to-Edge Cinematic Video Background */}
      <div className="hero-video-container">
        <video
          ref={videoRef}
          className={`hero-video ${isVideoLoaded ? 'loaded' : ''}`}
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          disablePictureInPicture
          preload="auto"
          aria-hidden="true"
          onLoadedData={() => setIsVideoLoaded(true)}
          onCanPlay={() => setIsVideoLoaded(true)}
        >
          <source src={heroVideo} type="video/mp4" />
          <source src="/assets/Create_a_second_ultra_premi_gwr_video_mvp.mp4" type="video/mp4" />
        </video>

        {/* Subtle dark cinematic gradient overlay for high typography contrast while keeping hospital architecture visible */}
        <div className="hero-video-overlay" />
      </div>

      <div className="container hero-inner">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span /> VITALIS / Advanced Healthcare
          </div>
          <h1 className="hero-headline">
            <span className="line"><span>Care,</span></span>
            <span className="line"><span>Re<em>imagined.</em></span></span>
          </h1>
          <p className="hero-desc">
            Advanced medicine, exceptional expertise, and compassionate care — designed around you.
          </p>
          <div className="hero-actions">
            <button className="btn-primary hero-btn-primary" onClick={() => scrollTo('#appointment')}>
              Book an Appointment
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button className="btn-secondary hero-btn-secondary" onClick={() => scrollTo('#specialties')}>
              Explore Our Care
            </button>
          </div>
          <div className="hero-trust">
            <div className="hero-trust-item">
              <span className="hero-trust-num">24/7</span>
              <span className="hero-trust-label">Care</span>
            </div>
            <div className="hero-trust-item">
              <span className="hero-trust-num">150+</span>
              <span className="hero-trust-label">Specialists</span>
            </div>
            <div className="hero-trust-item">
              <span className="hero-trust-num">30+</span>
              <span className="hero-trust-label">Specialties</span>
            </div>
          </div>
        </div>

        {/* Floating status badge on wide screens */}
        <div className="hero-floating-badge" aria-hidden="true">
          <div className="hero-badge-header">
            <span className="hero-badge-pulse" />
            <span className="hero-badge-status">Center of Excellence</span>
          </div>
          <div className="hero-badge-val">JCI & ISO Certified</div>
          <div className="hero-badge-sub">150+ Specialists · 30+ Departments</div>
        </div>
      </div>

      {/* Subtle scroll down indicator */}
      <button
        className="hero-scroll-indicator"
        onClick={() => scrollTo('#trust')}
        aria-label="Scroll to explore"
      >
        <span className="hero-scroll-mouse">
          <span className="hero-scroll-dot" />
        </span>
        <span className="hero-scroll-text">Scroll to explore</span>
      </button>
    </section>
  );
}
