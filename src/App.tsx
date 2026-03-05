import { useEffect, useMemo, useState } from 'react'
import './App.css'
import hiAvatar from "./assets/coding_themed.json"
import Lottie from "lottie-react"
import mc1 from "./assets/medi/img1.png"
import mc2 from "./assets/medi/img2.png"
import mc3 from "./assets/medi/img3.png"
import mc4 from "./assets/medi/img4.png"
import mc5 from "./assets/medi/img5.png"

import t1 from "./assets/travel/im1.png"
import t2 from "./assets/travel/im2.png"


type SkillGroup = { title: string; items: string[] }
type Experience = {
  role: string
  company: string
  location: string
  start: string
  end: string
  bullets: string[]
  tech?: string[]
}
type Project = {
  name: string
  subtitle: string
  date: string
  repo: string
  stack: string[]
  bullets: string[]
  images?: string[]
}

const NAME = 'Atharv Bhale'
const TITLE = 'Software Engineering Intern • Full-Stack Developer'
const EMAIL = 'atharvb.0013@gmail.com'
// Replace with your real links
const LINKS = {
  linkedin: 'https://www.linkedin.com/in/atharv-b-624891212/',
  github: 'https://github.com/atharvb13',
}

const skillGroups: SkillGroup[] = [
  { title: 'Languages', items: ['Java', 'Python', 'JavaScript', 'SQL'] },
  { title: 'Backend & Cloud', items: ['Node.js', 'Express', 'REST APIs', 'AWS (EC2, S3, Lambda)', 'Docker'] },
  { title: 'Frontend', items: ['React', 'Redux', 'TailwindCSS', 'HTML/CSS'] },
  { title: 'Databases', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'] },
  { title: 'Tools & Systems', items: ['Git', 'Jenkins', 'Postman', 'JMeter', 'Agile', 'Distributed Systems', 'Linux'] },
]

const experiences: Experience[] = [
  {
    role: 'Software Developer',
    company: 'Tata Consultancy Services',
    location: 'Pune, India',
    start: 'Feb 2025',
    end: 'Jul 2025',
    bullets: [
      'Analyzed and refactored legacy distributed-system components to support a zero-downtime migration across teams.',
      'Automated operational workflows using Python, reducing manual effort by 70%.',
      'Optimized PostgreSQL performance via materialized views and index tuning, reducing report latency by 30% on large datasets.',
      'Integrated AWS CloudWatch monitoring and alerting to improve reliability and incident response time.',
    ],
    tech: ['Python', 'PostgreSQL', 'AWS CloudWatch', 'Distributed Systems'],
  },
  {
    role: 'Full Stack Developer',
    company: 'Champhunt INC',
    location: 'Remote',
    start: 'Aug 2024',
    end: 'Jan 2025',
    bullets: [
      'Architected and launched a subscription revenue system with secure payment workflows, doubling recurring revenue.',
      'Built and shipped core full-stack features supporting 70% user growth; contributed to Techstars ’24 accelerator acceptance.',
      'Led and mentored interns via code reviews and sprint planning to ensure on-time, high-quality delivery.',
      'Migrated static assets to S3/CloudFront and offloaded heavy tasks to AWS Lambda, cutting costs by 25% while improving performance.',
    ],
    tech: ['Node.js', 'AWS (S3, CloudFront, Lambda)', 'Full-stack'],
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Champhunt INC',
    location: 'Remote',
    start: 'Jan 2024',
    end: 'Jul 2024',
    bullets: [
      'Designed and implemented a microservices-based Fantasy League feature with real-time match data and leaderboards, boosting engagement by 45%.',
      'Built a responsive partner landing page using React and TailwindCSS, improving load speed by 30%.',
      'Eliminated performance bottlenecks using caching + query optimization, reducing average response time by 40% and improving scalability.',
    ],
    tech: ['Node.js', 'React', 'TailwindCSS', 'MongoDB', 'REST', 'Microservices', 'Redis', 'Kafka'],
  },
]

const projects: Project[] = [
  {
    name: 'MediConnect',
    subtitle: 'SaaS healthcare platform',
    date: 'Dec 2025',
    repo:'https://github.com/atharvb13/MediConnect',
    images: [
      mc1,
      mc2,
      mc3,
      mc4,
      mc5
    ],
    stack: ['React', 'Node.js', 'MongoDB', 'REST APIs', 'Python (ML)', 'FastAPI', 'Redis', 'Cloud Storage/CDN'],
    bullets: [
      'Built appointment scheduling, secure messaging, and medical record sharing workflows.',
      'Developed a Python ML microservice (Scikit-learn) for symptom-driven disease prediction for real-time diagnostics.',
      'Reduced API latency via MongoDB indexing and Redis caching; implemented multi-role auth and secure file sharing.',
    ],
  },
  {
    name: 'Travel Memories',
    subtitle: 'Full-stack social platform',
    date: 'Jul 2025',
    images: [
      t1,
      t2
    ],
    repo:'https://github.com/atharvb13/Travel-Memories',
    stack: ['React', 'Redux', 'Node.js', 'MongoDB', 'Material UI', 'Google OAuth', 'JWT'],
    bullets: [
      'Created a social platform with predictable state management using Redux.',
      'Implemented Google OAuth + JWT authentication for secure cross-device sessions.',
      'Built tag-based search + filtering to query large collections efficiently.',
    ],
  },
]

const education = [
  {
    school: 'University of Massachusetts Amherst',
    degree: 'M.S. in Computer Science',
    when: 'Expected: May 2027',
    extra: 'GPA: 4.0/4.0 • Coursework: Reinforcement Learning, Machine Learning, Software Engineering',
  },
  {
    school: 'VIIT Pune',
    degree: 'B.Tech in Computer Engineering',
    when: '2020 – 2024',
    extra: 'GPA: 3.93/4.0 • Coursework: OOP, DBMS, Computer Networks, DSA, DevOps',
  },
]

function Chip({
  children,
  onClick,
  active,
  title,
}: {
  children: React.ReactNode
  onClick?: () => void
  active?: boolean
  title?: string
}) {
  return (
    <button
      className={`chip ${active ? 'chipActive' : ''} ${onClick ? 'chipBtn' : ''}`}
      onClick={onClick}
      type="button"
      title={title}
    >
      {children}
    </button>
  )
}

function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string
  title: string
  subtitle?: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="section reveal">
      <div className="sectionHead">
        <h2>{title}</h2>
        {subtitle ? <p className="muted">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  )
}

