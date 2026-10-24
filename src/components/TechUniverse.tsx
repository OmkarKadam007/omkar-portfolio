import { ALL_PROJECTS } from '../data/portfolioData.ts'
import './TechUniverse.css'

interface OrbitalTech {
  name: string
  ring: number
  angle: number
  tagQuery: string
}

const ORBITAL_TECHS: readonly OrbitalTech[] = [
  // Ring 1 - Core Languages & Foundations (Radius ~135px desktop, ~115px tablet, ~85px mobile)
  { name: 'Python', ring: 1, angle: 0, tagQuery: 'python' },
  { name: 'TypeScript', ring: 1, angle: 90, tagQuery: 'typescript' },
  { name: 'JavaScript', ring: 1, angle: 180, tagQuery: 'javascript' },
  { name: 'SQL', ring: 1, angle: 270, tagQuery: 'sql' },

  // Ring 2 - AI/ML & Deep Learning (Radius ~210px desktop, ~175px tablet, ~130px mobile)
  { name: 'PyTorch', ring: 2, angle: 0, tagQuery: 'pytorch' },
  { name: 'OpenCV', ring: 2, angle: 72, tagQuery: 'opencv' },
  { name: 'Scikit-Learn', ring: 2, angle: 144, tagQuery: 'scikit-learn' },
  { name: 'Streamlit', ring: 2, angle: 216, tagQuery: 'streamlit' },
  { name: 'Pandas', ring: 2, angle: 288, tagQuery: 'pandas' },

  // Ring 3 - Full-Stack & Systems (Radius ~285px desktop, ~235px tablet, ~175px mobile)
  { name: 'React', ring: 3, angle: 36, tagQuery: 'react' },
  { name: 'Node.js', ring: 3, angle: 108, tagQuery: 'node.js' },
  { name: 'Express', ring: 3, angle: 180, tagQuery: 'express' },
  { name: 'Flask', ring: 3, angle: 252, tagQuery: 'flask' },
  { name: 'Tailwind CSS', ring: 3, angle: 324, tagQuery: 'tailwind' },

  // Ring 4 - Cloud, Databases & GenAI (Radius ~355px desktop, ~295px tablet, ~220px mobile)
  { name: 'Docker', ring: 4, angle: 0, tagQuery: 'docker' },
  { name: 'Supabase', ring: 4, angle: 72, tagQuery: 'supabase' },
  { name: 'MongoDB', ring: 4, angle: 144, tagQuery: 'mongodb' },
  { name: 'Prisma ORM', ring: 4, angle: 216, tagQuery: 'prisma' },
  { name: 'LLM / GenAI', ring: 4, angle: 288, tagQuery: 'llm' },
]

interface TechUniverseProps {
  activeTech: string | null
  onSelectTech: (techName: string, tagQuery: string) => void
  onReset: () => void
}

