import signIn from '../assets/medi/screenshots/01-sign-in.png'
import registration from '../assets/medi/screenshots/02-registration.png'
import patientDashboard from '../assets/medi/screenshots/03-patient-dashboard.png'
import doctorSearch from '../assets/medi/screenshots/04-doctor-search.png'
import booking from '../assets/medi/screenshots/05-appointment-booking.png'
import confirmation from '../assets/medi/screenshots/06-booking-confirmation.png'
import messaging from '../assets/medi/screenshots/07-patient-messaging.png'
import upload from '../assets/medi/screenshots/08-clinical-upload.png'
import analysis from '../assets/medi/screenshots/09-clinical-analysis.png'
import results from '../assets/medi/screenshots/10-clinical-results.png'
import medications from '../assets/medi/screenshots/12-medications-and-interactions.png'
import timeline from '../assets/medi/screenshots/13-clinical-timeline.png'
import doctorProfile from '../assets/medi/screenshots/14-doctor-profile.png'
import availability from '../assets/medi/screenshots/15-doctor-availability.png'
import admin from '../assets/medi/screenshots/16-admin-approvals.png'

export const mediScreenshotCategories = ['All', 'Clinical AI', 'Patient', 'Doctor', 'Admin', 'Access'] as const
export type MediScreenshotCategory = (typeof mediScreenshotCategories)[number]

export const mediScreenshots = [
  { id: 'clinical-results', category: 'Clinical AI', title: 'Clinical Copilot reports', src: results, alt: 'MediConnect Clinical Copilot showing a generated clinical report and patient-friendly summary for synthetic patient DEMO-001.', caption: 'The completed analysis brings a structured clinical report and a plain-language patient summary into the same review workspace.' },
  { id: 'clinical-upload', category: 'Clinical AI', title: 'Clinical document upload', src: upload, alt: 'Clinical Copilot upload screen with patient ID, supported document formats, and upload, analysis, and results steps.', caption: 'The starting point for PDF, DOCX, Markdown, and text chart uploads, with an explicit patient identifier and a clear three-step workflow.' },
  { id: 'clinical-analysis', category: 'Clinical AI', title: 'Multi-agent analysis', src: analysis, alt: 'Clinical Copilot processing the fictional demonstration chart through ingestion, medication, timeline, risk, and synthesis stages.', caption: 'The real analysis in progress, showing the stages of the multi-agent pipeline while the uploaded demonstration chart is processed.' },
  { id: 'medications', category: 'Clinical AI', title: 'Medications & OpenFDA', src: medications, alt: 'Expanded medication table listing extracted names, doses, and frequency with OpenFDA label findings for a fictional chart.', caption: 'Extracted medications and their dosing information are presented alongside OpenFDA label findings for review.' },
  { id: 'timeline', category: 'Clinical AI', title: 'Clinical timeline', src: timeline, alt: 'Expanded Clinical Copilot timeline with five dated clinical events reconstructed from a fictional demonstration chart.', caption: 'A chronological view of the events extracted from the demonstration chart, with dates and event categories.' },
  { id: 'patient-dashboard', category: 'Patient', title: 'Patient dashboard', src: patientDashboard, alt: 'Synthetic patient Alex Morgan’s profile dashboard with personal information and upcoming appointments.', caption: 'Patients can review their profile and upcoming visits from a single dashboard.' },
  { id: 'doctor-search', category: 'Patient', title: 'Doctor discovery', src: doctorSearch, alt: 'Doctor search results with three synthetic approved doctors, location and specialization filters, and booking and chat actions.', caption: 'ZIP-code search, specialty filters, and doctor cards connect discovery directly to appointment booking and messaging.' },
  { id: 'booking', category: 'Patient', title: 'Appointment booking', src: booking, alt: 'MediConnect appointment booking page with a date calendar and available consultation times for a synthetic doctor.', caption: 'A calendar and available time slots guide patients through selecting an appointment.' },
  { id: 'confirmation', category: 'Patient', title: 'Booking confirmation', src: confirmation, alt: 'Appointment confirmation dialog summarizing the selected synthetic doctor, date, and time before booking.', caption: 'A final confirmation step makes the doctor, date, and time explicit before the appointment is booked.' },
  { id: 'messaging', category: 'Patient', title: 'Patient–doctor messaging', src: messaging, alt: 'An accepted patient-doctor conversation containing fictional appointment coordination messages.', caption: 'An accepted conversation in the messaging interface, with a chat list, message history, and composer.' },
  { id: 'doctor-profile', category: 'Doctor', title: 'Doctor profile', src: doctorProfile, alt: 'Synthetic doctor Jordan Lee’s professional profile showing qualifications, specialty, location, and demonstration license details.', caption: 'Doctors manage their professional identity, specialty, qualifications, and clinic details.' },
  { id: 'availability', category: 'Doctor', title: 'Availability & appointments', src: availability, alt: 'Doctor scheduling dashboard showing three synthetic upcoming visits, a calendar, and availability time-slot controls.', caption: 'The doctor workspace brings upcoming patient visits together with calendar-based availability management and repeat scheduling controls.' },
  { id: 'admin', category: 'Admin', title: 'Doctor approval dashboard', src: admin, alt: 'Administrator dashboard with one pending synthetic doctor registration and three approved demonstration doctors.', caption: 'Administrators review pending doctor registrations and maintain a view of approved doctors.' },
  { id: 'sign-in', category: 'Access', title: 'Sign in', src: signIn, alt: 'MediConnect sign-in page with email and password fields and a Google sign-in option.', caption: 'The account entry point for patients, doctors, and administrators, with email/password and Google sign-in options.' },
  { id: 'registration', category: 'Access', title: 'Patient & doctor registration', src: registration, alt: 'MediConnect account registration screen with patient and doctor role selection and email verification.', caption: 'Role selection and email verification introduce the patient and doctor registration flow.' },
] satisfies { id: string; category: Exclude<MediScreenshotCategory, 'All'>; title: string; src: string; alt: string; caption: string }[]

export const mediCoverScreenshot = mediScreenshots[0]
