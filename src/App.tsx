import Sidebar from './components/Sidebar'
import Toolbar from './components/Toolbar'
import MainContent from './components/MainContent'

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw', overflow: 'hidden', backgroundColor: 'var(--gray-medium)' }}>
      <Toolbar />

      {/* Main Content Area with Sidebar and Content */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <Sidebar />
        <MainContent />
      </div>
    </div>
  )
}

export default App

