import { useState } from 'react'
import ScrollableArea from '../ScrollableArea'
import './index.css'

export default function Sidebar() {
  const [selectedOverviewBold, setSelectedOverviewBold] = useState<string | null>(null)
  const [selectedOverviewNormal, setSelectedOverviewNormal] = useState<string | null>(null)
  const [selectedFilesPatients, setSelectedFilesPatients] = useState<string | null>(null)
  const [selectedFilesOther, setSelectedFilesOther] = useState<string | null>(null)

  return (
    <div className="sidebar">
      {/* Section 1 - Bereiche/Übersichten with 2 subsections */}
      <div className="sidebar-section" data-section="overview">
        {/* <div className="section-header">Bereiche/Übersichten</div> */}
        <div className="section-content">
          {/* First subsection - Bold items */}
          <ScrollableArea>
            <div 
              className={`sidebar-item bold ${selectedOverviewBold === 'Patientendatenmanagement' ? 'selected' : ''}`}
              onClick={() => setSelectedOverviewBold('Patientendatenmanagement')}
            >
              Patientendatenmanagement
            </div>
            <div 
              className={`sidebar-item bold ${selectedOverviewBold === 'Ambulanz' ? 'selected' : ''}`}
              onClick={() => setSelectedOverviewBold('Ambulanz')}
            >
              Ambulanz
            </div>
            <div 
              className={`sidebar-item bold ${selectedOverviewBold === 'Station' ? 'selected' : ''}`}
              onClick={() => setSelectedOverviewBold('Station')}
            >
              Station
            </div>
            <div 
              className={`sidebar-item bold ${selectedOverviewBold === 'Funktionsbereich' ? 'selected' : ''}`}
              onClick={() => setSelectedOverviewBold('Funktionsbereich')}
            >
              Funktionsbereich
            </div>
            <div 
              className={`sidebar-item bold ${selectedOverviewBold === '[Placeholder 1]' ? 'selected' : ''}`}
              onClick={() => setSelectedOverviewBold('[Placeholder 1]')}
            >
              [Placeholder 1]
            </div>
            <div 
              className={`sidebar-item bold ${selectedOverviewBold === '[Placeholder 2]' ? 'selected' : ''}`}
              onClick={() => setSelectedOverviewBold('[Placeholder 2]')}
            >
              [Placeholder 2]
            </div>
            <div 
              className={`sidebar-item bold ${selectedOverviewBold === '[Placeholder 3]' ? 'selected' : ''}`}
              onClick={() => setSelectedOverviewBold('[Placeholder 3]')}
            >
              [Placeholder 3]
            </div>
          </ScrollableArea>
          
          <div className="subsection-divider"></div>
          
          {/* Second subsection - Normal/thin items */}
          <ScrollableArea>
            <div 
              className={`sidebar-item ${selectedOverviewNormal === 'Patientensuche' ? 'selected' : ''}`}
              onClick={() => setSelectedOverviewNormal('Patientensuche')}
            >
              Patientensuche
            </div>
            <div 
              className={`sidebar-item ${selectedOverviewNormal === 'Stationsgrafik' ? 'selected' : ''}`}
              onClick={() => setSelectedOverviewNormal('Stationsgrafik')}
            >
              Stationsgrafik
            </div>
            <div 
              className={`sidebar-item ${selectedOverviewNormal === 'Fallübersicht' ? 'selected' : ''}`}
              onClick={() => setSelectedOverviewNormal('Fallübersicht')}
            >
              Fallübersicht
            </div>
            <div 
              className={`sidebar-item ${selectedOverviewNormal === 'Arztbriefe Medizin' ? 'selected' : ''}`}
              onClick={() => setSelectedOverviewNormal('Arztbriefe Medizin')}
            >
              Arztbriefe Medizin
            </div>
            <div 
              className={`sidebar-item ${selectedOverviewNormal === 'Arbeitsliste Maßnahmen' ? 'selected' : ''}`}
              onClick={() => setSelectedOverviewNormal('Arbeitsliste Maßnahmen')}
            >
              Arbeitsliste Maßnahmen
            </div>
            <div 
              className={`sidebar-item ${selectedOverviewNormal === 'Arbeitsliste AddOn' ? 'selected' : ''}`}
              onClick={() => setSelectedOverviewNormal('Arbeitsliste AddOn')}
            >
              Arbeitsliste AddOn
            </div>
            <div 
              className={`sidebar-item ${selectedOverviewNormal === 'Asklepios Klinische Pfade' ? 'selected' : ''}`}
              onClick={() => setSelectedOverviewNormal('Asklepios Klinische Pfade')}
            >
              Asklepios Klinische Pfade
            </div>
          </ScrollableArea>
        </div>
      </div>

      {/* Section 2 - geöffnete Akten with 2 subsections */}
      <div className="sidebar-section" data-section="files">
        <div className="section-header">geöffnete Akten</div>
        <div className="section-content">
          {/* First subsection - Patient names with scrollbar */}
          <ScrollableArea>
            <div 
              className={`sidebar-item ${selectedFilesPatients === 'Hose, Gerhard' ? 'selected' : ''}`}
              onClick={() => setSelectedFilesPatients('Hose, Gerhard')}
            >
              Hose, Gerhard
            </div>
            <div 
              className={`sidebar-item ${selectedFilesPatients === 'Riemer, Herbert' ? 'selected' : ''}`}
              onClick={() => setSelectedFilesPatients('Riemer, Herbert')}
            >
              Riemer, Herbert
            </div>
            <div 
              className={`sidebar-item ${selectedFilesPatients === 'Reiber, Markus' ? 'selected' : ''}`}
              onClick={() => setSelectedFilesPatients('Reiber, Markus')}
            >
              Reiber, Markus
            </div>
            <div 
              className={`sidebar-item ${selectedFilesPatients === 'Waschinger, Renate' ? 'selected' : ''}`}
              onClick={() => setSelectedFilesPatients('Waschinger, Renate')}
            >
              Waschinger, Renate
            </div>
            <div 
              className={`sidebar-item ${selectedFilesPatients === '[Placeholder Patient 1]' ? 'selected' : ''}`}
              onClick={() => setSelectedFilesPatients('[Placeholder Patient 1]')}
            >
              [Placeholder Patient 1]
            </div>
            <div 
              className={`sidebar-item ${selectedFilesPatients === '[Placeholder Patient 2]' ? 'selected' : ''}`}
              onClick={() => setSelectedFilesPatients('[Placeholder Patient 2]')}
            >
              [Placeholder Patient 2]
            </div>
            <div 
              className={`sidebar-item ${selectedFilesPatients === '[Placeholder Patient 3]' ? 'selected' : ''}`}
              onClick={() => setSelectedFilesPatients('[Placeholder Patient 3]')}
            >
              [Placeholder Patient 3]
            </div>
          </ScrollableArea>
          
          <div className="subsection-divider"></div>
          
          {/* Second subsection - Other items with scrollbar */}
          <ScrollableArea>
            <div 
              className={`sidebar-item ${selectedFilesOther === 'Planungsbogen Liste' ? 'selected' : ''}`}
              onClick={() => setSelectedFilesOther('Planungsbogen Liste')}
            >
              Planungsbogen Liste
            </div>
            <div 
              className={`sidebar-item ${selectedFilesOther === 'Termine' ? 'selected' : ''}`}
              onClick={() => setSelectedFilesOther('Termine')}
            >
              Termine
            </div>
            <div 
              className={`sidebar-item ${selectedFilesOther === 'Alerts: Patientenanamnese' ? 'selected' : ''}`}
              onClick={() => setSelectedFilesOther('Alerts: Patientenanamnese')}
            >
              Alerts: Patientenanamnese
            </div>
            <div 
              className={`sidebar-item ${selectedFilesOther === 'NFDM' ? 'selected' : ''}`}
              onClick={() => setSelectedFilesOther('NFDM')}
            >
              NFDM
            </div>
            <div 
              className={`sidebar-item ${selectedFilesOther === 'KIM / KANT Nachrichten' ? 'selected' : ''}`}
              onClick={() => setSelectedFilesOther('KIM / KANT Nachrichten')}
            >
              KIM / KANT Nachrichten
            </div>
            <div 
              className={`sidebar-item ${selectedFilesOther === 'Tarifneutrale Leistungen' ? 'selected' : ''}`}
              onClick={() => setSelectedFilesOther('Tarifneutrale Leistungen')}
            >
              Tarifneutrale Leistungen
            </div>
            <div 
              className={`sidebar-item ${selectedFilesOther === 'Abteilungskatalog' ? 'selected' : ''}`}
              onClick={() => setSelectedFilesOther('Abteilungskatalog')}
            >
              Abteilungskatalog
            </div>
            <div 
              className={`sidebar-item ${selectedFilesOther === 'Zahlungen in anderen KKs' ? 'selected' : ''}`}
              onClick={() => setSelectedFilesOther('Zahlungen in anderen KKs')}
            >
              Zahlungen in anderen KKs
            </div>
            <div 
              className={`sidebar-item ${selectedFilesOther === 'Abgeschlossene Akten' ? 'selected' : ''}`}
              onClick={() => setSelectedFilesOther('Abgeschlossene Akten')}
            >
              Abgeschlossene Akten
            </div>
            <div 
              className={`sidebar-item ${selectedFilesOther === 'Abteilung und Diagnosen' ? 'selected' : ''}`}
              onClick={() => setSelectedFilesOther('Abteilung und Diagnosen')}
            >
              Abteilung und Diagnosen
            </div>
            <div 
              className={`sidebar-item ${selectedFilesOther === 'E-Health Versandassistent' ? 'selected' : ''}`}
              onClick={() => setSelectedFilesOther('E-Health Versandassistent')}
            >
              E-Health Versandassistent
            </div>
            <div 
              className={`sidebar-item ${selectedFilesOther === '[MTS Notfallprotokoll Arzt]' ? 'selected' : ''}`}
              onClick={() => setSelectedFilesOther('[MTS Notfallprotokoll Arzt]')}
            >
              [MTS Notfallprotokoll Arzt]
            </div>
          </ScrollableArea>
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
