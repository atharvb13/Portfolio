import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { Icon } from './components/Icons'
import { ThemeToggle } from './components/ThemeToggle'
import { MediConnectGallery } from './components/MediConnectGallery'
import { MediConnectVisual, RiskWiseVisual } from './components/ProjectVisuals'
import { mediCoverScreenshot, mediScreenshots } from './data/mediconnectScreenshots'
import { capabilities, deliverySkills, education, experiences, navigation, profile, projects, skillGroups } from './data/portfolio'
import type { Project } from './data/portfolio'
import './App.css'

function Stack({ items }: { items: readonly string[] }) {
  return <ul className="stack" aria-label="Technologies">{items.map(item => <li key={item}>{item}</li>)}</ul>
}

function SectionHeading({ number, label, title, children }: { number: string; label: string; title: string; children?: ReactNode }) {
  return <div className="section-heading"><div><p className="eyebrow"><span>{number} /</span> {label}</p><h2>{title}</h2></div>{children}</div>
}

function SystemIllustration() {
  return (
    <div className="system-illustration" aria-label="My engineering focus: interfaces, services, and infrastructure">
      <div className="system-topline mono"><span>ANATOMY OF A BUILDER</span><span>FIG. 01</span></div>
      <div className="system-grid" aria-hidden="true"><span className="grid-cross cross-one">+</span><span className="grid-cross cross-two">+</span><span className="grid-cross cross-three">+</span><span className="grid-cross cross-four">+</span></div>
      <div className="system-layers">
        <div className="system-layer"><span className="layer-icon"><Icon name="code" size={23} /></span><div><span className="mono layer-label">01 / THE EXPERIENCE</span><strong>Thoughtful interfaces</strong><span>React · TypeScript</span></div><span className="layer-node" /></div>
        <div className="layer-connector" aria-hidden="true"><i /><span className="mono">connect</span></div>
        <div className="system-layer"><span className="layer-icon"><Icon name="layers" size={23} /></span><div><span className="mono layer-label">02 / THE LOGIC</span><strong>Intelligent services</strong><span>Node.js · Python · FastAPI</span></div><span className="layer-node" /></div>
        <div className="layer-connector" aria-hidden="true"><i /><span className="mono">scale</span></div>
        <div className="system-layer infrastructure"><span className="layer-icon"><Icon name="database" size={23} /></span><div><span className="mono layer-label">03 / THE FOUNDATION</span><strong>Resilient infrastructure</strong><span>AWS · PostgreSQL · Redis</span></div><span className="layer-node" /></div>
      </div>
      <div className="system-bottomline mono"><span className="signal-dot" /> BUILT WITH THE WHOLE SYSTEM IN MIND<Icon name="arrow-up" size={14} /></div>
    </div>
  )
}

