import { ApplicationGallery } from './ApplicationGallery'
import { mediScreenshots, mediScreenshotCategories } from '../data/mediconnectScreenshots'

export function MediConnectGallery() {
  return <ApplicationGallery name="MediConnect" screenshots={mediScreenshots} categories={mediScreenshotCategories} demoNote="Captured from a local run with synthetic demonstration accounts and a fictional clinical chart. No real patient data is shown." />
}
