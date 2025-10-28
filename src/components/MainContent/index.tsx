import React, { useState } from 'react'
import PatientForm from '../PatientForm'
import ScheduleView from '../ScheduleView'
import './index.css'

type ViewType = 'patient' | 'schedule'

const MainContent: React.FC = () => {
  const [activeView, setActiveView] = useState<ViewType>('patient')
  
  return (
    <div className="main-content-container">
      {/* Top Level Tab Navigation */}
      <div className="main-tabs">
        <button 
          className={`main-tab ${activeView === 'patient' ? 'active' : ''}`}
          onClick={() => setActiveView('patient')}
        >
          <span className="tab-icon">📋</span>
          Patientendatenmanagement
        </button>
        <button 
          className={`main-tab ${activeView === 'schedule' ? 'active' : ''}`}
          onClick={() => setActiveView('schedule')}
        >
          <span className="tab-icon">📅</span>
          Stationsübersicht
        </button>
        <div className="tab-filler"></div>
        <div className="tab-info">
          <span className="user-info">BWAA@KHVH04 ORBIS4302.11010.DAC1b</span>
          <span className="timestamp">19.10.2025 15:20:11</span>
        </div>
      </div>
      
      {/* Content Area */}
      <div className="content-area">
        {activeView === 'patient' && <PatientForm />}
        {activeView === 'schedule' && <ScheduleView />}
      </div>
    </div>
  )
}

export default MainContent
