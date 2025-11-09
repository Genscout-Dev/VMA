import React from 'react'
import './index.css'

interface ArztbriefData {
  recipient?: string
  patientName?: string
  patientBirthDate?: string
  patientId?: string
  admissionDate?: string
  dischargeDate?: string
  diagnoses?: string[]
  procedures?: string[]
  anamnese?: string
  medication?: string[]
}

interface ArztbriefProps {
  data?: ArztbriefData
}

const Arztbrief: React.FC<ArztbriefProps> = ({ data }) => {
  return (
    <div className="arztbrief-container">
      {/* Header */}
      <div className="arztbrief-header">
        <div className="header-toolbar">
          <div className="header-label">Arztbrief</div>
        </div>
        <div className="header-menubar">
          <span className="menu-item">Verteiler</span>
          <span className="menu-item">Briefkopf</span>
          <span className="menu-item">Anlage</span>
          <span className="menu-item">Bilder</span>
          <span className="menu-item">Einträge</span>
        </div>
        <div className="header-info-bar">
          <div className="info-left">
            <span className="info-item">⬜ Drucken</span>
            <span className="info-item">🖨️ ☐ Druckvorlage ausblenden ☑ in Druckliste ☐ drucken</span>
            <span className="info-item">📧 zum Sekretariat</span>
            <span className="info-item">✍️ zur Signierung</span>
          </div>
        </div>
        <div className="header-status-bar">
          <div className="status-left">
            <span>Arbeitslisten (offene Aufträge: 45)</span>
            <span>⏰ ACH BWAA/S4 BWAA</span>
            <span>☐ Medikamentenblatt</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="arztbrief-content">
        {/* Patient Info Section */}
        <div className="content-section">
          <div className="section-label">Empfänger:</div>
          <div className="patient-info-box">
            <div className="info-row">
              <span className="label-small">Dr. Dirk Alten, Am Tor 3, 34582 Borken (Hessen)</span>
            </div>
          </div>
        </div>

        {/* Letter Selection */}
        <div className="content-section">
          <div className="section-label-blue">Auswahl Briefkopf</div>
          <div className="dropdown-field">
            <input type="text" value="ACH / TCH" readOnly className="input-field" />
            <button className="dropdown-btn">🔍</button>
          </div>
          <div className="status-info">
            <div className="status-date">19.10.2025</div>
            <div className="status-text">
              <div>H.MUDO / A.HOSN</div>
              <div>Fallnummer: 2600080909</div>
            </div>
          </div>
        </div>

        {/* Letter Title */}
        <div className="content-section">
          <div className="section-title-large">Endgültiger Entlassungsbrief</div>
        </div>

        {/* Greeting */}
        <div className="content-section">
          <div className="greeting-text">
            Sehr geehrte Frau Kollegin, sehr geehrter Herr Kollege,
          </div>
        </div>

        {/* Patient Description */}
        <div className="content-section">
          <div className="patient-description">
            wir berichten über unsere Patientin Frau <strong>{data?.patientName || 'John Doe'}</strong>, geb. am{' '}
            <strong>{data?.patientBirthDate || '15.03.1985'}</strong>, Im Brühl 6, 34582 Borken, die sich vom{' '}
            <strong>{data?.admissionDate || '05.10.2025'}</strong> bis zum{' '}
            <strong>{data?.dischargeDate || '14.10.2025'}</strong> in unserer stationären Behandlung befand.
          </div>
        </div>

        {/* Diagnoses Section */}
        <div className="content-section">
          <div className="section-label">Diagnose/n:</div>
          <div className="diagnosis-toolbar">
            <button className="toolbar-btn-link">🔵 Auswahl</button>
            <button className="toolbar-btn-link">➕ alle Diagnosen DRCUP laden</button>
            <button className="toolbar-btn-link">➕ alle Diagnosen aus letztem AU des Falls laden</button>
            <button className="toolbar-btn-link">➕ alle Diagnosen aus letztem AE laden</button>
            <button className="toolbar-btn-link">➕ alle Diagnosen aus letztem Notfallprotokoll laden</button>
          </div>
          
          <div className="diagnosis-main">
            <div className="checkbox-row">
              <input type="checkbox" id="diagnosis-dialog" />
              <label htmlFor="diagnosis-dialog">Diagnoseerstellungs-Dialog</label>
            </div>
            
            <div className="diagnosis-options">
              <div className="checkbox-group">
                <input type="checkbox" /> <span>Spaltenüberschrift drucken</span>
                <div className="spacer"></div>
                <input type="checkbox" /> <span>Laufnummer anzeigen</span>
                <div className="icon-btns">
                  <button className="icon-btn">⚙️</button>
                  <button className="icon-btn">⚙️</button>
                  <button className="icon-btn">🗑️ Markierte Zeile löschen</button>
                </div>
              </div>
            </div>

            <div className="diagnosis-list">
              <div className="diagnosis-item">
                <input type="checkbox" />
                <input type="checkbox" id="leberabszess" />
                <label htmlFor="leberabszess">Leberabszess</label>
                <span className="diagnosis-code">K75.0</span>
              </div>
              <div className="diagnosis-item">
                <input type="checkbox" />
                <input type="checkbox" id="ebv-infection" />
                <label htmlFor="ebv-infection">Z.n EBV-Infektion</label>
              </div>
              <div className="diagnosis-item-empty">
                <input type="checkbox" />
                <input type="checkbox" />
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Diagnoses */}
        <div className="content-section">
          <div className="section-label">Nebendiagnosen:</div>
          <div className="secondary-diagnosis">
            <div>D.M Typ II, Insulinpflichtig</div>
            <div>Art. Hypertonie</div>
          </div>
        </div>

        {/* Allergies */}
        <div className="content-section">
          <div className="section-label">Allergien: 🚫 📋</div>
          <div className="allergy-info">Keine Allergien für die Patientin erfasst</div>
        </div>

        {/* Procedures Section */}
        <div className="content-section">
          <div className="section-label">Prozedur/en:</div>
          <div className="procedures-toolbar">
            <button className="toolbar-btn-link">🔵 Auswahl</button>
          </div>

          <div className="procedures-options">
            <div className="checkbox-group">
              <input type="checkbox" /> <span>Spaltenüberschrift drucken</span>
              <div className="spacer"></div>
              <input type="checkbox" /> <span>Laufnummer anzeigen</span>
              <div className="icon-btns">
                <button className="icon-btn">⚙️</button>
                <button className="icon-btn">⚙️</button>
                <button className="icon-btn">🗑️ Markierte Zeile löschen</button>
              </div>
            </div>
          </div>

          <div className="procedures-list">
            <div className="procedure-item">
              <input type="checkbox" />
              <input type="checkbox" />
              <label>Laparoskopische Leberabszess Inzision und Drainage Anlage vom 08.10.2025</label>
              <span className="procedure-code">5-501.01</span>
            </div>
            <div className="procedure-item">
              <input type="checkbox" />
              <input type="checkbox" />
              <label>Computertomographie des Thorax mit Kontrastmittel vom 07.10.2025</label>
              <span className="procedure-code">3-222</span>
            </div>
            <div className="procedure-item">
              <input type="checkbox" />
              <input type="checkbox" />
              <label>Computertomographie des Abdomens mit Kontrastmittel vom 07.10.2025</label>
              <span className="procedure-code">3-225</span>
            </div>
            <div className="procedure-item-empty">
              <input type="checkbox" />
              <input type="checkbox" />
            </div>
          </div>
        </div>

        {/* Histology */}
        <div className="content-section">
          <div className="section-label">Histologie:</div>
        </div>

        {/* Anamnese */}
        <div className="content-section">
          <div className="section-label">Anamnese:</div>
          <div className="anamnese-link">
            <button className="toolbar-btn-link">🔵 aus Aufnahmebericht übernehmen</button>
          </div>
          <div className="anamnese-text">
            {data?.anamnese || (
              <>
                Die Patientin wurde vom internen sind Blutdruckwerte schnell von zu Hause wegen Allgemeinzustandsverschlechterung und Appetitlosigkeit im Rahmen EBV-Infektion (seit 23.09.2025) gebracht. beim Eintreffen im ZNA: Patientin wach, klar und orientiert, hat Hypotonie bis 86 mmHg systolisch bei Fesisklöse bei wenigen Flüssigkeit zuvor bei Appetitlosigkeit sowie weitere Einnahme von Candesartan und Hydroton. In ZNA wurde Flüssigkeit über 2 verschiedene i.v. Zugänge verabreicht, darunter Blutdruckwerte schnell sich adäquat steigend.
              </>
            )}
          </div>
        </div>

        {/* Medication */}
        <div className="content-section">
          <div className="section-label">Medikation bei Aufnahme:</div>
        </div>
      </div>
    </div>
  )
}

export default Arztbrief

