import { useRef, useState } from 'react'
import { Icon } from './Icons'
import { mediScreenshots, mediScreenshotCategories } from '../data/mediconnectScreenshots'
import type { MediScreenshotCategory } from '../data/mediconnectScreenshots'

export function MediConnectGallery() {
  const [category, setCategory] = useState<MediScreenshotCategory>('All')
  const [selectedId, setSelectedId] = useState(mediScreenshots[0].id)
  const figureRef = useRef<HTMLElement>(null)
  const visibleShots = category === 'All' ? mediScreenshots : mediScreenshots.filter(shot => shot.category === category)
  const index = Math.max(0, visibleShots.findIndex(shot => shot.id === selectedId))
  const selected = visibleShots[index]

  function changeCategory(next: MediScreenshotCategory) {
    setCategory(next)
    setSelectedId((next === 'All' ? mediScreenshots : mediScreenshots.filter(shot => shot.category === next))[0].id)
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
    <section className="medi-gallery" aria-label="MediConnect application screenshots">
      <div className="gallery-heading">
        <div><p className="eyebrow">THE RUNNING APPLICATION</p><h3>Inside MediConnect</h3></div>
        <span className="mono">{mediScreenshots.length} screenshots</span>
      </div>
      <p className="gallery-demo-note">Captured from a local run with synthetic demonstration accounts and a fictional clinical chart. No real patient data is shown.</p>
      <div className="gallery-filters" role="group" aria-label="Filter screenshots by workflow">
        {mediScreenshotCategories.map(item => <button key={item} type="button" onClick={() => changeCategory(item)} aria-pressed={category === item}>{item}</button>)}
      </div>
      <figure className="gallery-figure" ref={figureRef}>
        <a className="gallery-full-image" href={selected.src} target="_blank" rel="noreferrer" aria-label={`Open ${selected.title} screenshot at full size`}>
          <img src={selected.src} alt={selected.alt} width="1440" height="1000" decoding="async" />
          <span className="gallery-expand">View full size <Icon name="arrow-up" size={16} /></span>
        </a>
        <figcaption aria-live="polite"><strong>{selected.title}</strong><p>{selected.caption}</p></figcaption>
      </figure>
      <div className="gallery-controls">
        <button className="text-link" type="button" onClick={() => move(-1)} aria-label="Previous MediConnect screenshot"><Icon name="arrow" size={17} style={{ transform: 'rotate(180deg)' }} />Previous</button>
        <span className="mono" aria-live="polite">{index + 1} / {visibleShots.length}</span>
        <button className="text-link" type="button" onClick={() => move(1)} aria-label="Next MediConnect screenshot">Next<Icon name="arrow" size={17} /></button>
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
