import { ApplicationGallery } from './ApplicationGallery'
import { riskwiseScreenshots, riskwiseScreenshotCategories } from '../data/riskwiseScreenshots'

export function RiskWiseGallery() {
  return <ApplicationGallery name="RiskWise" screenshots={riskwiseScreenshots} categories={riskwiseScreenshotCategories} darkScreenshots demoNote="Captured from the local application with synthetic route assessments, fictional disruption records, and deterministic demo agent responses. Scores, transit times, costs, and alternatives are illustrative. Map connections are schematic, not navigable sea tracks. No private workspace data is shown." />
}
