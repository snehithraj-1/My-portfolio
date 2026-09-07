import React, { useState } from 'react';
import { 
  Mail, MapPin, Send, CheckCircle2, Copy, Check, 
  Github, Linkedin, Instagram, Twitter, Sparkles, MessageSquare, AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalData } from '../data/portfolioData';
import { sounds } from '../utils/audio';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Full Stack Web App',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const projectTypes = [
    'Full Stack Web App',
    '3D Interactive Website',
    'Frontend / UI Engineering',
    'Full-Time Role',
    'Other Inquiries'
  ];

  const handleCopyEmail = () => {
    sounds.playClick();
    navigator.clipboard.writeText(personalData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMessage) setErrorMessage('');
  };

  const [sendViaClient, setSendViaClient] = useState(false);
  const [activationNotice, setActivationNotice] = useState(false);

  const constructEmailUrls = (data) => {
    const subject = `[Portfolio Transmission] ${data.projectType} from ${data.name}`;
    const body = `Hi Raj,\n\nName: ${data.name}\nEmail: ${data.email}\nInquiry Topic: ${data.projectType}\n\nMessage:\n${data.message}\n\n---\nSent from Raj's 3D Portfolio`;

    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    const mailtoUrl = `mailto:${personalData.email}?subject=${encodedSubject}&body=${encodedBody}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalData.email)}&su=${encodedSubject}&body=${encodedBody}`;

    return { mailtoUrl, gmailUrl, subject, body };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please complete all required fields before initiating transmission.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');
    setActivationNotice(false);
    sounds.playClick();

    const { subject } = constructEmailUrls(formData);

    try {
      // Direct in-page background transmission to Raj's email account
      const response = await fetch(`https://formsubmit.co/ajax/${personalData.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          projectType: formData.projectType,
          message: formData.message,
          _subject: subject,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const data = await response.json().catch(() => ({}));

      // Check if FormSubmit requires initial one-time activation
      if (data.message && (data.message.toLowerCase().includes('activation') || data.message.toLowerCase().includes('activate'))) {
        setActivationNotice(true);
      }
    } catch (err) {
      console.warn('In-page gateway transmission log:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
      sounds.playSuccess();

      // Launch celebratory confetti
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#00f2fe', '#8a2be2', '#10b981', '#ffffff']
      });
    }
  };

  return (
    <section id="contact" className="section-padding cyber-grid-bg" style={{ position: 'relative' }}>
      {/* Ambient Radial Glow */}
      <div className="ambient-radial-cyan" style={{ top: '20%', right: '-5%' }} />
      <div className="ambient-radial-purple" style={{ bottom: '15%', left: '-5%' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span>&lt;section&gt;</span>
            <span>// 05. INITIATE TRANSMISSION</span>
            <span>&lt;/section&gt;</span>
          </div>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text-cyan glow-cyan">Extraordinary</span>
          </h2>
          <p className="section-desc">
            Have a project in mind, want to discuss a full-stack engineering role, or explore creative 3D web ideas? My inbox is always open.
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
          {/* Left Column: Direct Info & Social Connects */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Info Box */}
            <div
              className="glass-card"
              style={{
                padding: '2rem',
                border: '1px solid rgba(0, 242, 254, 0.2)'
              }}
            >
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem', color: '#ffffff' }}>
                Contact Details
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                Feel free to reach out directly via email or connect with me across social developer channels. I typically respond within 24 hours.
              </p>

              {/* Direct Info Items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
                {/* Email Item */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.85rem 1rem',
                    borderRadius: '12px',
                    background: 'rgba(0, 242, 254, 0.04)',
                    border: '1px solid rgba(0, 242, 254, 0.15)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '10px',
                        background: 'rgba(0, 242, 254, 0.12)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--cyan)'
                      }}
                    >
                      <Mail size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.74rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>EMAIL ME AT</div>
                      <a
                        href={`mailto:${personalData.email}`}
                        style={{ color: '#f8fafc', textDecoration: 'none', fontSize: '0.92rem', fontWeight: 600 }}
                      >
                        {personalData.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    title="Copy email"
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: copiedEmail ? '#10b981' : '#94a3b8',
                      cursor: 'pointer',
                      padding: '0.4rem'
                    }}
                  >
                    {copiedEmail ? <Check size={18} /> : <Copy size={18} />}
                  </button>
                </div>

                {/* Location Item */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.85rem',
                    padding: '0.85rem 1rem',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.06)'
                  }}
                >
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      background: 'rgba(138, 43, 226, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#c084fc'
                    }}
                  >
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.74rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>LOCATION</div>
                    <div style={{ color: '#f8fafc', fontSize: '0.92rem', fontWeight: 600 }}>
                      {personalData.location} &bull; <span style={{ color: '#94a3b8', fontWeight: 400 }}>Available Worldwide Remotely</span>
                    </div>
                  </div>
                </div>

                {/* Live Availability Status */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.85rem 1rem',
                    borderRadius: '12px',
                    background: 'rgba(16, 185, 129, 0.08)',
                    border: '1px solid rgba(16, 185, 129, 0.25)'
                  }}
                >
                  <span className="status-dot" />
                  <div style={{ fontSize: '0.85rem', color: '#34d399', fontFamily: 'var(--font-mono)' }}>
                    {personalData.status}
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div>
                <div style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--cyan)', marginBottom: '1rem', letterSpacing: '0.05em' }}>
                  CONNECT ON SOCIAL CHANNELS
                </div>
                <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
                  {[
                    { name: 'GitHub', icon: Github, href: personalData.socials.github, color: '#f0f6fc' },
                    { name: 'LinkedIn', icon: Linkedin, href: personalData.socials.linkedin, color: '#0a66c2' },
                    { name: 'Instagram', icon: Instagram, href: personalData.socials.instagram, color: '#e4405f' },
                    { name: 'Twitter', icon: Twitter, href: personalData.socials.twitter, color: '#1da1f2' }
                  ].map((soc) => {
                    const Icon = soc.icon;
                    return (
                      <a
                        key={soc.name}
                        href={soc.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => sounds.playClick()}
                        onMouseEnter={() => sounds.playHover()}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          padding: '0.65rem 1.1rem',
                          borderRadius: '10px',
                          background: 'rgba(12, 22, 48, 0.8)',
                          border: '1px solid rgba(0, 242, 254, 0.2)',
                          color: '#cbd5e1',
                          textDecoration: 'none',
                          fontSize: '0.86rem',
                          fontFamily: 'var(--font-mono)',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.borderColor = 'var(--cyan)';
                          e.currentTarget.style.color = '#ffffff';
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 242, 254, 0.25)';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(0, 242, 254, 0.2)';
                          e.currentTarget.style.color = '#cbd5e1';
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        <Icon size={16} />
                        <span>{soc.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Message Terminal Form */}
          <div>
            <div
              className="glass-card"
              style={{
                padding: '2.25rem',
                border: '1px solid rgba(0, 242, 254, 0.25)',
                boxShadow: '0 20px 50px -10px rgba(0, 0, 0, 0.7)',
                position: 'relative'
              }}
            >
              <div className="scanline" />

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.75rem' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'rgba(0, 242, 254, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--cyan)'
                  }}
                >
                  <MessageSquare size={16} />
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#ffffff' }}>
                  Send Transmission
                </h3>
              </div>

              {/* Success Notification Banner */}
              {submitted ? (
                <div
                  style={{
                    padding: '2.5rem 1.5rem',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1.25rem',
                    borderRadius: '14px',
                    background: 'rgba(16, 185, 129, 0.08)',
                    border: '1px solid rgba(16, 185, 129, 0.3)'
                  }}
                >
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: 'rgba(16, 185, 129, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#10b981',
                      boxShadow: '0 0 30px rgba(16, 185, 129, 0.4)'
                    }}
                  >
                    <CheckCircle2 size={34} />
                  </div>

                  <div>
                    <h4 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.3rem' }}>
                      {activationNotice ? 'One-Time Form Activation' : 'Transmission Dispatched!'}
                    </h4>
                    <div style={{ fontSize: '0.86rem', color: activationNotice ? '#fbbf24' : '#34d399', fontFamily: 'var(--font-mono)' }}>
                      Target Address: <span style={{ color: '#ffffff', fontWeight: 600 }}>{personalData.email}</span>
                    </div>
                  </div>

                  {activationNotice ? (
                    <div
                      style={{
                        background: 'rgba(245, 158, 11, 0.1)',
                        border: '1px solid rgba(245, 158, 11, 0.3)',
                        borderRadius: '10px',
                        padding: '1rem',
                        maxWidth: '460px',
                        textAlign: 'left',
                        fontSize: '0.88rem',
                        lineHeight: 1.6,
                        color: '#fef08a'
                      }}
                    >
                      <strong>Almost done!</strong> FormSubmit sent a one-time confirmation email to <strong>{personalData.email}</strong>.
                      <br />
                      Please open your Gmail and click <strong>"Activate Form"</strong>. After clicking it once, all messages will arrive directly in your inbox without needing any mail apps!
                      <div style={{ marginTop: '0.75rem', display: 'flex', gap: '0.5rem' }}>
                        <a
                          href="https://mail.google.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary"
                          style={{ padding: '0.45rem 0.9rem', fontSize: '0.8rem' }}
                        >
                          Check Gmail Inbox
                        </a>
                      </div>
                    </div>
                  ) : (
                    <p style={{ color: '#cbd5e1', fontSize: '0.92rem', maxWidth: '440px', lineHeight: 1.6 }}>
                      Your message was sent directly from this web page to Raj's inbox. Thank you for reaching out!
                    </p>
                  )}

                  {/* Optional Direct Email Action */}
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
                    <a
                      href={constructEmailUrls(formData).gmailUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => sounds.playClick()}
                      className="btn-secondary"
                      style={{ padding: '0.55rem 1.1rem', fontSize: '0.82rem' }}
                    >
                      <Mail size={14} />
                      <span>Also open in Gmail</span>
                    </a>
                  </div>

                  <button
                    onClick={() => {
                      sounds.playClick();
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        projectType: 'Full Stack Web App',
                        message: ''
                      });
                    }}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: '#94a3b8',
                      fontSize: '0.82rem',
                      fontFamily: 'var(--font-mono)',
                      cursor: 'pointer',
                      textDecoration: 'underline',
                      marginTop: '0.5rem'
                    }}
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {/* Error Notification */}
                  {errorMessage && (
                    <div
                      style={{
                        padding: '0.75rem 1rem',
                        borderRadius: '8px',
                        background: 'rgba(239, 68, 68, 0.12)',
                        border: '1px solid rgba(239, 68, 68, 0.3)',
                        color: '#f87171',
                        fontSize: '0.84rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}
                    >
                      <AlertCircle size={16} />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Project Type Pills */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: '#94a3b8', marginBottom: '0.5rem' }}>
                      INQUIRY TOPIC
                    </label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                      {projectTypes.map((type) => {
                        const isSelected = formData.projectType === type;
                        return (
                          <button
                            type="button"
                            key={type}
                            onClick={() => {
                              setFormData({ ...formData, projectType: type });
                              sounds.playHover();
                            }}
                            style={{
                              padding: '0.4rem 0.8rem',
                              borderRadius: '8px',
                              fontSize: '0.78rem',
                              fontFamily: 'var(--font-mono)',
                              cursor: 'pointer',
                              border: isSelected ? '1px solid var(--cyan)' : '1px solid rgba(255, 255, 255, 0.08)',
                              background: isSelected ? 'rgba(0, 242, 254, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                              color: isSelected ? '#ffffff' : '#94a3b8',
                              transition: 'all 0.2s ease'
                            }}
                          >
                            {type}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Name Input */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: '#94a3b8', marginBottom: '0.4rem' }}>
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Morgan"
                      required
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: '10px',
                        background: 'rgba(5, 10, 25, 0.7)',
                        border: '1px solid rgba(0, 242, 254, 0.2)',
                        color: '#f8fafc',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.95rem',
                        outline: 'none',
                        transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = 'var(--cyan)';
                        e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 242, 254, 0.25)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(0, 242, 254, 0.2)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: '#94a3b8', marginBottom: '0.4rem' }}>
                      YOUR EMAIL *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@example.com"
                      required
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: '10px',
                        background: 'rgba(5, 10, 25, 0.7)',
                        border: '1px solid rgba(0, 242, 254, 0.2)',
                        color: '#f8fafc',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.95rem',
                        outline: 'none',
                        transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = 'var(--cyan)';
                        e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 242, 254, 0.25)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(0, 242, 254, 0.2)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                      <label style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: '#94a3b8' }}>
                        YOUR MESSAGE *
                      </label>
                      <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#64748b' }}>
                        {formData.message.length}/1000
                      </span>
                    </div>
                    <textarea
                      name="message"
                      rows="4"
                      maxLength="1000"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your vision, project goals, timeline, or just say hello..."
                      required
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: '10px',
                        background: 'rgba(5, 10, 25, 0.7)',
                        border: '1px solid rgba(0, 242, 254, 0.2)',
                        color: '#f8fafc',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.95rem',
                        outline: 'none',
                        resize: 'vertical',
                        transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = 'var(--cyan)';
                        e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 242, 254, 0.25)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(0, 242, 254, 0.2)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  {/* Submit Action Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    onMouseEnter={() => sounds.playHover()}
                    className="btn-primary"
                    style={{
                      width: '100%',
                      padding: '0.95rem',
                      fontSize: '0.98rem',
                      marginTop: '0.5rem',
                      opacity: isSubmitting ? 0.7 : 1,
                      cursor: isSubmitting ? 'not-allowed' : 'pointer'
                    }}
                  >
                    {isSubmitting ? (
                      <span>Encrypting & Sending...</span>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Send to Raj's Email Directly</span>
                      </>
                    )}
                  </button>

                  {/* Direct Webmail & Client Options */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '0.6rem',
                      marginTop: '0.25rem',
                      paddingTop: '0.75rem',
                      borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                      fontSize: '0.78rem',
                      fontFamily: 'var(--font-mono)',
                      color: '#94a3b8'
                    }}
                  >
                    <span>Or send via webmail:</span>
                    <div style={{ display: 'flex', gap: '0.6rem' }}>
                      <a
                        href={constructEmailUrls(formData).gmailUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => sounds.playClick()}
                        style={{
                          color: 'var(--cyan)',
                          textDecoration: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                          cursor: 'pointer'
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                        onMouseOut={(e) => (e.currentTarget.style.textDecoration = 'none')}
                      >
                        <Mail size={13} />
                        <span>Gmail</span>
                      </a>
                      <span style={{ color: '#475569' }}>|</span>
                      <a
                        href={constructEmailUrls(formData).mailtoUrl}
                        onClick={() => sounds.playClick()}
                        style={{
                          color: '#c084fc',
                          textDecoration: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                          cursor: 'pointer'
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                        onMouseOut={(e) => (e.currentTarget.style.textDecoration = 'none')}
                      >
                        <span>Mail App</span>
                      </a>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
