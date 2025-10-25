import './index.css'
import goPrevious from '../../assets/icons/go-previous-symbolic.png'
import goNext from '../../assets/icons/go-next.png'

export default function Toolbar() {
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
          <img src="/src/assets/icons/Folder Open.ico" alt="Open" className="toolbar-icon" />
          <img src="/src/assets/icons/166.ico" alt="Save" className="toolbar-icon" />
          <div className="toolbar-divider"></div>
          <img src="/src/assets/icons/emblem-documents.png" alt="Documents" className="toolbar-icon" />
        </div>
        
        <div className="toolbar-patient-info">
          <span>Station: A1</span>
          <span>Bett: 12</span>
          <span>Patient: Mustermann, Max</span>
        </div>
      </div>

      {/* Breadcrumb Bar */}
      <div className="toolbar-breadcrumb">
        <span>Home &gt; Patienten &gt; Aktuelle Ansicht</span>
      </div>
    </div>
  )
}

