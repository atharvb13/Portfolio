import type { CSSProperties, ReactNode } from 'react'

type IconProps = { name: 'arrow' | 'arrow-up' | 'download' | 'github' | 'linkedin' | 'mail' | 'copy' | 'check' | 'menu' | 'close' | 'code' | 'layers' | 'database' | 'plus' | 'sun' | 'moon'; size?: number; style?: CSSProperties }

export function Icon({ name, size = 20, style }: IconProps) {
  const paths: Record<IconProps['name'], ReactNode> = {
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    'arrow-up': <path d="M6 18 18 6M6 6h12v12" />,
    download: <path d="M12 3v12m-5-5 5 5 5-5M5 16v5h14v-5" />,
    github: <path d="M9 19c-4.3 1.3-4.3-2.2-6-2.7m12 5v-3.4c0-1 .1-1.5-.5-2.1 3.3-.4 6.8-1.6 6.8-7.3a5.7 5.7 0 0 0-1.5-4c.2-.4.7-1.9-.2-3.9 0 0-1.3-.4-4.2 1.5a14.5 14.5 0 0 0-7.6 0C4.9.2 3.6.6 3.6.6c-.9 2-.4 3.5-.2 3.9a5.7 5.7 0 0 0-1.5 4c0 5.7 3.5 6.9 6.8 7.3-.5.5-.8 1.2-.7 2.1v3.4" transform="translate(1 1) scale(.9)" />,
    linkedin: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 10v7m0-10v.1M11 17v-7m0 3a3 3 0 0 1 6 0v4" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></>,
    copy: <><rect x="8" y="8" width="12" height="13" rx="2" /><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    code: <path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-13-2 20" />,
    layers: <path d="m12 3 10 6-10 6L2 9l10-6Zm-10 12 10 6 10-6M2 12l10 6 10-6" />,
    database: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0" /></>,
    plus: <path d="M12 4v16M4 12h16" />,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" /></>,
    moon: <path d="M20.5 13.5A9 9 0 0 1 10.5 3a9 9 0 1 0 10 10.5Z" />,
  }
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={style}>{paths[name]}</svg>
}
