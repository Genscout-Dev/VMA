import React from 'react'
import './index.css'

interface ScheduleSlot {
  id: string
  stationCode: string
  roomNumber: string
  patientName: string
  doctorName?: string
  timeSlot: string
  status: 'warning' | 'alert' | 'normal' | 'info'
  color: 'green' | 'blue' | 'orange' | 'white'
}

const ScheduleView: React.FC = () => {
  const scheduleSlots: Record<string, ScheduleSlot[]> = {
    '54-328': [
      {
        id: '1',
        stationCode: 'ACH BWAA',
        roomNumber: '703',
        patientName: 'Waschinger, Renate',
        timeSlot: '42/52',
        status: 'normal',
        color: 'white'
      }
    ],
    '54-329': [
      {
        id: '2',
        stationCode: 'ACH BWAA',
        roomNumber: '531',
        patientName: 'Haziri, Hanuma',
        timeSlot: '42/52',
        status: 'warning',
        color: 'white'
      }
    ],
    '54-330': [
      {
        id: '3',
        stationCode: 'CH KRAFT BWAA',
        roomNumber: '443',
        patientName: 'Schröder, Kerstin',
        timeSlot: '42/52',
        status: 'info',
        color: 'white'
      }
    ],
    '54-331': [
      {
        id: '4',
        stationCode: 'UCH BWAA',
        roomNumber: '571',
        patientName: 'Marx, Hermine',
        doctorName: 'PD Spätschicht // Patientenübergabe, ohne m. Bereitschaftsd.',
        timeSlot: '42/52',
        status: 'warning',
        color: 'orange'
      }
    ],
    '54-332': [
      {
        id: '5',
        stationCode: 'ACH BWAA',
        roomNumber: '701',
        patientName: 'Weber, Petra',
        timeSlot: '42/52',
        status: 'alert',
        color: 'white'
      }
    ],
    '54-324': [
      {
        id: '6',
        stationCode: 'UCH BWAA',
        roomNumber: '601',
        patientName: 'Riemer, Herbert',
        doctorName: 'Im Laufkader, Hof',
        timeSlot: '42/52',
        status: 'normal',
        color: 'green'
      }
    ],
    '54-325': [
      {
        id: '7',
        stationCode: 'ORT EXT BWAA',
        roomNumber: '611',
        patientName: 'Stertz, Friedhelm',
        timeSlot: '42/52',
        status: 'info',
        color: 'blue'
      },
      {
        id: '8',
        stationCode: 'ACH BWAA',
        roomNumber: '701',
        patientName: 'Ulrich, Rita',
        timeSlot: '42/52',
        status: 'info',
        color: 'blue'
      }
    ],
    '54-332-2': [
      {
        id: '9',
        stationCode: 'ACH BWAA',
        roomNumber: '643',
        patientName: 'Kümmell, Jürgen',
        doctorName: '23:10, Heizerzindulli // immer Spabes von sich',
        timeSlot: '',
        status: 'normal',
        color: 'white'
      }
    ]
  }

  const detailsData = [
    {
      patient: 'OPUS_C_J_BULA',
      gender: '♂',
      type: 'ggpl',
      status: 'verst.',
      kenzeichen: 'Pat.',
      aufnahme: 'stat. ggpl. ab 20.10.2022',
      hinweis: 'ggpl. ab: 29.09.2022 17:51'
    }
  ]

  const statsData = {
    aktuelleStation: 'Station 54 BWAA',
    stationsverbund: 'PS4 BWAA, S4 BWAA',
    räume: '12',
    mitarbeiter: '708',
    betten: '18',
    soll: '22 / 72',
    belegteBetten: '18',
    freieBetten: '4',
    gesperrteBetten: '1',
    begleitpersonen: '0',
    notbetten: '0',
    neugeborene: '0',
    geplant: '1'
  }

  return (
    <div className="schedule-view-container">
      {/* Tab Navigation */}
      <div className="tab-navigation">
        <button className="tab active">Stationsansicht</button>
        <button className="tab">Behandlerfilter</button>
        <button className="tab">Station</button>
        <button className="tab">Behandlerfilter Krankenhaus</button>
        <button className="tab">Zugewiesene Räume</button>
        <button className="tab-spacer"></button>
        <button className="action-tab">🔄 Behandler zureisen</button>
      </div>

      {/* Main Schedule Area */}
      <div className="schedule-content">
        <div className="schedule-grid-container">
          {/* Header */}
          <div className="schedule-header">
            <div className="header-left">LOUNGE 54</div>
            <div className="header-right">
              <span className="room-label">54-328² ²</span>
              <span className="filter-info">Gesamt ng. erledigte Nachrichten 📩</span>
            </div>
          </div>

          {/* Schedule Grid */}
          <div className="schedule-grid">
            {Object.entries(scheduleSlots).map(([slotId, slots]) => (
              <div key={slotId} className="schedule-row">
                <div className="slot-label">{slotId}</div>
                <div className="slot-cards">
                  {slots.map((slot) => (
                    <div 
                      key={slot.id} 
                      className={`schedule-card ${slot.color} ${slot.status}`}
                    >
                      <div className="card-header">
                        <div className="location-info">
                          <span className="location-marker">📍</span>
                          <span className="station-code">{slot.stationCode}</span>
                        </div>
                        {slot.status === 'warning' && <span className="status-icon">⚠️</span>}
                        {slot.status === 'alert' && <span className="status-icon">🚨</span>}
                        {slot.status === 'info' && <span className="status-icon">ℹ️</span>}
                      </div>
                      <div className="card-body">
                        <div className="patient-name">
                          {slot.patientName} ({slot.roomNumber})
                        </div>
                        {slot.doctorName && (
                          <div className="doctor-info">{slot.doctorName}</div>
                        )}
                      </div>
                      <div className="card-footer">
                        <span className="time-slot">{slot.timeSlot}</span>
                        <button className="card-action">📊</button>
                        <button className="card-action">📝</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Stats Panel */}
        <div className="stats-panel">
          <div className="stats-header">Gesamt ng. erledigte Nachrichten 📩</div>
          <div className="stats-content">
            <div className="stat-item">
              <label>Aktuelle Station</label>
              <div>{statsData.aktuelleStation}</div>
            </div>
            <div className="stat-item">
              <label>Stationsverbund</label>
              <div>{statsData.stationsverbund}</div>
            </div>
            <div className="stat-item">
              <label>Räume</label>
              <div>{statsData.räume}</div>
            </div>
            <div className="stat-item">
              <label>Mitarbeiter</label>
              <div>{statsData.mitarbeiter}</div>
            </div>
            <div className="stat-divider"></div>
            <table className="stats-table">
              <tbody>
                <tr>
                  <td>Betten</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Soll / Max</td>
                  <td>{statsData.soll}</td>
                </tr>
                <tr>
                  <td>Belegte Betten</td>
                  <td>{statsData.belegteBetten}</td>
                </tr>
                <tr>
                  <td>Freie Betten</td>
                  <td>{statsData.freieBetten}</td>
                </tr>
                <tr>
                  <td>Gesperrte Betten</td>
                  <td>{statsData.gesperrteBetten}</td>
                </tr>
                <tr>
                  <td>Begleitpersonen</td>
                  <td>{statsData.begleitpersonen}</td>
                </tr>
                <tr>
                  <td>Notbetten</td>
                  <td>{statsData.notbetten}</td>
                </tr>
              </tbody>
            </table>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <label>Patienten</label>
            </div>
            <table className="stats-table">
              <tbody>
                <tr>
                  <td>Aktuell</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Neugeborene</td>
                  <td>{statsData.neugeborene}</td>
                </tr>
                <tr>
                  <td>Geplant</td>
                  <td>{statsData.geplant}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Bottom Details Panel */}
      <div className="details-panel">
        <div className="details-tabs">
          <button className="tab active">Detailinformationen</button>
          <button className="tab">Warteliste</button>
          <button className="tab">Personal</button>
          <button className="tab">Termine</button>
          <button className="tab">Verlaufseintrag</button>
          <div className="tab-actions">
            <button className="filter-btn">🔽 Filter</button>
            <button className="station-btn">Station</button>
          </div>
        </div>
        
        <div className="details-content">
          <table className="details-table">
            <thead>
              <tr>
                <th>Patient</th>
                <th>Ges.</th>
                <th>Typ</th>
                <th>Status</th>
                <th>Kennzeichen</th>
                <th>Aufnahme/Hinweis</th>
              </tr>
            </thead>
            <tbody>
              {detailsData.map((row, index) => (
                <tr key={index}>
                  <td>
                    <span className="folder-icon">📁</span> 
                    <span className="patient-name">{row.patient}</span>
                  </td>
                  <td>{row.gender}</td>
                  <td>{row.type}</td>
                  <td className="status-cell">{row.status}</td>
                  <td>{row.kenzeichen}</td>
                  <td>
                    <div>{row.aufnahme}</div>
                    <div className="hint-text">{row.hinweis}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ScheduleView
