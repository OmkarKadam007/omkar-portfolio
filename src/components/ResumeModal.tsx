import { useState, useEffect } from 'react'
import { RESUME_DATA } from '../data/resumeData.ts'
import './ResumeModal.css'

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
}

type TabKey = 'full' | 'experience' | 'education' | 'skills' | 'profiles'

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [activeTab, setActiveTab] = useState<TabKey>('full')
  const [copied, setCopied] = useState(false)

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleCopySummary = () => {
    const text = `Omkar Kadam - ${RESUME_DATA.title}\n${RESUME_DATA.status}\nEmail: ${RESUME_DATA.email}\nGitHub: ${RESUME_DATA.github}\nLinkedIn: ${RESUME_DATA.linkedin}\nLeetCode: ${RESUME_DATA.leetcode}\n\nSummary:\n${RESUME_DATA.summary}`
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="resume-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="resume-title">
      <div className="resume-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="resume-modal-header">
          <div className="resume-header-info">
            <div className="resume-badge-row">
              <span className="resume-pill-badge">Curriculum Vitae</span>
              <span className="resume-status-badge">🟢 Open to Opportunities</span>
            </div>
            <h2 id="resume-title" className="resume-name">{RESUME_DATA.name}</h2>
            <p className="resume-subheading">{RESUME_DATA.title} • {RESUME_DATA.status}</p>
          </div>

          <div className="resume-modal-actions no-print">
            <button
              type="button"
              className="btn-resume-action btn-print"
              onClick={handlePrint}
              title="Print or Save as PDF"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 6 2 18 2 18 9" />
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                <rect x="6" y="14" width="12" height="8" />
              </svg>
              <span>Download / Print CV</span>
            </button>

            <button
              type="button"
              className="btn-resume-action"
              onClick={handleCopySummary}
              title="Copy Quick Info"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              <span>{copied ? 'Copied!' : 'Copy Summary'}</span>
            </button>

            <button
              type="button"
              className="btn-resume-close"
              onClick={onClose}
              aria-label="Close Resume Modal"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="resume-tabs-nav no-print" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'full'}
            className={`resume-tab-btn ${activeTab === 'full' ? 'active' : ''}`}
            onClick={() => setActiveTab('full')}
          >
            Full Resume
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'experience'}
            className={`resume-tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            Experience &amp; Research
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'education'}
            className={`resume-tab-btn ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            Education &amp; Academics
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'skills'}
            className={`resume-tab-btn ${activeTab === 'skills' ? 'active' : ''}`}
            onClick={() => setActiveTab('skills')}
          >
            Skills Matrix
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'profiles'}
            className={`resume-tab-btn ${activeTab === 'profiles' ? 'active' : ''}`}
            onClick={() => setActiveTab('profiles')}
          >
            Coding Profiles
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="resume-body-content">
          {/* Quick Contact Header Bar */}
          <div className="resume-contact-bar">
            <a href={`mailto:${RESUME_DATA.email}`} className="contact-chip">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>{RESUME_DATA.email}</span>
            </a>
            <span className="contact-chip">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>{RESUME_DATA.location}</span>
            </span>
            <a href={RESUME_DATA.linkedin} target="_blank" rel="noopener noreferrer" className="contact-chip">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 1 0 0-3.3 1.66 1.66 0 0 0 0 3.3m1.4 9.74v-8.37H5.06v8.37z" />
              </svg>
              <span>LinkedIn</span>
            </a>
            <a href={RESUME_DATA.github} target="_blank" rel="noopener noreferrer" className="contact-chip">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>GitHub</span>
            </a>
            <a href={RESUME_DATA.leetcode} target="_blank" rel="noopener noreferrer" className="contact-chip">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 4.818 3.557c.365.031.73.031 1.095 0a6.002 6.002 0 0 0 4.225-2.22l2.7-3.136a1.377 1.377 0 0 0 .318-.89 1.39 1.39 0 0 0-.411-.986 1.373 1.373 0 0 0-1.947 0l-2.7 3.136a3.245 3.245 0 0 1-2.284 1.201 3.213 3.213 0 0 1-.592 0 3.196 3.196 0 0 1-2.592-1.916 3.14 3.14 0 0 1-.189-.55 3.003 3.003 0 0 1-.033-1.277 2.87 2.87 0 0 1 .656-1.141l3.853-4.126 5.406-5.788a1.375 1.375 0 0 0-.961-2.45zm-2.836 12.393a1.375 1.375 0 0 0 0 2.75h9.978a1.375 1.375 0 1 0 0-2.75z" />
              </svg>
              <span>LeetCode</span>
            </a>
          </div>

          {/* Section: Professional Summary */}
          {(activeTab === 'full' || activeTab === 'experience') && (
            <div className="resume-section">
              <h3 className="resume-section-title">
                <span className="section-title-icon">✦</span>
                <span>Professional Summary</span>
              </h3>
              <p className="resume-paragraph">{RESUME_DATA.summary}</p>
            </div>
          )}

          {/* Section: Key Achievements */}
          {activeTab === 'full' && (
            <div className="resume-section">
              <h3 className="resume-section-title">
                <span className="section-title-icon">🏆</span>
                <span>Key Highlights &amp; Metrics</span>
              </h3>
              <ul className="resume-bullet-list">
                {RESUME_DATA.achievements.map((item, idx) => (
                  <li key={idx} className="resume-bullet-item">{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Section: Experience & Research */}
          {(activeTab === 'full' || activeTab === 'experience') && (
            <div className="resume-section">
              <h3 className="resume-section-title">
                <span className="section-title-icon">💼</span>
                <span>Experience &amp; Research</span>
              </h3>
              <div className="timeline-list">
                {RESUME_DATA.experience.map((exp, idx) => (
                  <div key={idx} className="timeline-card">
                    <div className="timeline-header">
                      <div>
                        <h4 className="timeline-role">{exp.role}</h4>
                        <span className="timeline-company">{exp.company} • {exp.location}</span>
                      </div>
                      <div className="timeline-meta">
                        <span className="timeline-tag">{exp.type}</span>
                        <span className="timeline-duration">{exp.duration}</span>
                      </div>
                    </div>
                    <p className="timeline-desc">{exp.description}</p>
                    <ul className="timeline-highlights">
                      {exp.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                    <div className="timeline-tech-row">
                      {exp.technologies.map((t) => (
                        <span key={t} className="timeline-tech-pill">{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section: Education */}
          {(activeTab === 'full' || activeTab === 'education') && (
            <div className="resume-section">
              <h3 className="resume-section-title">
                <span className="section-title-icon">🎓</span>
                <span>Education</span>
              </h3>
              <div className="timeline-list">
                {RESUME_DATA.education.map((edu, idx) => (
                  <div key={idx} className="timeline-card">
                    <div className="timeline-header">
                      <div>
                        <h4 className="timeline-role">{edu.degree}</h4>
                        <span className="timeline-company">{edu.institution} • {edu.location}</span>
                      </div>
                      <div className="timeline-meta">
                        {edu.grade && <span className="timeline-tag">{edu.grade}</span>}
                        <span className="timeline-duration">{edu.duration}</span>
                      </div>
                    </div>
                    <ul className="timeline-highlights">
                      {edu.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section: Technical Skills Matrix */}
          {(activeTab === 'full' || activeTab === 'skills') && (
            <div className="resume-section">
              <h3 className="resume-section-title">
                <span className="section-title-icon">⚙️</span>
                <span>Technical Skills Matrix</span>
              </h3>
              <div className="skills-matrix-grid">
                {RESUME_DATA.keySkills.map((cat, idx) => (
                  <div key={idx} className="skills-matrix-card">
                    <h5 className="skills-matrix-category">{cat.category}</h5>
                    <div className="skills-matrix-tags">
                      {cat.items.map((item) => (
                        <span key={item} className="matrix-pill">{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section: Certifications & Hackathons */}
          {(activeTab === 'full' || activeTab === 'education') && (
            <div className="resume-section">
              <h3 className="resume-section-title">
                <span className="section-title-icon">📜</span>
                <span>Certifications &amp; Hackathons</span>
              </h3>
              <div className="certs-grid">
                {RESUME_DATA.certifications.map((cert, idx) => (
                  <div key={idx} className="cert-card">
                    <div className="cert-top">
                      <h5 className="cert-title">{cert.title}</h5>
                      <span className="cert-date">{cert.date}</span>
                    </div>
                    <span className="cert-issuer">{cert.issuer}</span>
                    <div className="cert-skills">
                      {cert.skills.map((s) => (
                        <span key={s} className="cert-skill-pill">{s}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section: Coding Profiles */}
          {(activeTab === 'full' || activeTab === 'profiles') && (
            <div className="resume-section">
              <h3 className="resume-section-title">
                <span className="section-title-icon">⚡</span>
                <span>Competitive Coding &amp; Platforms</span>
              </h3>
              <div className="profiles-grid">
                <a
                  href={RESUME_DATA.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="profile-box leetcode"
                >
                  <div className="profile-box-header">
                    <span className="profile-platform">LeetCode</span>
                    <span className="profile-visit">Visit ↗</span>
                  </div>
                  <span className="profile-handle">@omkar_kadam2204</span>
                  <p className="profile-desc">Data structures, algorithm problem solving, arrays, trees, and dynamic programming.</p>
                </a>

                <a
                  href={RESUME_DATA.geeksforgeeks}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="profile-box gfg"
                >
                  <div className="profile-box-header">
                    <span className="profile-platform">GeeksforGeeks</span>
                    <span className="profile-visit">Visit ↗</span>
                  </div>
                  <span className="profile-handle">@omkarkadh0z6</span>
                  <p className="profile-desc">Core algorithmic challenges, math problem sets, and computer science concepts.</p>
                </a>

                <a
                  href="https://unstop.com/u/omkardes58583"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="profile-box unstop"
                >
                  <div className="profile-box-header">
                    <span className="profile-platform">Unstop</span>
                    <span className="profile-visit">Visit ↗</span>
                  </div>
                  <span className="profile-handle">@omkardes58583</span>
                  <p className="profile-desc">National hackathons, coding assessments, and competitive engineering quizzes.</p>
                </a>

                <a
                  href="https://namastedev.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="profile-box namastedev"
                >
                  <div className="profile-box-header">
                    <span className="profile-platform">NamasteDev</span>
                    <span className="profile-visit">Visit ↗</span>
                  </div>
                  <span className="profile-handle">@omkarkadam2204</span>
                  <p className="profile-desc">Advanced JavaScript internal architecture, React engine, and Frontend system design.</p>
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="resume-modal-footer no-print">
          <span className="footer-status-text">Ready for immediate interview &amp; onboarding</span>
          <div className="footer-actions">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
            <a href={`mailto:${RESUME_DATA.email}?subject=Job Opportunity / Discussion - Omkar Kadam`} className="btn btn-primary">
              Contact Omkar
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
