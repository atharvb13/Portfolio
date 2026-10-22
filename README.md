# Atharv Bhale — Portfolio

A responsive React + TypeScript portfolio built with Vite. Content follows the supplied new-grad SWE resume, including AWS Aurora, TCS, Champhunt, MediConnect, RiskWise, education, and leadership.

The narrative highlights engineering depth, product ownership, and collaborative delivery for software engineering, technical product management, and forward-deployed engineering opportunities. Role titles and metrics remain grounded in the resume; target roles are presented as interests.

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
- `src/components/ThemeToggle.tsx` provides light/dark mode, follows the system preference until a visitor chooses a theme, and remembers the choice in local storage. The head script in `index.html` applies the theme before the first paint.
- Main copy uses 16–18px text; supporting labels and diagrams stay at 12px or larger. Diagram layouts adapt on phones instead of shrinking their text.
- `public/Atharv_Bhale_Resume.pdf` is the downloadable resume, with the phone number removed from the public copy. Replace it with a phone-free version using the same filename when updating.
- `src/assets/medi/screenshots/` contains 15 screenshots captured from a local run of the supplied MediConnect project using synthetic demo accounts and a fictional chart.
- `src/data/mediconnectScreenshots.ts` labels each screenshot by workflow, and `src/components/MediConnectGallery.tsx` provides filters, thumbnail selection, previous/next navigation, and full-size image links.
- The captures cover access, patient profiles, doctor search, booking and confirmation, messaging, Clinical Copilot upload/analysis/reports/medications/timeline, doctor profiles/availability, and admin approvals. The temporary capture runtime used an available model on the same configured Groq provider because the original model was unavailable; the MediConnect working project was not changed.

No credentials or backend are needed. Email links use the visitor's mail application. Copying the email uses the browser clipboard API with an accessible status message. Google Fonts is optional; the site falls back to local fonts when unavailable.
