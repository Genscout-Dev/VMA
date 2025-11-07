import React, { useState } from 'react';
import './index.css';

interface PatientData {
  id: string;
  gender: 'male' | 'female';
  name: string;
  code: string;
  room: string;
  checkboxes: boolean[];
  statusText?: string;
  statusColor?: string;
  additionalText?: string;
  additionalColor?: string;
  bgColor?: 'yellow' | 'white';
  icons?: string[];
}

const StationOverview: React.FC = () => {
  const [activeTab, setActiveTab] = useState('stationsansicht');

  // LOUNGE S4 patients (left green section)
  const loungePatients: PatientData[] = [
    {
      id: '54-324-2',
      gender: 'male',
      name: 'Riemer, Herbert (903)',
      code: 'UCH BWAA',
      room: 'A2/S2',
      checkboxes: Array(20).fill(false),
      statusText: 'Pri Lahhächer Hot',
      statusColor: 'red',
      bgColor: 'white'
    },
    {
      id: '54-325-2',
      gender: 'female',
      name: 'Ulrich, Rita (701)',
      code: 'ACH BWAA',
      room: 'A2/S2',
      checkboxes: Array(20).fill(false),
      additionalText: '24.10 Birkental',
      additionalColor: 'orange',
      statusText: 'Stetz, Friedhelm (613)',
      bgColor: 'white',
      icons: ['triangle-blue']
    },
    {
      id: '54-326-2',
      gender: 'female',
      name: 'Hornbacher, Galina (682)',
      code: 'ORT EXT BWAA',
      room: '',
      checkboxes: Array(20).fill(false),
      bgColor: 'white'
    }
  ];

  // Right section patients
  const rightPatients: PatientData[] = [
    {
      id: '54-328-2',
      gender: 'female',
      name: 'Waschinger, Renate (703)',
      code: 'ACH BWAA',
      room: 'A2/S2',
      checkboxes: [...Array(20).fill(false)],
      statusText: 'Gesperrt wg. Infektiösem Nachbarbett',
      statusColor: 'red',
      bgColor: 'white'
    },
    {
      id: '54-329-2',
      gender: 'female',
      name: 'Huzin, Hanuma (531)',
      code: 'ACH BWAA',
      room: 'A2/S2',
      checkboxes: Array(20).fill(false),
      bgColor: 'white',
      icons: ['triangle-yellow']
    },
    {
      id: '54-330-2',
      gender: 'female',
      name: 'Schröder, Kerstin (444)',
      code: 'CH KRAFT BWAA',
      room: 'A2/S2',
      checkboxes: Array(20).fill(false),
      bgColor: 'white',
      icons: ['triangle-blue']
    },
    {
      id: '54-331-2',
      gender: 'female',
      name: 'Marx, Hermine (971)',
      code: 'UCH BWAA',
      room: 'A2/S2',
      checkboxes: (() => {
        const checks = Array(20).fill(false);
        checks[2] = true; // Third checkbox checked
        checks[10] = true; // 11th checkbox checked
        return checks;
      })(),
      statusText: 'PH Vielzeiteile // Patientenverfügung, Sohn ist Bevollmächtigte',
      statusColor: 'red',
      bgColor: 'yellow',
      icons: ['triangle-yellow']
    },
    {
      id: '54-332-2',
      gender: 'male',
      name: 'Kümmel, Jürgen (642)',
      code: 'ACH BWAA',
      room: 'A2/S2',
      checkboxes: Array(20).fill(false),
      statusText: '20.10. Nebenzimmer // immer Dialyse von acht',
      statusColor: 'red',
      bgColor: 'white',
      icons: ['square-red']
    }
  ];

  const renderPatientCard = (patient: PatientData) => {
    return (
      <div key={patient.id} className={`patient-card ${patient.bgColor || 'white'}`}>
        <div className="card-row">
          <div className="card-left">
            <span className="patient-number">{patient.id}</span>
          </div>
          <div className="card-middle">
            <div className="checkbox-row">
              {patient.checkboxes.map((checked, idx) => (
                <input
                  key={idx}
                  type="checkbox"
                  checked={checked}
                  onChange={() => {}}
                  className="tiny-checkbox"
                />
              ))}
              {patient.statusText && patient.statusColor === 'red' && (
                <span className="inline-status">{patient.statusText}</span>
              )}
            </div>
            <div className="info-row">
              <span className={`gender-icon ${patient.gender}`}>
                {patient.gender === 'male' ? '♂' : '♀'}
              </span>
              <span className="patient-name">{patient.name}</span>
            </div>
            <div className="code-row">
              <span className="patient-code">{patient.code}</span>
              {patient.additionalText && (
                <span className={`additional-text ${patient.additionalColor}`}>
                  {patient.additionalText}
                </span>
              )}
            </div>
            {patient.statusText && patient.statusColor !== 'red' && (
              <div className="bottom-status">
                <span className={`gender-icon ${patient.gender}`}>{patient.gender === 'male' ? '♂' : '♀'}</span>
                <span className="status-text">{patient.statusText}</span>
              </div>
            )}
          </div>
          <div className="card-right">
            {patient.icons?.map((icon, idx) => (
              <span key={idx} className={`icon ${icon}`}>
                {icon.includes('triangle') ? '▲' : '■'}
              </span>
            ))}
            <span className="room-info">{patient.room}</span>
            <div className="action-buttons">
              <button className="mini-btn">📁</button>
              <button className="mini-btn">✏</button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const tableData = [
    {
      patient: 'Harpe, Dirk',
      gender: '♂',
      type: 'alt',
      status: 'vorst.',
      id: 'Pat.',
      aufnahme: 'stat. gepl. ab 20.10.2025',
      selected: true
    },
    {
      patient: 'OPUS_I_J_BULA',
      gender: '♀',
      type: 'gepl',
      status: '(stat)',
      id: 'Pat.',
      aufnahme: 'gepl. ab: 29.09.2022 17:51',
      selected: true
    }
  ];

  return (
    <div className="station-overview-container">
      {/* Tab bar */}
      <div className="tab-bar">
        <button
          className={`tab ${activeTab === 'stationsansicht' ? 'active' : ''}`}
          onClick={() => setActiveTab('stationsansicht')}
        >
          Stationsansicht
        </button>
        <button className="tab">Behandlerfilter Station</button>
        <button className="tab">Behandlerfilter Krankenhaus</button>
        <button className="tab">Zugewiesene Räume</button>
        <div className="tab-spacer"></div>
        <div className="search-container">
          <input type="text" placeholder="Behandler zuweisen" className="search-input" />
        </div>
      </div>

      {/* Main content */}
      <div className="main-layout">
        <div className="content-wrapper">
          <div className="upper-section">
            {/* Left green section - LOUNGE S4 */}
            <div className="lounge-section">
              <div className="section-header">LOUNGE S4</div>
              <div className="cards-container">
                {loungePatients.map(patient => renderPatientCard(patient))}
              </div>
            </div>

            {/* Right pink section */}
            <div className="right-section">
              <div className="cards-container">
                {rightPatients.map(patient => renderPatientCard(patient))}
              </div>
            </div>
          </div>

          {/* Bottom section with table */}
          <div className="bottom-section">
            <div className="table-container">
              <div className="table-tabs">
                <span className="table-tab active">Detailinformationen</span>
                <span className="table-tab">Zimmerveilung</span>
                <span className="divider">|</span>
                <span className="table-tab active">Warteliste</span>
                <span className="table-tab">Personal</span>
                <span className="table-tab">Termine</span>
                <span className="table-tab">Abklärungen</span>
              </div>
              
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Patient</th>
                    <th>Ges...</th>
                    <th>Typ</th>
                    <th>Status</th>
                    <th>Kennzeichen</th>
                    <th>Aufnahme/Hinweis</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, idx) => (
                    <tr key={idx} className={row.selected ? 'selected' : ''}>
                      <td>
                        <span className="gender-icon-small">{row.gender}</span>
                        {row.patient}
                      </td>
                      <td>{row.gender}</td>
                      <td>{row.type}</td>
                      <td>{row.status}</td>
                      <td>{row.id}</td>
                      <td>{row.aufnahme}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Filter section */}
            <div className="filter-panel">
              <div className="filter-header">
                🔍 Filter
              </div>
              <div className="filter-content">
                <div className="filter-field">
                  <label>Station</label>
                  <select>
                    <option>Baumschnitt | Patien...</option>
                  </select>
                </div>
                
                <div className="stats-grid">
                  <div className="stat-item">
                    <span>Aktuelle Station</span>
                    <span className="stat-value">Station S4 BWAA</span>
                  </div>
                  <div className="stat-item">
                    <span>Stationsverbund</span>
                    <span className="stat-value">PS4 BWAA, S4 BWAA</span>
                  </div>
                  <div className="stat-item">
                    <span>Räume</span>
                    <span className="stat-value">12</span>
                  </div>
                  <div className="stat-item">
                    <span>Mitarbeiter</span>
                    <span className="stat-value">705</span>
                  </div>
                  
                  <div className="stat-section">
                    <div className="stat-title">Betten</div>
                    <div className="stat-row">
                      <span>Soll / Max</span>
                      <span>22 / 22</span>
                    </div>
                    <div className="stat-row">
                      <span>Belegte Betten</span>
                      <span>18</span>
                    </div>
                    <div className="stat-row">
                      <span>Freie Betten</span>
                      <span>4</span>
                    </div>
                    <div className="stat-row">
                      <span>Gesperrte Betten</span>
                      <span>1</span>
                    </div>
                    <div className="stat-row">
                      <span>Notbetten</span>
                      <span>0</span>
                    </div>
                  </div>
                  
                  <div className="stat-section">
                    <div className="stat-title">Patienten</div>
                    <div className="stat-row">
                      <span>Aktuell</span>
                      <span>19</span>
                    </div>
                    <div className="stat-row">
                      <span>Begleitpersonen</span>
                      <span>0</span>
                    </div>
                    <div className="stat-row">
                      <span>Neugeborene</span>
                      <span>0</span>
                    </div>
                    <div className="stat-row">
                      <span>Geplant</span>
                      <span>1</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StationOverview;