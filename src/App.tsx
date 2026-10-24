import { useState, type FormEvent } from 'react'
import { Navbar } from './components/Navbar.tsx'
import { ProjectModal } from './components/ProjectModal.tsx'
import { ResumeModal } from './components/ResumeModal.tsx'
import { ProjectIcon, TechBrandIcon } from './components/ProjectIcons.tsx'
import {
  ALL_PROJECTS,
  HOMEPAGE_FEATURED_PROJECTS,
  type Project,
  type MockupFeaturedProject,
} from './data/portfolioData.ts'
import {
  TECHNICAL_SKILLS,
  SKILL_CATEGORIES,
  type SkillCategory,
} from './data/skillsData.ts'
import './App.css'

const CURRENT_YEAR = new Date().getFullYear()

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isResumeOpen, setIsResumeOpen] = useState(false)
  const [activeSkillCategory, setActiveSkillCategory] = useState<SkillCategory>('all')
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [filterCategory, setFilterCategory] = useState<string>('all')
  const [messageSubmitted, setMessageSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  // Filter skills based on tab
  const filteredSkills = TECHNICAL_SKILLS.filter((skill) =>
    activeSkillCategory === 'all' ? true : skill.category.includes(activeSkillCategory)
  )

  // Find full project data when user clicks "View Project" on a mockup featured card
  const handleViewFeaturedProject = (featured: MockupFeaturedProject) => {
    const full = ALL_PROJECTS.find(
      (p) =>
        p.id === featured.id ||
        p.name.toLowerCase().includes(featured.name.toLowerCase()) ||
        featured.name.toLowerCase().includes(p.name.toLowerCase())
    )

    if (full) {
      setSelectedProject(full)
    } else {
      // Fallback
      setSelectedProject({
        id: featured.id,
        name: featured.name,
        title: featured.title,
        localPath: 'D:\\FullStackProjects\\' + featured.id,
        domain: featured.badgeText === 'AI/ML' ? 'AI/ML' : featured.badgeText === 'Data Science' ? 'Data Science' : 'Web Development',
        category: featured.badgeText,
        architectureBadge: featured.tags.join(' + '),
        description: featured.description,
        tags: featured.tags,
        status: 'Publication Ready',
        githubUrl: featured.githubUrl,
        liveUrl: featured.liveUrl,
        featured: true,
      })
    }
  }

  // Handle contact form submit
  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email) return

    setMessageSubmitted(true)
    setTimeout(() => {
      setMessageSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 4000)
  }

  // Filter for the expanded "All Projects" explorer
  const inventoryProjects = ALL_PROJECTS.filter((p) => {
    if (filterCategory === 'all') return true
    if (filterCategory === 'aiml') return p.domain === 'AI/ML' || p.domain === 'Research'
    if (filterCategory === 'web') return p.domain === 'Web Development' || p.domain === 'Full-Stack Web Development' || p.domain === 'SaaS Products'
    if (filterCategory === 'data') return p.domain === 'Data Science'
    return true
  })

  return (
    <div className="portfolio-app-root">
      {/* Background ambient lighting glows */}
      <div className="bg-glow glow-top-left" aria-hidden="true" />
      <div className="bg-glow glow-top-right" aria-hidden="true" />
      <div className="bg-glow glow-mid-center" aria-hidden="true" />

      {/* Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      <main className="main-viewport">
        {/* =================================================================
            1. HERO SECTION (Exact Mockup Match)
            ================================================================= */}
        <section id="home" className="hero-section container">
          <div className="hero-content-grid">
            {/* Left Column: Headlines & CTAs */}
            <div className="hero-left">
              {/* Status Badge */}
              <div className="hero-status-pill">
                <span className="status-dot-pulse" aria-hidden="true" />
                <span className="status-text">MCA Student • AI/ML Enthusiast</span>
              </div>

              {/* Main Headline */}
              <h1 className="hero-heading">
                Hi, I’m Omkar.<br />
                I build software and<br />
                <span className="gradient-highlight">AI/ML</span> solutions.
              </h1>

              {/* Subtitle */}
              <p className="hero-subtext">
                I enjoy solving real-world problems with modern technologies,
                from machine learning to full-stack development.
              </p>

              {/* Action Buttons */}
              <div className="hero-actions-row">
                <a href="#projects" className="btn-hero-primary">
                  <span>View My Projects</span>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>

                <a href="#connect" className="btn-hero-secondary">
                  <span>Get in Touch</span>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Column: Holographic Cosmic Planet Orb */}
            <div className="hero-right">
              <div className="cosmic-orb-wrapper">
                <div className="cosmic-orb-glow" aria-hidden="true" />
                <img
                  src="/hero-orb.png"
                  alt="Cosmic holographic glowing AI orb"
                  className="cosmic-orb-image"
                  loading="eager"
                />

                {/* Vertical BUILD LEARN GROW Typography */}
                <div className="cosmic-vertical-labels">
                  <div className="vertical-word-group">
                    <span className="vertical-word">BUILD</span>
                    <span className="vertical-word">LEARN</span>
                    <span className="vertical-word">GROW</span>
                  </div>
                  <div className="vertical-accent-line" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            2. FEATURED PROJECTS SECTION (Exact 3x3 Grid of 9 Cards)
            ================================================================= */}
        <section id="projects" className="projects-section container">
          {/* Section Header */}
          <div className="section-head-row">
            <div>
              <span className="section-kicker">MY WORK</span>
              <h2 className="section-main-title">Featured Projects</h2>
              <p className="section-subtitle">
                A collection of my key projects that showcase my skills in AI/ML, web development and problem solving.
              </p>
            </div>

            <button
              type="button"
              className="btn-view-all-link"
              onClick={() => setShowAllProjects(!showAllProjects)}
            >
              <span>{showAllProjects ? 'Show Featured 9 ↑' : `View All Projects (${ALL_PROJECTS.length})`}</span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>

          {/* If "View All" is toggled, display category filters & all 23 projects */}
          {showAllProjects && (
            <div className="all-projects-filter-bar">
              <span className="filter-label">Filter domain:</span>
              <div className="filter-chips">
                <button
                  type="button"
                  className={`chip-btn ${filterCategory === 'all' ? 'active' : ''}`}
                  onClick={() => setFilterCategory('all')}
                >
                  All ({ALL_PROJECTS.length})
                </button>
                <button
                  type="button"
                  className={`chip-btn ${filterCategory === 'aiml' ? 'active' : ''}`}
                  onClick={() => setFilterCategory('aiml')}
                >
                  AI/ML &amp; Research
                </button>
                <button
                  type="button"
                  className={`chip-btn ${filterCategory === 'web' ? 'active' : ''}`}
                  onClick={() => setFilterCategory('web')}
                >
                  Web Dev &amp; SaaS
                </button>
                <button
                  type="button"
                  className={`chip-btn ${filterCategory === 'data' ? 'active' : ''}`}
                  onClick={() => setFilterCategory('data')}
                >
                  Data Science
                </button>
              </div>
            </div>
          )}

          {/* The 3x3 Grid of 9 Mockup-Exact Cards (or filtered view) */}
          <div className="mockup-cards-grid">
            {(showAllProjects ? inventoryProjects : HOMEPAGE_FEATURED_PROJECTS).map((item) => {
              const isFullProject = 'architectureBadge' in item
              const badgeText = isFullProject ? (item as Project).domain : (item as MockupFeaturedProject).badgeText
              const badgeType =
                badgeText === 'AI/ML' || badgeText === 'Research'
                  ? 'aiml'
                  : badgeText === 'Data Science'
                  ? 'datascience'
                  : 'webdev'
              const iconKey = isFullProject ? 'default' : (item as MockupFeaturedProject).iconKey
              const tags = item.tags.slice(0, 3)

              return (
                <article
                  key={item.id}
                  className="mockup-project-card"
                  onClick={() => {
                    if (isFullProject) {
                      setSelectedProject(item as Project)
                    } else {
                      handleViewFeaturedProject(item as MockupFeaturedProject)
                    }
                  }}
                >
                  {/* Card Header: Icon & Category Badge */}
                  <div className="card-top-bar">
                    <div className="card-icon-box">
                      <ProjectIcon name={iconKey} />
                    </div>
                    <span className={`card-badge-pill badge-${badgeType}`}>
                      {badgeText}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="card-project-title">{item.name}</h3>

                  {/* Tech stack tags */}
                  <div className="card-tech-pills">
                    {tags.map((tag) => (
                      <span key={tag} className="tech-pill-chip">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="card-project-desc">{item.description}</p>

                  {/* Footer link */}
                  <div className="card-bottom-link">
                    <span className="link-text">View Project</span>
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        {/* =================================================================
            3. TECHNICAL SKILLS SECTION (Tabs & Pill Grid)
            ================================================================= */}
        <section id="skills" className="skills-section container">
          {/* Section Header with Filter Tabs on the right */}
          <div className="section-head-row skills-head-row">
            <div>
              <span className="section-kicker">SKILLS</span>
              <h2 className="section-main-title">Technical Skills</h2>
              <p className="section-subtitle">
                Technologies and tools I use to build, learn and explore.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="skills-filter-nav" role="tablist" aria-label="Skills filter">
              {SKILL_CATEGORIES.map((tab) => {
                const isActive = activeSkillCategory === tab.id
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`skills-tab-pill ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveSkillCategory(tab.id as SkillCategory)}
                  >
                    {tab.label}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Skill Pills Grid */}
          <div className="skills-cards-grid">
            {filteredSkills.map((skill) => (
              <div key={skill.id} className="skill-card-pill">
                <div className="skill-icon-wrap">
                  <TechBrandIcon name={skill.icon} />
                </div>
                <span className="skill-name-label">{skill.name}</span>
                <span className="skill-status-dot" aria-hidden="true" />
              </div>
            ))}
          </div>
        </section>

        {/* =================================================================
            4. ABOUT ME SECTION (Left Text + Right 3 Cards)
            ================================================================= */}
        <section id="about" className="about-section container">
          <div className="about-content-grid">
            {/* Left Column */}
            <div className="about-left-col">
              <span className="section-kicker">ABOUT ME</span>
              <h2 className="section-main-title">More About Me</h2>
              <p className="about-bio-text">
                I'm an MCA student at Dr. B.A.M.U. I love building useful products, learning
                new technologies and solving challenging problems. I'm always open to new
                opportunities and collaborations.
              </p>

              <button
                type="button"
                className="btn-know-more"
                onClick={() => setIsResumeOpen(true)}
              >
                <span>Know More</span>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>

            {/* Right Column: 3 Cards */}
            <div className="about-right-cards">
              {/* Card 1: Education */}
              <div className="about-info-card">
                <div className="about-card-icon-box icon-purple">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <div className="about-card-body">
                  <h4 className="about-card-title">Education</h4>
                  <p className="about-card-text">MCA (2nd Year)</p>
                  <p className="about-card-subtext">Dr. B.A.M.U., Chh. Sambhajinagar</p>
                </div>
              </div>

              {/* Card 2: Interests */}
              <div className="about-info-card">
                <div className="about-card-icon-box icon-blue">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <div className="about-card-body">
                  <h4 className="about-card-title">Interests</h4>
                  <p className="about-card-text">AI/ML • Web Development</p>
                  <p className="about-card-subtext">Research • Open Source</p>
                </div>
              </div>

              {/* Card 3: Goal */}
              <div className="about-info-card">
                <div className="about-card-icon-box icon-rose">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                  </svg>
                </div>
                <div className="about-card-body">
                  <h4 className="about-card-title">Goal</h4>
                  <p className="about-card-text">Get a great job, keep learning</p>
                  <p className="about-card-subtext">and build impactful products.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            5. CONNECT & LEARN / CONTACT SECTION (Exact Match)
            ================================================================= */}
        <section id="connect" className="connect-section container">
          <div className="connect-content-grid">
            {/* Left Column */}
            <div className="connect-left-col">
              <span className="section-kicker">CONNECT &amp; LEARN</span>
              <h2 className="section-main-title">Let’s Build Something Together</h2>
              <p className="section-subtitle">
                Open to internships, collaborations and exciting opportunities.
              </p>

              {/* 4 Action Pills */}
              <div className="connect-links-row">
                <a
                  href="https://www.linkedin.com/in/omkadam04/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="connect-pill-btn"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 1 0 0-3.3 1.66 1.66 0 0 0 0 3.3m1.4 9.74v-8.37H5.06v8.37z" />
                  </svg>
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://github.com/OmkarKadam007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="connect-pill-btn"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>GitHub</span>
                </a>

                <a href="mailto:omkadam2204@gmail.com" className="connect-pill-btn">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span>Email</span>
                </a>

                {/* Resume Button explicitly requested by user */}
                <button
                  type="button"
                  className="connect-pill-btn btn-highlight-resume"
                  onClick={() => setIsResumeOpen(true)}
                  title="View Resume and Extra Background Info"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                  <span>Resume</span>
                </button>
              </div>

              {/* Recruiter extra info badges */}
              <div className="connect-extra-bar">
                <span className="extra-info-tag">📍 Chh. Sambhajinagar, India</span>
                <span className="extra-info-tag">🚀 Immediate Availability</span>
                <a
                  href="https://leetcode.com/u/omkar_kadam2204/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="extra-info-tag link-tag"
                >
                  LeetCode ↗
                </a>
              </div>
            </div>

            {/* Right Column: Send Me a Message Card */}
            <div className="connect-right-col">
              <div className="message-glass-card">
                <h3 className="message-card-title">Send Me a Message</h3>
                <p className="message-card-subtitle">
                  Feel free to reach out for any opportunities or just to say hi!
                </p>

                {messageSubmitted ? (
                  <div className="message-success-banner" role="status">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#34d399" strokeWidth="2.5">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <div>
                      <strong>Message Sent Successfully!</strong>
                      <p>Thank you for reaching out, Omkar will get back to you shortly.</p>
                    </div>
                  </div>
                ) : (
                  <form className="message-form" onSubmit={handleFormSubmit}>
                    {/* Name input */}
                    <div className="form-input-wrap">
                      <svg className="input-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      <input
                        type="text"
                        placeholder="Name"
                        className="form-input-field"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>

                    {/* Email input */}
                    <div className="form-input-wrap">
                      <svg className="input-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                      <input
                        type="email"
                        placeholder="Email"
                        className="form-input-field"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>

                    {/* Message textarea */}
                    <div className="form-input-wrap textarea-wrap">
                      <svg className="input-icon textarea-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                      </svg>
                      <textarea
                        placeholder="Your message..."
                        className="form-input-field form-textarea-field"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn-send-message">
                      <span>Send Message</span>
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =================================================================
          6. FOOTER (Exact Mockup Match)
          ================================================================= */}
      <footer className="mockup-footer container">
        <p className="footer-copyright">
          &copy; {CURRENT_YEAR} Omkar Kadam. All rights reserved.
        </p>

        <div className="footer-tagline">
          <span className="footer-green-dot" aria-hidden="true" />
          <span>Build • Learn • Grow</span>
        </div>
      </footer>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Resume & Extra Info Modal (Curriculum Vitae + Education + Certs + Coding Profiles) */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  )
}