export function TechUniverse({ activeTech, onSelectTech, onReset }: TechUniverseProps) {
  // Compute project count for each tech factual from ALL_PROJECTS
  const getProjectCount = (query: string): number => {
    const q = query.toLowerCase()
    return ALL_PROJECTS.filter((p) => {
      const matchTag = p.tags.some((t) => t.toLowerCase().includes(q))
      const matchCategory = p.category.toLowerCase().includes(q)
      const matchDesc = p.description.toLowerCase().includes(q)
      return matchTag || matchCategory || matchDesc
    }).length
  }

  // Calculate position coordinates for circular orbital placement
  const getOrbitalStyle = (ring: number, angleDeg: number) => {
    // Determine responsive radii using CSS calc / variables
    let radiusVar = '--r1'
    if (ring === 1) radiusVar = 'calc(var(--ring-size-1, 270px) / 2)'
    if (ring === 2) radiusVar = 'calc(var(--ring-size-2, 420px) / 2)'
    if (ring === 3) radiusVar = 'calc(var(--ring-size-3, 570px) / 2)'
    if (ring === 4) radiusVar = 'calc(var(--ring-size-4, 710px) / 2)'

    return {
      top: '50%',
      left: '50%',
      transform: `translate(-50%, -50%) rotate(${angleDeg}deg) translate(${radiusVar}) rotate(-${angleDeg}deg)`,
    }
  }

  return (
    <div className="tech-universe-container">
      <div className="universe-stage" role="region" aria-label="Interactive Tech Universe Orbital System">
        {/* Central Sun / Core */}
        <button
          type="button"
          className="universe-sun"
          onClick={onReset}
          aria-label="Tech Universe Core: Reset filter to view all projects"
        >
          <div className="sun-pulse" aria-hidden="true" />
          <span className="sun-title">MY TECH UNIVERSE</span>
          <span className="sun-subtitle">Omkar Kadam</span>
          <span className="sun-hint">Click to Reset All</span>
        </button>

        {/* Ring 1 - Inner Core */}
        <div className="orbital-ring ring-1">
          {ORBITAL_TECHS.filter((t) => t.ring === 1).map((tech) => {
            const count = getProjectCount(tech.tagQuery)
            const isActive = activeTech?.toLowerCase() === tech.name.toLowerCase()

            return (
              <button
                key={tech.name}
                type="button"
                className={`orbital-node ${isActive ? 'active' : ''}`}
                style={getOrbitalStyle(tech.ring, tech.angle)}
                onClick={() => onSelectTech(tech.name, tech.tagQuery)}
                aria-label={`Filter projects by ${tech.name} (${count} projects)`}
              >
                <div className="orbital-node-inner">
                  <span className="node-dot" aria-hidden="true" />
                  <span>{tech.name}</span>
                  <span className="node-count">{count}</span>
                </div>
              </button>
            )
          })}
        </div>

        {/* Ring 2 - Mid-Inner */}
        <div className="orbital-ring ring-2">
          {ORBITAL_TECHS.filter((t) => t.ring === 2).map((tech) => {
            const count = getProjectCount(tech.tagQuery)
            const isActive = activeTech?.toLowerCase() === tech.name.toLowerCase()

            return (
              <button
                key={tech.name}
                type="button"
                className={`orbital-node ${isActive ? 'active' : ''}`}
                style={getOrbitalStyle(tech.ring, tech.angle)}
                onClick={() => onSelectTech(tech.name, tech.tagQuery)}
                aria-label={`Filter projects by ${tech.name} (${count} projects)`}
              >
                <div className="orbital-node-inner">
                  <span className="node-dot" aria-hidden="true" />
                  <span>{tech.name}</span>
                  <span className="node-count">{count}</span>
                </div>
              </button>
            )
          })}
        </div>

        {/* Ring 3 - Mid-Outer */}
        <div className="orbital-ring ring-3">
          {ORBITAL_TECHS.filter((t) => t.ring === 3).map((tech) => {
            const count = getProjectCount(tech.tagQuery)
            const isActive = activeTech?.toLowerCase() === tech.name.toLowerCase()

            return (
              <button
                key={tech.name}
                type="button"
                className={`orbital-node ${isActive ? 'active' : ''}`}
                style={getOrbitalStyle(tech.ring, tech.angle)}
                onClick={() => onSelectTech(tech.name, tech.tagQuery)}
                aria-label={`Filter projects by ${tech.name} (${count} projects)`}
              >
                <div className="orbital-node-inner">
                  <span className="node-dot" aria-hidden="true" />
                  <span>{tech.name}</span>
                  <span className="node-count">{count}</span>
                </div>
              </button>
            )
          })}
        </div>

        {/* Ring 4 - Outer Halo */}
        <div className="orbital-ring ring-4">
          {ORBITAL_TECHS.filter((t) => t.ring === 4).map((tech) => {
            const count = getProjectCount(tech.tagQuery)
            const isActive = activeTech?.toLowerCase() === tech.name.toLowerCase()

            return (
              <button
                key={tech.name}
                type="button"
                className={`orbital-node ${isActive ? 'active' : ''}`}
                style={getOrbitalStyle(tech.ring, tech.angle)}
                onClick={() => onSelectTech(tech.name, tech.tagQuery)}
                aria-label={`Filter projects by ${tech.name} (${count} projects)`}
              >
                <div className="orbital-node-inner">
                  <span className="node-dot" aria-hidden="true" />
                  <span>{tech.name}</span>
                  <span className="node-count">{count}</span>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Control Legend */}
      <div className="universe-controls">
        <div className="universe-legend">
          <span className="legend-indicator" aria-hidden="true" />
          <span>Interactive orbital nodes · Hover pauses rotation · Click to inspect matching projects</span>
        </div>
      </div>
    </div>
  )
}
