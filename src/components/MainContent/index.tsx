import React from 'react'
import PatientForm from '../PatientForm'
import HospitalWardSystem from '../HospitalWardSystem'
import OrganizationalUnits from '../OrganizationalUnits'
import ChatbotButton from '../ChatbotButton'
import { AppState } from '../../App'
import './index.css'

interface MainContentProps {
  appState: AppState
  updateAppState: (updates: Partial<AppState>) => void
}

// Patient Info Placeholder Component
const PatientInfoPage: React.FC<{ patient: { id: string; name: string } | null }> = ({ patient }) => {
  return (
    <div style={{ 
      padding: '40px', 
      backgroundColor: '#fff',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        border: '2px solid #ddd',
        padding: '40px',
        borderRadius: '8px',
        backgroundColor: '#f5f5f5',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '24px', marginBottom: '20px', color: '#333' }}>
          Patient Information
        </h2>
        <p style={{ fontSize: '18px', color: '#666' }}>
          Patient: <strong>{patient?.name || 'No patient selected'}</strong>
        </p>
        <p style={{ fontSize: '14px', color: '#999', marginTop: '20px' }}>
          [Patient data page placeholder]
        </p>
      </div>
    </div>
  )
}

const MainContent: React.FC<MainContentProps> = ({ appState, updateAppState }) => {
  
  return (
    <div className="main-content-container">
      {/* No tabs - just info bar */}
      <div className="main-tabs" style={{ justifyContent: 'flex-end', minHeight: '30px' }}>
        <div className="tab-info">
          <span className="user-info">BWAA@KHVH04 ORBIS4302.11010.DAC1b</span>
          <span className="timestamp">19.10.2025 15:20:11</span>
        </div>
      </div>
      
      {/* Content Area */}
      <div className="content-area">
        {appState.currentPage === 'organizationalUnits' && (
          <OrganizationalUnits 
            appState={appState} 
            updateAppState={updateAppState} 
          />
        )}
        {appState.currentPage === 'patientendatenmanagement' && <PatientForm />}
        {appState.currentPage === 'stationsansicht' && (
          <HospitalWardSystem 
            appState={appState}
            updateAppState={updateAppState}
          />
        )}
        {appState.currentPage === 'patientInfo' && (
          <PatientInfoPage patient={appState.selectedPatient} />
        )}
      </div>

      {/* Chatbot Button */}
      <ChatbotButton />
    </div>
  )
}

export default MainContent
