import Sidebar from './components/Sidebar'
import Toolbar from './components/Toolbar'

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw', overflow: 'hidden', backgroundColor: 'var(--gray-medium)' }}>
      <Toolbar />

      {/* Main Content Area with Sidebar and Content */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <Sidebar />
        <div style={{ flex: 1, padding: '8px', display: 'flex', flexDirection: 'column', overflow: 'auto' }}>
          <h2>Main Content Area</h2>
          <p>This is where the main content would appear.</p>
        </div>
      </div>
    </div>
  )
}

export default App

