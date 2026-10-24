import { useEffect } from 'react'
import type { Project } from '../data/portfolioData.ts'
import './ProjectModal.css'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && project) {
        onClose()
      }
    }

    if (project) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  if (!project) return null

  // Stop click propagation inside modal card so backdrop click closes it
  const handleCardClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div className="modal-card" onClick={handleCardClick}>
        {/* Header */}
        <div className="modal-header">
          <div className="modal-badges">
            <span className="badge">{project.domain}</span>
            <span className="badge badge-accent">{project.architectureBadge}</span>
            <span className="badge">{project.status}</span>
          </div>

          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close project details"
          >
            &times;
          </button>
        </div>

        {/* Body */}
        <div className="modal-body">
          <div className="modal-title-area">
            <span className="modal-category">{project.category}</span>
            <h2 id="modal-project-title">{project.title}</h2>
          </div>

          {/* Local Audited Source Path */}
          <div className="modal-path-box">
            <span className="modal-path-label">Local Codebase:</span>
            <span>{project.localPath}</span>
          </div>

          {/* Architectural Context */}
          <div>
            <h3 className="modal-section-title">Architectural Overview</h3>
            <p className="modal-description">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Key Technical Features */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div>
              <h3 className="modal-section-title">Technical Capabilities &amp; Design</h3>
              <ul className="modal-features-list" role="list">
                {project.keyFeatures.map((feat) => (
                  <li key={feat} className="modal-feature-item">
                    <span className="modal-feature-bullet" aria-hidden="true">&bull;</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          <div>
            <h3 className="modal-section-title">Technologies &amp; Libraries</h3>
            <div className="modal-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="project-tag">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="modal-footer">
          <div className="modal-actions">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-secondary"
              >
                GitHub Repository
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-primary"
              >
                Live Demo
              </a>
            )}

            {!project.githubUrl && !project.liveUrl && (
              <span className="card-local-badge">Verified Local Codebase</span>
            )}
          </div>

          <button
            type="button"
            className="btn btn-sm btn-ghost"
            onClick={onClose}
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  )
}
