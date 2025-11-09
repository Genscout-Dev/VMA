import { useState, useRef, useEffect } from 'react'
import './index.css'
import goPrevious from '../../assets/icons/go-previous-symbolic.png'
import goNext from '../../assets/icons/go-next.png'
import folderOpenIcon from '../../assets/icons/Folder Open.ico'
import saveIcon from '../../assets/icons/166.ico'
import documentsIcon from '../../assets/icons/emblem-documents.png'
import { AppState } from '../../App'

interface ToolbarProps {
  appState?: AppState
  updateAppState: (updates: Partial<AppState>) => void
}

export default function Toolbar({ updateAppState }: ToolbarProps) {
  const [showDocumentsDropdown, setShowDocumentsDropdown] = useState(false)
  const [showMedDokuDropdown, setShowMedDokuDropdown] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDocumentsDropdown(false)
        setShowMedDokuDropdown(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="toolbar-container">
      {/* Top Logo Bar */}
      <div className="toolbar-logo-bar">
        <span className="toolbar-logo-text">ORBIS BWAA - VMA</span>
      </div>

      {/* Menu Bar */}
      <div className="toolbar-menu-bar">
        <div className="toolbar-menu-items">
          <span className="toolbar-menu-item">Datei</span>
          <span className="toolbar-menu-item">Bearbeiten</span>
          <span className="toolbar-menu-item">Ansicht</span>
          <span className="toolbar-menu-item">Extras</span>
          <span className="toolbar-menu-item">Fenster</span>
          <span className="toolbar-menu-item">Hilfe</span>
        </div>
      </div>

      {/* Main Toolbar with Icons */}
      <div className="toolbar-main">
        <div className="toolbar-icons">
          <img src={goPrevious} alt="Previous" className="toolbar-icon" />
          <img src={goNext} alt="Next" className="toolbar-icon" />
          <div className="toolbar-divider"></div>
          <img src={folderOpenIcon} alt="Open" className="toolbar-icon" />
          <img src={saveIcon} alt="Save" className="toolbar-icon" />
          <div className="toolbar-divider"></div>
          <div className="toolbar-icon-wrapper" style={{ position: 'relative' }} ref={dropdownRef}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
              <img 
                src={documentsIcon} 
                alt="Documents" 
                className="toolbar-icon" 
                onClick={() => setShowDocumentsDropdown(!showDocumentsDropdown)}
                style={{ cursor: 'pointer' }}
              />
              <span 
                style={{ 
                  fontSize: '10px', 
                  cursor: 'pointer',
                  color: '#333'
                }}
                onClick={() => setShowDocumentsDropdown(!showDocumentsDropdown)}
              >
                ▼
              </span>
            </div>
            
            {/* Documents Dropdown Menu */}
            {showDocumentsDropdown && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                backgroundColor: 'white',
                border: '1px solid #ccc',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                minWidth: '200px',
                zIndex: 1000
              }}>
                <div 
                  style={{
                    padding: '8px 12px',
                    cursor: 'pointer',
                    fontSize: '12px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#f0f0f0'
                    setShowMedDokuDropdown(true)
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'white'
                  }}
                >
                  med. dokumentation
                  <span style={{ fontSize: '10px' }}>▶</span>
                </div>
                
                {/* Nested Med. Dokumentation Menu */}
                {showMedDokuDropdown && (
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: '100%',
                    backgroundColor: 'white',
                    border: '1px solid #ccc',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                    minWidth: '180px'
                  }}>
                    <div 
                      style={{
                        padding: '8px 12px',
                        cursor: 'pointer',
                        fontSize: '12px'
                      }}
                      onClick={() => {
                        updateAppState({ 
                          currentPage: 'arztbriefSelection',
                          arztbriefData: undefined
                        })
                        setShowDocumentsDropdown(false)
                        setShowMedDokuDropdown(false)
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#f0f0f0'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'white'
                      }}
                    >
                      Arztbrief
                    </div>
                    <div style={{ padding: '8px 12px', fontSize: '12px', color: '#999' }}>
                      [Other Operation 1]
                    </div>
                    <div style={{ padding: '8px 12px', fontSize: '12px', color: '#999' }}>
                      [Other Operation 2]
                    </div>
                  </div>
                )}
                
                <div style={{ borderTop: '1px solid #e0e0e0' }}></div>
                <div style={{ padding: '8px 12px', fontSize: '12px', color: '#999' }}>
                  [Placeholder Operation 1]
                </div>
                <div style={{ padding: '8px 12px', fontSize: '12px', color: '#999' }}>
                  [Placeholder Operation 2]
                </div>
                <div style={{ padding: '8px 12px', fontSize: '12px', color: '#999' }}>
                  [Placeholder Operation 3]
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="toolbar-patient-info">
          <span>Station: A1</span>
          <span>Bett: 12</span>
          <span>Patient: Mustermann, Max</span>
        </div>
      </div>

      {/* Breadcrumb Bar */}
      <div className="toolbar-breadcrumb">
        <span>Beraiche/Übersichten</span>
      </div>
    </div>
  )
}

