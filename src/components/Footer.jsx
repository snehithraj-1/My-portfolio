import React from 'react';
import { ArrowUp, Terminal, Github, Linkedin, Instagram, Twitter, Heart } from 'lucide-react';
import { personalData } from '../data/portfolioData';
import { sounds } from '../utils/audio';

export default function Footer() {
  const scrollToTop = () => {
    sounds.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        position: 'relative',
        background: '#040714',
        borderTop: '1px solid rgba(0, 242, 254, 0.15)',
        padding: '4rem 0 2.5rem 0',
        overflow: 'hidden'
      }}
    >
      {/* Ambient background glow */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '200px',
          background: 'radial-gradient(ellipse at bottom, rgba(0, 242, 254, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem',
            paddingBottom: '3rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
          }}
        >
          {/* Left Brand info */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                fontSize: '1.4rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: 800,
                color: '#ffffff',
                marginBottom: '0.6rem'
              }}
            >
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.2), rgba(138, 43, 226, 0.3))',
                  border: '1px solid rgba(0, 242, 254, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--cyan)'
                }}
              >
                <Terminal size={17} />
              </div>
              <span>
                <span style={{ color: 'var(--cyan)' }}>&lt;</span>
                <span className="gradient-text-cyan">{personalData.name}</span>
                <span style={{ color: 'var(--cyan)' }}> /&gt;</span>
              </span>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.88rem', maxWidth: '340px' }}>
              AI Application Builder & 3D Web Creator building modern, intelligent web applications powered by Artificial Intelligence.
            </p>
          </div>

          {/* Center Navigation Links */}
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {['hero', 'about', 'skills', 'projects', 'experience', 'contact'].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => sounds.playClick()}
                onMouseEnter={() => sounds.playHover()}
                style={{
                  color: '#94a3b8',
                  textDecoration: 'none',
                  fontSize: '0.86rem',
                  fontFamily: 'var(--font-mono)',
                  textTransform: 'capitalize',
                  transition: 'color 0.2s ease'
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = 'var(--cyan)')}
                onMouseOut={(e) => (e.currentTarget.style.color = '#94a3b8')}
              >
                {id}
              </a>
            ))}
          </div>

          {/* Right Socials & Back to Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {[
                { icon: Github, href: personalData.socials.github },
                { icon: Linkedin, href: personalData.socials.linkedin },
                { icon: Instagram, href: personalData.socials.instagram },
                { icon: Twitter, href: personalData.socials.twitter }
              ].map((soc, i) => {
                const Icon = soc.icon;
                return (
                  <a
                    key={i}
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sounds.playClick()}
                    onMouseEnter={() => sounds.playHover()}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      color: '#94a3b8',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.borderColor = 'var(--cyan)';
                      e.currentTarget.style.color = 'var(--cyan)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                      e.currentTarget.style.color = '#94a3b8';
                    }}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>

            {/* Back to Top Rocket Button */}
            <button
              onClick={scrollToTop}
              title="Back to Top"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.2), rgba(138, 43, 226, 0.3))',
                border: '1px solid rgba(0, 242, 254, 0.4)',
                color: 'var(--cyan)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 0 15px rgba(0, 242, 254, 0.2)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 0 25px rgba(0, 242, 254, 0.5)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 242, 254, 0.2)';
              }}
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div
          style={{
            paddingTop: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.8rem',
            fontFamily: 'var(--font-mono)',
            color: '#64748b'
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} {personalData.name}. All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span>Engineered with precision &bull; 3D WebGL & React</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
