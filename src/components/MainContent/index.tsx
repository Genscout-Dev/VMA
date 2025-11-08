import React, { useState } from 'react'
import PatientForm from '../PatientForm'
import HospitalWardSystem from '../HospitalWardSystem'
import OrganizationalUnits from '../OrganizationalUnits'
import ChatbotButton from '../ChatbotButton'
import './index.css'

type ViewType = 'patient' | 'schedule' | 'ward' | 'organizationalUnits'

const MainContent: React.FC = () => {
  const [activeView, setActiveView] = useState<ViewType>('patient')
  
  return (
    <div className="main-content-container">
      {/* Top Level Tab Navigation */}
      <div className="main-tabs">
        <button 
          className={`main-tab ${activeView === 'organizationalUnits' ? 'active' : ''}`}
          onClick={() => setActiveView('organizationalUnits')}
        >
          Organisationseinheiten
        </button>
        <button 
          className={`main-tab ${activeView === 'patient' ? 'active' : ''}`}
          onClick={() => setActiveView('patient')}
        >
          Patientendatenmanagement
        </button>
        <button 
          className={`main-tab ${activeView === 'ward' ? 'active' : ''}`}
          onClick={() => setActiveView('ward')}
        >
          Stationsansicht
        </button>
        <div className="tab-filler"></div>
        <div className="tab-info">
          <span className="user-info">BWAA@KHVH04 ORBIS4302.11010.DAC1b</span>
          <span className="timestamp">19.10.2025 15:20:11</span>
        </div>
      </div>
      
      {/* Content Area */}
      <div className="content-area">
        {activeView === 'organizationalUnits' && <OrganizationalUnits />}
        {activeView === 'patient' && <PatientForm />}
        {activeView === 'ward' && <HospitalWardSystem />}
      </div>

      {/* Chatbot Button */}
      <ChatbotButton />
    </div>
  )
}

export default MainContent
