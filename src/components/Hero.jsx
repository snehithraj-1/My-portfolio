import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Code2, Download, Github, Linkedin, ChevronDown } from 'lucide-react';
import Hero3D from './Hero3D';
import { personalData } from '../data/portfolioData';
import { sounds } from '../utils/audio';

const dynamicRoles = [
  "AI Application Builder",
  "AI-Powered Web Creator",
  "Generative AI Product Builder",
  "Intelligent Software Creator"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Typewriter effect
  useEffect(() => {
    const currentRole = dynamicRoles[roleIndex];
    let timer;

    if (!isDeleting && displayedText.length < currentRole.length) {
      timer = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayedText.length === currentRole.length) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedText.length > 0) {
      timer = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length - 1));
      }, 40);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % dynamicRoles.length);
      setTypingSpeed(90);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex, typingSpeed]);

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '6rem',
        paddingBottom: '4rem',
        overflow: 'hidden'
      }}
    >
      {/* 3D WebGL Canvas Layer */}
      <Hero3D />

      {/* Ambient Radial Gradient Glows */}
      <div className="ambient-radial-cyan" style={{ top: '10%', left: '15%' }} />
      <div className="ambient-radial-purple" style={{ bottom: '10%', right: '15%' }} />

      {/* Content Overlay */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          pointerEvents: 'none' // Allow canvas mouse movement
        }}
      >
        {/* Top Status Pill */}
        <div
          style={{
            pointerEvents: 'auto',
            marginBottom: '1.5rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.45rem 1.1rem',
            borderRadius: '9999px',
            background: 'rgba(12, 22, 48, 0.75)',
            border: '1px solid rgba(0, 242, 254, 0.3)',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 0 20px rgba(0, 242, 254, 0.15)'
          }}
          className="animate-float"
        >
          <Sparkles size={15} color="var(--cyan)" />
          <span style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: '#38bdf8' }}>
            BUILDING APPLICATIONS USING ARTIFICIAL INTELLIGENCE
          </span>
        </div>

        {/* Main Name Heading */}
        <h1
          style={{
            fontSize: 'clamp(2.75rem, 7vw, 5.5rem)',
            fontWeight: 900,
            lineHeight: 1.05,
            marginBottom: '1.25rem',
            letterSpacing: '-0.03em'
          }}
        >
          Hello, I'm <span className="gradient-text-cyan glow-cyan">{personalData.name}</span>
        </h1>

        {/* Role with Dynamic Typewriter */}
        <div
          style={{
            minHeight: '2.5rem',
            fontSize: 'clamp(1.25rem, 3.2vw, 2.2rem)',
            fontWeight: 600,
            marginBottom: '1.5rem',
            fontFamily: 'var(--font-display)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.35rem'
          }}
        >
          <span style={{ color: '#94a3b8' }}>I am a</span>
          <span className="gradient-text-purple glow-purple">{displayedText}</span>
          <span
            style={{
              display: 'inline-block',
              width: '3px',
              height: '1.3em',
              backgroundColor: 'var(--cyan)',
              marginLeft: '2px',
              animation: 'pulseDot 0.8s infinite'
            }}
          />
        </div>

        {/* Professional Tagline */}
        <p
          style={{
            maxWidth: '680px',
            fontSize: 'clamp(1rem, 1.8vw, 1.18rem)',
            color: '#cbd5e1',
            lineHeight: 1.7,
            marginBottom: '2.5rem',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.7)'
          }}
        >
          {personalData.tagline}
        </p>

        {/* Call-to-Action Buttons */}
        <div
          style={{
            pointerEvents: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '3.5rem'
          }}
        >
          <a
            href="#projects"
            onClick={() => sounds.playClick()}
            onMouseEnter={() => sounds.playHover()}
            className="btn-primary"
            style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}
          >
            <span>View My Work</span>
            <ArrowRight size={18} />
          </a>

          <a
            href="#contact"
            onClick={() => sounds.playClick()}
            onMouseEnter={() => sounds.playHover()}
            className="btn-secondary"
            style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}
          >
            <span>Contact Me</span>
          </a>

          <a
            href="#about"
            onClick={() => sounds.playClick()}
            onMouseEnter={() => sounds.playHover()}
            style={{
              pointerEvents: 'auto',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.9rem 1.4rem',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#94a3b8',
              fontSize: '0.95rem',
              textDecoration: 'none',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.borderColor = 'rgba(0, 242, 254, 0.4)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = '#94a3b8';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            }}
          >
            <Code2 size={18} color="var(--cyan)" />
            <span>Read Bio</span>
          </a>
        </div>

        {/* Stats Row */}
        <div
          style={{
            pointerEvents: 'auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: '1rem',
            width: '100%',
            maxWidth: '850px'
          }}
        >
          {personalData.stats.map((stat, idx) => (
            <div
              key={stat.label}
              onMouseEnter={() => sounds.playHover()}
              style={{
                background: 'rgba(8, 16, 36, 0.65)',
                border: '1px solid rgba(0, 242, 254, 0.15)',
                backdropFilter: 'blur(12px)',
                borderRadius: '14px',
                padding: '1rem 0.8rem',
                textAlign: 'center',
                transition: 'all 0.25s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = 'rgba(0, 242, 254, 0.4)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 242, 254, 0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(0, 242, 254, 0.15)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div
                style={{
                  fontSize: '1.85rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-display)',
                  color: idx % 2 === 0 ? 'var(--cyan)' : '#c084fc',
                  lineHeight: 1.1,
                  marginBottom: '0.25rem'
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#94a3b8',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator prompt */}
        <a
          href="#about"
          onClick={() => sounds.playClick()}
          style={{
            pointerEvents: 'auto',
            marginTop: '3.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.4rem',
            color: '#64748b',
            textDecoration: 'none',
            fontSize: '0.78rem',
            fontFamily: 'var(--font-mono)',
            transition: 'color 0.2s ease'
          }}
          onMouseOver={(e) => (e.currentTarget.style.color = 'var(--cyan)')}
          onMouseOut={(e) => (e.currentTarget.style.color = '#64748b')}
        >
          <span>EXPLORE ECOSYSTEM</span>
          <ChevronDown size={18} className="animate-float" />
        </a>
      </div>
    </section>
  );
}
