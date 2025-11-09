import React from 'react'
import { AppState } from '../../App'
import Arztbrief from '../Arztbrief'

interface PatientFileProps {
  appState: AppState
}

const PatientFile: React.FC<PatientFileProps> = ({ appState }) => {
  const patient = appState.selectedPatient

  // If arztbriefData is available, show the Arztbrief instead
  if (appState.arztbriefData) {
    return <Arztbrief data={appState.arztbriefData} />
  }

  return (
    <div style={{ 
      backgroundColor: '#d4d0c8',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'Tahoma, Arial, sans-serif',
      fontSize: '11px',
      color: '#000'
    }}>
      {/* Top Menu Bar */}
      <div style={{
        backgroundColor: '#ece9d8',
        borderBottom: '1px solid #fff',
        display: 'flex',
        padding: '2px 4px',
        gap: '2px'
      }}>
        <button style={{
          backgroundColor: '#ece9d8',
          border: '1px solid #aca899',
          padding: '3px 12px',
          fontSize: '11px',
          cursor: 'pointer',
          color: '#000'
        }}>Dokumentenfilter</button>
        <button style={{
          backgroundColor: '#ece9d8',
          border: '1px solid #aca899',
          padding: '3px 12px',
          fontSize: '11px',
          cursor: 'pointer',
          color: '#000'
        }}>Fachfilter</button>
        <button style={{
          backgroundColor: '#ece9d8',
          border: '1px solid #aca899',
          padding: '3px 12px',
          fontSize: '11px',
          cursor: 'pointer',
          color: '#000'
        }}>Fallfilter</button>
        <button style={{
          backgroundColor: '#ece9d8',
          border: '1px solid #aca899',
          padding: '3px 12px',
          fontSize: '11px',
          cursor: 'pointer',
          color: '#000'
        }}>Ereignisfilter</button>
        <button style={{
          backgroundColor: '#ece9d8',
          border: '1px solid #aca899',
          padding: '3px 12px',
          fontSize: '11px',
          cursor: 'pointer',
          color: '#000'
        }}>🔍 Suche Archivdateien</button>
        <button style={{
          backgroundColor: '#ece9d8',
          border: '1px solid #aca899',
          padding: '3px 12px',
          fontSize: '11px',
          cursor: 'pointer',
          color: '#000'
        }}>📚 Lernen</button>
      </div>

      {/* Search Bar */}
      <div style={{
        backgroundColor: '#ece9d8',
        borderBottom: '1px solid #aca899',
        padding: '6px 8px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        <span style={{ fontSize: '16px', color: '#666' }}>🔍</span>
        <input 
          type="text"
          placeholder="Kombinierte Suche - In den Listenspalten Dokument, Text, Beschreibung"
          style={{
            flex: 1,
            padding: '3px 6px',
            border: '1px solid #7f9db9',
            backgroundColor: '#fff',
            fontSize: '11px'
          }}
        />
      </div>

      {/* Main Content Area */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Left Sidebar - Filters */}
        <div style={{
          width: '250px',
          backgroundColor: '#ece9d8',
          borderRight: '1px solid #aca899',
          padding: '8px',
          overflow: 'auto'
        }}>
          <div style={{
            backgroundColor: '#ece9d8',
            border: '1px solid #fff',
            marginBottom: '4px',
            cursor: 'pointer'
          }}>
            <div style={{
              backgroundColor: '#0054a6',
              color: '#fff',
              padding: '3px 6px',
              fontSize: '11px',
              fontWeight: 'bold'
            }}>▼ Verberg Filter</div>
          </div>

          <div style={{
            backgroundColor: '#fff',
            border: '1px solid #aca899',
            padding: '6px',
            marginBottom: '8px'
          }}>
            <div style={{ padding: '3px 0', fontSize: '11px' }}>Fall-Dokumententypen</div>
            <div style={{ padding: '3px 0', fontSize: '11px' }}>Fremdakte</div>
            <div style={{ padding: '3px 0', fontSize: '11px' }}>Sonder-Zusatzfilter</div>
          </div>
        </div>

        {/* Right Content Area */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          {/* Right Sidebar Labels */}
          <div style={{
            position: 'absolute',
            right: '8px',
            top: '90px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px'
          }}>
            <div style={{
              backgroundColor: '#ece9d8',
              border: '1px solid #aca899',
              padding: '3px 8px',
              fontSize: '11px',
              textAlign: 'center'
            }}>Dokument</div>
            <div style={{
              backgroundColor: '#ece9d8',
              border: '1px solid #aca899',
              padding: '3px 8px',
              fontSize: '11px',
              textAlign: 'center'
            }}>Digisign</div>
            <div style={{
              backgroundColor: '#ece9d8',
              border: '1px solid #aca899',
              padding: '3px 8px',
              fontSize: '11px',
              textAlign: 'center'
            }}>Zugeordnetes Laufwerk</div>
          </div>

          {/* Toolbar */}
          <div style={{
            backgroundColor: '#ece9d8',
            borderBottom: '1px solid #aca899',
            padding: '4px 8px',
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}>
            <span style={{ fontSize: '11px', color: '#000' }}>⚡ Dokumente der Krankengeschichte</span>
            <div style={{ flex: 1 }}></div>
            <button style={{
              backgroundColor: '#ece9d8',
              border: '1px solid #aca899',
              padding: '2px 8px',
              fontSize: '11px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              🖨 Drucken ▼
            </button>
            <button style={{
              backgroundColor: '#ece9d8',
              border: '1px solid #aca899',
              padding: '2px 8px',
              fontSize: '11px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              📋 Kopieren Kontextmenü
            </button>
          </div>

          {/* Document List Header */}
          <div style={{
            backgroundColor: '#d4d0c8',
            borderBottom: '2px solid #000',
            display: 'flex',
            padding: '4px 8px',
            fontWeight: 'bold',
            fontSize: '11px'
          }}>
            <div style={{ width: '30px' }}>▼</div>
            <div style={{ width: '150px' }}>Erstellt Zeit</div>
            <div style={{ flex: 1 }}>Dokument</div>
            <div style={{ width: '150px' }}>Status</div>
          </div>

          {/* Document List Item */}
          <div style={{
            backgroundColor: '#fff',
            borderBottom: '1px solid #d4d0c8',
            display: 'flex',
            padding: '4px 8px',
            fontSize: '11px',
            alignItems: 'center'
          }}>
            <div style={{ width: '30px' }}>☐</div>
            <div style={{ width: '150px' }}>29.09.2025 18:17</div>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ color: 'red' }}>📄</span>
              <span>Aufnahmebogen ACH BWAA</span>
            </div>
            <div style={{ width: '150px' }}>signiert, nicht</div>
          </div>

          {/* Large Content Area */}
          <div style={{
            flex: 1,
            backgroundColor: '#f5f5f5',
            margin: '8px',
            border: '1px solid #aca899',
            overflow: 'auto'
          }}>
            {/* Empty content area - this is where document preview would go */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PatientFile

