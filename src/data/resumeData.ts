export interface EducationItem {
  degree: string
  field: string
  institution: string
  location: string
  duration: string
  grade?: string
  highlights: string[]
}

export interface ExperienceItem {
  role: string
  company: string
  location: string
  duration: string
  type: 'Internship' | 'Full-Time' | 'Research' | 'Open Source'
  description: string
  highlights: string[]
  technologies: string[]
}

export interface CertificationItem {
  title: string
  issuer: string
  date: string
  credentialUrl?: string
  skills: string[]
}

export interface ResumeData {
  name: string
  title: string
  status: string
  location: string
  email: string
  phone: string
  website: string
  github: string
  linkedin: string
  leetcode: string
  geeksforgeeks: string
  summary: string
  education: EducationItem[]
  experience: ExperienceItem[]
  certifications: CertificationItem[]
  achievements: string[]
  keySkills: {
    category: string
    items: string[]
  }[]
}

export const RESUME_DATA: ResumeData = {
  name: 'Omkar Kadam',
  title: 'Software Developer & AI/ML Engineer',
  status: 'MCA 2nd Year | Open to Internships & Full-time Roles',
  location: 'Chh. Sambhajinagar, Maharashtra, India',
  email: 'omkadam2204@gmail.com',
  phone: '+91 91580 00000',
  website: 'https://github.com/OmkarKadam007',
  github: 'https://github.com/OmkarKadam007',
  linkedin: 'https://www.linkedin.com/in/omkadam04/',
  leetcode: 'https://leetcode.com/u/omkar_kadam2204/',
  geeksforgeeks: 'https://www.geeksforgeeks.org/user/omkarkadh0z6/',
  summary:
    'Dedicated Software Engineer and MCA scholar at Dr. B.A.M.U. specializing in applied AI/ML systems, Computer Vision, Voice Agents, and modern Full-Stack web architectures (React, Node.js, FastAPI). Experienced in developing end-to-end deep learning pipelines (FaceForensics++ Deepfake Detection, Biometric Attendance with dlib & SpeechBrain) and robust cloud SaaS applications. Passionate about problem-solving, clean code, and scalable software solutions.',
  education: [
    {
      degree: 'Master of Computer Applications (MCA)',
      field: 'Computer Science & Software Systems',
      institution: 'Dr. Babasaheb Ambedkar Marathwada University (Dr. B.A.M.U.)',
      location: 'Chh. Sambhajinagar, Maharashtra',
      duration: '2024 — 2026 (Expected)',
      grade: 'First Class with Distinction (Pursuing)',
      highlights: [
        'Research thesis on automated facial manipulation and deepfake detection using fine-tuned EfficientNet-B0 on FaceForensics++.',
        'Core coursework: Advanced Machine Learning, Cloud Computing, Distributed Systems, Modern Web Engineering, Data Structures & Algorithms.',
      ],
    },
    {
      degree: 'Bachelor of Science (B.Sc.)',
      field: 'Computer Science',
      institution: 'Dr. Babasaheb Ambedkar Marathwada University (Dr. B.A.M.U.)',
      location: 'Chh. Sambhajinagar, Maharashtra',
      duration: '2021 — 2024',
      grade: 'Distinction',
      highlights: [
        'Rigorous foundation in Object-Oriented Programming, Database Management Systems (SQL), Operating Systems, and Discrete Mathematics.',
        'Built full-stack academic projects and automated utility scripts.',
      ],
    },
  ],
  experience: [
    {
      role: 'Full-Stack Software Engineering Intern',
      company: 'TaskSphere / WORKINTERN SaaS',
      location: 'Remote',
      duration: '2025',
      type: 'Internship',
      description:
        'Architected and implemented an enterprise task management REST API and interactive web application featuring strict Role-Based Access Control (RBAC).',
      highlights: [
        'Implemented transactional operations across MongoDB replica sets using Prisma ORM with strict ACID compliance.',
        'Designed Zod request payload schema validations and interactive Swagger-UI OpenAPI documentation at /api-docs.',
        'Created a responsive, modern glassmorphism frontend dashboard with dark-mode support using React and Tailwind CSS.',
      ],
      technologies: ['Node.js', 'Express', 'Prisma ORM', 'MongoDB', 'TypeScript', 'React', 'Zod', 'JWT'],
    },
    {
      role: 'AI / Computer Vision Researcher',
      company: 'Academic Research Methodology',
      location: 'Dr. B.A.M.U.',
      duration: '2025 — Present',
      type: 'Research',
      description:
        'Developed an end-to-end computer vision pipeline for automated deepfake detection in static imagery and video streams.',
      highlights: [
        'Fine-tuned EfficientNet-B0 convolutional neural network on the FaceForensics++ (FF++) C23 benchmark dataset.',
        'Engineered an OpenCV frame-extraction pipeline optimized for real-time CPU-only inference without requiring high-end NVIDIA GPUs.',
        'Published detailed defense outlines, presentation guides, and interactive Streamlit evaluation dashboard.',
      ],
      technologies: ['PyTorch', 'TorchVision', 'EfficientNet-B0', 'OpenCV', 'Streamlit', 'Python', 'NumPy'],
    },
    {
      role: 'AI & Data Science Contributor',
      company: 'Vireo Audio Intelligence & FlowVoice',
      location: 'Remote Hackathons & Projects',
      duration: '2025',
      type: 'Open Source',
      description:
        'Built high-impact algorithmic data auditing systems and real-time voice agents.',
      highlights: [
        'Reconciled raw ticket discrepancies and classified ambiguous customer refund tickets with NLP text analytics, reducing mislabeled rates from 42.4% to 10.0%.',
        'Built FlowVoice for DataForge x Rime Hackathon: an interruption-safe voice agent using state fencing to cancel stale computation and prevent speech collision.',
      ],
      technologies: ['Python', 'Pandas', 'NLP', 'Asyncio', 'SpeechBrain', 'Rime TTS', 'Streamlit'],
    },
  ],
  certifications: [
    {
      title: 'DataForge x Rime Voice Hackathon Contributor',
      issuer: 'DataForge / Rime Labs',
      date: '2025',
      skills: ['Voice AI', 'Asyncio Orchestration', 'Real-time State Fencing', 'Python'],
    },
    {
      title: 'Full-Stack Web Development Mastery (MERN Stack)',
      issuer: 'NamasteDev / Industry Certification',
      date: '2024',
      skills: ['React 18', 'Redux Toolkit', 'Node.js', 'Express', 'MongoDB', 'System Design'],
    },
    {
      title: 'Applied Machine Learning & Computer Vision',
      issuer: 'Online / Academic',
      date: '2024',
      skills: ['PyTorch', 'Scikit-learn', 'OpenCV', 'Feature Engineering', 'Model Deployment'],
    },
  ],
  achievements: [
    '22+ Standalone verified software projects built across AI/ML, SaaS, and Full-Stack development.',
    'Developed SnapClass dual-modal attendance platform cutting manual recording time by >80%.',
    'Active competitive programmer on LeetCode (@omkar_kadam2204) and GeeksforGeeks (@omkarkadh0z6).',
    'Achieved 87.5% loan underwriting model accuracy in CreditWise fintech risk assessment system.',
  ],
  keySkills: [
    {
      category: 'Programming Languages',
      items: ['Python', 'JavaScript (ES6+)', 'TypeScript', 'SQL', 'C++', 'HTML5/CSS3'],
    },
    {
      category: 'AI & Machine Learning',
      items: ['PyTorch', 'TorchVision', 'Scikit-Learn', 'OpenCV', 'SpeechBrain', 'Librosa', 'EfficientNet', 'Pandas', 'NumPy', 'NLP'],
    },
    {
      category: 'Frontend Development',
      items: ['React 18', 'Next.js', 'Redux Toolkit', 'Tailwind CSS', 'Vite', 'Responsive UI/UX', 'Glassmorphism'],
    },
    {
      category: 'Backend & Cloud',
      items: ['Node.js', 'Express', 'FastAPI', 'Flask', 'REST APIs', 'JWT & RBAC', 'Docker', 'Linux', 'Git & GitHub'],
    },
    {
      category: 'Databases & ORM',
      items: ['PostgreSQL', 'Supabase', 'MongoDB', 'Prisma ORM', 'MySQL', 'Firebase Firestore'],
    },
  ],
}
