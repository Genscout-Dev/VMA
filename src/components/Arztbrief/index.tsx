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
            <button className="info-btn">🖨️ Drucken</button>
            <div className="checkbox-row">
              <input type="checkbox" id="druckvorlage" />
              <label htmlFor="druckvorlage">Druckvorlage ausblenden</label>
            </div>
            <div className="checkbox-row">
              <input type="checkbox" id="in-druckliste" defaultChecked />
              <label htmlFor="in-druckliste">in Druckliste</label>
            </div>
            <div className="checkbox-row">
              <input type="checkbox" id="drucken" />
              <label htmlFor="drucken">drucken</label>
            </div>
            <button className="info-btn">📧 zum Sekretariat</button>
            <button className="info-btn">✍️ zur Signierung</button>
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

        {/* Lab Values Section */}
        <div className="content-section">
          <div className="section-label">Laborwerte:</div>
          <div className="empty-field"></div>
        </div>

        {/* Assessment Section */}
        <div className="content-section">
          <div className="section-label">Assessment/s:</div>
          <div className="link-row">
            <button className="toolbar-btn-link">⚙️ auswählen</button>
            <button className="toolbar-btn-link red-icon">🗑️ Datum/Zeit ausblenden</button>
          </div>
        </div>

        {/* Two Column Layout Section */}
        <div className="two-column-section">
          {/* Left Column */}
          <div className="column-left">
            {/* Therapy and Course */}
            <div className="content-section">
              <div className="section-label">Therapie und Verlauf:</div>
              <div className="link-row">
                <button className="toolbar-btn-link">⚙️ Einklkate_auswählen</button>
                <button className="toolbar-btn-link red-icon">🗑️ Abschlußbefund_auswählen</button>
              </div>
            </div>

            {/* Epicrisis */}
            <div className="content-section">
              <div className="section-label">Epikrise:</div>
              <div className="link-row">
                <button className="toolbar-btn-link">⚙️ Verläufe_auswählen</button>
                <button className="toolbar-btn-link red-icon">🗑️ Abschlußbefund_auswählen</button>
              </div>
            </div>

            {/* Last Medication */}
            <div className="content-section">
              <div className="section-label">Letzte Medikation:</div>
              <div className="link-row">
                <button className="toolbar-btn-link">Alten Medikatoriebaustien (trotz OPMS) anzeigen</button>
              </div>
              <div className="medication-section">
                <div className="medication-header">
                  <span>Letzte Medikation:</span>
                  <div className="medication-icons">
                    <button className="icon-btn">💾</button>
                    <button className="icon-btn">📄</button>
                    <button className="icon-btn">✂️</button>
                    <button className="icon-btn">🗑️</button>
                  </div>
                </div>
                <table className="medication-table">
                  <thead>
                    <tr>
                      <th>Medikament</th>
                      <th>Weg</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input 
                          type="text" 
                          className="table-input" 
                          placeholder="Geben Sie bitte eine neue Anordnung ein" 
                        />
                      </td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
                <div className="medication-note">
                  <div className="note-label">Keine Medikation erfasst</div>
                  <div className="note-label">Bemerkung:</div>
                  <input type="text" className="note-input" />
                </div>
              </div>
            </div>

            {/* Access and Drainages */}
            <div className="content-section">
              <div className="section-label">Zugänge und Drainagen:</div>
              <div className="link-row">
                <button className="toolbar-btn-link">⚙️ Übernehmen / Aktualisieren</button>
                <button className="toolbar-btn-link red-icon">🗑️ Löschen</button>
              </div>
            </div>

            {/* Regulations */}
            <div className="content-section">
              <div className="section-label">Verordnungen:</div>
              <div className="link-row">
                <button className="toolbar-btn-link">⚙️ Neu laden</button>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="column-right">
            {/* Empty space to align with left sections */}
            <div className="content-section" style={{ minHeight: '120px' }}></div>
            <div className="content-section" style={{ minHeight: '120px' }}></div>

            {/* Dosage Table aligned with Medication */}
            <div className="content-section">
              <div className="dosage-table-container">
                <table className="dosage-table">
                  <thead>
                    <tr>
                      <th colSpan={2} style={{ textAlign: 'center' }}>Vorabreichung</th>
                    </tr>
                    <tr>
                      <th>erste</th>
                      <th>letzte</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Action buttons aligned at bottom */}
            <div className="content-section">
              <div className="link-row">
                <button className="icon-btn">⚙️</button>
                <button className="icon-btn">🗑️</button>
                <button className="toolbar-btn-link red-icon">🗑️ Markierte Zeile löschen</button>
              </div>
            </div>

            {/* Signierung Section with 3 vertical input fields */}
            <div className="content-section">
              <div className="section-label">Signierung:</div>
              <div className="signierung-inputs">
                <input type="text" className="signierung-input" placeholder="A. Hosny" />
                <input type="text" className="signierung-input" placeholder="Assistenzarzt" />
                <input type="text" className="signierung-input" />
              </div>
            </div>
          </div>
        </div>

        {/* Procedures Section */}
        <div className="content-section">
          <div className="section-label">Prozedere:</div>
          <div className="empty-field"></div>
        </div>

        {/* Final Greeting */}
        <div className="content-section">
          <div className="greeting-text">Mit freundlichen kollegialen Grüßen</div>
          <div className="signature-space"></div>
        </div>
      </div>
    </div>
  )
}

export default Arztbrief