function Modal({
  open,
  title,
  subtitle,
  children,
  onClose,
}: {
  open: boolean
  title: string
  subtitle?: string
  children: React.ReactNode
  onClose: () => void
}) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="modalOverlay" role="dialog" aria-modal="true" onMouseDown={onClose}>
      <div className="modal" onMouseDown={(e) => e.stopPropagation()}>
        <div className="modalTop">
          <div>
            <div className="modalTitle">{title}</div>
            {subtitle ? <div className="muted">{subtitle}</div> : null}
          </div>
          <button className="iconBtn" type="button" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>
        <div className="modalBody">{children}</div>
      </div>
    </div>
  )
}

function ImageCarousel({
  images = [],
  intervalMs = 3500,
}: {
  images?: string[]
  intervalMs?: number
}) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [drag, setDrag] = useState<{ startX: number; dx: number; active: boolean }>({
    startX: 0,
    dx: 0,
    active: false,
  })

  if (!images || images.length === 0) return null

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length)
  const next = () => setIndex((i) => (i + 1) % images.length)

  // Auto-advance
  useEffect(() => {
    if (!images || images.length <= 1) return
    if (paused) return
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, intervalMs)
    return () => window.clearInterval(id)
  }, [images, intervalMs, paused])

  // Keep index valid if images list changes
  useEffect(() => {
    if (!images || images.length === 0) return
    if (index > images.length - 1) setIndex(0)
  }, [images, index])

  return (
    <div
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") prev()
        if (e.key === "ArrowRight") next()
      }}
      onPointerDown={(e) => {
        if (images.length <= 1) return
        ;(e.currentTarget as HTMLDivElement).setPointerCapture?.(e.pointerId)
        setPaused(true)
        setDrag({ startX: e.clientX, dx: 0, active: true })
      }}
      onPointerMove={(e) => {
        if (!drag.active) return
        setDrag((d) => ({ ...d, dx: e.clientX - d.startX }))
      }}
      onPointerUp={() => {
        if (!drag.active) return
        const threshold = 48
        if (drag.dx > threshold) prev()
        else if (drag.dx < -threshold) next()
        setDrag({ startX: 0, dx: 0, active: false })
        setPaused(false)
      }}
      onPointerCancel={() => {
        if (!drag.active) return
        setDrag({ startX: 0, dx: 0, active: false })
        setPaused(false)
      }}
      tabIndex={0}
      role="group"
      aria-label="Project screenshots"
    >
      <div className="carouselViewport" aria-hidden="true">
        <div
          className={`carouselTrack ${drag.active ? "dragging" : ""}`}
          style={{
            transform: `translateX(calc(${-index * 100}% + ${drag.dx}px))`,
          }}
        >
          {images.map((src, i) => (
            <div className="carouselSlide" key={src + i}>
              <img
                src={src}
                className="carouselImage"
                alt={`project screenshot ${i + 1}`}
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="carouselMeta" aria-hidden="true">
        <span className="carouselCount">
          {index + 1} / {images.length}
        </span>
      </div>

      {images.length > 1 && (
        <>
          <button className="carouselBtn left" type="button" onClick={prev} aria-label="Previous image">
            <span aria-hidden="true">‹</span>
          </button>
          <button className="carouselBtn right" type="button" onClick={next} aria-label="Next image">
            <span aria-hidden="true">›</span>
          </button>
        </>
      )}

      <div className="carouselDots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
            type="button"
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function App() {
  const [activeSection, setActiveSection] = useState('top')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [toast, setToast] = useState<string | null>(null)
  const [glow, setGlow] = useState({ x: 0, y: 0, show: false })

  const navItems = useMemo(
    () => [
      { id: 'about', label: 'About' },
      { id: 'skills', label: 'Skills' },
      { id: 'experience', label: 'Experience' },
      { id: 'projects', label: 'Projects' },
      { id: 'education', label: 'Education' },
      { id: 'contact', label: 'Contact' },
    ],
    [],
  )


  useEffect(() => {
    // Active section highlight
    const sections = Array.from(document.querySelectorAll('section.section')) as HTMLElement[]
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0]
        if (visible?.target?.id) setActiveSection(visible.target.id)
      },
      { root: null, threshold: [0.25, 0.4, 0.55], rootMargin: '-20% 0px -55% 0px' },
    )
    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    // Scroll reveal animations
    const nodes = Array.from(document.querySelectorAll('.reveal')) as HTMLElement[]
    const r = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) (e.target as HTMLElement).classList.add('in')
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' },
    )
    nodes.forEach((n) => r.observe(n))
    return () => r.disconnect()
  }, [])

  useEffect(() => {
    // Cursor glow
    let raf = 0
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        setGlow({ x: e.clientX, y: e.clientY, show: true })
      })
    }
    const onLeave = () => setGlow((g) => ({ ...g, show: false }))
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseleave', onLeave)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), 2400)
    return () => clearTimeout(t)
  }, [toast])

  const copy = async (text: string, msg: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setToast(msg)
    } catch {
      setToast('Copy failed — try manually.')
    }
  }

  return (
    <div className="app">
      {/* Cursor glow */}
      <div
        className={`cursorGlow ${glow.show ? 'show' : ''}`}
        style={{ left: glow.x, top: glow.y }}
        aria-hidden="true"
      />

      {/* Background */}
      <div className="bg" aria-hidden="true">
        <div className="orb o1" />
        <div className="orb o2" />
        <div className="orb o3" />
        <div className="grid" />
      </div>

      {/* Top Nav */}
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Home">
          <span className="brandMark">AB</span>
          <span className="brandText">{NAME}</span>
        </a>

        <nav className="nav">
          {navItems.map((n) => (
            <a key={n.id} href={`#${n.id}`} className={activeSection === n.id ? 'active' : ''}>
              {n.label}
            </a>
          ))}

        </nav>
      </header>

      {/* Hero */}
      <main id="top" className="container">
        <section className="hero reveal">
          <div className="heroLeft">
            <p className="kicker">Portfolio</p>
            <h1>
              {NAME}
              <span className="accent">.</span>
            </h1>
            <p className="title">{TITLE}</p>
            <p className="lead">
              MSCS student at UMass Amherst and software developer with experience in full stack development and cloud platforms. 
              Passionate about building high-quality products and designing scalable backend systems to solve complex challenges.
            </p>

            <div className="heroActions">
              <a className="btn primary" href="#projects">
                View Projects
              </a>

              <a className="btn" href="https://drive.google.com/file/d/11A7FJXY1DERoqj4frWqNmbPTQTEy3UCy/view?usp=sharing" target="_blank" rel="noreferrer" download>
                Download Resume
              </a>

              <a className="btn ghost" href={LINKS.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="btn ghost" href={LINKS.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>

            <div className="mini">
              <div className="miniItem">
                <span className="miniLabel">Email</span>
                <div className="miniRow">
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                  <button className="iconBtn" type="button" onClick={() => copy(EMAIL, 'Email copied')}>
                    ⧉
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="heroRight">
              <Lottie
                animationData={hiAvatar}
                loop={true}
                autoplay={true}
              /> 
            </div>
        </section>

        <Section id="about" title="About" subtitle="A quick snapshot of who I am and what I do.">
          <div className="grid2">
            <div className="card">
              <p className="muted">
            With 1 year of experience as a software engineer across startup and enterprise environments, 
            I’ve contributed to building and shipping production-ready applications end to end. 
            My work spans the stack, from designing intuitive interfaces to developing backend services and 
            taking ideas from concept to launch.
              </p>
              <p className="muted">
                Focused on writing clean, maintainable code, collaborating closely with teams, 
                and taking ownership of features through delivery. Comfortable stepping into 
                leadership responsibilities, mentoring teammates, and helping drive projects forward when needed.
                Constantly exploring new tools and approaches to build better, more thoughtful software.

              </p>
            </div>

            <div className="card">
              <h3>Focus areas</h3>
              <div className="focus">
                {[
                  ['Product Engineering', 'Auth, payments, subscriptions, search, multi-role systems'],
                  ['Frontend', 'React, responsive UI, state management, design systems'],
                  ['Backend', 'API design, microservices, database modeling, integrations'],
                  ['Cloud & Deployment', 'AWS, serverless workflows, storage, monitoring'],
                ].map(([k, v]) => (
                  <div className="focusItem" key={k}>
                    <div className="focusKey">{k}</div>
                    <div className="muted">{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section id="skills" title="Skills" subtitle="A toolkit built for production-grade apps.">
          <div className="skills">
            {skillGroups.map((g) => (
              <div className="card" key={g.title}>
                <h3>{g.title}</h3>
                <div className="chips">
                  {g.items.map((x) => (
                    <Chip key={x}>{x}</Chip>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience" subtitle="Impact-focused work across full-stack and cloud.">
          <div className="timeline">
            {experiences.map((e) => (
              <article className="card timelineItem hoverLift" key={`${e.company}-${e.role}`}>
                <div className="timelineTop">
                  <div>
                    <h3 className="tight">{e.role}</h3>
                    <div className="muted">
                      {e.company} • {e.location}
                    </div>
                  </div>
                  <div className="when">
                    {e.start} — {e.end}
                  </div>
                </div>

                <ul className="bullets">
                  {e.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>

                {e.tech?.length ? (
                  <div className="chips">
                    {e.tech.map((t) => (
                      <Chip key={t}>{t}</Chip>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects" >

          <div className="projects">
            {projects.map((p) => (
            <article
              className="card project hoverLift clickable"
              key={p.name}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' ? setSelectedProject(p) : null)}
            >
              <div className="projectHead" onClick={() => setSelectedProject(p)}>
                <div>
                  <h3 className="tight">{p.name}</h3>
                  <div className="muted">{p.subtitle}</div>
                </div>
                <div className="when">{p.date}</div>
              </div>

              {/* SHOW IMAGES ON MAIN CARD */}
              {p.images && <ImageCarousel images={p.images} />}

              <div className="projectActions" onClick={() => setSelectedProject(p)}>
                <span className="btn small">Open details →</span>
              </div>
            </article>
          ))}
          </div>
        </Section>

        <Section id="education" title="Education" subtitle="Academic foundation and coursework.">
          <div className="edu">
            {education.map((ed) => (
              <div className="card hoverLift" key={ed.school}>
                <div className="eduTop">
                  <div>
                    <h3 className="tight">{ed.school}</h3>
                    <div className="muted">{ed.degree}</div>
                  </div>
                  <div className="when">{ed.when}</div>
                </div>
                <p className="muted">{ed.extra}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact" subtitle="Let’s build something that performs and feels great.">
          <div className="grid2">
            <div className="card">
              <h3>Get in touch</h3>
              <p className="muted">Email is best. If you share a role / project context, I’ll reply with relevant work.</p>

              <div className="contactLines">
                <a className="contactLine" href={`mailto:${EMAIL}`}>
                  <span className="contactKey">Email</span>
                  <span className="contactVal">{EMAIL}</span>
                </a>
                <a className="contactLine" href={LINKS.linkedin} target="_blank" rel="noreferrer">
                  <span className="contactKey">LinkedIn</span>
                  <span className="contactVal">Open profile</span>
                </a>
                <a className="contactLine" href={LINKS.github} target="_blank" rel="noreferrer">
                  <span className="contactKey">GitHub</span>
                  <span className="contactVal">View repos</span>
                </a>
              </div>
            </div>

            <div className="card">
              <h3>Quick pitch</h3>
              <p className="muted">
                MSCS student with experience in Full stack development and cloud technologies, with proven impact in building and
                <b> shipping features that drive growth</b>.
              </p>

              <div className="chips">
                {['Distributed Systems', 'AWS', 'Node.js', 'React', 'PostgreSQL', 'MongoDB', 'Redis', 'FastAPI'].map((x) => (
                  <span key={x} className="chipStatic">
                    {x}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <footer className="footer">
          <div className="muted">
            © {new Date().getFullYear()} {NAME}. Built with React + Typescript.
          </div>
          <a className="toTop" href="#top">
            Back to top ↑
          </a>
        </footer>

        {/* Project modal */}
        <Modal
          open={!!selectedProject}
          title={selectedProject?.name ?? ''}
          subtitle={selectedProject?.subtitle}
          onClose={() => setSelectedProject(null)}
        >
          {selectedProject ? (
            <>
              <div className="chips" style={{ marginTop: 10 }}>
                {selectedProject.stack.map((s) => (
                  <span key={s} className="chipStatic">
                    {s}
                  </span>
                ))}
              </div>
              <ul className="bullets" style={{ marginTop: 12 }}>
                {selectedProject.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>

              <div className="modalActions">
                <a className="btn small" href={selectedProject?.repo} onClick={() => setSelectedProject(null)}>
                  Link 
                </a>
                <button className="btn small ghost" type="button" onClick={() => setSelectedProject(null)}>
                  Close
                </button>
              </div>
            </>
          ) : null}
        </Modal>

        {/* Toast */}
        <div className={`toast ${toast ? 'show' : ''}`} role="status" aria-live="polite">
          {toast ?? ''}
        </div>
      </main>
    </div>
  )
}
