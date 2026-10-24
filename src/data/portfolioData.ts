export type DomainType =
  | 'AI/ML'
  | 'Research'
  | 'Web Development'
  | 'Full-Stack Web Development'
  | 'Data Science'
  | 'SaaS Products'
  | 'Technical Experiments'
  | 'Open Source'

export interface Project {
  id: string
  name: string
  title: string
  localPath: string
  domain: DomainType
  category: string
  architectureBadge: string
  description: string // Concise 1-2 sentence description
  longDescription?: string // Extended architectural context for modal
  keyFeatures?: string[] // Bulleted highlights for modal
  tags: string[]
  status: 'Production' | 'Publication Ready' | 'Functional' | 'Prototype' | 'Archive'
  githubUrl?: string
  liveUrl?: string
  featured: boolean
}

export interface DomainCategory {
  id: string
  title: string
  description: string
  tag: string
  indicator: string
  accentColor: string
}

export interface CurrentFocusItem {
  id: string
  title: string
  category: string
  status: string
  summary: string
}

/**
 * 8 Core Portfolio Domains with distinct subtle accent colors
 */
export const DOMAIN_CATEGORIES: readonly DomainCategory[] = [
  {
    id: 'ai-ml',
    title: 'AI/ML',
    description: 'Computer vision, deep learning models, classification pipelines, and intelligent systems.',
    tag: 'Intelligence',
    indicator: '01',
    accentColor: '#10b981', // Emerald
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Performant web applications, responsive frontend architecture, and full-stack solutions.',
    tag: 'Engineering',
    indicator: '02',
    accentColor: '#6366f1', // Indigo
  },
  {
    id: 'data-science',
    title: 'Data Science',
    description: 'Exploratory data analysis, statistical modeling, data cleaning, and business analytics.',
    tag: 'Analytics',
    indicator: '03',
    accentColor: '#f59e0b', // Amber
  },
  {
    id: 'research',
    title: 'Research',
    description: 'Methodological investigations, transfer learning benchmarks, and academic defense projects.',
    tag: 'Investigation',
    indicator: '04',
    accentColor: '#06b6d4', // Cyan
  },
  {
    id: 'saas',
    title: 'SaaS Products',
    description: 'Full-stack cloud applications featuring authentication, role-based access, and APIs.',
    tag: 'Product',
    indicator: '05',
    accentColor: '#f43f5e', // Rose
  },
  {
    id: 'open-source',
    title: 'Open Source',
    description: 'Public Git repositories, developer tools, reusable libraries, and community contributions.',
    tag: 'Community',
    indicator: '06',
    accentColor: '#3b82f6', // Blue
  },
  {
    id: 'experiments',
    title: 'Technical Experiments',
    description: 'Voice agents, Google Gemini LLM scripts, containerization labs, and security audits.',
    tag: 'Lab',
    indicator: '07',
    accentColor: '#8b5cf6', // Violet
  },
  {
    id: 'ideas',
    title: 'Ideas & Future Projects',
    description: 'System architectural concepts, problem formulations, and planned engineering roadmaps.',
    tag: 'Roadmap',
    indicator: '08',
    accentColor: '#a855f7', // Purple
  },
]

/**
 * Complete Project Inventory
 * 22 verified software projects audited across local drive D:\
 * Shortened descriptions with factual architecture badges and modal inspection data.
 */
