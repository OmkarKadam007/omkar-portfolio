import type { ReactNode } from 'react'

export function ProjectIcon({ name }: { name: string }): ReactNode {
  switch (name) {
    case 'brain': // Deepfake AI Detector
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#c084fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z" />
          <path d="M9 22h6" />
          <path d="M12 9v4" />
          <path d="M10 11h4" />
        </svg>
      )
    case 'snapclass': // SnapClass
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    case 'car': // Car Damage Detection
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <circle cx="12" cy="11" r="3" />
        </svg>
      )
    case 'voice': // FlowVoice
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
          <line x1="12" y1="19" x2="12" y2="23" />
          <line x1="8" y1="23" x2="16" y2="23" />
        </svg>
      )
    case 'vireo': // Vireo Refund Intelligence
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#c084fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
          <path d="M3 20h18" />
        </svg>
      )
    case 'studynotion': // StudyNotion
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      )
    case 'tasksphere': // QuickApps TaskSphere
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 11 12 14 22 4" />
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </svg>
      )
    case 'swiggy': // Swiggy Clone
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
          <line x1="6" y1="1" x2="6" y2="4" />
          <line x1="10" y1="1" x2="10" y2="4" />
          <line x1="14" y1="1" x2="14" y2="4" />
        </svg>
      )
    case 'forest': // Algerian Forest Fire
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#c084fc" strokeWidth="2">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      )
  }
}

