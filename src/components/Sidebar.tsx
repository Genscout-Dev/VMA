export default function Sidebar() {
  return (
    <div className="sidebar">
      {/* Section 1 - No visible header in collapsed state */}
      <div className="sidebar-section">
        <div className="section-header">Bereiche/Übersichten</div>
        <div className="section-content">
          <div className="sidebar-item bold">Patientendatenmanagement</div>
          <div className="sidebar-item bold">Ambulanz</div>
          <div className="sidebar-item bold">Station</div>
          <div className="sidebar-item bold">Funktionsbereich</div>
        </div>
      </div>

      {/* Section 2 - gefilterte Akten with scrollable area */}
      <div className="sidebar-section">
        <div className="section-header">gefilterte Akten</div>
        <div className="section-content scrollable">
          <div className="sidebar-item">Hose, Gerhard</div>
          <div className="sidebar-item">Riemer, Herbert</div>
          <div className="sidebar-item">Reiber, Markus</div>
          <div className="sidebar-item selected">Waschinger, Renate</div>
        </div>
      </div>

      {/* Section 3 - Zusatzinfos */}
      <div className="sidebar-section collapsed">
        <div className="section-header">Zusatzinfos</div>
      </div>

      {/* Section 4 - Profile */}
      <div className="sidebar-section collapsed">
        <div className="section-header">Profile</div>
      </div>
    </div>
  )
}
