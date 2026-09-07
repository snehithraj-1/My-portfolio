import React, { useState } from 'react';
import { GraduationCap, Award, Rocket, Compass, CheckCircle, Calendar, Sparkles } from 'lucide-react';
import { experienceTimeline } from '../data/portfolioData';
import { sounds } from '../utils/audio';

const badgeIconMap = {
  Education: GraduationCap,
  Milestone: Award,
  Innovation: Rocket,
  Vision: Compass
};

const badgeColorMap = {
  Education: '#00f2fe',
  Milestone: '#3b82f6',
  Innovation: '#a855f7',
  Vision: '#10b981'
};

export default function Experience() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section id="experience" className="section-padding" style={{ position: 'relative' }}>
      {/* Ambient Radial Glow */}
      <div className="ambient-radial-cyan" style={{ top: '25%', left: '-5%' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span>&lt;section&gt;</span>
            <span>// 04. CHRONICLES & MILESTONES</span>
            <span>&lt;/section&gt;</span>
          </div>
          <h2 className="section-title">
            Education & <span className="gradient-text-purple glow-purple">Learning Journey</span>
          </h2>
          <p className="section-desc">
            A chronological timeline of my academic milestones, hands-on engineering experiences, full-stack achievements, and future tech horizons.
          </p>
        </div>

        {/* Timeline Container */}
        <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto', padding: '1rem 0' }}>
          {/* Central Cyber Neon Spine */}
          <div
            style={{
              position: 'absolute',
              top: '2rem',
              bottom: '2rem',
              left: '50%',
              width: '2px',
              transform: 'translateX(-50%)',
              background: 'linear-gradient(180deg, #00f2fe 0%, #8a2be2 50%, #10b981 100%)',
              boxShadow: '0 0 15px rgba(0, 242, 254, 0.5)'
            }}
            className="timeline-spine"
          />

          {/* Timeline Nodes */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
            {experienceTimeline.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const Icon = badgeIconMap[item.badge] || Sparkles;
              const accentColor = badgeColorMap[item.badge] || '#00f2fe';
              const isHovered = hoveredIdx === idx;

              return (
                <div
                  key={idx}
                  onMouseEnter={() => {
                    setHoveredIdx(idx);
                    sounds.playHover();
                  }}
                  onMouseLeave={() => setHoveredIdx(null)}
                  style={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%'
                  }}
                  className={`timeline-row ${isEven ? 'row-left' : 'row-right'}`}
                >
                  {/* Central Pulsing Beacon Node */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background: '#070d1e',
                      border: `2px solid ${accentColor}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: accentColor,
                      boxShadow: isHovered
                        ? `0 0 25px ${accentColor}, inset 0 0 10px ${accentColor}`
                        : `0 0 12px ${accentColor}66`,
                      zIndex: 3,
                      transition: 'all 0.3s ease'
                    }}
                    className="timeline-node"
                  >
                    <Icon size={18} />
                  </div>

                  {/* Content Card Container */}
                  <div
                    style={{
                      width: '45%',
                      marginLeft: isEven ? '0' : 'auto',
                      marginRight: isEven ? 'auto' : '0'
                    }}
                    className="timeline-card-wrapper"
                  >
                    <div
                      className="glass-card"
                      style={{
                        padding: '1.75rem',
                        borderColor: isHovered ? accentColor : 'rgba(0, 242, 254, 0.15)',
                        boxShadow: isHovered
                          ? `0 15px 35px -10px ${accentColor}33, 0 0 15px ${accentColor}22`
                          : 'none',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {/* Badge & Period */}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
                        <span
                          style={{
                            fontSize: '0.74rem',
                            fontFamily: 'var(--font-mono)',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '9999px',
                            background: `${accentColor}15`,
                            border: `1px solid ${accentColor}40`,
                            color: accentColor
                          }}
                        >
                          {item.badge}
                        </span>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#94a3b8', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
                          <Calendar size={13} />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      {/* Title & Role */}
                      <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.25rem', color: '#ffffff' }}>
                        {item.title}
                      </h3>
                      <div style={{ fontSize: '0.88rem', color: 'var(--cyan)', fontFamily: 'var(--font-mono)', marginBottom: '0.75rem' }}>
                        {item.role} &bull; <span style={{ color: '#94a3b8' }}>{item.organization}</span>
                      </div>

                      {/* Description */}
                      <p style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                        {item.description}
                      </p>

                      {/* Key Achievements List */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {item.achievements.map((ach, aIdx) => (
                          <div key={aIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.82rem', color: '#94a3b8' }}>
                            <CheckCircle size={14} color={accentColor} style={{ flexShrink: 0, marginTop: '3px' }} />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Responsive adjustments */}
      <style>{`
        @media (max-width: 768px) {
          .timeline-spine {
            left: 20px !important;
            transform: none !important;
          }
          .timeline-node {
            left: 20px !important;
            transform: translateX(-50%) !important;
          }
          .timeline-card-wrapper {
            width: calc(100% - 50px) !important;
            margin-left: 50px !important;
            margin-right: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
