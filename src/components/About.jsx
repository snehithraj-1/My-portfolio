import React, { useState } from 'react';
import { Terminal, Code, Cpu, Globe, Zap, CheckCircle2, Copy, Check, Sparkles, UserCheck } from 'lucide-react';
import { personalData, terminalCode } from '../data/portfolioData';
import { sounds } from '../utils/audio';

export default function About() {
  const [activeTab, setActiveTab] = useState('config');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    sounds.playClick();
    navigator.clipboard.writeText(terminalCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const philosophyText = `# Architectural Philosophy

1. Build Fast & Smart with AI
- Leverage AI models, prompt engineering, and intelligent tooling to ship production-ready apps at 10x speed.
- Automate boilerplate so focus remains on problem-solving, UI polish, and user value.

2. User-Centric 3D & Modern Interfaces
- Interactive 3D web applications should enhance delight, clarity, and engagement.
- Responsive, fluid, and intuitive across all device screens.

3. Continuous Learning & Pragmatic Execution
- Experiment with state-of-the-art AI agents and modern web architectures.
- Clean, functional code engineered to solve real-world problems.`;

  const stackText = `{
  "frameworks": ["React 18", "Express.js", "Spring Boot"],
  "graphics": ["Three.js", "WebGL", "Canvas API"],
  "state_and_sync": ["Redux Toolkit", "Socket.io", "REST", "GraphQL"],
  "databases": ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
  "ai_stack": ["OpenAI API", "Claude", "LangChain Agents"],
  "philosophy": "Continuous learning & building solutions that matter."
}`;

  return (
    <section id="about" className="section-padding cyber-grid-bg" style={{ position: 'relative' }}>
      {/* Ambient Glows */}
      <div className="ambient-radial-purple" style={{ top: '20%', left: '-10%' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span>&lt;section&gt;</span>
            <span>// 01. ABOUT ME</span>
            <span>&lt;/section&gt;</span>
          </div>
          <h2 className="section-title">
            Passionate Student, <span className="gradient-text-cyan glow-cyan">AI Application Builder</span>
          </h2>
          <p className="section-desc">
            Harnessing Artificial Intelligence, prompt engineering, and modern web frameworks to build impactful, real-world digital applications.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Holographic Profile & Mission */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Holographic Card */}
            <div
              className="glass-card"
              style={{
                padding: '2rem',
                border: '1px solid rgba(0, 242, 254, 0.25)',
                position: 'relative'
              }}
              onMouseEnter={() => sounds.playHover()}
            >
              <div className="scanline" />

              {/* Avatar & Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.5rem' }}>
                <div
                  style={{
                    position: 'relative',
                    width: '74px',
                    height: '74px',
                    borderRadius: '20px',
                    background: 'linear-gradient(135deg, #00f2fe 0%, #8a2be2 100%)',
                    padding: '3px',
                    boxShadow: '0 0 25px rgba(0, 242, 254, 0.4)'
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '17px',
                      background: '#070e24',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--cyan)',
                      fontSize: '1.8rem',
                      fontWeight: 800,
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    R
                  </div>
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-2px',
                      right: '-2px',
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      backgroundColor: '#10b981',
                      border: '3px solid #070e24',
                      boxShadow: '0 0 8px #10b981'
                    }}
                  />
                </div>

                <div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}>{personalData.name}</h3>
                  <div
                    style={{
                      fontSize: '0.88rem',
                      color: 'var(--cyan)',
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    {personalData.title}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '0.25rem' }}>
                    CS Undergraduate & AI Application Builder
                  </div>
                </div>
              </div>

              {/* Narrative Bio */}
              <p style={{ color: '#cbd5e1', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {personalData.bio}
              </p>

              {/* Core Interests Badges */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.75rem' }}>
                {[
                  { title: "Building Applications Using AI", desc: "Harnessing LLMs, prompt workflows & AI tools to build software at high speed" },
                  { title: "Full-Cycle Product Building", desc: "Crafting frontends, cloud databases & real-world features powered by AI" },
                  { title: "Immersive 3D & Modern Web", desc: "Three.js, WebGL shaders & interactive digital user experiences" },
                  { title: "Algorithmic Problem Solving", desc: "500+ algorithmic challenges solved with clean, efficient code in C++" }
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      padding: '0.65rem 0.85rem',
                      borderRadius: '10px',
                      background: 'rgba(0, 242, 254, 0.04)',
                      border: '1px solid rgba(0, 242, 254, 0.1)'
                    }}
                  >
                    <CheckCircle2 size={17} color="var(--cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#f1f5f9' }}>{item.title}</div>
                      <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Actions */}
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href="#contact"
                  onClick={() => sounds.playClick()}
                  className="btn-primary"
                  style={{ flex: 1, padding: '0.75rem 1.25rem', fontSize: '0.88rem' }}
                >
                  <Sparkles size={16} />
                  <span>Let's Build Together</span>
                </a>
                <a
                  href="#projects"
                  onClick={() => sounds.playClick()}
                  className="btn-secondary"
                  style={{ flex: 1, padding: '0.75rem 1.25rem', fontSize: '0.88rem' }}
                >
                  <span>Explore Projects</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Cyber Terminal Window */}
          <div>
            <div
              className="glass-card"
              style={{
                border: '1px solid rgba(0, 242, 254, 0.25)',
                boxShadow: '0 20px 50px -10px rgba(0, 0, 0, 0.7)'
              }}
            >
              {/* Terminal Window Bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.8rem 1.25rem',
                  background: 'rgba(5, 10, 25, 0.9)',
                  borderBottom: '1px solid rgba(0, 242, 254, 0.15)'
                }}
              >
                {/* Window Controls */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#eab308' }} />
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e' }} />
                  <span style={{ marginLeft: '0.5rem', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: '#64748b' }}>
                    bash - raj@workspace:~
                  </span>
                </div>

                {/* Copy Button */}
                <button
                  onClick={handleCopy}
                  title="Copy snippet"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '6px',
                    padding: '0.3rem 0.6rem',
                    color: '#94a3b8',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    cursor: 'pointer'
                  }}
                >
                  {copied ? <Check size={13} color="#10b981" /> : <Copy size={13} />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Terminal Tabs */}
              <div
                style={{
                  display: 'flex',
                  background: 'rgba(7, 13, 30, 0.7)',
                  borderBottom: '1px solid rgba(0, 242, 254, 0.1)',
                  padding: '0 0.75rem'
                }}
              >
                {[
                  { id: 'config', name: 'raj.config.js', icon: Code },
                  { id: 'philosophy', name: 'philosophy.md', icon: Terminal },
                  { id: 'stack', name: 'ecosystem.json', icon: Cpu }
                ].map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setActiveTab(tab.id);
                        sounds.playClick();
                      }}
                      onMouseEnter={() => sounds.playHover()}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                        padding: '0.65rem 1rem',
                        fontSize: '0.82rem',
                        fontFamily: 'var(--font-mono)',
                        color: isActive ? 'var(--cyan)' : '#64748b',
                        background: isActive ? 'rgba(0, 242, 254, 0.08)' : 'transparent',
                        border: 'none',
                        borderBottom: isActive ? '2px solid var(--cyan)' : '2px solid transparent',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <Icon size={14} />
                      <span>{tab.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Terminal Code Content */}
              <div
                style={{
                  padding: '1.5rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.86rem',
                  lineHeight: 1.7,
                  minHeight: '340px',
                  maxHeight: '440px',
                  overflowY: 'auto',
                  background: '#040714'
                }}
              >
                {activeTab === 'config' && (
                  <pre style={{ margin: 0, color: '#e2e8f0', whiteSpace: 'pre-wrap' }}>
                    <code dangerouslySetInnerHTML={{
                      __html: terminalCode
                        .replace(/(\/\/.*)/g, '<span style="color: #64748b;">$1</span>')
                        .replace(/const|return|export default/g, '<span style="color: #c084fc;">$&</span>')
                        .replace(/"([^"]*)"/g, '<span style="color: #38bdf8;">"$1"</span>')
                    }} />
                  </pre>
                )}

                {activeTab === 'philosophy' && (
                  <pre style={{ margin: 0, color: '#e2e8f0', whiteSpace: 'pre-wrap' }}>
                    <code dangerouslySetInnerHTML={{
                      __html: philosophyText
                        .replace(/(#.*)/g, '<span style="color: var(--cyan); font-weight: bold;">$1</span>')
                        .replace(/(\d+\..*)/g, '<span style="color: #c084fc; font-weight: 600;">$1</span>')
                    }} />
                  </pre>
                )}

                {activeTab === 'stack' && (
                  <pre style={{ margin: 0, color: '#e2e8f0', whiteSpace: 'pre-wrap' }}>
                    <code dangerouslySetInnerHTML={{
                      __html: stackText
                        .replace(/"([^"]+)":/g, '<span style="color: var(--cyan);">$1:</span>')
                        .replace(/"([^"]+)"/g, '<span style="color: #38bdf8;">"$1"</span>')
                    }} />
                  </pre>
                )}
              </div>

              {/* Terminal Status Bar */}
              <div
                style={{
                  padding: '0.5rem 1rem',
                  background: 'rgba(5, 10, 25, 0.95)',
                  borderTop: '1px solid rgba(0, 242, 254, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#64748b'
                }}
              >
                <span>UTF-8 &bull; JavaScript &bull; Ready</span>
                <span style={{ color: 'var(--cyan)' }}>Build v2.4.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
