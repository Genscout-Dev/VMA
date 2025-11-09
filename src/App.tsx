import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Toolbar from './components/Toolbar'
import MainContent from './components/MainContent'

export type PageType = 'organizationalUnits' | 'stationsansicht' | 'patientInfo' | 'patientendatenmanagement' | 'patientFile'

export interface AppState {
  currentPage: PageType
  selectedStation: string | null
  selectedPatient: {
    id: string
    name: string
    age?: number
    gender?: string
    ward?: string
    birthDate?: string
    caseNumber?: string
    status?: string
    department?: string
    admissionDate?: string
    dischargeDate?: string
  } | null
  showSidebar: boolean
  sidebarSection1Expanded: boolean
  sidebarSection2Visible: boolean
}

function App() {
  const [appState, setAppState] = useState<AppState>({
    currentPage: 'organizationalUnits',
    selectedStation: null,
    selectedPatient: null,
    showSidebar: false,
    sidebarSection1Expanded: false,
    sidebarSection2Visible: false
  })

  const updateAppState = (updates: Partial<AppState>) => {
    setAppState(prev => ({ ...prev, ...updates }))
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw', overflow: 'hidden', backgroundColor: 'var(--green-light)' }}>
      <Toolbar appState={appState} updateAppState={updateAppState} />

      {/* Main Content Area with Sidebar and Content */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {appState.showSidebar && <Sidebar appState={appState} updateAppState={updateAppState} />}
        <MainContent appState={appState} updateAppState={updateAppState} />
      </div>
    </div>
  )
}

export default App

