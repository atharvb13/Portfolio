export const profile = {
  name: 'Atharv Bhale',
  email: 'atharvb.0013@gmail.com',
  phone: '+14134094535',
  phoneLabel: '(413) 409-4535',
  github: 'https://github.com/atharvb13',
  linkedin: 'https://www.linkedin.com/in/atharv-b-624891212/',
  resume: `${import.meta.env.BASE_URL}Atharv_Bhale_Resume.pdf`,
}

export const navigation = [
  { id: 'work', label: 'Selected work' },
  { id: 'experience', label: 'Experience' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

export const capabilities = [
  {
    title: 'Engineering depth',
    description: 'Evaluate architecture tradeoffs, build across the stack, and improve performance and reliability.',
    evidence: 'Compared 3 architectures at AWS; cut reporting latency from 20s to 14s at TCS.',
  },
  {
    title: 'Product ownership',
    description: 'Connect implementation to business outcomes and work with design and QA to ship complete user workflows.',
    evidence: 'Subscription workflows contributed to 2× recurring revenue over 4 months at Champhunt.',
  },
  {
    title: 'Collaborative delivery',
    description: 'Bring stakeholder feedback into technical decisions, coordinate integrations, and help teammates deliver.',
    evidence: 'Worked with principal engineers and service owners at AWS; mentored 3 interns at Champhunt.',
  },
]

export const deliverySkills = [
  'Architecture tradeoffs', 'Technical design', 'Cross-functional delivery',
  'Integration planning', 'Code reviews & mentoring', 'Stakeholder communication',
  'Business-impact metrics', 'Operational problem-solving',
]

export const experiences = [
  {
    company: 'Amazon Web Services', initials: 'aws',
    role: 'Software Development Engineer Intern', team: 'Aurora team',
    location: 'East Palo Alto, CA', period: 'Sep 2026 — Present', current: true,
    bullets: [
      'Developing a rules engine from scratch to predict incompatible parameters across 5 RDS database engines, owning technical design, implementation, and validation.',
      'Evaluated tradeoffs across 3 architectures and incorporated principal-engineer and service-owner feedback into the technical design. Built and verified a configuration resolver for memory lookup, formula evaluation, configuration merging, and version checks.',
      'Deployed and verified a pre-production AWS CDK/DynamoDB stack with point-in-time recovery, write-only IAM permissions, cross-account STS access, and CloudWatch alarms.',
    ],
    stack: ['AWS CDK', 'DynamoDB', 'RDS', 'CloudWatch', 'IAM / STS'],
  },
  {
    company: 'Tata Consultancy Services', initials: 'tcs', role: 'Software Developer', team: '',
    location: 'Pune, India', period: 'Feb 2025 — Jul 2025', current: false,
    bullets: [
      'Improved engineering workflows by automating diagnostics and reporting with Python, SQL, and cron, reducing manual effort by 50% and saving 8 engineer-hours every week.',
      'Cut PostgreSQL reporting latency from 20s to 14s through materialized views, indexes, and query redesign. Added CloudWatch alerts across 3 production services.',
      'Built React/SQL internal dashboards used by 10+ engineers to investigate SLA metrics, service health, and data-quality issues.',
    ],
    stack: ['Python', 'SQL', 'PostgreSQL', 'React', 'CloudWatch'],
  },
  {
    company: 'Champhunt Inc.', initials: 'ch', role: 'Product Engineer', team: '',
    location: 'Remote', period: 'Aug 2024 — Jan 2025', current: false,
    bullets: [
      'Built React/Node.js subscription and payment workflows with transaction-status verification, database persistence, and paid-access controls, contributing to 2× recurring revenue over 4 months.',
      'Collaborated with design and QA to ship Reels and Stories, connecting React/Node.js implementation with user-facing delivery and supporting 40% user growth over 6 months.',
      'Reduced infrastructure costs by 25% by migrating static assets to S3/CloudFront and asynchronous workloads to AWS Lambda.',
      'Coordinated frontend-backend integrations and mentored 3 interns through planning, code reviews, and debugging to support team delivery.',
    ],
    stack: ['React', 'Node.js', 'S3 / CloudFront', 'AWS Lambda'],
  },
  {
    company: 'Champhunt Inc.', initials: 'ch', role: 'Product Engineering Intern', team: '',
    location: 'Remote', period: 'Jan 2024 — Jul 2024', current: false,
    bullets: [
      'Owned Fantasy League data ingestion, scoring logic, leaderboard APIs, and React user flows, increasing engagement by 45%.',
      'Built Kafka event pipelines to ingest live match data asynchronously and refresh high-traffic leaderboards after each over.',
      'Reduced API response latency by 40% through Redis caching, database indexes, and query refactoring.',
    ],
    stack: ['React', 'Kafka', 'Redis', 'REST APIs'],
  },
]

export const projects = [
  {
    id: 'riskwise', number: '01', name: 'RiskWise', category: 'AI AGENTS / RISK INTELLIGENCE', date: 'May 2026',
    description: 'Turning a world of live signals into clearer route decisions.',
    summary: 'An operations workflow that turns live global events into explainable route-risk scores, alternative routes, and actionable alerts through a three-agent pipeline.',
    problem: 'How can live global events inform route decisions?',
    delivered: 'Explainable risk scores, alternative-route recommendations, and threshold-triggered alerts in one operations dashboard.',
    repo: 'https://github.com/atharvb13/riskwise',
    stack: ['React', 'Python', 'FastAPI', 'tRPC', 'PostgreSQL', 'OpenAI API'],
    details: [
      { title: 'Live intelligence', text: 'Integrated GDELT, NASA EONET, and USGS APIs into a three-agent pipeline for live intelligence, explainable route-risk scoring, and alternative-route recommendations.' },
      { title: 'From signals to action', text: 'Built a React dashboard backed by type-safe tRPC APIs, structured logging, hourly scans, and threshold-triggered webhook alerts, connecting the intelligence pipeline to an operational workflow.' },
    ],
  },
  {
    id: 'mediconnect', number: '02', name: 'MediConnect', category: 'FULL-STACK / HEALTHCARE AI', date: 'Jan 2026',
    description: 'Connected care, with clinical context built in.',
    summary: 'A healthcare platform connecting the care journey end to end: appointments, real-time conversations, and AI-assisted clinical review with traceable reports.',
    problem: 'How can appointments, conversations, and clinical context work together?',
    delivered: 'Role-based care workflows and a Clinical Copilot that turns clinical files into structured findings, timelines, and risk flags.',
    repo: 'https://github.com/atharvb13/MediConnect',
    stack: ['React', 'Python', 'FastAPI', 'Node.js', 'Socket.IO', 'MongoDB'],
    details: [
      { title: 'The care workflow', text: 'Built role-based access, appointment scheduling, admin approvals, and real-time chat in a React/Node.js platform, integrating AI-assisted clinical review into user workflows.' },
      { title: 'Clinical Copilot', text: 'Developed a Python/FastAPI service using LiteLLM/Groq and OpenFDA to normalize clinical files and generate structured medication findings, timelines, risk flags, and traceable reports.' },
    ],
  },
] as const

export type Project = (typeof projects)[number]

export const skillGroups = [
  { title: 'Languages', items: ['Java', 'Python', 'C++', 'TypeScript', 'JavaScript', 'SQL'] },
  { title: 'Full-stack', items: ['React', 'Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'Redux', 'Socket.IO', 'HTML/CSS'] },
  { title: 'Data & cloud', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Kafka', 'AWS EC2', 'S3', 'Lambda', 'DynamoDB', 'CloudWatch', 'Docker'] },
  { title: 'Engineering & AI', items: ['Git', 'Linux', 'CI/CD', 'AWS CDK', 'JMeter', 'Postman', 'Cursor', 'Claude', 'LiteLLM', 'OpenAI API'] },
]

export const education = [
  { school: 'University of Massachusetts Amherst', degree: 'M.S. in Computer Science', period: 'Expected May 2027', gpa: '4.0 / 4.0', detail: 'Distributed Systems, Software Engineering, Machine Learning, Reinforcement Learning' },
  { school: 'Savitribai Phule Pune University', degree: 'B.Tech in Computer Engineering', period: '2020 — 2024', gpa: '3.93 / 4.0', detail: '' },
]
