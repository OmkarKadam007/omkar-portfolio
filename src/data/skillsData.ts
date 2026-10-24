export type SkillCategory = 'all' | 'languages' | 'frameworks' | 'tools' | 'data-ml'

export interface SkillItem {
  id: string
  name: string
  category: SkillCategory[]
  icon: string
  color: string
  glowColor: string
}

export const SKILL_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'languages', label: 'Languages' },
  { id: 'frameworks', label: 'Frameworks' },
  { id: 'tools', label: 'Tools' },
  { id: 'data-ml', label: 'Data & ML' },
] as const

export const TECHNICAL_SKILLS: SkillItem[] = [
  {
    id: 'python',
    name: 'Python',
    category: ['all', 'languages', 'data-ml'],
    icon: 'python',
    color: '#3776AB',
    glowColor: 'rgba(55, 118, 171, 0.4)',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: ['all', 'languages'],
    icon: 'javascript',
    color: '#F7DF1E',
    glowColor: 'rgba(247, 223, 30, 0.4)',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: ['all', 'languages'],
    icon: 'typescript',
    color: '#3178C6',
    glowColor: 'rgba(49, 120, 198, 0.4)',
  },
  {
    id: 'react',
    name: 'React',
    category: ['all', 'frameworks'],
    icon: 'react',
    color: '#61DAFB',
    glowColor: 'rgba(97, 218, 251, 0.4)',
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: ['all', 'frameworks'],
    icon: 'nextjs',
    color: '#ffffff',
    glowColor: 'rgba(255, 255, 255, 0.3)',
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: ['all', 'frameworks'],
    icon: 'nodejs',
    color: '#5FA04E',
    glowColor: 'rgba(95, 160, 78, 0.4)',
  },
  {
    id: 'fastapi',
    name: 'FastAPI',
    category: ['all', 'frameworks'],
    icon: 'fastapi',
    color: '#05998B',
    glowColor: 'rgba(5, 153, 139, 0.4)',
  },
  {
    id: 'docker',
    name: 'Docker',
    category: ['all', 'tools'],
    icon: 'docker',
    color: '#2496ED',
    glowColor: 'rgba(36, 150, 237, 0.4)',
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: ['all', 'tools'],
    icon: 'postgresql',
    color: '#4169E1',
    glowColor: 'rgba(65, 105, 225, 0.4)',
  },
  {
    id: 'mysql',
    name: 'MySQL',
    category: ['all', 'tools'],
    icon: 'mysql',
    color: '#00758F',
    glowColor: 'rgba(0, 117, 143, 0.4)',
  },
  {
    id: 'git-github',
    name: 'Git & GitHub',
    category: ['all', 'tools'],
    icon: 'git',
    color: '#F05032',
    glowColor: 'rgba(240, 80, 50, 0.4)',
  },
  {
    id: 'linux',
    name: 'Linux',
    category: ['all', 'tools'],
    icon: 'linux',
    color: '#FCC624',
    glowColor: 'rgba(252, 198, 36, 0.4)',
  },
  {
    id: 'pytorch',
    name: 'PyTorch',
    category: ['all', 'frameworks', 'data-ml'],
    icon: 'pytorch',
    color: '#EE4C2C',
    glowColor: 'rgba(238, 76, 44, 0.4)',
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: ['all', 'tools'],
    icon: 'mongodb',
    color: '#47A248',
    glowColor: 'rgba(71, 162, 72, 0.4)',
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: ['all', 'frameworks'],
    icon: 'tailwind',
    color: '#38BDF8',
    glowColor: 'rgba(56, 189, 248, 0.4)',
  },
  {
    id: 'streamlit',
    name: 'Streamlit',
    category: ['all', 'frameworks', 'data-ml'],
    icon: 'streamlit',
    color: '#FF4B4B',
    glowColor: 'rgba(255, 75, 75, 0.4)',
  },
  {
    id: 'scikit-learn',
    name: 'Scikit-Learn',
    category: ['all', 'frameworks', 'data-ml'],
    icon: 'scikitlearn',
    color: '#F7931E',
    glowColor: 'rgba(247, 147, 30, 0.4)',
  },
  {
    id: 'opencv',
    name: 'OpenCV',
    category: ['all', 'frameworks', 'data-ml'],
    icon: 'opencv',
    color: '#5C3EE8',
    glowColor: 'rgba(92, 62, 232, 0.4)',
  },
  {
    id: 'flask',
    name: 'Flask',
    category: ['all', 'frameworks'],
    icon: 'flask',
    color: '#000000',
    glowColor: 'rgba(255, 255, 255, 0.3)',
  },
  {
    id: 'prisma',
    name: 'Prisma ORM',
    category: ['all', 'tools'],
    icon: 'prisma',
    color: '#2D3748',
    glowColor: 'rgba(90, 103, 216, 0.4)',
  },
]
