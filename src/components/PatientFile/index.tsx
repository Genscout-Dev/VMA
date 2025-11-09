import React from 'react'
import { AppState } from '../../App'

interface PatientFileProps {
  appState: AppState
}

const PatientFile: React.FC<PatientFileProps> = ({ appState }) => {
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
        textAlign: 'center',
        minWidth: '400px'
      }}>
        <h2 style={{ fontSize: '24px', marginBottom: '20px', color: '#333' }}>
          Patient's file
        </h2>
        {appState.selectedPatient && (
          <div style={{ marginTop: '20px', textAlign: 'left' }}>
            <p style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>
              <strong>Patient:</strong> {appState.selectedPatient.name}
            </p>
            {appState.selectedPatient.age && (
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>
                <strong>Age:</strong> {appState.selectedPatient.age}
              </p>
            )}
            {appState.selectedPatient.ward && (
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>
                <strong>Ward:</strong> {appState.selectedPatient.ward}
              </p>
            )}
            {appState.selectedPatient.caseNumber && (
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>
                <strong>Case Number:</strong> {appState.selectedPatient.caseNumber}
              </p>
            )}
          </div>
        )}
        <p style={{ fontSize: '14px', color: '#999', marginTop: '20px' }}>
          [Krankengeschichte - Patient medical history placeholder]
        </p>
      </div>
    </div>
  )
}

export default PatientFile

