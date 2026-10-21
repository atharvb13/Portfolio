import { useId } from 'react'
import { Icon } from './Icons'

export function RiskWiseVisual() {
  const patternId = useId()
  return (
    <div className="project-visual risk-visual" aria-label="RiskWise architecture illustration: live data sources connect to an intelligence pipeline and route recommendations" role="img">
      <div className="visual-heading"><span className="visual-brand"><span className="risk-mark">r.</span> RiskWise</span><span className="mono">SYSTEM OVERVIEW</span></div>
      <div className="risk-map">
        <svg viewBox="0 0 520 240" fill="none" aria-hidden="true">
          <defs><pattern id={patternId} width="16" height="16" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="var(--map-dot)" /></pattern></defs>
          <rect width="520" height="240" fill={`url(#${patternId})`} />
          <path d="m15 72 52-23 44 9 11 29 38 18 27-9 21 29-5 40-25 15-10 43-25-8-16-42-35-15-6-36-45-15Zm258-48 39 19 35-10 52 19 12 22 68 18 21 47-27 19-46-14-10-28-43 8-18-18-31 26-12 42-26 23-21-15-11-47 21-26-22-23Z" fill="var(--map-land)" fillOpacity=".7" stroke="var(--map-border)" />
          <circle cx="274" cy="114" r="32" fill="var(--accent)" fillOpacity=".08" stroke="var(--accent)" strokeOpacity=".3" strokeDasharray="4 5" />
          <path d="M106 104C175 64 240 65 274 114S357 172 411 104" stroke="var(--warm-accent)" strokeWidth="2" strokeDasharray="5 5" />
          <path d="M106 104C179 212 337 209 411 104" stroke="var(--route)" strokeWidth="3" />
          <circle cx="106" cy="104" r="7" fill="var(--elevated)" stroke="var(--route)" strokeWidth="3" /><circle cx="411" cy="104" r="7" fill="var(--route)" stroke="var(--elevated)" strokeWidth="3" />
          <path d="m274 104 10 18h-20l10-18Z" fill="var(--warm-accent)" />
        </svg>
        <span className="map-label origin mono">ORIGIN</span><span className="map-label destination mono">DESTINATION</span>
        <div className="route-note"><span className="signal-dot" /> Explainable route intelligence</div>
      </div>
      <div className="data-sources mono"><span>GDELT</span><span>NASA EONET</span><span>USGS</span><Icon name="arrow" size={16} /><span className="agents-label">3-agent pipeline</span></div>
    </div>
  )
}

export function MediConnectVisual() {
  return (
    <div className="project-visual medi-visual" aria-label="MediConnect architecture illustration: clinical files connect to Clinical Copilot and structured reports" role="img">
      <div className="visual-heading"><span className="visual-brand"><span className="medi-mark"><Icon name="plus" size={18} /></span> MediConnect</span><span className="mono">CARE, CONNECTED</span></div>
      <div className="clinical-flow">
        <div className="clinical-file"><span className="file-fold" /><div /><div /><div /><span className="mono">Clinical files</span></div>
        <div className="flow-connector"><span /><Icon name="arrow" size={16} /></div>
        <div className="copilot-core"><div className="copilot-star">✳</div><strong>Clinical Copilot</strong><span>Context into clarity.</span></div>
        <div className="flow-connector"><span /><Icon name="arrow" size={16} /></div>
        <div className="clinical-report"><span className="report-title">Structured review</span><span><i />Medication findings</span><span><i />Patient timeline</span><span><i />Risk flags</span></div>
      </div>
      <div className="care-features mono"><span><Icon name="check" size={13} />Appointments</span><span><Icon name="check" size={13} />Real-time chat</span><span><Icon name="check" size={13} />Role-based access</span></div>
    </div>
  )
}