export const ALL_PROJECTS: readonly Project[] = [
  // 1. Research & Academic
  {
    id: 'deepfake-detector',
    name: 'AI Deepfake Content Detector',
    title: 'AI-Based Detection of Deepfake Content',
    localPath: 'D:\\Reserch_project\\reserch_defake',
    domain: 'Research',
    category: 'Computer Vision & Academic Research',
    architectureBadge: 'EfficientNet-B0 + OpenCV',
    description:
      'End-to-end computer vision pipeline detecting facial manipulation in static images and video clips using fine-tuned transfer learning on the FaceForensics++ benchmark.',
    longDescription:
      'Developed as an MCA Research Methodology project, this system implements automated facial manipulation detection. It utilizes an EfficientNet-B0 convolutional neural network optimized for CPU-only inference on Windows, paired with an interactive Streamlit dashboard for frame-by-frame video and static image analysis.',
    keyFeatures: [
      'Dual inference pipeline for static images and sampled video streams',
      'Fine-tuned on FaceForensics++ (FF++) C23 benchmark dataset',
      'CPU-optimized inference pipeline without requiring dedicated NVIDIA GPUs',
      'Comprehensive research documentation including seminar presentation outline and viva defense notes',
    ],
    tags: ['PyTorch', 'TorchVision', 'EfficientNet-B0', 'OpenCV', 'Streamlit', 'NumPy', 'Python'],
    status: 'Publication Ready',
    featured: true,
  },

  // 2. AI / Machine Learning & Computer Vision
  {
    id: 'snapclass',
    name: 'SnapClass',
    title: 'SnapClass — Smart Attendance System',
    localPath: 'D:\\FullStackProjects\\SnapClass',
    domain: 'AI/ML',
    category: 'Biometric AI & Full-Stack',
    architectureBadge: 'Dual-Modal Biometric AI',
    description:
      'Automated classroom attendance platform leveraging facial recognition and voice speaker identification backed by a Supabase cloud database.',
    longDescription:
      'SnapClass solves classroom attendance bottlenecks by combining dual-modal deep learning biometrics: dlib facial embeddings (128-d) classified via a Linear SVM, alongside SpeechBrain ECAPA-TDNN speaker identification. Instructors can process full classroom group photos or speech recordings in seconds.',
    keyFeatures: [
      'Dual-modal biometric identification: facial recognition (dlib) and voice recognition (SpeechBrain)',
      'Separate teacher management portal and student Face-ID login/enrollment interface',
      'Cloud PostgreSQL integration via Supabase with automatic vector storage',
      'Automated course join codes and QR code generation for self-registration',
    ],
    tags: ['Python', 'Streamlit', 'dlib', 'SVM', 'SpeechBrain', 'PyTorch', 'Supabase', 'PostgreSQL'],
    status: 'Publication Ready',
    githubUrl: 'https://github.com/OmkarKadam007/SnapClass.git',
    featured: true,
  },
  {
    id: 'creditwise',
    name: 'CreditWise Loan System',
    title: 'CreditWise Loan Approval System',
    localPath: 'D:\\FullStackProjects\\Credit_loan',
    domain: 'AI/ML',
    category: 'Machine Learning & FinTech',
    architectureBadge: 'Multi-Model ML + PDF Reports',
    description:
      'Fintech loan underwriting prediction application featuring domain-specific feature engineering, multi-model evaluation, and automated PDF credit reports.',
    longDescription:
      'Built for automated loan decisioning, CreditWise evaluates applicant risk using 6 domain-engineered financial ratios (such as EMI-to-income and collateral coverage). It compares Logistic Regression, Naive Bayes, and KNN models, and features interactive sensitivity analysis with automated PDF report generation.',
    keyFeatures: [
      '6 domain-engineered financial metrics (Total Income, Collateral Coverage, EMI Ratios)',
      'Automated model selection and comparative evaluation dashboard',
      'Interactive what-if parameter simulation for risk assessment',
      'One-click downloadable client credit summary reports generated via FPDF2',
    ],
    tags: ['Python', 'Streamlit', 'Scikit-Learn', 'Pandas', 'Plotly', 'FPDF2'],
    status: 'Publication Ready',
    githubUrl: 'https://github.com/OmkarKadam007/Credit_loan.git',
    featured: true,
  },
  {
    id: 'algerian-forest-fire',
    name: 'Algerian Forest Fire Prediction',
    title: 'Algerian Forest Fire Risk Prediction API',
    localPath: 'D:\\FullStackProjects\\END_toEnd_mlpro_1',
    domain: 'AI/ML',
    category: 'Machine Learning & APIs',
    architectureBadge: 'Flask REST API + Scikit-Learn',
    description:
      'Machine learning service predicting forest fire occurrence and risk levels from meteorological features, deployed via a Flask REST API.',
    longDescription:
      'Complete end-to-end regression machine learning project modeling forest fire risk from meteorological and environmental indicators (temperature, humidity, wind, and Fire Weather Index components) from the Algerian Forest Fires dataset.',
    keyFeatures: [
      'Complete workflow: data preprocessing, exploratory data analysis, and feature scaling',
      'Trained regression model saved and serialized for real-time inference',
      'Lightweight Flask REST endpoint for client predictions',
    ],
    tags: ['Python', 'Flask', 'Pandas', 'NumPy', 'Scikit-Learn'],
    status: 'Functional',
    githubUrl: 'https://github.com/OmkarKadam007/Algerian-Forest-Fire.git',
    featured: true,
  },
  {
    id: 'end-to-end-mlpro',
    name: 'End-to-End Production ML Pipeline',
    title: 'Modular Production ML Pipeline',
    localPath: 'D:\\FullStackProjects\\End_toEnd_Ml_Pro2',
    domain: 'AI/ML',
    category: 'MLOps & Modular Architecture',
    architectureBadge: 'Modular Ingestion & Training Pipeline',
    description:
      'Production-structured machine learning system with decoupled ingestion, transformation, and training pipelines with custom logging and exception handling.',
    longDescription:
      'Engineered following enterprise MLOps design principles. Decouples the machine learning workflow into isolated components: data ingestion, data transformation, model training (CatBoost, XGBoost, Scikit-Learn), and evaluation pipelines, with full logging and exception capture.',
    keyFeatures: [
      'Modular architecture separated into components and execution pipelines',
      'Automated preprocessing transformations with serialized artifact tracking',
      'Integrated logging and custom exception handling system',
      'Package distribution configured via setup.py',
    ],
    tags: ['Python', 'Scikit-Learn', 'CatBoost', 'XGBoost', 'MLOps', 'Pipelines'],
    status: 'Functional',
    githubUrl: 'https://github.com/OmkarKadam007/End_to_EndMLPro.git',
    featured: false,
  },
  {
    id: 'cifar10-cnn',
    name: 'CIFAR-10 Image Classifier',
    title: 'CIFAR-10 CNN from Scratch in PyTorch',
    localPath: 'D:\\FullStackProjects\\files',
    domain: 'AI/ML',
    category: 'Deep Learning & Computer Vision',
    architectureBadge: 'PyTorch CNN + Cosine Annealing',
    description:
      'Convolutional neural network designed from scratch in PyTorch featuring BatchNorm, Dropout, and Cosine Annealing scheduling, with an interactive Streamlit UI.',
    longDescription:
      'Trained on 60,000 32x32 color images across 10 object categories. Employs a 3-block convolutional neural network (Conv -> BatchNorm -> ReLU -> MaxPool) with data augmentation and cosine annealing learning rate schedules for smooth convergence.',
    keyFeatures: [
      'Custom 3-block PyTorch CNN architecture built from primitive layers',
      'Batch Normalization and 40% Dropout for regularization',
      'Cosine Annealing learning rate schedule and best-epoch checkpointing',
      'Interactive Streamlit web app for image upload and top-K class predictions',
    ],
    tags: ['PyTorch', 'TorchVision', 'Streamlit', 'Pillow', 'NumPy', 'CNN'],
    status: 'Functional',
    featured: false,
  },
  {
    id: 'car-damage-detection',
    name: 'Car Damage Detection',
    title: 'Automated Car Damage Assessment & Insurance Claims',
    localPath: 'D:\\FullStackProjects\\car-damage-ai',
    domain: 'AI/ML',
    category: 'Computer Vision & Automation',
    architectureBadge: 'ResNet + FastAPI + Docker',
    description: 'Detects car damage and automates insurance claims using AI and computer vision.',
    longDescription:
      'End-to-end computer vision and automated inspection system utilizing fine-tuned ResNet convolutional architectures to identify vehicular damages (scratches, dents, structural deformation). Exposed via a high-performance FastAPI microservice and containerized using Docker for production scalability.',
    keyFeatures: [
      'Multi-class vehicular damage classification using ResNet deep residual learning',
      'Bounding box region proposals for damage localization and severity scoring',
      'High-throughput asynchronous REST API built with FastAPI',
      'Dockerized container image ready for cloud or edge microservice deployment',
    ],
    tags: ['ResNet', 'FastAPI', 'Docker', 'Python', 'PyTorch', 'OpenCV'],
    status: 'Publication Ready',
    featured: true,
  },

  // 3. LLM / Generative AI & Experiments
  {
    id: 'flowvoice',
    name: 'FlowVoice',
    title: 'FlowVoice — Interruption-Safe Real-time Voice Agent',
    localPath: 'D:\\FullStackProjects\\Hackthon\\flowvoice',
    domain: 'Technical Experiments',
    category: 'Voice AI & Real-time Agents',
    architectureBadge: 'State-Fencing Async Voice Agent',
    description:
      'Voice-native task agent built for the DataForge x Rime Hackathon that fences stale computation and halts obsolete audio when a user interrupts.',
    longDescription:
      'Engineered to solve the critical state-corruption problem in interactive voice AI assistants. When a user interrupts while the agent is executing background asynchronous tools, FlowVoice halts TTS playback immediately, cancels stale computation, and reconciles state without corruption.',
    keyFeatures: [
      'Asynchronous task orchestration with cancellation fencing on interruption',
      'Low-latency audio playback termination preventing speech pollution',
      'Continuous conversation state reconciliation across tool execution cycles',
      'Comprehensive benchmark evaluation suite documented in RIME_EVIDENCE.md',
    ],
    tags: ['Python', 'Asyncio', 'Voice Engineering', 'State Fencing', 'Rime TTS', 'LLM'],
    status: 'Publication Ready',
    githubUrl: 'https://github.com/OmkarKadam007/flowvoice.git',
    featured: true,
  },
  {
    id: 'netflix-gpt',
    name: 'Netflix-GPT',
    title: 'Netflix-GPT — AI Movie Recommendation Platform',
    localPath: 'D:\\WelcomeReact\\Netflix-gpt',
    domain: 'Web Development',
    category: 'Generative AI & Frontend',
    architectureBadge: 'React 18 + Firebase + OpenAI',
    description:
      'Streaming entertainment portal combining a responsive Netflix UI with OpenAI GPT prompts for intelligent movie discovery, powered by Firebase.',
    longDescription:
      'Full-stack client application blending TMDB media feeds with natural language GPT movie suggestions. Built with React 18, Redux Toolkit for global playback and user state, Tailwind CSS, and Firebase authentication and cloud hosting.',
    keyFeatures: [
      'Natural language movie recommendations powered by OpenAI API queries',
      'Firebase Authentication with protected private routes',
      'Redux Toolkit centralized store for movie catalogues and user profiles',
      'Responsive dark-theme UI with responsive trailer video embeds',
    ],
    tags: ['React 18', 'Vite', 'Redux Toolkit', 'Firebase', 'Tailwind CSS', 'OpenAI'],
    status: 'Functional',
    featured: true,
  },
  {
    id: 'llm-basic',
    name: 'Google Gemini Microservice',
    title: 'Gemini AI Integration Service',
    localPath: 'D:\\GENRATIVEAI\\LLM\\LLMBASIC',
    domain: 'Technical Experiments',
    category: 'Generative AI Microservice',
    architectureBadge: 'Node.js + @google/genai SDK',
    description:
      'Backend Node.js service exploring the official @google/genai SDK v1.14 with Express to stream prompt-response generations from Gemini models.',
    longDescription:
      'Exploratory microservice testing Google Gemini foundation model APIs. Features prompt templating, response streaming over Express HTTP routes, and token handling using the official SDK.',
    keyFeatures: [
      'Official @google/genai SDK integration with Gemini models',
      'Express route endpoints for generative prompt dispatching',
      'Clean configuration architecture for rapid AI prototype testing',
    ],
    tags: ['Node.js', 'Express', '@google/genai', 'Gemini AI', 'REST API'],
    status: 'Prototype',
    featured: false,
  },

  // 4. Full-Stack Web Development & SaaS Products
  {
    id: 'studynotion',
    name: 'StudyNotion',
    title: 'StudyNotion — EdTech Course Marketplace',
    localPath: 'D:\\FullStackProjects\\studynotion',
    domain: 'Full-Stack Web Development',
    category: 'EdTech & MERN Platform',
    architectureBadge: 'MERN Stack + Razorpay + Cloudinary',
    description:
      'Full-featured education marketplace web application with student learning tracking, instructor course authoring, reviews, and Razorpay checkout.',
    longDescription:
      'Comprehensive MERN stack EdTech platform. Instructors can create video curricula, organize modules, and monitor earnings, while students enroll, stream video lectures, complete milestones, and submit course reviews.',
    keyFeatures: [
      'MERN architecture with MongoDB schemas and Express REST APIs',
      'Instructor portal with course builder, media uploads, and analytics',
      'Student portal with learning progress bars and lecture player',
      'Razorpay payment gateway checkout integration and Cloudinary media hosting',
    ],
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Redux Toolkit', 'Tailwind CSS', 'Razorpay'],
    status: 'Publication Ready',
    githubUrl: 'https://github.com/OmkarKadam007/studynotion.git',
    featured: true,
  },
  {
    id: 'tasksphere',
    name: 'TaskSphere',
    title: 'TaskSphere — REST API & RBAC Task Management',
    localPath: 'D:\\FullStackProjects\\WORKINTERN',
    domain: 'SaaS Products',
    category: 'Cloud SaaS & Backend Architecture',
    architectureBadge: 'Prisma ORM + MongoDB Replica Set',
    description:
      'Task management SaaS application with Role-Based Access Control, MongoDB replica set transactions via Prisma, Zod validation, and Swagger-UI docs.',
    longDescription:
      'Production-structured task management system engineered during an internship assignment. Features strict RBAC distinguishing standard users from administrators, transactional consistency over MongoDB replica sets, Zod payload validation, and interactive OpenAPI documentation.',
    keyFeatures: [
      'Strict Role-Based Access Control (USER vs ADMIN permission boundaries)',
      'Prisma ORM relational modeling over MongoDB replica sets',
      'Zod request schema validation and global error handling middleware',
      'Interactive OpenAPI Swagger-UI documentation live at /api-docs',
    ],
    tags: ['Node.js', 'Express', 'Prisma ORM', 'MongoDB', 'Zod', 'JWT', 'Swagger-UI', 'React'],
    status: 'Publication Ready',
    featured: true,
  },
  {
    id: 'swngy',
    name: 'Swngy Food Delivery App',
    title: 'Swngy — Food Delivery Web Application',
    localPath: 'D:\\WelcomeReact\\SwigyProject\\swiggy-app',
    domain: 'Web Development',
    category: 'Frontend & Web Applications',
    architectureBadge: 'React 18 + Redux Toolkit + Shimmer',
    description:
      'Responsive food ordering frontend application featuring restaurant catalog browsing, real-time search, category filtering, and cart management.',
    longDescription:
      'Dynamic food delivery web app built with React 18 and Redux Toolkit. Implements modular UI components, live restaurant search filters, cart state persistence, shimmer skeleton loading states, and responsive styling with Tailwind CSS.',
    keyFeatures: [
      'Live search and real-time restaurant category filtering',
      'Redux Toolkit cart slice with dynamic item counting and pricing',
      'Shimmer effect placeholders providing fluid perceived load performance',
      'Responsive design styled with Tailwind CSS across mobile, tablet, and desktop',
    ],
    tags: ['React 18', 'Vite', 'Redux Toolkit', 'React Router', 'Tailwind CSS', 'Shimmer UI'],
    status: 'Publication Ready',
    githubUrl: 'https://github.com/OmkarKadam007/swiggy-app.git',
    featured: true,
  },
  {
    id: 'weather-app',
    name: 'Vanilla JS Weather Application',
    title: 'Responsive Weather & Auth Portal',
    localPath: 'D:\\wrap\\whather',
    domain: 'Web Development',
    category: 'Frontend Development',
    architectureBadge: 'Vanilla JavaScript + OpenWeather API',
    description:
      'Lightweight weather dashboard built with Vanilla HTML5, CSS3, and JavaScript featuring user authentication forms and live weather fetching.',
    longDescription:
      'Clean, dependency-free frontend application interacting directly with weather APIs using native JavaScript Fetch API, localStorage authentication, and CSS flexbox styling.',
    keyFeatures: [
      'Zero frontend framework dependencies: 100% native JavaScript and CSS',
      'Live weather queries with dynamic condition icons',
      'Authentication form validation with client-side state handling',
    ],
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Weather API', 'Auth UI'],
    status: 'Functional',
    featured: false,
  },

  // 5. Data Science & Data Analytics
  {
    id: 'vireo-refund',
    name: 'Vireo Audio Refund Intelligence',
    title: 'Vireo Audio — Refund Reconciliation & Intelligence Tool',
    localPath: 'D:\\FullStackProjects\\Banao_Ai_Assignment\\TASK_1\\vireo-refund-intelligence',
    domain: 'Data Science',
    category: 'Financial Analytics & NLP',
    architectureBadge: 'Financial NLP Reconciliation Engine',
    description:
      'Financial data audit and NLP classification system that reconciled currency discrepancies and reclassified mislabeled support tickets using text analysis.',
    longDescription:
      'Audited customer support ticket databases to resolve financial discrepancies caused by legacy monetary recording. Implemented natural language text classification on customer conversation threads to reclassify vague default reason codes into true operational categories.',
    keyFeatures: [
      'Automated reconciliation engine resolving legacy currency scale differences and duplicates',
      'NLP text classification mapping unstructured customer threads to accurate reason codes',
      'Executive board pack summary tables by operational category and agent team',
      'Reproducible batch execution scripts with full data dictionary definitions',
    ],
    tags: ['Python', 'Pandas', 'NumPy', 'NLP Classification', 'Financial Analytics'],
    status: 'Publication Ready',
    githubUrl: 'https://github.com/OmkarKadam007/vireo-refund-intelligence.git',
    featured: true,
  },
  {
    id: 'indian-startup',
    name: 'Indian Startup Funding Analytics',
    title: 'Indian Startup Ecosystem Dashboard',
    localPath: 'D:\\Data Science\\Tools\\IndianStartup',
    domain: 'Data Science',
    category: 'Data Analytics & EDA',
    architectureBadge: 'Streamlit + Pandas EDA',
    description:
      'Interactive Streamlit data analytics dashboard exploring startup funding rounds, venture capitalists, investment verticals, and geographic distribution.',
    longDescription:
      'Data analysis tool examining the Indian startup funding ecosystem. Users can filter by investor names to inspect recent deals, analyze investment rounds, and observe industry trends using Matplotlib charts.',
    keyFeatures: [
      'Cleaned historical startup funding dataset with standardized valuation fields',
      'Interactive investor inspection views highlighting recent portfolio additions',
      'Distribution plots across startup verticals, funding tiers, and tech hubs',
    ],
    tags: ['Python', 'Streamlit', 'Pandas', 'Matplotlib', 'EDA'],
    status: 'Functional',
    featured: false,
  },
  {
    id: 'chai-sales',
    name: 'Chai Sales Analytics',
    title: 'Retail Sales Visualizer & Streamlit Apps',
    localPath: 'D:\\Apna_collage\\Stemlit\\chai-stremlit',
    domain: 'Data Science',
    category: 'Data Analytics & Visualization',
    architectureBadge: 'UV Package Manager + Streamlit',
    description:
      'Interactive Streamlit data applications built with UV package management analyzing sales datasets, product margins, and customer trends across modules.',
    longDescription:
      'Modular Streamlit visualization application managed using Astral UV and pyproject.toml. Explores interactive filtering across multi-chapter retail sales metrics, product lines, and operational margins.',
    keyFeatures: [
      'Modern Python tooling configured with UV package manager',
      'Multi-chapter analytics progression analyzing sales metrics',
      'Visual charts and summary tables generated from raw CSV logs',
    ],
    tags: ['Python', 'Streamlit', 'UV', 'Pandas', 'Data Visualization'],
    status: 'Functional',
    featured: false,
  },

  // 6. Backend Services & DevOps
  {
    id: 'ipl-api',
    name: 'IPL Cricket REST API',
    title: 'IPL Match Statistics & Auth API',
    localPath: 'D:\\FullStackProjects\\iplapi',
    domain: 'Open Source',
    category: 'Backend APIs & Sports Data',
    architectureBadge: 'Flask Blueprints REST API',
    description:
      'Modular Flask REST API structured with Blueprints serving tournament match statistics, team performance analytics, and user authentication.',
    longDescription:
      'Flask backend application utilizing modular Blueprint routing (`api_bp`, `auth_bp`) to serve structured JSON match statistics and tournament records for the Indian Premier League.',
    keyFeatures: [
      'Modular Blueprint route separation for authentication and data endpoints',
      'Normalized JSON responses optimized for frontend consumer clients',
      'Clean environment separation with .env configuration',
    ],
    tags: ['Python', 'Flask', 'Blueprints', 'REST API', 'JSON'],
    status: 'Functional',
    featured: false,
  },
  {
    id: 'auth-service',
    name: 'JWT & Cookie Authentication Service',
    title: 'Production Auth & Session Service',
    localPath: 'D:\\BACKENDDEV\\AuthApp',
    domain: 'Open Source',
    category: 'Backend Security',
    architectureBadge: 'Express + Bcrypt + HTTP-only JWT',
    description:
      'Backend authentication microservice implementing Bcrypt password hashing, JWT generation, secure HTTP-only cookies, and MongoDB session handling.',
    longDescription:
      'Security-focused authentication microservice featuring salted password hashing with Bcrypt, JSON Web Token generation with configurable expiration, cookie-parser handling, and Mongoose schema models.',
    keyFeatures: [
      'Salted password hashing using Bcrypt',
      'Stateless session management via JWT and secure HTTP-only cookies',
      'Role-based middleware interceptors protecting private routes',
    ],
    tags: ['Node.js', 'Express', 'Mongoose', 'Bcrypt', 'JWT', 'Security'],
    status: 'Functional',
    featured: false,
  },
  {
    id: 'file-upload-service',
    name: 'Cloudinary Media Service',
    title: 'Cloud Media Upload & Mailer Service',
    localPath: 'D:\\BACKENDDEV\\FileUpload',
    domain: 'Open Source',
    category: 'Backend Services',
    architectureBadge: 'Cloudinary CDN + Nodemailer',
    description:
      'Backend media pipeline integrating Express-FileUpload, Cloudinary CDN asset uploads, Mongoose metadata schemas, and Nodemailer email confirmations.',
    longDescription:
      'File handling service designed for cloud media workflows. Validates file mime-types, uploads images and videos to Cloudinary with folder organization, records metadata in MongoDB, and triggers email notifications.',
    keyFeatures: [
      'Direct multipart file streaming to Cloudinary cloud CDN',
      'Mime-type verification and image size constraint validations',
      'Automated SMTP email confirmations dispatched via Nodemailer',
    ],
    tags: ['Node.js', 'Express', 'Cloudinary', 'Nodemailer', 'Mongoose'],
    status: 'Functional',
    featured: false,
  },
  {
    id: 'docker-suite',
    name: 'Docker Containerization Labs',
    title: 'Docker & Multi-Container Environments',
    localPath: 'D:\\Docker',
    domain: 'Technical Experiments',
    category: 'DevOps & Infrastructure',
    architectureBadge: 'Multi-Stage Docker & Compose',
    description:
      'Containerization exercises configuring multi-stage Dockerfiles for Node.js and Python Flask apps with multi-container Docker Compose orchestration.',
    longDescription:
      'Practical infrastructure repository with optimized multi-stage build Dockerfiles for microservices, network bridge configurations, and multi-service orchestration with Docker Compose.',
    keyFeatures: [
      'Multi-stage Dockerfiles reducing production image footprints',
      'Docker Compose service orchestration linking web tiers and datastores',
      'Port binding and volume mount configurations for persistent state',
    ],
    tags: ['Docker', 'Docker Compose', 'DevOps', 'Containers', 'Infrastructure'],
    status: 'Functional',
    featured: false,
  },

  // 7. Algorithms & System Design
  {
    id: 'dsa-archive',
    name: 'DSA Master Plan & Algorithmic Archive',
    title: 'Data Structures & Algorithms Repository',
    localPath: 'D:\\DSANAMSTEDEV',
    domain: 'Open Source',
    category: 'Algorithms & Problem Solving',
    architectureBadge: 'Data Structures & Algorithm Solutions',
    description:
      'Comprehensive collection of algorithmic solutions in JavaScript covering Linked Lists, Merge Sort, Recursion, and Two-Pointer string techniques.',
    longDescription:
      'Structured technical repository containing curated algorithmic problem solutions in modern JavaScript, mapped to a comprehensive study roadmap with time and space complexity evaluations.',
    keyFeatures: [
      '20+ structured algorithmic solutions across Linked Lists, Strings, Sorting, and Recursion',
      'Visual learning dashboard and progress tracker in dsa_master_plan.html',
      'Optimal time and space complexity analysis documented per problem',
    ],
    tags: ['JavaScript', 'Algorithms', 'Data Structures', 'Problem Solving'],
    status: 'Functional',
    featured: false,
  },
  {
    id: 'frontend-security-lab',
    name: 'Frontend Security & System Design',
    title: 'Web Security (XSS) & System Design Labs',
    localPath: 'D:\\FrontEnd System Design',
    domain: 'Technical Experiments',
    category: 'Web Security & Architecture',
    architectureBadge: 'Security Labs & Mitigation',
    description:
      'Practical engineering exercises demonstrating Cross-Site Scripting (XSS) attack vectors, mitigation with input sanitization and CSP headers, and GraphQL.',
    longDescription:
      'Practical computer security and frontend system design laboratory demonstrating how XSS vulnerabilities arise in unescaped web forms and how to effectively remediate them using Content Security Policy (CSP) headers, input sanitization, and strict escaping.',
    keyFeatures: [
      'Controlled XSS vulnerability reproductions demonstrating injection vectors',
      'Mitigation prototypes utilizing Content Security Policy headers and sanitization',
      'GraphQL queries and network performance benchmarking exercises',
    ],
    tags: ['Security', 'XSS Mitigation', 'GraphQL', 'Networking', 'Web Architecture'],
    status: 'Functional',
    featured: false,
  },
]