export function TechBrandIcon({ name }: { name: string }): ReactNode {
  switch (name) {
    case 'python':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18">
          <path fill="#3776AB" d="M11.9 1C6.9 1 7.2 3.2 7.2 3.2v2.3h4.9v.7H5.2S2 5.8 2 10.8s2.8 5 2.8 5h1.7v-2.5s-.1-2.9 2.9-2.9h4.9s2.8.1 2.8-2.7V3.8s.4-2.8-5.2-2.8zm-1.4 1.6c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z" />
          <path fill="#FFD43B" d="M12.1 23c5 0 4.7-2.2 4.7-2.2v-2.3h-4.9v-.7h6.9s3.2.4 3.2-4.6-2.8-5-2.8-5h-1.7v2.5s.1 2.9-2.9 2.9h-4.9s-2.8-.1-2.8 2.7v4.9s-.4 2.8 5.2 2.8zm1.4-1.6c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z" />
        </svg>
      )
    case 'javascript':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path fill="#000000" d="M6.5 18.5l1.6-.97c.33.56.63.98 1.25.98.63 0 1.04-.25 1.04-.84v-5.67h1.94v5.69c0 1.69-1 2.45-2.6 2.45-1.42 0-2.34-.73-2.83-1.64zm7.4-1.12l1.6-.93c.42.7.98 1.18 1.77 1.18.77 0 1.27-.39 1.27-.93 0-.64-.51-.88-1.41-1.28l-.49-.21c-1.4-.6-2.32-1.37-2.32-2.97 0-1.48 1.14-2.6 2.89-2.6 1.25 0 2.14.43 2.77 1.54l-1.5.96c-.33-.58-.69-.82-1.27-.82-.58 0-.99.36-.99.82 0 .58.39.81 1.25 1.18l.49.21c1.61.69 2.51 1.45 2.51 3.09 0 1.77-1.39 2.73-3.23 2.73-1.83 0-2.92-.89-3.47-1.97z" />
        </svg>
      )
    case 'typescript':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18">
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path fill="#ffffff" d="M3.75 11.25h5.5v1.75h-1.8v6.75h-1.9v-6.75h-1.8v-1.75zm8.5 4.5c.3.8 1 1.3 2 1.3.8 0 1.4-.4 1.4-1 0-.6-.4-.9-1.4-1.3l-.6-.2c-1.4-.6-2.3-1.2-2.3-2.6 0-1.5 1.2-2.6 2.9-2.6 1.4 0 2.4.6 2.9 1.7l-1.4.8c-.3-.6-.7-.9-1.5-.9-.6 0-1.1.3-1.1.8 0 .5.4.8 1.2 1.1l.6.2c1.7.7 2.5 1.4 2.5 2.8 0 1.7-1.4 2.7-3.3 2.7-1.7 0-2.8-.8-3.3-2l1.3-.9z" />
        </svg>
      )
    case 'react':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
          <ellipse cx="12" cy="12" rx="4" ry="10" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="4" ry="10" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(90 12 12)" />
          <ellipse cx="12" cy="12" rx="4" ry="10" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(150 12 12)" />
          <circle cx="12" cy="12" r="2" fill="#61DAFB" />
        </svg>
      )
    case 'nextjs':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18">
          <circle cx="12" cy="12" r="11" fill="#000000" stroke="#ffffff" strokeWidth="1.5" />
          <path fill="#ffffff" d="M14.5 8h2v8h-2zM8.5 8h2l4.8 7.2V8h1.6v8h-2L9.9 8.8V16H8.5z" />
        </svg>
      )
    case 'nodejs':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="#5FA04E">
          <path d="M12 2l9 5.2v10.4L12 23l-9-5.4V7.2L12 2zm0 2.3L4.8 8.5v7.2L12 20l7.2-4.3V8.5L12 4.3z" />
        </svg>
      )
    case 'fastapi':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18">
          <circle cx="12" cy="12" r="11" fill="#05998B" />
          <path fill="#ffffff" d="M13 3L6 14h5l-2 7 9-11h-5l2-7z" />
        </svg>
      )
    case 'docker':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="#2496ED">
          <path d="M13.9 8.5h2.1v2.1h-2.1zm-3.1 0h2.1v2.1h-2.1zm-3.1 0h2.1v2.1H7.7zm6.2-3.1h2.1v2.1h-2.1zm-3.1 0h2.1v2.1h-2.1zm-3.1 0h2.1v2.1H7.7zm9.3 6.2h2.1v2.1h-2.1zm-3.1 0h2.1v2.1h-2.1zm-3.1 0h2.1v2.1h-2.1zm-3.1 0h2.1v2.1H7.7z" />
          <path d="M22.5 12.3c-.6-.4-1.5-.5-2.3-.2-.4-1.3-1.6-2.2-3.1-2.2h-.4c-.3-1.7-1.8-3-3.6-3H2.8C2.3 8.3 2 8.7 2 9.2v4.8c0 4.4 3.6 8 8 8 6.1 0 11.2-4.2 12.5-9.7z" />
        </svg>
      )
    case 'postgresql':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="#4169E1">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 16.5c-3 0-5.5-2-5.5-5.5 0-2.5 1.5-4.5 4-4.5 2.5 0 3.5 1.5 3.5 3 0 1.5-1 2-2 2h-1c-.5 0-.8.3-.8.8s.3.7.8.7h1.5c1.5 0 3 1.5 3 3.5 0 2.5-2 4-4.5 4z" />
        </svg>
      )
    case 'mysql':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="#00758F">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 15h-2v-6h2zm-1-8a1.25 1.25 0 1 1 1.25-1.25A1.25 1.25 0 0 1 12 9z" />
        </svg>
      )
    case 'git':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="#F05032">
          <path d="M21.6 10.9L13.1 2.4a2.4 2.4 0 0 0-3.4 0L7.3 4.8l3.6 3.6a2.2 2.2 0 0 1 2.8 2.8l3.4 3.4a2.2 2.2 0 1 1-1.5 1.5l-3.2-3.2v4.5a2.2 2.2 0 1 1-2.1 0V12.7a2.2 2.2 0 0 1-1.2-2.9L5.5 6.2 2.4 9.3a2.4 2.4 0 0 0 0 3.4l8.5 8.5a2.4 2.4 0 0 0 3.4 0l7.3-7.3a2.4 2.4 0 0 0 0-3.4z" />
        </svg>
      )
    case 'linux':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="#FCC624">
          <circle cx="12" cy="12" r="10" fill="#2d3748" />
          <path fill="#ffffff" d="M12 4c-2.2 0-3.5 2-3.5 4.5 0 1 .3 2.5.7 3.5-.8 1.5-1.2 3.5-1.2 5 0 1.7 1.5 3 4 3s4-1.3 4-3c0-1.5-.4-3.5-1.2-5 .4-1 .7-2.5.7-3.5C15.5 6 14.2 4 12 4z" />
          <circle cx="10.5" cy="7.5" r="1" fill="#000" />
          <circle cx="13.5" cy="7.5" r="1" fill="#000" />
          <path fill="#f59e0b" d="M11 9.5h2l-1 2z" />
        </svg>
      )
    case 'pytorch':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="#EE4C2C">
          <path d="M13.2 2.5l-.8.8 3.5 3.5c3.2 3.2 3.2 8.4 0 11.6s-8.4 3.2-11.6 0-3.2-8.4 0-11.6l4.6-4.6-.8-.8-4.6 4.6c-3.6 3.6-3.6 9.6 0 13.2s9.6 3.6 13.2 0 3.6-9.6 0-13.2L13.2 2.5z" />
          <circle cx="14.5" cy="5.5" r="1" fill="#EE4C2C" />
        </svg>
      )
    case 'mongodb':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="#47A248">
          <path d="M12 1.5s-6 5.5-6 11.5c0 5 4.5 8 6 9.5 1.5-1.5 6-4.5 6-9.5 0-6-6-11.5-6-11.5zm.2 18.2c-.3-.2-.5-.4-.7-.6-.2-.2-.4-.5-.6-.7V3.5c.3.5.7 1 1 1.6 1.7 2.7 3.1 6.1 3.1 8.9 0 3.8-2.8 5.7-2.8 5.7z" />
        </svg>
      )
    case 'tailwind':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="#38BDF8">
          <path d="M12 6c-3.6 0-5.8 1.8-6.6 5.4 1.4-1.8 3-2.4 4.8-1.8 1 0.4 1.8 1.2 2.6 2 1.3 1.4 2.8 3 6.2 3 3.6 0 5.8-1.8 6.6-5.4-1.4 1.8-3 2.4-4.8 1.8-1-0.4-1.8-1.2-2.6-2-1.3-1.4-2.8-3-6.2-3zm-6.6 6c-3.6 0-5.8 1.8-6.6 5.4 1.4-1.8 3-2.4 4.8-1.8 1 0.4 1.8 1.2 2.6 2 1.3 1.4 2.8 3 6.2 3 3.6 0 5.8-1.8 6.6-5.4-1.4 1.8-3 2.4-4.8 1.8-1-0.4-1.8-1.2-2.6-2-1.3-1.4-2.8-3-6.2-3z" />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="#8b5cf6">
          <circle cx="12" cy="12" r="10" />
        </svg>
      )
  }
}
