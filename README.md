# Atharv Bhale — Portfolio

A responsive React + TypeScript portfolio built with Vite. Content follows the supplied new-grad SWE resume, including AWS Aurora, TCS, Champhunt, MediConnect, RiskWise, education, and leadership.

## Run locally

```sh
npm install
npm run dev
```

Vite serves the site under `/Portfolio/`, matching the existing GitHub Pages deployment.

## Build and deploy

```sh
npm run build
npm run preview
```

After reviewing the production build, `npm run deploy` publishes `dist` to the repository's `gh-pages` branch. Deployment is a separate, explicit action.

## Updating the portfolio

- `src/data/portfolio.ts` contains contact links, experience, project descriptions, education, and skills.
- `src/App.tsx` contains page sections, project dialogs, and screenshot navigation.
- `src/components/ProjectVisuals.tsx` contains illustrative system diagrams, rather than live project dashboards.
- `src/App.css` and `src/index.css` define the responsive design, typography, and reduced-motion support.
- `public/Atharv_Bhale_Resume.pdf` is the downloadable resume. Replace it with the same filename when updating.
- `src/assets/medi/` contains the existing MediConnect screenshots.

No credentials or backend are needed. Email and phone links use the visitor's mail and calling applications. Copying the email uses the browser clipboard API with an accessible status message. Google Fonts is optional; the site falls back to local fonts when unavailable.
