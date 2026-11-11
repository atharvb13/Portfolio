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
- `src/components/ProjectVisuals.tsx` contains system diagrams available under each project’s architecture disclosure. Project cards use captures from the running applications.
- `src/App.css` and `src/index.css` define the responsive design, typography, and reduced-motion support.
- `src/components/ThemeToggle.tsx` provides light/dark mode, follows the system preference until a visitor chooses a theme, and remembers the choice in local storage. The head script in `index.html` applies the theme before the first paint.
- Main copy uses 16–18px text; supporting labels and diagrams stay at 12px or larger. Diagram layouts adapt on phones instead of shrinking their text.
- `public/Atharv_Bhale_Resume.pdf` is the downloadable resume, with the phone number removed from the public copy. Replace it with a phone-free version using the same filename when updating.
- `src/assets/medi/screenshots/` contains 15 screenshots captured from a local run of the supplied MediConnect project using synthetic demo accounts and a fictional chart.
- `src/data/mediconnectScreenshots.ts` labels the MediConnect captures by workflow. `src/components/ApplicationGallery.tsx` provides shared filters, thumbnail selection, previous/next navigation, captions, and full-size image links for both projects.
- The captures cover access, patient profiles, doctor search, booking and confirmation, messaging, Clinical Copilot upload/analysis/reports/medications/timeline, doctor profiles/availability, and admin approvals. The temporary capture runtime used an available model on the same configured Groq provider because the original model was unavailable; the MediConnect working project was not changed.

No credentials or backend are needed. Email links use the visitor's mail application. Copying the email uses the browser clipboard API with an accessible status message. Google Fonts is optional; the site falls back to local fonts when unavailable.

## RiskWise screenshots

`src/assets/riskwise/screenshots/` contains ten JPEG captures from the current local RiskWise production build: private sign-in, route entry, assessment and risk breakdown, alternative routes and source summary, interactive map, map evidence, disruption feed, saved history, expanded history and trend, and mobile disruption review. `src/data/riskwiseScreenshots.ts` supplies captions and descriptive alt text; `src/components/RiskWiseGallery.tsx` supplies the demo-data disclosure.

The capture session used an isolated temporary PostgreSQL database, fictional disruption records explicitly labeled Demo, and deterministic synthetic responses for Athena, Hermes, and Apollo. Source availability shown in the analysis summary came from the app’s normal feed retrieval during capture; demo responses are not evidence of an operational risk prediction. Risk scores, costs, transit times, and alternatives are illustrative. Map geometry is schematic rather than navigable. The real CARTO/OpenStreetMap basemap attribution remains visible. No private workspace data, credentials, or local backend configuration is included. The capture runtime was cleaned up after use; the RiskWise working project was not modified.

Screenshots are imported through Vite so the generated URLs respect the `/Portfolio/` GitHub Pages base path. Images total approximately 1.3 MB, and gallery thumbnails load lazily. To replace a capture, keep its filename and update the corresponding caption when the workflow or demonstration changes.
