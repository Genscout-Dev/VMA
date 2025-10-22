export default function Sidebar() {
  return (
    <div className="sidebar">
      {/* Section 1 - Bereiche/Übersichten with 2 subsections */}
      <div className="sidebar-section">
        <div className="section-header">Bereiche/Übersichten</div>
        <div className="section-content">
          {/* First subsection - Bold items */}
          <div className="subsection scrollable">
            <div className="sidebar-item bold">Patientendatenmanagement</div>
            <div className="sidebar-item bold">Ambulanz</div>
            <div className="sidebar-item bold selected">Station</div>
            <div className="sidebar-item bold">Funktionsbereich</div>
            <div className="sidebar-item bold">[Placeholder 1]</div>
            <div className="sidebar-item bold">[Placeholder 2]</div>
            <div className="sidebar-item bold">[Placeholder 3]</div>
          </div>
          
          <div className="subsection-divider"></div>
          
          {/* Second subsection - Normal/thin items */}
          <div className="subsection scrollable">
            <div className="sidebar-item">Patientensuche</div>
            <div className="sidebar-item selected">Stationsgrafik</div>
            <div className="sidebar-item">Fallübersicht</div>
            <div className="sidebar-item">Arztbriefe Medizin</div>
            <div className="sidebar-item">Arbeitsliste Maßnahmen</div>
            <div className="sidebar-item">Arbeitsliste AddOn</div>
            <div className="sidebar-item">Asklepios Klinische Pfade</div>
          </div>
        </div>
      </div>

      {/* Section 2 - geöffnete Akten with 2 subsections */}
      <div className="sidebar-section">
        <div className="section-header">geöffnete Akten</div>
        <div className="section-content">
          {/* First subsection - Patient names with scrollbar */}
          <div className="subsection scrollable">
            <div className="sidebar-item">Hose, Gerhard</div>
            <div className="sidebar-item">Riemer, Herbert</div>
            <div className="sidebar-item">Reiber, Markus</div>
            <div className="sidebar-item selected">Waschinger, Renate</div>
          </div>
          
          <div className="subsection-divider"></div>
          
          {/* Second subsection - Other items with scrollbar */}
          <div className="subsection scrollable">
            <div className="sidebar-item">Planungsbogen Liste</div>
            <div className="sidebar-item">Termine</div>
            <div className="sidebar-item">Alerts: Patientenanamnese</div>
            <div className="sidebar-item">NFDM</div>
            <div className="sidebar-item">KIM / KANT Nachrichten</div>
            <div className="sidebar-item">Tarifneutrale Leistungen</div>
            <div className="sidebar-item">Abteilungskatalog</div>
            <div className="sidebar-item">Zahlungen in anderen KKs</div>
            <div className="sidebar-item">Abgeschlossene Akten</div>
            <div className="sidebar-item">Abteilung und Diagnosen</div>
            <div className="sidebar-item">E-Health Versandassistent</div>
            <div className="sidebar-item selected">[MTS Notfallprotokoll Arzt]</div>
          </div>
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
