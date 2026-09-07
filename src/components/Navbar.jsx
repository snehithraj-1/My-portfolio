import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Terminal, ExternalLink } from 'lucide-react';
import { sounds } from '../utils/audio';

export default function Navbar({ activeSection, isMuted, toggleMute }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Journey', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    sounds.playClick();
    setMobileMenuOpen(false);
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        transition: 'all 0.3s ease',
        padding: scrolled ? '0.75rem 1.5rem' : '1.25rem 1.5rem',
        background: scrolled ? 'rgba(5, 10, 25, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0, 242, 254, 0.15)' : 'none',
        boxShadow: scrolled ? '0 10px 30px -10px rgba(0, 0, 0, 0.5)' : 'none'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={() => sounds.playClick()}
          onMouseEnter={() => sounds.playHover()}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            textDecoration: 'none',
            fontSize: '1.35rem',
            fontFamily: 'var(--font-mono)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: '#ffffff'
          }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.2), rgba(138, 43, 226, 0.3))',
              border: '1px solid rgba(0, 242, 254, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--cyan)',
              boxShadow: '0 0 15px rgba(0, 242, 254, 0.3)'
            }}
          >
            <Terminal size={18} />
          </div>
          <span>
            <span style={{ color: 'var(--cyan)' }}>&lt;</span>
            <span className="gradient-text-cyan">RAJ</span>
            <span style={{ color: 'var(--cyan)' }}> /&gt;</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '0.4rem',
            background: 'rgba(10, 18, 38, 0.65)',
            padding: '0.4rem 0.6rem',
            borderRadius: '9999px',
            border: '1px solid rgba(0, 242, 254, 0.15)',
            backdropFilter: 'blur(12px)'
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                onMouseEnter={() => sounds.playHover()}
                style={{
                  padding: '0.5rem 1.1rem',
                  borderRadius: '9999px',
                  fontSize: '0.88rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  color: isActive ? '#030712' : '#cbd5e1',
                  background: isActive
                    ? 'linear-gradient(135deg, #00f2fe, #38bdf8)'
                    : 'transparent',
                  boxShadow: isActive ? '0 0 15px rgba(0, 242, 254, 0.4)' : 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Tools: Audio FX Toggle & Status Pill & Mobile Menu */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          {/* Audio FX Toggle */}
          <button
            onClick={() => {
              toggleMute();
              sounds.playClick();
            }}
            onMouseEnter={() => sounds.playHover()}
            title={isMuted ? 'Unmute Futuristic UI Sounds' : 'Mute Futuristic UI Sounds'}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'rgba(12, 22, 48, 0.7)',
              border: `1px solid ${isMuted ? 'rgba(148, 163, 184, 0.2)' : 'rgba(0, 242, 254, 0.4)'}`,
              color: isMuted ? '#64748b' : 'var(--cyan)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: isMuted ? 'none' : '0 0 12px rgba(0, 242, 254, 0.2)'
            }}
          >
            {isMuted ? <VolumeX size={17} /> : <Volume2 size={17} />}
          </button>

          {/* Availability Pill (Desktop) */}
          <div className="status-pill desktop-status" style={{ display: 'none' }}>
            <span className="status-dot" />
            <span>Open for Work</span>
          </div>

          {/* Quick Contact Action */}
          <a
            href="#contact"
            onClick={() => sounds.playClick()}
            onMouseEnter={() => sounds.playHover()}
            className="btn-primary desktop-btn"
            style={{
              padding: '0.55rem 1.25rem',
              fontSize: '0.85rem',
              display: 'none'
            }}
          >
            Hire Me
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              sounds.playClick();
            }}
            className="mobile-burger-btn"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'rgba(12, 22, 48, 0.8)',
              border: '1px solid rgba(0, 242, 254, 0.3)',
              color: 'var(--cyan)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-over Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '70px',
            left: '1rem',
            right: '1rem',
            background: 'rgba(7, 14, 32, 0.95)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(0, 242, 254, 0.3)',
            borderRadius: '18px',
            padding: '1.5rem',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 242, 254, 0.15)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.8rem',
            zIndex: 99
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                display: 'block',
                padding: '0.75rem 1rem',
                borderRadius: '10px',
                color: '#f8fafc',
                textDecoration: 'none',
                fontFamily: 'var(--font-display)',
                fontSize: '1.05rem',
                fontWeight: 600,
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
              }}
            >
              {link.name}
            </a>
          ))}
          <div style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div className="status-pill" style={{ width: 'fit-content' }}>
              <span className="status-dot" />
              <span>Available for Projects</span>
            </div>
            <a
              href="#contact"
              onClick={() => {
                setMobileMenuOpen(false);
                sounds.playClick();
              }}
              className="btn-primary"
              style={{ width: '100%', textAlign: 'center' }}
            >
              Contact Me Now
            </a>
          </div>
        </div>
      )}

      {/* Media query styling in JSX */}
      <style>{`
        @media (min-width: 900px) {
          .desktop-nav { display: flex !important; }
          .desktop-status { display: inline-flex !important; }
          .desktop-btn { display: inline-flex !important; }
          .mobile-burger-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
}
