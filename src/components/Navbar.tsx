import { useState, useEffect } from 'react'
import './Navbar.css'

interface NavItem {
  label: string
  href: string
}

const NAV_ITEMS: readonly NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Connect', href: '#connect' },
]

interface NavbarProps {
  onOpenResume?: () => void
}

export function Navbar({ onOpenResume }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isDark, setIsDark] = useState(true)

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200
      const sections = ['home', 'projects', 'skills', 'about', 'connect']
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  // Prevent background scroll when mobile menu is open
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

  const handleLinkClick = (href: string) => {
    setIsOpen(false)
    const sectionId = href.replace('#', '')
    setActiveSection(sectionId)
  }

  const toggleTheme = () => {
    setIsDark(!isDark)
    // subtle ambient toggle
    document.documentElement.classList.toggle('theme-subtle-glow')
  }

  return (
    <header className="navbar-header" role="banner">
      <div className="container navbar-inner">
        {/* Left: Brand / Terminal Wordmark */}
        <a
          href="#home"
          className="navbar-brand"
          onClick={() => handleLinkClick('#home')}
          aria-label="Omkar Kadam - Return to Home"
        >
          <span className="brand-prompt">&gt;_</span>
          <span className="brand-name">Omkar Kadam</span>
        </a>

        {/* Center: Floating Capsule Navigation */}
        <nav className="navbar-capsule-nav" aria-label="Main Navigation">
          <ul className="navbar-capsule-links" role="list">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace('#', '')
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`capsule-nav-item ${isActive ? 'active' : ''}`}
                    onClick={() => handleLinkClick(item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Right Controls: Sun Toggle & GitHub Pill */}
        <div className="navbar-right-controls">
          <button
            type="button"
            className="btn-theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme brightness"
            title="Toggle lighting"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="M4.93 4.93l1.41 1.41" />
              <path d="M17.66 17.66l1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="M6.34 17.66l-1.41 1.41" />
              <path d="M19.07 4.93l-1.41 1.41" />
            </svg>
          </button>

          <a
            href="https://github.com/OmkarKadam007"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-github-pill"
            aria-label="Visit Omkar's GitHub profile"
          >
            <span>GitHub</span>
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>

          {onOpenResume && (
            <button
              type="button"
              className="btn-resume-nav-pill"
              onClick={onOpenResume}
              title="Open Resume & Extra Info"
            >
              <span>CV</span>
            </button>
          )}

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="navbar-toggle"
            aria-expanded={isOpen}
            aria-controls="mobile-nav-menu"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className={`hamburger-bar ${isOpen ? 'open' : ''}`} aria-hidden="true" />
            <span className={`hamburger-bar ${isOpen ? 'open' : ''}`} aria-hidden="true" />
            <span className={`hamburger-bar ${isOpen ? 'open' : ''}`} aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        id="mobile-nav-menu"
        className={`navbar-mobile-menu ${isOpen ? 'open' : ''}`}
        aria-hidden={!isOpen}
      >
        <nav aria-label="Mobile Navigation">
          <ul className="navbar-mobile-links" role="list">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace('#', '')
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                    onClick={() => handleLinkClick(item.href)}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="mobile-active-dot" aria-hidden="true" />}
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="mobile-actions">
            {onOpenResume && (
              <button
                type="button"
                className="btn btn-md btn-secondary"
                onClick={() => {
                  setIsOpen(false)
                  onOpenResume()
                }}
              >
                View Full Resume &amp; Info
              </button>
            )}
            <a
              href="https://github.com/OmkarKadam007"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-md btn-primary"
            >
              GitHub Profile ↗
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
