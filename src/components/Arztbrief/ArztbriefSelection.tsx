import React, { useState } from 'react'
import './selection.css'

interface ArztbriefSelectionProps {
  onSelectType: (type: string) => void
  stationName?: string
}

const ArztbriefSelection: React.FC<ArztbriefSelectionProps> = ({ onSelectType, stationName }) => {
  const [selectedType, setSelectedType] = useState('')

  const arztbriefTypes = [
    'Arztbrief ATLO BWAA',
    'Arztbrief BWAA',
    'Arztbrief für Anschreiben BWAA',
    'Arztbrief ZNA BWAA'
  ]

  const handleSelect = (type: string) => {
    setSelectedType(type)
    if (type === 'Arztbrief BWAA') {
      onSelectType(type)
    }
  }

  return (
    <div className="arztbrief-selection-container">
      <div className="arztbrief-selection-toolbar">
        <label htmlFor="arztbrief-dropdown" className="dropdown-label">
          Arztbrief-Auswahl
        </label>
        <select 
          id="arztbrief-dropdown"
          className="arztbrief-dropdown"
          value={selectedType}
          onChange={(e) => handleSelect(e.target.value)}
        >
          <option value="">Arztbrief-Auswahl</option>
          {arztbriefTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {stationName && (
          <div className="station-info">
            <span className="station-label">Station:</span>
            <span className="station-name">{stationName}</span>
          </div>
        )}
      </div>

      <div className="arztbrief-selection-content">
        <div className="selection-placeholder">
          <div className="placeholder-icon">📄</div>
          <h2>Bitte wählen Sie einen Arztbrief-Typ</h2>
          <p>Wählen Sie aus dem Dropdown-Menü oben einen Arztbrief-Typ aus, um fortzufahren.</p>
          {stationName && (
            <p className="station-hint">Ausgewählte Station: <strong>{stationName}</strong></p>
          )}
        </div>
      </div>
    </div>
  )
}

export default ArztbriefSelection