export interface MockupFeaturedProject {
  id: string
  name: string
  title: string
  badgeText: 'AI/ML' | 'Data Science' | 'Web Dev'
  badgeType: 'aiml' | 'datascience' | 'webdev'
  iconKey: 'brain' | 'snapclass' | 'car' | 'voice' | 'vireo' | 'studynotion' | 'tasksphere' | 'swiggy' | 'forest'
  tags: string[]
  description: string
  githubUrl?: string
  liveUrl?: string
}

export const HOMEPAGE_FEATURED_PROJECTS: readonly MockupFeaturedProject[] = [
  {
    id: 'deepfake-detector',
    name: 'Deepfake AI Detector',
    title: 'AI-Based Detection of Deepfake Content',
    badgeText: 'AI/ML',
    badgeType: 'aiml',
    iconKey: 'brain',
    tags: ['PyTorch', 'Streamlit', 'OpenCV'],
    description: 'Detects real/fake images and videos using EfficientNet-B0, includes confidence score and video analysis.',
    githubUrl: 'https://github.com/OmkarKadam007',
  },
  {
    id: 'snapclass',
    name: 'SnapClass',
    title: 'SnapClass — Smart Attendance System',
    badgeText: 'AI/ML',
    badgeType: 'aiml',
    iconKey: 'snapclass',
    tags: ['Python', 'Streamlit', 'Supabase'],
    description: 'AI attendance with face & voice recognition, QR, and reports. >80% time reduction.',
    githubUrl: 'https://github.com/OmkarKadam007/SnapClass.git',
  },
  {
    id: 'car-damage-detection',
    name: 'Car Damage Detection',
    title: 'Automated Car Damage Assessment & Insurance Claims',
    badgeText: 'AI/ML',
    badgeType: 'aiml',
    iconKey: 'car',
    tags: ['ResNet', 'FastAPI', 'Docker'],
    description: 'Detects car damage and automates insurance claims using AI and computer vision.',
    githubUrl: 'https://github.com/OmkarKadam007',
  },
  {
    id: 'flowvoice',
    name: 'FlowVoice',
    title: 'FlowVoice — Interruption-Safe Real-time Voice Agent',
    badgeText: 'AI/ML',
    badgeType: 'aiml',
    iconKey: 'voice',
    tags: ['Python', 'SpeechBrain', 'Streamlit'],
    description: 'Voice recognition and AI voice assistant with ECAPA-TDNN and Librosa.',
    githubUrl: 'https://github.com/OmkarKadam007/flowvoice.git',
  },
  {
    id: 'vireo-refund',
    name: 'Vireo (Refund Intelligence)',
    title: 'Vireo Audio — Refund Reconciliation & Intelligence Tool',
    badgeText: 'Data Science',
    badgeType: 'datascience',
    iconKey: 'vireo',
    tags: ['Python', 'NLP', 'Analytics'],
    description: 'Extracts refund insights from tickets. Fixed revenue issues and improved matching rate from 42.4% -> 10%.',
    githubUrl: 'https://github.com/OmkarKadam007/vireo-refund-intelligence.git',
  },
  {
    id: 'studynotion',
    name: 'StudyNotion',
    title: 'StudyNotion — EdTech Marketplace Platform',
    badgeText: 'Web Dev',
    badgeType: 'webdev',
    iconKey: 'studynotion',
    tags: ['Next.js', 'FastAPI', 'AWS'],
    description: 'AI-powered study and productivity platform with modern web stack.',
    githubUrl: 'https://github.com/OmkarKadam007/studynotion.git',
  },
  {
    id: 'tasksphere',
    name: 'QuickApps (TaskSphere)',
    title: 'QuickApps (TaskSphere) — REST API & RBAC Management',
    badgeText: 'Web Dev',
    badgeType: 'webdev',
    iconKey: 'tasksphere',
    tags: ['React', 'Node.js', 'MongoDB'],
    description: 'Task and project management application with modern UI.',
    githubUrl: 'https://github.com/OmkarKadam007',
  },
  {
    id: 'swngy',
    name: 'Swiggy Clone',
    title: 'Swiggy Clone — Food Delivery Web Application',
    badgeText: 'Web Dev',
    badgeType: 'webdev',
    iconKey: 'swiggy',
    tags: ['React', 'Firebase', 'Tailwind'],
    description: 'Food delivery app with cart, orders and real-time tracking.',
    githubUrl: 'https://github.com/OmkarKadam007/swiggy-app.git',
  },
  {
    id: 'algerian-forest-fire',
    name: 'Algerian-Forest-Fire',
    title: 'Algerian Forest Fire Risk Prediction API',
    badgeText: 'Data Science',
    badgeType: 'datascience',
    iconKey: 'forest',
    tags: ['Python', 'Data Analysis', 'ML'],
    description: 'Forest fire prediction and analysis using satellite data.',
    githubUrl: 'https://github.com/OmkarKadam007/Algerian-Forest-Fire.git',
  },
]

/**
 * Backward compatibility alias for views rendering featured work
 */
export const FEATURED_PROJECTS = ALL_PROJECTS

/**
 * Current focus and learning areas
 */
export const CURRENT_FOCUS_ITEMS: readonly CurrentFocusItem[] = [
  {
    id: 'focus-portfolio',
    title: 'All-Domain Portfolio Architecture',
    category: 'Full-Stack Architecture',
    status: 'Active Development',
    summary:
      'Designing and developing this responsive, high-performance web portfolio using React, TypeScript, and pure CSS design tokens without bloated UI dependencies.',
  },
  {
    id: 'focus-ai-systems',
    title: 'Agentic AI & LLM Systems',
    category: 'AI / Machine Learning',
    status: 'Research & Prototyping',
    summary:
      'Exploring agentic orchestration frameworks, structured reasoning models, and production integration patterns for intelligent software.',
  },
  {
    id: 'focus-software-craft',
    title: 'Full-Stack System Reliability',
    category: 'Software Engineering',
    status: 'Continuous Practice',
    summary:
      'Refining modular system design, clean API boundaries, and low-latency client performance across diverse application domains.',
  },
]
