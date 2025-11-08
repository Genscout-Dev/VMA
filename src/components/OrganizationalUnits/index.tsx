import React, { useState } from 'react'
import ScrollableArea from '../ScrollableArea'
import { AppState } from '../../App'
import './index.css'

interface OrganizationalUnit {
  kuerzel: string
  bezeichnung: string
  typ: string
  typLabel: string
}

interface OrganizationalUnitsProps {
  appState?: AppState
  updateAppState: (updates: Partial<AppState>) => void
}

const OrganizationalUnits: React.FC<OrganizationalUnitsProps> = ({ updateAppState }) => {
  const [selectedStation, setSelectedStation] = useState<string | null>('S4 BWAA')
  const [notdienst, setNotdienst] = useState(false)
  const [begruendung, setBegruendung] = useState('')

  const superiorUnits: OrganizationalUnit[] = [
    { kuerzel: 'ACH BWAA', bezeichnung: 'Allgemeinchirurgie BWAA', typ: 'fachabteilung', typLabel: 'Fachabteilung' },
    { kuerzel: 'ACHP BWAA', bezeichnung: 'Allgemeinchirurgie Privat BWAA', typ: 'fachabteilung', typLabel: 'Fachabteilung' },
    { kuerzel: 'AMB SOND BWAA', bezeichnung: 'Sonderambulanz BWAA', typ: 'chefarztamb', typLabel: 'Chefarztambulanz' },
    { kuerzel: 'AOP ACH BWAA', bezeichnung: 'Ambulantes Operieren Allgemeinechirurgie BWAA', typ: 'institutsamb', typLabel: 'Institutsambulanz' },
    { kuerzel: 'AOP GCH BWAA', bezeichnung: 'Ambulantes Operieren Gefäßchirurgie BWAA', typ: 'institutsamb', typLabel: 'Institutsambulanz' },
    { kuerzel: 'AOP KLEINW BWAA', bezeichnung: 'Ambulantes Operieren Dr. Kleinwächter BWAA', typ: 'institutsamb', typLabel: 'Institutsambulanz' },
    { kuerzel: 'AOP KNAUF BWAA', bezeichnung: 'Ambulantes Operieren Dr. Knauf Chirurgie BWAA', typ: 'institutsamb', typLabel: 'Institutsambulanz' },
    { kuerzel: 'AOP UCH BWAA', bezeichnung: 'Ambulantes Operieren Unfallchirurgie BWAA', typ: 'institutsamb', typLabel: 'Institutsambulanz' },
    { kuerzel: 'BG AMBULANZ BWAA', bezeichnung: 'BG Ambulanz BWAA', typ: 'chefarztamb', typLabel: 'Chefarztambulanz' },
    { kuerzel: 'BG KUHN BWAA', bezeichnung: 'BG Dr. Kuhn (Ambulanz) BWAA', typ: 'chefarztamb', typLabel: 'Chefarztambulanz' },
    { kuerzel: 'BG SAKO BWAA', bezeichnung: 'BG Sachkosten BWAA', typ: 'institutsamb', typLabel: 'Institutsambulanz' },
    { kuerzel: 'CA ALM BWAA', bezeichnung: 'Hussein Al-Muddaeai, Chefarzt Allgemein- und Viszeralchirurgie B...', typ: 'chefarztamb', typLabel: 'Chefarztambulanz' },
    { kuerzel: 'CA DÖHL BWAA', bezeichnung: 'D. Döhl Neurochirurgie (Ambulanz) BWAA', typ: 'chefarztamb', typLabel: 'Chefarztambulanz' },
    { kuerzel: 'CA KUHN BWAA', bezeichnung: 'Dr. Kuhn (Ambulanz) BWAA', typ: 'chefarztamb', typLabel: 'Chefarztambulanz' },
    { kuerzel: 'CA LIEN BWAA', bezeichnung: 'Dr.med. Lienhard (Ambulanz) BWAA', typ: 'chefarztamb', typLabel: 'Chefarztambulanz' },
  ]

  const subordinateUnits: OrganizationalUnit[] = [
    { kuerzel: 'AUF BWAA', bezeichnung: 'Aufnahmestation BWAA', typ: 'station', typLabel: 'Station' },
    { kuerzel: 'HOLDING BWAA', bezeichnung: 'Emergency Care BWAA', typ: 'station', typLabel: 'Station' },
    { kuerzel: 'IMC BWAA', bezeichnung: 'Intermediate Care BWAA', typ: 'station', typLabel: 'Station' },
    { kuerzel: 'ITS BWAA', bezeichnung: 'Intensivstation BWAA', typ: 'station', typLabel: 'Station' },
    { kuerzel: 'S1 BWAA', bezeichnung: 'Station S1 BWAA', typ: 'station', typLabel: 'Station' },
    { kuerzel: 'S2 BWAA', bezeichnung: 'Station S2 BWAA', typ: 'station', typLabel: 'Station' },
    { kuerzel: 'S3 BWAA', bezeichnung: 'Station S3 BWAA', typ: 'station', typLabel: 'Station' },
    { kuerzel: 'S4 BWAA', bezeichnung: 'Station S4 BWAA', typ: 'station', typLabel: 'Station' },
    { kuerzel: 'S5 BWAA', bezeichnung: 'Station S5 BWAA', typ: 'station', typLabel: 'Station' },
    { kuerzel: 'S6 BWAA', bezeichnung: 'Station S6 BWAA Schmerztherapie', typ: 'station', typLabel: 'Station' },
  ]


  return (
    <div className="xp-org-container">
      {/* Header Bar */}
      <div className="xp-header-bar">
        <span className="xp-header-text">Suche</span>
      </div>
      
      {/* Top Controls Section */}
      <div className="xp-controls-section">
        <div className="xp-control-group">
          <label className="xp-label">Einrichtungen</label>
          <div className="xp-input-wrapper">
            <input 
              type="text" 
              className="xp-textbox" 
              value="BWAA - Asklepios Stadtklinik Bad Wildungen"
              readOnly
            />
          </div>
        </div>
        <div className="xp-control-group">
          <label className="xp-label">Typen</label>
          <select className="xp-select">
            <option>Allgemeiner Bereich, Chefarztambulanz, R</option>
          </select>
        </div>
      </div>

      {/* Authorization Section */}
      <div className="xp-auth-section">
        <label className="xp-label">Berechtigung</label>
        <div className="xp-checkbox-container">
          <input 
            type="checkbox" 
            id="notdienst" 
            className="xp-checkbox"
            checked={notdienst}
            onChange={(e) => setNotdienst(e.target.checked)}
          />
          <label htmlFor="notdienst" className="xp-checkbox-label">Notdienst</label>
        </div>
        <div className="xp-begruendung-wrapper">
          <label className="xp-label-italic">Begründung Notdienst</label>
          <input 
            type="text" 
            className="xp-textbox-long"
            value={begruendung}
            onChange={(e) => setBegruendung(e.target.value)}
          />
        </div>
      </div>

      {/* Main Section with Tables */}
      <div className="xp-main-section">
        <div className="xp-section-header">
          <span className="xp-section-title">Organisationseinheiten</span>
          <span className="xp-checkmark">✓</span>
        </div>

        {/* Superior Units Table */}
        <div className="xp-table-section">
          <div className="xp-table-title">Übergeordnete Organisationseinheiten</div>
          <div className="xp-table-wrapper">
            <div className="xp-table-filter-bar">
              <div className="xp-filter-cell" style={{width: '150px'}}></div>
              <div className="xp-filter-cell" style={{flex: 1}}>
                <span className="xp-filter-label">Bezeichnung</span>
                <input type="text" className="xp-filter-input" />
              </div>
              <div className="xp-filter-cell" style={{width: '200px'}}></div>
            </div>
            <ScrollableArea maxHeight="160px">
              <table className="xp-table">
                <thead>
                  <tr>
                    <th className="xp-th" style={{width: '150px'}}>
                      <span className="xp-th-text">Kürzel</span>
                      <span className="xp-sort-icon">▼</span>
                    </th>
                    <th className="xp-th">Bezeichnung</th>
                    <th className="xp-th" style={{width: '200px'}}>Typ</th>
                  </tr>
                </thead>
                <tbody>
                  {superiorUnits.map((unit, index) => (
                    <tr key={unit.kuerzel} className={index % 2 === 0 ? 'xp-row-even' : 'xp-row-odd'}>
                      <td className="xp-td">{unit.kuerzel}</td>
                      <td className="xp-td">{unit.bezeichnung}</td>
                      <td className="xp-td">
                        <div className="xp-type-cell">
                          <span className={`xp-icon xp-icon-${unit.typ}`}></span>
                          <span>{unit.typLabel}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </ScrollableArea>
          </div>
        </div>

        {/* Subordinate Units Table */}
        <div className="xp-table-section">
          <div className="xp-table-title">Untergeordnete Organisationseinheiten</div>
          <div className="xp-table-wrapper">
            <div className="xp-table-filter-bar">
              <div className="xp-filter-cell" style={{width: '100px'}}></div>
              <div className="xp-filter-cell" style={{flex: 1}}>
                <span className="xp-filter-label">Bezeichnung</span>
                <input type="text" className="xp-filter-input" />
              </div>
              <div className="xp-filter-cell" style={{width: '100px'}}></div>
            </div>
            <ScrollableArea maxHeight="calc(100vh - 400px)">
              <table className="xp-table">
                <thead>
                  <tr>
                    <th className="xp-th" style={{width: '100px'}}>
                      <span className="xp-th-text">Kürzel</span>
                      <span className="xp-sort-icon">▼</span>
                    </th>
                    <th className="xp-th">Bezeichnung</th>
                    <th className="xp-th" style={{width: '100px'}}>Typ</th>
                  </tr>
                </thead>
                <tbody>
                  {subordinateUnits.map((unit, index) => (
                    <tr 
                      key={unit.kuerzel} 
                      className={`${index % 2 === 0 ? 'xp-row-even' : 'xp-row-odd'} ${selectedStation === unit.kuerzel ? 'xp-row-selected' : ''}`}
                      onClick={() => {
                        setSelectedStation(unit.kuerzel)
                        // When station is clicked, show sidebar with Section 1
                        updateAppState({
                          selectedStation: unit.kuerzel,
                          showSidebar: true,
                          sidebarSection1Expanded: true,
                          sidebarSection2Visible: false
                        })
                      }}
                      style={{ cursor: 'pointer' }}
                    >
                      <td className="xp-td">{unit.kuerzel}</td>
                      <td className="xp-td">{unit.bezeichnung}</td>
                      <td className="xp-td">
                        <div className="xp-type-cell">
                          <span className={`xp-icon xp-icon-${unit.typ}`}></span>
                          <span>{unit.typLabel}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </ScrollableArea>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrganizationalUnits
