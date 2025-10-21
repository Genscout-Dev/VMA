import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="window" style={{ width: '800px', margin: '50px auto' }}>
      <div className="title-bar">
        <div className="title-bar-text">ORBIS BWAA - Patient Management</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <div className="window-body">
        <h1>Welcome to VMA</h1>
        <p>This is a demo using 98.css with custom green theme.</p>
        
      </div>
    </div>
  )
}

export default App

