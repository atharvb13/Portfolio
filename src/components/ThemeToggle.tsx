import { useEffect, useState } from 'react'
import { Icon } from './Icons'

type Theme = 'light' | 'dark'
const storageKey = 'portfolio-theme'

export function ThemeToggle() {
  // The head script applies the saved/system theme before the first paint.
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light',
  )

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content', theme === 'dark' ? '#151d18' : '#faf9f6',
    )
  }, [theme])

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const followSystem = () => {
      try {
        const saved = localStorage.getItem(storageKey)
        if (saved === 'light' || saved === 'dark') return
      } catch { /* Theme switching also works when storage is unavailable. */ }
      setTheme(media.matches ? 'dark' : 'light')
    }
    const syncPreference = (event: StorageEvent) => {
      if (event.key !== storageKey && event.key !== null) return
      setTheme(event.newValue === 'light' || event.newValue === 'dark'
        ? event.newValue : media.matches ? 'dark' : 'light')
    }
    media.addEventListener('change', followSystem)
    window.addEventListener('storage', syncPreference)
    return () => {
      media.removeEventListener('change', followSystem)
      window.removeEventListener('storage', syncPreference)
    }
  }, [])

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    try { localStorage.setItem(storageKey, next) } catch { /* Keep the in-memory preference. */ }
  }

  const label = `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`
  return (
    <button className="theme-toggle" type="button" onClick={toggleTheme}
      aria-label={label} aria-pressed={theme === 'dark'} title={label}>
      <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={19} />
      <span className="theme-toggle-label">{theme === 'dark' ? 'Light mode' : 'Dark mode'}</span>
    </button>
  )
}
