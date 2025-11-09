import { useState, useEffect } from 'react'
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
  const [selectedMedicalRecords, setSelectedMedicalRecords] = useState<Record<string, boolean>>({ 'Krankengeschichte': true })

  // Automatically select "Station" and "Stationsgrafik" when a station is selected from OrganizationalUnits
  useEffect(() => {
    if (appState.selectedStation) {
      setSelectedOverviewBold({ 'Station': true })
      setSelectedOverviewNormal({ 'Stationsgrafik': true })
    }
  }, [appState.selectedStation])
  
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
                // When Stationsgrafik is clicked and both Station and Stationsgrafik are selected,
                // navigate to stationsansicht and clear selections
                if (selectedOverviewBold['Station'] && selectedOverviewNormal['Stationsgrafik']) {
                  setSelectedOverviewBold({})
                  setSelectedOverviewNormal({})
                  updateAppState({ currentPage: 'stationsansicht' })
                } else {
                  handleClick('Stationsgrafik', setSelectedOverviewNormal)
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
            {/* First subsection - Patient name */}
            <ScrollableArea>
              {appState.selectedPatient && (
                <div 
                  className={`sidebar-item ${selectedFilesPatients[appState.selectedPatient.name] ? 'selected' : ''}`}
                  onClick={() => {
                    handleClick(appState.selectedPatient!.name, setSelectedFilesPatients)
                  }}
                >
                  {appState.selectedPatient.name}
                </div>
              )}
            </ScrollableArea>
          
          <div className="subsection-divider"></div>
          
          {/* Second subsection - Medical record items */}
          <ScrollableArea>
            <div 
              className={`sidebar-item ${selectedMedicalRecords['DRG Workplace'] ? 'selected' : ''}`}
              onClick={() => handleClick('DRG Workplace', setSelectedMedicalRecords)}
            >
              DRG Workplace
            </div>
            <div 
              className={`sidebar-item ${selectedMedicalRecords['Krankengeschichte'] ? 'selected' : ''}`}
              onClick={() => handleClick('Krankengeschichte', setSelectedMedicalRecords)}
              style={{ backgroundColor: selectedMedicalRecords['Krankengeschichte'] ? 'white' : '' }}
            >
              Krankengeschichte
            </div>
            <div 
              className={`sidebar-item ${selectedMedicalRecords['Patientenkurve'] ? 'selected' : ''}`}
              onClick={() => handleClick('Patientenkurve', setSelectedMedicalRecords)}
            >
              Patientenkurve
            </div>
            <div 
              className={`sidebar-item ${selectedMedicalRecords['Operationen'] ? 'selected' : ''}`}
              onClick={() => handleClick('Operationen', setSelectedMedicalRecords)}
            >
              Operationen
            </div>
            <div 
              className={`sidebar-item ${selectedMedicalRecords['Labor Kumulativbefund'] ? 'selected' : ''}`}
              onClick={() => handleClick('Labor Kumulativbefund', setSelectedMedicalRecords)}
            >
              Labor Kumulativbefund
            </div>
            <div 
              className={`sidebar-item ${selectedMedicalRecords['Medikation'] ? 'selected' : ''}`}
              onClick={() => handleClick('Medikation', setSelectedMedicalRecords)}
            >
              Medikation
            </div>
            <div 
              className={`sidebar-item ${selectedMedicalRecords['Medikationsplan Übersicht'] ? 'selected' : ''}`}
              onClick={() => handleClick('Medikationsplan Übersicht', setSelectedMedicalRecords)}
            >
              Medikationsplan Übersicht
            </div>
            <div 
              className={`sidebar-item ${selectedMedicalRecords['Wunden Übersicht'] ? 'selected' : ''}`}
              onClick={() => handleClick('Wunden Übersicht', setSelectedMedicalRecords)}
            >
              Wunden Übersicht
            </div>
            <div 
              className={`sidebar-item ${selectedMedicalRecords['CARE Listen'] ? 'selected' : ''}`}
              onClick={() => handleClick('CARE Listen', setSelectedMedicalRecords)}
            >
              CARE Listen
            </div>
            <div 
              className={`sidebar-item ${selectedMedicalRecords['Orthopädie AddOn'] ? 'selected' : ''}`}
              onClick={() => handleClick('Orthopädie AddOn', setSelectedMedicalRecords)}
            >
              Orthopädie AddOn
            </div>
            <div 
              className={`sidebar-item ${selectedMedicalRecords['SDOK / PALL AddOn'] ? 'selected' : ''}`}
              onClick={() => handleClick('SDOK / PALL AddOn', setSelectedMedicalRecords)}
            >
              SDOK / PALL AddOn
            </div>
            <div 
              className={`sidebar-item ${selectedMedicalRecords['RIS-Kumulativliste'] ? 'selected' : ''}`}
              onClick={() => handleClick('RIS-Kumulativliste', setSelectedMedicalRecords)}
            >
              RIS-Kumulativliste
            </div>
            <div 
              className={`sidebar-item ${selectedMedicalRecords['Verlauf'] ? 'selected' : ''}`}
              onClick={() => handleClick('Verlauf', setSelectedMedicalRecords)}
            >
              Verlauf
            </div>
            <div 
              className={`sidebar-item ${selectedMedicalRecords['Multiprofessioneller Verlauf'] ? 'selected' : ''}`}
              onClick={() => handleClick('Multiprofessioneller Verlauf', setSelectedMedicalRecords)}
            >
              Multiprofessioneller Verlauf
            </div>
            <div 
              className={`sidebar-item ${selectedMedicalRecords['Planungsbogen Liste'] ? 'selected' : ''}`}
              onClick={() => handleClick('Planungsbogen Liste', setSelectedMedicalRecords)}
            >
              Planungsbogen Liste
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