function ProjectDetails({ project }: { project: Project }) {
  return <>
    <p className="eyebrow">{project.category} <span>/ {project.date}</span></p>
    <h2 id="project-dialog-title">{project.name}</h2>
    <p className="dialog-summary">{project.summary}</p>
    <dl className="project-brief">
      <div><dt className="eyebrow">THE PROBLEM</dt><dd>{project.problem}</dd></div>
      <div><dt className="eyebrow">WHAT I DELIVERED</dt><dd>{project.delivered}</dd></div>
    </dl>
    {project.id === 'riskwise' ? <RiskWiseVisual /> : <MediConnectGallery />}
    <div className="project-detail-grid">{project.details.map(detail => <div key={detail.title}><h3>{detail.title}</h3><p>{detail.text}</p></div>)}</div>
    <Stack items={project.stack} />
    {project.id === 'mediconnect' && <details className="project-architecture"><summary>Explore the system architecture</summary><MediConnectVisual /></details>}
    <a className="button button-dark" href={project.repo} target="_blank" rel="noreferrer"><Icon name="github" size={18} /> Explore the source <Icon name="arrow-up" size={17} /></a>
  </>
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [copyStatus, setCopyStatus] = useState('')
  const dialogRef = useRef<HTMLDialogElement>(null)
  const menuToggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!menuOpen) return
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuToggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onEscape)
    return () => document.removeEventListener('keydown', onEscape)
  }, [menuOpen])

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) setActiveSection(entry.target.id)
    }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 })
    document.querySelectorAll('[data-section]').forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!selectedProject) return
    const dialog = dialogRef.current
    dialog?.showModal()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      dialog?.close()
      document.body.style.overflow = previousOverflow
    }
  }, [selectedProject])

  useEffect(() => {
    if (!copyStatus) return
    const timer = window.setTimeout(() => setCopyStatus(''), 3000)
    return () => window.clearTimeout(timer)
  }, [copyStatus])

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopyStatus('Email address copied')
    } catch {
      setCopyStatus(`Copy unavailable. Email: ${profile.email}`)
    }
  }

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="header-inner page-width">
          <a href="#home" className="brand" aria-label="Atharv Bhale, home" onClick={() => setMenuOpen(false)}><span className="brand-monogram">ab<span>.</span></span><span>Atharv Bhale</span></a>
          <nav className={`navigation ${menuOpen ? 'is-open' : ''}`} id="main-navigation" aria-label="Main navigation">
            {navigation.map(item => <a href={`#${item.id}`} key={item.id} className={activeSection === item.id ? 'active' : ''} aria-current={activeSection === item.id ? 'location' : undefined} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
          </nav>
          <div className="header-actions"><ThemeToggle /><a className="header-resume" href={profile.resume} target="_blank" rel="noreferrer">Résumé <Icon name="arrow-up" size={15} /></a><button ref={menuToggleRef} className="menu-toggle icon-button" aria-controls="main-navigation" aria-expanded={menuOpen} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? 'close' : 'menu'} /></button></div>
        </div>
      </header>

      <main id="main">
        <section className="hero page-width" id="home" data-section>
          <div className="hero-content">
            <p className="eyebrow"><span className="tiny-cross">✳</span> ENGINEERING · PRODUCT · DELIVERY</p>
            <h1>Good software.<br />Real-world <em>impact.</em></h1>
            <p className="hero-intro">I’m Atharv. I turn complex problems into working products, connecting engineering depth, product thinking, and hands-on delivery.</p>
            <p className="hero-context">Currently an <strong>SDE intern on the AWS Aurora team.</strong><br />M.S. Computer Science at <strong>UMass Amherst.</strong></p>
            <div className="hero-actions"><a className="button button-dark" href="#work">Explore my work <Icon name="arrow" size={18} /></a><a className="text-link resume-download" href={profile.resume} download="Atharv_Bhale_Resume.pdf">Download résumé <Icon name="download" size={17} /></a></div>
            <div className="hero-socials"><a href={profile.github} target="_blank" rel="noreferrer"><Icon name="github" size={17} /> GitHub <Icon name="arrow-up" size={12} /></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Icon name="linkedin" size={17} /> LinkedIn <Icon name="arrow-up" size={12} /></a><a href={`mailto:${profile.email}`} aria-label={`Email ${profile.email}`}><Icon name="mail" size={18} /> Say hello <Icon name="arrow-up" size={12} /></a></div>
          </div>
          <SystemIllustration />
          <div className="hero-footnote"><span className="mono">ENGINEERING DEPTH. PRODUCT PERSPECTIVE. END-TO-END OWNERSHIP.</span><a href="#work" className="mono">SCROLL TO EXPLORE <span>↓</span></a></div>
        </section>

        <div className="impact-strip"><div className="impact-inner page-width"><p>Small details.<br /><strong>Measurable difference.</strong></p><div className="impact-stat"><strong>50<span>%</span></strong><span>less manual effort at TCS</span></div><div className="impact-stat"><strong>2<span>×</span></strong><span>recurring revenue at Champhunt</span></div><div className="impact-stat"><strong>25<span>%</span></strong><span>lower infrastructure costs at Champhunt</span></div></div></div>

        <section className="capabilities-section page-width" aria-labelledby="capabilities-title">
          <div className="capabilities-heading"><p className="eyebrow">HOW I CONTRIBUTE</p><h2 id="capabilities-title">From the problem to the product.</h2></div>
          <div className="capabilities-grid">{capabilities.map((capability, index) => <article key={capability.title}>
            <span className="mono capability-index">0{index + 1}</span>
            <h3>{capability.title}</h3>
            <p>{capability.description}</p>
            <p className="capability-evidence">{capability.evidence}</p>
          </article>)}</div>
        </section>

        <section id="work" className="work-section section page-width" data-section>
          <SectionHeading number="01" label="SELECTED WORK" title="Problems into products."><p>Operational context. Technical depth.<br />Working solutions, from interface to infrastructure.</p></SectionHeading>
          <div className="project-grid">{projects.map(project => <article className="project-card" key={project.id}>
            <button className="project-visual-button" onClick={() => setSelectedProject(project)} aria-label={`Explore ${project.name} project details`}>{project.id === 'riskwise' ? <RiskWiseVisual /> : <div className="project-screenshot-preview"><img src={mediCoverScreenshot.src} alt={mediCoverScreenshot.alt} width="1440" height="1000" loading="lazy" /><div className="project-screenshot-caption"><span className="mono">THE RUNNING APPLICATION</span><span>{mediScreenshots.length} screenshots <Icon name="arrow-up" size={16} /></span></div></div>}{project.id === 'riskwise' && <span className="visual-open"><Icon name="arrow-up" size={19} /></span>}</button>
            <div className="project-meta mono"><span>{project.number} / {project.category}</span><span>{project.date}</span></div>
            <div className="project-title-row"><h3><button onClick={() => setSelectedProject(project)}>{project.name}</button></h3><a href={project.repo} target="_blank" rel="noreferrer" aria-label={`${project.name} source on GitHub`}><Icon name="github" size={21} /></a></div>
            <p className="project-tagline">{project.description}</p><p className="project-summary">{project.summary}</p><Stack items={project.stack} /><button className="text-link project-details-link" onClick={() => setSelectedProject(project)}>Explore project <Icon name="arrow" size={17} /></button>
          </article>)}</div>
          <a className="all-code-link" href={profile.github} target="_blank" rel="noreferrer">There’s more in the repositories. <span>Find me on GitHub <Icon name="arrow-up" size={15} /></span></a>
        </section>

        <section id="experience" className="experience-section section" data-section><div className="page-width">
          <SectionHeading number="02" label="THE JOURNEY" title="Ownership, in practice."><p>Shipping features. Aligning teams.<br />Connecting technical decisions to real outcomes.</p></SectionHeading>
          <div className="experience-list">{experiences.map(experience => <article className={`experience-row ${experience.current ? 'current-role' : ''}`} key={experience.role + experience.company}>
            <div className="experience-company"><span className={`company-mark ${experience.initials}`}>{experience.initials}</span><div><h3>{experience.company}</h3><p>{experience.location}</p>{experience.current && <span className="current-label mono"><span className="signal-dot" />CURRENTLY HERE</span>}</div></div>
            <div className="experience-main"><div className="experience-role"><h4>{experience.role}</h4><span className="mono">{experience.period}</span></div>{experience.team && <p className="team-label">{experience.team}</p>}<ul className="experience-bullets">{experience.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul><Stack items={experience.stack} /></div>
          </article>)}</div>
        </div></section>

        <section id="about" className="about-section section page-width" data-section>
          <SectionHeading number="03" label="A LITTLE MORE HUMAN" title="Curiosity is the throughline." />
          <div className="about-grid"><div className="about-story"><p className="about-lead">Understand the problem.<br /><em>Own the path to a solution.</em></p><p>My work spans startup product engineering, enterprise systems, and cloud infrastructure at AWS. I’ve built production features, worked with design and QA, incorporated service-owner feedback, and mentored teammates through delivery.</p><p>I’m interested in software engineering, technical product management, and forward-deployed engineering roles where I can combine technical depth with product judgment, collaboration, and hands-on execution.</p><p>At UMass Amherst, I study distributed systems, software engineering, and machine learning. As a Graduate Student Government Senator, I also represent 500+ CS graduate students in university policy discussions.</p><div className="award-note"><span className="award-symbol" aria-hidden="true">✳</span><div><span className="eyebrow">BUILDING UNDER PRESSURE</span><h3>Manus AI Hackathon winner</h3><p>Boston Tech Week 2026. A working AI product, built and shipped in under 24 hours.</p></div></div></div>
            <div className="education-list"><p className="eyebrow">ALWAYS LEARNING</p>{education.map(item => <article className="education-item" key={item.school}><div className="education-top"><span className="mono">{item.period}</span><span className="gpa">GPA {item.gpa}</span></div><h3>{item.school}</h3><p className="degree">{item.degree}</p>{item.detail && <p className="coursework">{item.detail}</p>}</article>)}</div></div>
          <div className="toolkit"><div className="toolkit-heading"><h3>The toolkit</h3><span className="mono">PICKING THE RIGHT TOOL FOR THE PROBLEM.</span></div><div className="skills-grid">{skillGroups.map((group, index) => <div className="skill-group" key={group.title}><span className="skill-index mono">0{index + 1}</span><h4>{group.title}</h4><Stack items={group.items} /></div>)}</div></div>
          <div className="delivery-toolkit"><h3>Product & team delivery</h3><p>Practices I’ve applied across technical design, feature delivery, mentoring, and stakeholder collaboration.</p><Stack items={deliverySkills} /></div>
        </section>

        <section id="contact" className="contact-section" data-section><div className="page-width"><div className="contact-top"><p className="eyebrow"><span>04 /</span> NEXT CONVERSATION</p><span className="mono">LET’S BUILD SOMETHING THAT MATTERS.</span></div><div className="contact-main"><div><h2>Good things start<br />with <em>a hello.</em></h2><p>Hiring for software engineering, technical product, or FDE roles?<br />Let’s talk about the problems your team is solving.</p></div><a className="contact-arrow" href={`mailto:${profile.email}`} aria-label="Start a conversation by email"><Icon name="arrow-up" size={52} /></a></div><div className="contact-bottom"><div className="email-row"><a href={`mailto:${profile.email}`}>{profile.email}</a><button className="icon-button copy-button" onClick={copyEmail} aria-label="Copy email address"><Icon name={copyStatus === 'Email address copied' ? 'check' : 'copy'} size={18} /></button></div><div className="contact-links"><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <Icon name="arrow-up" size={15} /></a><a href={profile.github} target="_blank" rel="noreferrer">GitHub <Icon name="arrow-up" size={15} /></a></div></div></div></section>
      </main>

      <footer className="site-footer page-width"><a className="footer-signature" href="#home">Atharv Bhale<span>© {new Date().getFullYear()}</span></a><span className="mono footer-note">THOUGHTFULLY BUILT. ALWAYS ITERATING.</span><a href="#home" className="text-link">Back to top <span aria-hidden="true">↑</span></a></footer>

      <dialog ref={dialogRef} className="project-dialog" aria-labelledby="project-dialog-title" onClose={() => setSelectedProject(null)} onClick={event => { if (event.target === event.currentTarget) dialogRef.current?.close() }}><div className="dialog-content"><button className="dialog-close icon-button" onClick={() => dialogRef.current?.close()} aria-label="Close project details"><Icon name="close" size={23} /></button>{selectedProject && <ProjectDetails project={selectedProject} key={selectedProject.id} />}</div></dialog>
      <div className={`toast ${copyStatus ? 'visible' : ''}`} role="status">{copyStatus}</div>
    </>
  )
}
