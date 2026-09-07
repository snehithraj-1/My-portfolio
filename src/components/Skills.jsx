import React, { useState } from 'react';
import { 
  Code2, Layers, Server, Database, GitBranch, Sparkles, Cpu, 
  Terminal, Box, Globe, Shield, Zap 
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { sounds } from '../utils/audio';

// Map icon names to Lucide icons
const iconMap = {
  react: Layers,
  javascript: Code2,
  html: Globe,
  box: Box,
  nodejs: Server,
  server: Server,
  coffee: Cpu,
  database: Database,
  'git-branch': GitBranch,
  sparkles: Sparkles,
  zap: Zap,
  container: Shield
};

function SkillCard({ skill }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = iconMap[skill.icon] || Code2;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;
    setTilt({ x: rotateX, y: rotateY });
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
          padding: '1.5rem',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          borderColor: isHovered ? skill.color : 'rgba(0, 242, 254, 0.15)',
          boxShadow: isHovered
            ? `0 12px 35px -10px ${skill.color}33, 0 0 15px ${skill.color}22`
            : 'none',
          position: 'relative'
        }}
      >
        <div>
          {/* Top Row: Icon & Category Tag */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.2rem' }}>
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: `${skill.color}15`,
                border: `1px solid ${skill.color}40`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: skill.color,
                boxShadow: `0 0 20px ${skill.color}20`
              }}
            >
              <IconComponent size={24} />
            </div>

            <span
              style={{
                fontSize: '0.74rem',
                fontFamily: 'var(--font-mono)',
                padding: '0.25rem 0.65rem',
                borderRadius: '9999px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                color: '#94a3b8'
              }}
            >
              {skill.category}
            </span>
          </div>

          {/* Skill Title */}
          <h3 style={{ fontSize: '1.18rem', fontWeight: 700, marginBottom: '0.5rem', color: '#f8fafc' }}>
            {skill.name}
          </h3>

          {/* Description */}
          <p style={{ fontSize: '0.84rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '1.5rem' }}>
            {skill.description}
          </p>
        </div>

        {/* Progress Bar & Level */}
        <div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '0.4rem',
              fontSize: '0.78rem',
              fontFamily: 'var(--font-mono)'
            }}
          >
            <span style={{ color: '#64748b' }}>Proficiency</span>
            <span style={{ color: skill.color, fontWeight: 700 }}>{skill.level}%</span>
          </div>

          <div
            style={{
              width: '100%',
              height: '6px',
              borderRadius: '9999px',
              background: 'rgba(255, 255, 255, 0.06)',
              overflow: 'hidden',
              position: 'relative'
            }}
          >
            <div
              style={{
                width: `${skill.level}%`,
                height: '100%',
                borderRadius: '9999px',
                background: `linear-gradient(90deg, ${skill.color}, #ffffff)`,
                boxShadow: `0 0 10px ${skill.color}`,
                transition: 'width 1s ease-in-out'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All'
    ? skillsData.skills
    : skillsData.skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="section-padding" style={{ position: 'relative' }}>
      {/* Ambient Glow */}
      <div className="ambient-radial-cyan" style={{ top: '30%', right: '-5%' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span>&lt;section&gt;</span>
            <span>// 02. TECHNICAL MATRIX</span>
            <span>&lt;/section&gt;</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="gradient-text-purple glow-purple">Technological Arsenal</span>
          </h2>
          <p className="section-desc">
            A comprehensive suite of modern frameworks, programming languages, database architectures, and AI tools I use to engineer robust web applications.
          </p>
        </div>

        {/* Category Filters */}
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
          {skillsData.categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  sounds.playClick();
                }}
                onMouseEnter={() => sounds.playHover()}
                style={{
                  padding: '0.6rem 1.3rem',
                  borderRadius: '9999px',
                  fontSize: '0.86rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  border: isActive ? '1px solid var(--cyan)' : '1px solid rgba(0, 242, 254, 0.15)',
                  background: isActive ? 'linear-gradient(135deg, rgba(0, 242, 254, 0.2), rgba(138, 43, 226, 0.2))' : 'rgba(10, 18, 38, 0.6)',
                  color: isActive ? '#ffffff' : '#94a3b8',
                  boxShadow: isActive ? '0 0 20px rgba(0, 242, 254, 0.25)' : 'none'
                }}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* 3D Skills Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.75rem',
            marginBottom: '4rem'
          }}
        >
          {filteredSkills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>

        {/* Floating Tech Badges Strip */}
        <div
          className="glass-card"
          style={{
            padding: '1.5rem 2rem',
            borderRadius: '16px',
            border: '1px solid rgba(0, 242, 254, 0.2)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '1rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--cyan)', fontSize: '0.88rem', fontFamily: 'var(--font-mono)' }}>
            <Sparkles size={16} />
            <span>ALSO EXPERIENCED WITH</span>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem' }}>
            {[
              "REST APIs", "GraphQL", "WebSockets", "Three.js Shaders", "Redux Toolkit", 
              "Spring Boot", "Tailwind CSS", "JWT Auth", "Postman", "Linux/Bash", 
              "Responsive Web Design", "Data Structures & Algorithms"
            ].map((tag) => (
              <span
                key={tag}
                onMouseEnter={() => sounds.playHover()}
                style={{
                  padding: '0.45rem 0.95rem',
                  borderRadius: '8px',
                  background: 'rgba(0, 242, 254, 0.05)',
                  border: '1px solid rgba(0, 242, 254, 0.15)',
                  fontSize: '0.82rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#cbd5e1',
                  transition: 'all 0.2s ease',
                  cursor: 'default'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = 'var(--cyan)';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0, 242, 254, 0.15)';
                  e.currentTarget.style.color = '#cbd5e1';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
