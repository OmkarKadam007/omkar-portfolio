import { PROFILE_GROUPS, type ProfileGroup, type ProfileLink } from '../data/profileData.ts'
import './ConnectLearn.css'

function CategoryIcon({ type }: { type: ProfileGroup['categoryIcon'] }) {
  if (type === 'network') {
    return (
      <svg
        viewBox="0 0 24 24"
        width="14"
        height="14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    )
  }

  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

function PlatformIcon({ icon }: { icon: ProfileLink['icon'] }) {
  switch (icon) {
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 1 0 0-3.3 1.66 1.66 0 0 0 0 3.3m1.4 9.74v-8.37H5.06v8.37z" />
        </svg>
      )
    case 'x':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    case 'github':
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      )
    case 'leetcode':
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 4.818 3.557c.365.031.73.031 1.095 0a6.002 6.002 0 0 0 4.225-2.22l2.7-3.136a1.377 1.377 0 0 0 .318-.89 1.39 1.39 0 0 0-.411-.986 1.373 1.373 0 0 0-1.947 0l-2.7 3.136a3.245 3.245 0 0 1-2.284 1.201 3.213 3.213 0 0 1-.592 0 3.196 3.196 0 0 1-2.592-1.916 3.14 3.14 0 0 1-.189-.55 3.003 3.003 0 0 1-.033-1.277 2.87 2.87 0 0 1 .656-1.141l3.853-4.126 5.406-5.788a1.375 1.375 0 0 0-.961-2.45zm-2.836 12.393a1.375 1.375 0 0 0 0 2.75h9.978a1.375 1.375 0 1 0 0-2.75z" />
        </svg>
      )
    case 'geeksforgeeks':
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
          <path d="M19.164 12.336a6.564 6.564 0 0 0-1.848-4.637 6.57 6.57 0 0 0-4.646-1.929 6.574 6.574 0 0 0-4.646 1.929 6.563 6.563 0 0 0-1.848 4.637c-.015.694.084 1.386.293 2.046a6.592 6.592 0 0 0 6.201 4.548 6.592 6.592 0 0 0 6.201-4.548c.209-.66.308-1.352.293-2.046zm-6.494 4.526a4.57 4.57 0 0 1-4.56-4.526c0-1.22.482-2.388 1.341-3.245a4.582 4.582 0 0 1 3.219-1.335c1.21 0 2.37.48 3.219 1.335a4.578 4.578 0 0 1 1.341 3.245c0 1.22-.482 2.388-1.341 3.245a4.585 4.585 0 0 1-3.219 1.281zm3.693-3.694h-2.923v-1.66h4.583a6.49 6.49 0 0 1-.027 1.66h-1.633z" />
        </svg>
      )
    case 'unstop':
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
          <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.3l6.7 3.7v7.9L12 19.6l-6.7-3.7V8l6.7-3.7zm-2 5.7v4.5c0 1.1.9 2 2 2s2-.9 2-2V10h-1.8v4.3c0 .1-.1.2-.2.2s-.2-.1-.2-.2V10H10z" />
        </svg>
      )
    case 'namastedev':
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
          <path d="M12 3a9 9 0 0 0-9 9c0 4.97 4.03 9 9 9s9-4.03 9-9a9 9 0 0 0-9-9zm-1.5 5.25c.69 0 1.25.56 1.25 1.25v5a1.25 1.25 0 0 1-2.5 0v-5c0-.69.56-1.25 1.25-1.25zm3 0c.69 0 1.25.56 1.25 1.25v5a1.25 1.25 0 0 1-2.5 0v-5c0-.69.56-1.25 1.25-1.25zm-6 3.75l2.25 2.25L8.5 15.75 5 12.25l3.5-3.5 1.25 1.25L7.5 12.25zm9 0l-1.25-1.25 1.25-1.25 3.5 3.5-3.5 3.5-1.25-1.25 2.25-2.25z" />
        </svg>
      )
  }
}

export function ConnectLearn() {
  return (
    <section id="connect-learn" className="section connect-learn-section" aria-labelledby="connect-learn-title">
      <div className="connect-ambient-glow" aria-hidden="true" />
      <div className="container">
        <div className="section-header">
          <h2 id="connect-learn-title" className="section-title">
            Connect &amp; Learn
          </h2>
          <p className="section-description">
            My verified profiles across professional networks, open-source repositories, and coding platforms.
          </p>
        </div>

        <div className="connect-grid">
          {PROFILE_GROUPS.map((group) => (
            <div
              key={group.id}
              className={`anti-gravity-card ${group.animationVariant}`}
            >
              <div className="connect-card-header">
                <div className="connect-card-title-wrap">
                  <h3 className="connect-card-title">{group.title}</h3>
                </div>
                <span className="connect-card-badge">
                  <span className="connect-badge-icon">
                    <CategoryIcon type={group.categoryIcon} />
                  </span>
                  <span>{group.badge}</span>
                </span>
              </div>

              <ul className="connect-links-list" role="list">
                {group.links.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="connect-link-row"
                      title={`${link.platform} Profile`}
                      aria-label={`${link.platform} profile: ${link.username} (opens in a new tab)`}
                    >
                      <div className="connect-link-left">
                        <div className="connect-platform-icon-wrap">
                          <PlatformIcon icon={link.icon} />
                        </div>
                        <div className="connect-platform-meta">
                          <span className="connect-platform-name">{link.platform}</span>
                          <span className="connect-platform-handle">{link.username}</span>
                        </div>
                      </div>

                      <span className="connect-link-arrow" aria-hidden="true">
                        <svg
                          viewBox="0 0 24 24"
                          width="16"
                          height="16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="7" y1="17" x2="17" y2="7" />
                          <polyline points="7 7 17 7 17 17" />
                        </svg>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
