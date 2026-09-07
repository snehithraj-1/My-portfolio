import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Sparkles } from 'lucide-react';
import { sounds } from '../utils/audio';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        background: 'rgba(3, 7, 18, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          sounds.playClick();
          onClose();
        }
      }}
    >
      <div
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '850px',
          maxHeight: '90vh',
          overflowY: 'auto',
          borderRadius: '20px',
          border: '1px solid rgba(0, 242, 254, 0.3)',
          background: 'rgba(7, 14, 32, 0.95)',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.9), 0 0 30px rgba(0, 242, 254, 0.2)',
          position: 'relative'
        }}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            sounds.playClick();
            onClose();
          }}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            transition: 'all 0.2s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = 'rgba(239, 68, 68, 0.2)';
            e.currentTarget.style.borderColor = '#ef4444';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
          }}
        >
          <X size={20} />
        </button>

        {/* Project Header Image */}
        <div style={{ position: 'relative', width: '100%', height: '280px', overflow: 'hidden' }}>
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, transparent 40%, rgba(7, 14, 32, 0.95) 100%)'
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '1.5rem',
              left: '1.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem'
            }}
          >
            <span
              style={{
                fontSize: '0.8rem',
                fontFamily: 'var(--font-mono)',
                padding: '0.35rem 0.85rem',
                borderRadius: '9999px',
                background: 'rgba(0, 242, 254, 0.2)',
                border: '1px solid var(--cyan)',
                color: 'var(--cyan)'
              }}
            >
              {project.category}
            </span>
          </div>
        </div>

        {/* Modal Content */}
        <div style={{ padding: '1.75rem 2rem 2.5rem 2rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.4rem', color: '#ffffff' }}>
            {project.title}
          </h2>
          <div style={{ color: 'var(--cyan)', fontSize: '1rem', fontFamily: 'var(--font-mono)', marginBottom: '1.5rem' }}>
            {project.tagline}
          </div>

          <p style={{ color: '#cbd5e1', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '2rem' }}>
            {project.fullDescription || project.description}
          </p>

          {/* Key Engineering Highlights */}
          {project.highlights && (
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#f8fafc' }}>
                <Sparkles size={18} color="var(--cyan)" />
                <span>Architecture & Feature Highlights</span>
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.75rem' }}>
                {project.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      padding: '0.65rem 0.85rem',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      fontSize: '0.88rem',
                      color: '#cbd5e1'
                    }}
                  >
                    <CheckCircle2 size={16} color="#10b981" style={{ flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Used */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#f8fafc' }}>
              <Layers size={17} color="var(--cyan)" />
              <span>Technologies Stack</span>
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  style={{
                    padding: '0.4rem 0.85rem',
                    borderRadius: '8px',
                    background: 'rgba(0, 242, 254, 0.08)',
                    border: '1px solid rgba(0, 242, 254, 0.2)',
                    fontSize: '0.84rem',
                    fontFamily: 'var(--font-mono)',
                    color: '#e2e8f0'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sounds.playClick()}
              onMouseEnter={() => sounds.playHover()}
              className="btn-primary"
              style={{ flex: 1, padding: '0.9rem 1.8rem', fontSize: '0.95rem' }}
            >
              <ExternalLink size={18} />
              <span>Launch Live Demo</span>
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sounds.playClick()}
              onMouseEnter={() => sounds.playHover()}
              className="btn-secondary"
              style={{ flex: 1, padding: '0.9rem 1.8rem', fontSize: '0.95rem' }}
            >
              <Github size={18} />
              <span>Inspect Source Code</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
