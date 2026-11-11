import { useRef, useState } from 'react'
import { Icon } from './Icons'

export interface ApplicationScreenshot {
  id: string
  category: string
  title: string
  src: string
  alt: string
  caption: string
  portrait?: boolean
}

interface ApplicationGalleryProps {
  name: string
  screenshots: readonly ApplicationScreenshot[]
  categories: readonly string[]
  demoNote: string
  darkScreenshots?: boolean
}

export function ApplicationGallery({ name, screenshots, categories, demoNote, darkScreenshots = false }: ApplicationGalleryProps) {
  const [category, setCategory] = useState('All')
  const [selectedId, setSelectedId] = useState(screenshots[0].id)
  const figureRef = useRef<HTMLElement>(null)
  const visibleShots = category === 'All' ? screenshots : screenshots.filter(shot => shot.category === category)
  const index = Math.max(0, visibleShots.findIndex(shot => shot.id === selectedId))
  const selected = visibleShots[index]

  function changeCategory(next: string) {
    setCategory(next)
    setSelectedId((next === 'All' ? screenshots : screenshots.filter(shot => shot.category === next))[0].id)
  }

  function selectScreenshot(id: string) {
    setSelectedId(id)
    figureRef.current?.scrollIntoView({
      block: 'nearest',
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    })
  }

  function move(direction: number) {
    setSelectedId(visibleShots[(index + direction + visibleShots.length) % visibleShots.length].id)
  }

  return (
    <section className={`application-gallery${darkScreenshots ? ' dark-screenshots' : ''}`} aria-label={`${name} application screenshots`}>
      <div className="gallery-heading">
        <div><p className="eyebrow">THE RUNNING APPLICATION</p><h3>Inside {name}</h3></div>
        <span className="mono">{screenshots.length} screenshots</span>
      </div>
      <p className="gallery-demo-note">{demoNote}</p>
      <div className="gallery-filters" role="group" aria-label="Filter screenshots by workflow">
        {categories.map(item => <button key={item} type="button" onClick={() => changeCategory(item)} aria-pressed={category === item}>{item}</button>)}
      </div>
      <figure className="gallery-figure" ref={figureRef}>
        <a className="gallery-full-image" href={selected.src} target="_blank" rel="noreferrer" aria-label={`Open ${selected.title} screenshot at full size`}>
          <img className={selected.portrait ? 'gallery-portrait' : undefined} src={selected.src} alt={selected.alt} width={selected.portrait ? 390 : 1440} height={selected.portrait ? 844 : 1000} decoding="async" />
          <span className="gallery-expand">View full size <Icon name="arrow-up" size={16} /></span>
        </a>
        <figcaption aria-live="polite"><strong>{selected.title}</strong><p>{selected.caption}</p></figcaption>
      </figure>
      <div className="gallery-controls">
        <button className="text-link" type="button" onClick={() => move(-1)} aria-label={`Previous ${name} screenshot`}><Icon name="arrow" size={17} style={{ transform: 'rotate(180deg)' }} />Previous</button>
        <span className="mono" aria-live="polite">{index + 1} / {visibleShots.length}</span>
        <button className="text-link" type="button" onClick={() => move(1)} aria-label={`Next ${name} screenshot`}>Next<Icon name="arrow" size={17} /></button>
      </div>
      <div className="gallery-thumbnails" role="group" aria-label="Choose an application screenshot">
        {visibleShots.map(shot => <button key={shot.id} type="button" aria-label={`View ${shot.title}`} aria-pressed={shot.id === selected.id} onClick={() => selectScreenshot(shot.id)}>
          <img src={shot.src} alt="" loading="lazy" decoding="async" width="1440" height="1000" />
          <span>{shot.title}</span>
        </button>)}
      </div>
    </section>
  )
}
