import Sidebar from './components/Sidebar'

function App() {
  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw', overflow: 'hidden', backgroundColor: 'var(--gray-medium)' }}>
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
            <p>The sidebar on the left uses XP.css TreeView component.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

