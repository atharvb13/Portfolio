import map from '../assets/riskwise/screenshots/05-interactive-map.jpg'
import analyzer from '../assets/riskwise/screenshots/02-route-analyzer.jpg'
import assessment from '../assets/riskwise/screenshots/03-risk-assessment.jpg'
import alternatives from '../assets/riskwise/screenshots/04-route-alternatives.jpg'
import evidence from '../assets/riskwise/screenshots/06-map-evidence.jpg'
import disruptions from '../assets/riskwise/screenshots/07-active-disruptions.jpg'
import history from '../assets/riskwise/screenshots/08-route-history.jpg'
import historyDetails from '../assets/riskwise/screenshots/09-history-details.jpg'
import signIn from '../assets/riskwise/screenshots/01-private-sign-in.jpg'
import mobile from '../assets/riskwise/screenshots/10-mobile-disruptions.jpg'
import type { ApplicationScreenshot } from '../components/ApplicationGallery'

export const riskwiseScreenshotCategories = ['All', 'Analysis', 'Map & evidence', 'Monitoring', 'Access', 'Mobile'] as const

export const riskwiseScreenshots = [
  { id: 'map', category: 'Map & evidence', title: 'Interactive route map', src: map, alt: 'RiskWise map with a selected demonstration route from Shanghai to Rotterdam, a Cape alternative, disruption markers, and route controls.', caption: 'Compare the evaluated connection with alternative options on the geographic basemap. The selected Cape alternative is highlighted; connections are schematic rather than navigable sea tracks.' },
  { id: 'analyzer', category: 'Analysis', title: 'Route analyzer', src: analyzer, alt: 'RiskWise route analysis form with Shanghai and Rotterdam selected, an optional natural-language query, and the multi-agent workflow.', caption: 'Start with port names or codes, or a natural-language request. The analysis workspace brings the route form and agent activity together.' },
  { id: 'assessment', category: 'Analysis', title: 'Risk assessment & breakdown', src: assessment, alt: 'Completed synthetic assessment showing a 68 out of 100 risk estimate, agent activity, estimated transit, cost impact, and four risk categories.', caption: 'The completed demonstration shows the overall estimate, primary risk factor, weather/labor/geopolitical/congestion breakdown, and the Athena, Hermes, and Apollo activity log.' },
  { id: 'alternatives', category: 'Analysis', title: 'Alternative routes & source summary', src: alternatives, alt: 'Apollo route comparison with two illustrative alternatives, estimated transit times, costs, risk scores, and map actions alongside source availability.', caption: 'Compare the synthetic Cape and transshipment options with their time and cost tradeoffs. The source summary separates retrieved live observations from static baseline context; demo agent responses do not validate an operational routing recommendation.' },
  { id: 'evidence', category: 'Map & evidence', title: 'Evidence on the map', src: evidence, alt: 'RiskWise map with a fictional Shanghai weather observation open in an evidence popup and the evidence list expanded.', caption: 'Inspect a disruption in geographic context, with its provider, source link, observation time, and last check. Fictional records are explicitly labeled Demo in these captures.' },
  { id: 'disruptions', category: 'Monitoring', title: 'Active disruptions', src: disruptions, alt: 'RiskWise disruption feed showing category and severity filters and fictional weather, congestion, and geopolitical records.', caption: 'Filter intelligence by category and severity, review affected locations, and distinguish observations from illustrative static baselines.' },
  { id: 'history', category: 'Monitoring', title: 'Saved assessment history', src: history, alt: 'RiskWise history listing five synthetic Shanghai-to-Rotterdam assessments with risk estimates, transit times, and rerun controls.', caption: 'Review saved assessments, summary counts, and individual risk estimates. Each entry can be expanded or rerun with current inputs.' },
  { id: 'history-details', category: 'Monitoring', title: 'Historical detail & risk trend', src: historyDetails, alt: 'Expanded demonstration history entry with a risk-category breakdown, five-assessment trend chart, alternatives, and map actions.', caption: 'Expand a saved assessment to inspect its narrative, category breakdown, trend over successive evaluations, and alternative route options.' },
  { id: 'sign-in', category: 'Access', title: 'Private workspace sign-in', src: signIn, alt: 'RiskWise private workspace entry screen with an empty password field and sign-in action.', caption: 'The private shared workspace requires a password before application data is available. The capture contains no credentials.' },
  { id: 'mobile', portrait: true, category: 'Mobile', title: 'Mobile disruption review', src: mobile, alt: 'RiskWise disruption feed at a 390-pixel phone viewport with navigation, category filters, severity filters, and a fictional weather record.', caption: 'A phone-sized view of the same disruption workflow, with stacked content and touch-sized filtering controls.' },
] satisfies ApplicationScreenshot[]

export const riskwiseCoverScreenshot = riskwiseScreenshots[0]
