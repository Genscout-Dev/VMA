import Sidebar from './components/Sidebar'
import goPrevious from './assets/icons/go-previous-symbolic.png'
import goNext from './assets/icons/go-next.png'
import folderOpen from './assets/icons/Folder Open.ico'

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw', overflow: 'hidden', backgroundColor: 'var(--gray-medium)' }}>
      {/* Top Navbar/Menu Bar */}
      <div style={{ display: 'flex', flexDirection: 'column', borderBottom: '2px solid var(--gray-dark)' }}>
        
        {/* Top Logo Bar */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center',
          height: '20px',
          backgroundColor: 'var(--green-dark)',
          fontFamily: "Arial, sans-serif",
          fontSize: '10px',
          color: 'var(--white)',
          paddingLeft: '4px',
          borderBottom: '1px solid var(--gray-dark)'
        }}>
          <div style={{ fontWeight: 'bold' }}>ORBIS BWAA@KHV04</div>
        </div>
        
        {/* Menu Bar */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center',
          height: '20px',
          fontFamily: "Arial, sans-serif",
          fontSize: '10px',
          color: '#000000',
          paddingLeft: '4px',
          backgroundColor: 'var(--green-light)'
        }}>
          <div style={{ display: 'flex', gap: '16px' }}>
            <div style={{ cursor: 'pointer', userSelect: 'none' }}>Datei</div>
            <div style={{ cursor: 'pointer', userSelect: 'none' }}>Bearbeiten</div>
            <div style={{ cursor: 'pointer', userSelect: 'none' }}>Extra</div>
            <div style={{ cursor: 'pointer', userSelect: 'none' }}>Administration</div>
            <div style={{ cursor: 'pointer', userSelect: 'none' }}>?</div>
          </div>
        </div>

        {/* Toolbar with Icons and Info */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '28px',
          backgroundColor: 'var(--green-toolbar)',
          paddingLeft: '4px',
          paddingRight: '8px',
          borderTop: '1px solid var(--gray-dark)'
        }}>
          <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
            <img src={goPrevious} alt="Previous" style={{ width: '24px', height: '22px', cursor: 'pointer' }} />
            <img src={goNext} alt="Next" style={{ width: '24px', height: '22px', cursor: 'pointer' }} />
            <div style={{ fontSize: '14px', lineHeight: '1', cursor: 'pointer' }}>⟳</div>
            <div style={{ width: '1px', height: '16px', backgroundColor: 'var(--gray-dark)', margin: '0 4px' }}></div>
            <img src={folderOpen} alt="Folder" style={{ width: '24px', height: '22px', cursor: 'pointer' }} />
            <div style={{ fontSize: '14px', lineHeight: '1', cursor: 'pointer' }}>💾</div>
            <div style={{ fontSize: '14px', lineHeight: '1', cursor: 'pointer' }}>🖨️</div>
          </div>

          <div style={{ display: 'flex', gap: '20px', alignItems: 'center', fontSize: '10px', color: 'var(--gray-dark)' }}>
            <span>Waschinger, Renate</span>
            <span>2600008090</span>
            <span>*11.01.1955</span>
          </div>
        </div>

        {/* Secondary Toolbar */}
        <div style={{ 
          display: 'flex',
          alignItems: 'center',
          height: '20px',
          backgroundColor: 'var(--green-dark)',
          paddingLeft: '4px',
          borderTop: '1px solid var(--gray-dark)',
          fontFamily: "Arial, sans-serif",
          fontSize: '10px',
          color: 'var(--white)'
        }}>
          <span>Berichte/Übersichten</span>
        </div>
      </div>

      {/* Main Content Area with Sidebar and Content */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <Sidebar />
        <div style={{ flex: 1, padding: '8px', display: 'flex', flexDirection: 'column' }}>
          <div className="window" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div className="title-bar">
              <div className="title-bar-text">ORBIS BWAA @ KHV04 - Arztbrief ACI BWAA</div>
              <div className="title-bar-controls">
                <button aria-label="Minimize"></button>
                <button aria-label="Maximize"></button>
                <button aria-label="Close"></button>
              </div>
            </div>
            <div className="window-body" style={{ flex: 1, overflow: 'auto' }}>
              <h2>Main Content Area</h2>
              <p>This is where the main content would appear.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

