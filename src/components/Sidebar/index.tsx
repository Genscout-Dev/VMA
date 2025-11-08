import { useState } from 'react'
import ScrollableArea from '../ScrollableArea'
import { AppState } from '../../App'
import './index.css'

interface SidebarProps {
  appState: AppState
  updateAppState: (updates: Partial<AppState>) => void
}

export default function Sidebar({ appState, updateAppState }: SidebarProps) {
  // Track selection state: true = selected (orange), false/undefined = not selected
  // Format: { itemName: true }
  const [selectedOverviewBold, setSelectedOverviewBold] = useState<Record<string, boolean>>({})
  const [selectedOverviewNormal, setSelectedOverviewNormal] = useState<Record<string, boolean>>({})
  const [selectedFilesPatients, setSelectedFilesPatients] = useState<Record<string, boolean>>({})
  const [selectedFilesOther, setSelectedFilesOther] = useState<Record<string, boolean>>({})
  
  const handleClick = (
    item: string,
    setter: React.Dispatch<React.SetStateAction<Record<string, boolean>>>
  ) => {
    // Toggle orange selection
    setter(prev => {
      const currentState = prev[item]
      if (currentState) {
        // If already selected (orange), deselect
        const newState = { ...prev }
        delete newState[item]
        return newState
      } else {
        // Set to selected (orange), clear other items in this section
        return { [item]: true }
      }
    })
  }

  return (
    <div className="sidebar">
      {/* Section 1 - Bereiche/Übersichten with 2 subsections */}
      <div className="sidebar-section" data-section="overview">
        {/* <div className="section-header">Bereiche/Übersichten</div> */}
        <div className="section-content">
          {/* First subsection - Bold items */}
          <ScrollableArea>
            <div 
              className={`sidebar-item bold ${selectedOverviewBold['Patientendatenmanagement'] ? 'selected' : ''}`}
              onClick={() => handleClick('Patientendatenmanagement', setSelectedOverviewBold)}
            >
              Patientendatenmanagement
            </div>
            <div 
              className={`sidebar-item bold ${selectedOverviewBold['Ambulanz'] ? 'selected' : ''}`}
              onClick={() => handleClick('Ambulanz', setSelectedOverviewBold)}
            >
              Ambulanz
            </div>
            <div 
              className={`sidebar-item bold ${selectedOverviewBold['Station'] ? 'selected' : ''}`}
              onClick={() => {
                handleClick('Station', setSelectedOverviewBold)
                // Check if Stationsgrafik is also selected
                if (selectedOverviewNormal['Stationsgrafik']) {
                  updateAppState({ currentPage: 'stationsansicht' })
                }
              }}
            >
              Station
            </div>
            <div 
              className={`sidebar-item bold ${selectedOverviewBold['Funktionsbereich'] ? 'selected' : ''}`}
              onClick={() => handleClick('Funktionsbereich', setSelectedOverviewBold)}
            >
              Funktionsbereich
            </div>
            <div 
              className={`sidebar-item bold ${selectedOverviewBold['[Placeholder 1]'] ? 'selected' : ''}`}
              onClick={() => handleClick('[Placeholder 1]', setSelectedOverviewBold)}
            >
              [Placeholder 1]
            </div>
            <div 
              className={`sidebar-item bold ${selectedOverviewBold['[Placeholder 2]'] ? 'selected' : ''}`}
              onClick={() => handleClick('[Placeholder 2]', setSelectedOverviewBold)}
            >
              [Placeholder 2]
            </div>
            <div 
              className={`sidebar-item bold ${selectedOverviewBold['[Placeholder 3]'] ? 'selected' : ''}`}
              onClick={() => handleClick('[Placeholder 3]', setSelectedOverviewBold)}
            >
              [Placeholder 3]
            </div>
          </ScrollableArea>
          
          <div className="subsection-divider"></div>
          
          {/* Second subsection - Normal/thin items */}
          <ScrollableArea>
            <div 
              className={`sidebar-item ${selectedOverviewNormal['Patientensuche'] ? 'selected' : ''}`}
              onClick={() => handleClick('Patientensuche', setSelectedOverviewNormal)}
            >
              Patientensuche
            </div>
            <div 
              className={`sidebar-item ${selectedOverviewNormal['Stationsgrafik'] ? 'selected' : ''}`}
              onClick={() => {
                handleClick('Stationsgrafik', setSelectedOverviewNormal)
                // Check if Station is also selected
                if (selectedOverviewBold['Station']) {
                  updateAppState({ currentPage: 'stationsansicht' })
                }
              }}
            >
              Stationsgrafik
            </div>
            <div 
              className={`sidebar-item ${selectedOverviewNormal['Fallübersicht'] ? 'selected' : ''}`}
              onClick={() => handleClick('Fallübersicht', setSelectedOverviewNormal)}
            >
              Fallübersicht
            </div>
            <div 
              className={`sidebar-item ${selectedOverviewNormal['Arztbriefe Medizin'] ? 'selected' : ''}`}
              onClick={() => handleClick('Arztbriefe Medizin', setSelectedOverviewNormal)}
            >
              Arztbriefe Medizin
            </div>
            <div 
              className={`sidebar-item ${selectedOverviewNormal['Arbeitsliste Maßnahmen'] ? 'selected' : ''}`}
              onClick={() => handleClick('Arbeitsliste Maßnahmen', setSelectedOverviewNormal)}
            >
              Arbeitsliste Maßnahmen
            </div>
            <div 
              className={`sidebar-item ${selectedOverviewNormal['Arbeitsliste AddOn'] ? 'selected' : ''}`}
              onClick={() => handleClick('Arbeitsliste AddOn', setSelectedOverviewNormal)}
            >
              Arbeitsliste AddOn
            </div>
            <div 
              className={`sidebar-item ${selectedOverviewNormal['Asklepios Klinische Pfade'] ? 'selected' : ''}`}
              onClick={() => handleClick('Asklepios Klinische Pfade', setSelectedOverviewNormal)}
            >
              Asklepios Klinische Pfade
            </div>
          </ScrollableArea>
        </div>
      </div>

      {/* Section 2 - geöffnete Akten with 2 subsections */}
      {appState.sidebarSection2Visible && (
        <div className="sidebar-section" data-section="files">
          <div className="section-header">geöffnete Akten</div>
          <div className="section-content">
            {/* First subsection - Patient names with scrollbar */}
            <ScrollableArea>
              {appState.selectedPatient && (
                <div 
                  className={`sidebar-item ${selectedFilesPatients[appState.selectedPatient.name] ? 'selected' : ''}`}
                  onClick={() => {
                    handleClick(appState.selectedPatient!.name, setSelectedFilesPatients)
                    // Navigate to patient info page when patient name is clicked
                    updateAppState({ currentPage: 'patientInfo' })
                  }}
                >
                  {appState.selectedPatient.name}
                </div>
              )}
            </ScrollableArea>
          
          <div className="subsection-divider"></div>
          
          {/* Second subsection - Other items with scrollbar */}
          <ScrollableArea>
            <div 
              className={`sidebar-item ${selectedFilesOther['Planungsbogen Liste'] ? 'selected' : ''}`}
              onClick={() => handleClick('Planungsbogen Liste', setSelectedFilesOther)}
            >
              Planungsbogen Liste
            </div>
            <div 
              className={`sidebar-item ${selectedFilesOther['Termine'] ? 'selected' : ''}`}
              onClick={() => handleClick('Termine', setSelectedFilesOther)}
            >
              Termine
            </div>
            <div 
              className={`sidebar-item ${selectedFilesOther['Alerts: Patientenanamnese'] ? 'selected' : ''}`}
              onClick={() => handleClick('Alerts: Patientenanamnese', setSelectedFilesOther)}
            >
              Alerts: Patientenanamnese
            </div>
            <div 
              className={`sidebar-item ${selectedFilesOther['NFDM'] ? 'selected' : ''}`}
              onClick={() => handleClick('NFDM', setSelectedFilesOther)}
            >
              NFDM
            </div>
            <div 
              className={`sidebar-item ${selectedFilesOther['KIM / KANT Nachrichten'] ? 'selected' : ''}`}
              onClick={() => handleClick('KIM / KANT Nachrichten', setSelectedFilesOther)}
            >
              KIM / KANT Nachrichten
            </div>
            <div 
              className={`sidebar-item ${selectedFilesOther['Tarifneutrale Leistungen'] ? 'selected' : ''}`}
              onClick={() => handleClick('Tarifneutrale Leistungen', setSelectedFilesOther)}
            >
              Tarifneutrale Leistungen
            </div>
            <div 
              className={`sidebar-item ${selectedFilesOther['Abteilungskatalog'] ? 'selected' : ''}`}
              onClick={() => handleClick('Abteilungskatalog', setSelectedFilesOther)}
            >
              Abteilungskatalog
            </div>
            <div 
              className={`sidebar-item ${selectedFilesOther['Zahlungen in anderen KKs'] ? 'selected' : ''}`}
              onClick={() => handleClick('Zahlungen in anderen KKs', setSelectedFilesOther)}
            >
              Zahlungen in anderen KKs
            </div>
            <div 
              className={`sidebar-item ${selectedFilesOther['Abgeschlossene Akten'] ? 'selected' : ''}`}
              onClick={() => handleClick('Abgeschlossene Akten', setSelectedFilesOther)}
            >
              Abgeschlossene Akten
            </div>
            <div 
              className={`sidebar-item ${selectedFilesOther['Abteilung und Diagnosen'] ? 'selected' : ''}`}
              onClick={() => handleClick('Abteilung und Diagnosen', setSelectedFilesOther)}
            >
              Abteilung und Diagnosen
            </div>
            <div 
              className={`sidebar-item ${selectedFilesOther['E-Health Versandassistent'] ? 'selected' : ''}`}
              onClick={() => handleClick('E-Health Versandassistent', setSelectedFilesOther)}
            >
              E-Health Versandassistent
            </div>
            <div 
              className={`sidebar-item ${selectedFilesOther['[MTS Notfallprotokoll Arzt]'] ? 'selected' : ''}`}
              onClick={() => handleClick('[MTS Notfallprotokoll Arzt]', setSelectedFilesOther)}
            >
              [MTS Notfallprotokoll Arzt]
            </div>
          </ScrollableArea>
        </div>  
      </div>
      )}

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
