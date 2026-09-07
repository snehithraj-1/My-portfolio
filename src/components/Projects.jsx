import React, { useState } from 'react';
import { ExternalLink, Github, Sparkles, Eye, ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { sounds } from '../utils/audio';

function ProjectCard({ project, onOpenModal }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [shine, setShine] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    setTilt({ x: rotateX, y: rotateY });
    setShine({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    sounds.playHover();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      className="tilt-card-container"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.4s ease',
        height: '100%'
      }}
    >
      <div
        className="glass-card"
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          overflow: 'hidden',
          borderRadius: '18px',
          border: isHovered ? '1px solid rgba(0, 242, 254, 0.45)' : '1px solid rgba(0, 242, 254, 0.15)',
          boxShadow: isHovered
            ? '0 20px 45px -10px rgba(0, 242, 254, 0.25), 0 0 20px rgba(0, 242, 254, 0.15)'
            : '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
          position: 'relative'
        }}
      >
        {/* Dynamic Specular Sheen */}
        {isHovered && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              background: `radial-gradient(circle at ${shine.x}% ${shine.y}%, rgba(0, 242, 254, 0.15), transparent 60%)`,
              zIndex: 3
            }}
          />
        )}

        {/* Project Image & Overlay */}
        <div style={{ position: 'relative', width: '100%', height: '210px', overflow: 'hidden' }}>
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: isHovered ? 'scale(1.08)' : 'scale(1)',
              transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(7, 14, 32, 0.2) 0%, rgba(7, 14, 32, 0.95) 100%)'
            }}
          />

          {/* Category Tag */}
          <div
            style={{
              position: 'absolute',
              top: '1rem',
              left: '1rem',
              padding: '0.3rem 0.75rem',
              borderRadius: '9999px',
              background: 'rgba(7, 13, 30, 0.8)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(0, 242, 254, 0.3)',
              color: 'var(--cyan)',
              fontSize: '0.74rem',
              fontFamily: 'var(--font-mono)'
            }}
          >
            {project.category}
          </div>

          {/* Live on Vercel Indicator */}
          <div
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              padding: '0.3rem 0.75rem',
              borderRadius: '9999px',
              background: 'rgba(16, 185, 129, 0.15)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(16, 185, 129, 0.4)',
              color: '#34d399',
              fontSize: '0.72rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              boxShadow: '0 0 12px rgba(16, 185, 129, 0.2)'
            }}
          >
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b981', display: 'inline-block' }} />
            <span>Live on Vercel</span>
          </div>

          {/* Quick View Button on Image Hover */}
          <button
            onClick={() => {
              sounds.playClick();
              onOpenModal(project);
            }}
            style={{
              position: 'absolute',
              bottom: '1rem',
              right: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.45rem 0.85rem',
              borderRadius: '8px',
              background: 'rgba(12, 22, 48, 0.85)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(0, 242, 254, 0.3)',
              color: '#ffffff',
              fontSize: '0.78rem',
              fontFamily: 'var(--font-mono)',
              cursor: 'pointer',
              zIndex: 2,
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = 'var(--cyan)';
              e.currentTarget.style.color = 'var(--cyan)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0, 242, 254, 0.3)';
              e.currentTarget.style.color = '#ffffff';
            }}
          >
            <Eye size={13} />
            <span>Details</span>
          </button>
        </div>

        {/* Card Body */}
        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <h3
            style={{
              fontSize: '1.25rem',
              fontWeight: 700,
              marginBottom: '0.4rem',
              color: '#f8fafc',
              cursor: 'pointer'
            }}
            onClick={() => {
              sounds.playClick();
              onOpenModal(project);
            }}
          >
            {project.title}
          </h3>

          <div style={{ fontSize: '0.82rem', color: 'var(--cyan)', fontFamily: 'var(--font-mono)', marginBottom: '0.85rem' }}>
            {project.tagline}
          </div>

          <p
            style={{
              fontSize: '0.88rem',
              color: '#94a3b8',
              lineHeight: 1.6,
              marginBottom: '1.4rem',
              flexGrow: 1
            }}
          >
            {project.description}
          </p>

          {/* Tech Badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.5rem' }}>
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                style={{
                  padding: '0.25rem 0.65rem',
                  borderRadius: '6px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  fontSize: '0.76rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#cbd5e1'
                }}
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span
                style={{
                  padding: '0.25rem 0.5rem',
                  borderRadius: '6px',
                  background: 'rgba(0, 242, 254, 0.06)',
                  color: 'var(--cyan)',
                  fontSize: '0.74rem',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Bottom Action Buttons: Live Demo & GitHub */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginTop: 'auto' }}>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sounds.playClick()}
              onMouseEnter={() => sounds.playHover()}
              className="btn-primary"
              style={{
                padding: '0.65rem 0.9rem',
                fontSize: '0.84rem',
                borderRadius: '10px'
              }}
            >
              <span>Live Demo</span>
              <ArrowUpRight size={15} />
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sounds.playClick()}
              onMouseEnter={() => sounds.playHover()}
              className="btn-secondary"
              style={{
                padding: '0.65rem 0.9rem',
                fontSize: '0.84rem',
                borderRadius: '10px'
              }}
            >
              <Github size={15} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Live on Vercel', 'Full Stack'];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory || p.liveStatus === activeCategory);

  return (
    <section id="projects" className="section-padding cyber-grid-bg" style={{ position: 'relative' }}>
      {/* Ambient Radial Glow */}
      <div className="ambient-radial-purple" style={{ top: '10%', right: '10%' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span>&lt;section&gt;</span>
            <span>// 03. FEATURED CREATIONS</span>
            <span>&lt;/section&gt;</span>
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text-cyan glow-cyan">Live Applications</span>
          </h2>
          <p className="section-desc">
            Explore my featured full stack web applications deployed live in production on Vercel, architected with modern frameworks, secure user flows, and real-time responsiveness.
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.6rem',
            marginBottom: '3rem'
          }}
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  sounds.playClick();
                }}
                onMouseEnter={() => sounds.playHover()}
                style={{
                  padding: '0.6rem 1.4rem',
                  borderRadius: '9999px',
                  fontSize: '0.86rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  border: isActive ? '1px solid var(--cyan)' : '1px solid rgba(0, 242, 254, 0.15)',
                  background: isActive
                    ? 'linear-gradient(135deg, rgba(0, 242, 254, 0.2), rgba(138, 43, 226, 0.2))'
                    : 'rgba(10, 18, 38, 0.6)',
                  color: isActive ? '#ffffff' : '#94a3b8',
                  boxShadow: isActive ? '0 0 20px rgba(0, 242, 254, 0.25)' : 'none'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* 3D Projects Showcase Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            maxWidth: '1050px',
            margin: '0 auto 3.5rem',
            gap: '2.5rem'
          }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={onSelectProject}
            />
          ))}
        </div>

        {/* Bottom GitHub Callout */}
        <div
          style={{
            textAlign: 'center',
            padding: '2rem',
            borderRadius: '16px',
            background: 'rgba(12, 22, 48, 0.6)',
            border: '1px solid rgba(0, 242, 254, 0.15)',
            backdropFilter: 'blur(12px)',
            maxWidth: '650px',
            margin: '0 auto'
          }}
        >
          <p style={{ color: '#cbd5e1', fontSize: '0.98rem', marginBottom: '1.2rem' }}>
            Want to explore more experimental codebases, algorithms, and 3D prototypes?
          </p>
          <a
            href="https://github.com/snehithraj-1"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sounds.playClick()}
            onMouseEnter={() => sounds.playHover()}
            className="btn-secondary"
            style={{ padding: '0.75rem 1.6rem', fontSize: '0.9rem' }}
          >
            <Github size={17} />
            <span>Visit GitHub Repositories</span>
          </a>
        </div>
      </div>
    </section>
  );
}
