import React from 'react'
import './index.css'

const PatientForm: React.FC = () => {
  return (
    <div className="patient-form-container">
      {/* Top Info Card */}
      <div className="window info-card">
        <div className="window-body">
          <div className="info-card-header">
            <div className="info-left">
              <strong>Auswahl Briefkopf</strong>
              <br />
              <span>ACH / TCH</span>
            </div>
            <div className="info-right">
              <span className="status-label">Status: <strong>erstellt</strong></span>
              <div className="timestamp">19.10.2025</div>
              <div>H-MÜDO / ⚠ HOSN</div>
              <div>Fallnummer: 2600080909</div>
            </div>
          </div>
          <div className="patient-info">
            <span>Empfänger:</span>
            <br />
            Dr. Dirk Allen, Am Tor 3, 34582 Borken (Hessen)
          </div>
        </div>
      </div>

      {/* Main Form Content */}
      <div className="window form-content">
        <div className="form-header">
          <h3>Endgültiger Entlassungsbrief</h3>
        </div>
        <div className="window-body">
          <div className="form-section">
            <p className="form-text">
              Sehr geehrte Frau Kollegin, sehr geehrter Herr Kollege,
              <br /><br />
              wir berichten über unsere Patientin Frau <strong>Waschinger, Renate</strong>, 
              geb. am 11.01.1955, im Zeitraum vom 05.10.2025 bis zum 14.10.2025 
              in unserer stationären Behandlung befand.
            </p>

            <div className="diagnoses-section">
              <div className="section-header">
                <strong>Diagnose/n:</strong>
              </div>
              
              <div className="checkbox-group">
                <label>
                  <input type="checkbox" checked readOnly />
                  <a href="#" className="diagnosis-link">Auswahl</a>
                </label>
                <label>
                  <input type="checkbox" />
                  <a href="#" className="diagnosis-link">alle Diagnosen DRG/VP laden</a>
                </label>
                <label>
                  <input type="checkbox" />
                  <a href="#" className="diagnosis-link">alle Diagnosen aus letzten AH des Falles laden</a>
                </label>
                <label>
                  <input type="checkbox" />
                  <a href="#" className="diagnosis-link">alle Diagnosen aus letzten AEI laden</a>
                </label>
                <label>
                  <input type="checkbox" />
                  <a href="#" className="diagnosis-link">alle Diagnosen aus letztem Notfallprotokoll laden</a>
                </label>
              </div>

              <label className="dialog-option">
                <input type="checkbox" checked readOnly />
                <span>Diagnoseübernahme Dialog</span>
              </label>
            </div>

            <div className="procedures-section">
              <label>
                <input type="checkbox" />
                <span>Spaltenüberschrift drucken</span>
              </label>
              <label className="inline-label">
                <input type="checkbox" />
                <span>Laufnummer anzeigen</span>
              </label>
              
              <button type="button" className="inline-button">⬆️</button>
              <button type="button" className="inline-button">⬇️</button>
              <button type="button" className="inline-button">🗑️ Markierte Zeile Löschen</button>

              <div className="procedures-list">
                <table className="procedures-table">
                  <tbody>
                    <tr>
                      <td><input type="checkbox" /></td>
                      <td>□ Laparoskopische Leberabszess Inzision und Drainage Anlage vom 08.10.2025</td>
                      <td className="procedure-code">5-501.01</td>
                    </tr>
                    <tr>
                      <td><input type="checkbox" /></td>
                      <td>□ Computertomographie des Thorax mit Kontrastmittel vom 07.10.2025</td>
                      <td className="procedure-code">3-222</td>
                    </tr>
                    <tr>
                      <td><input type="checkbox" /></td>
                      <td>□ Computertomographie des Abdomens mit Kontrastmittel vom 07.10.2025</td>
                      <td className="procedure-code">3-225</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bottom-sections">
              <fieldset>
                <legend>Nebendiagnosen:</legend>
                <div className="field-content">
                  <span>D.M Typ II. Insulinpflichtig</span><br />
                  <span>art. Hypertonie</span>
                </div>
              </fieldset>

              <fieldset>
                <legend>Allergen: <input type="checkbox" /></legend>
                <div className="field-content">
                  <span>Keine Allergien für die Patienten erfasst</span>
                </div>
              </fieldset>

              <fieldset>
                <legend>Prozedur/en:</legend>
                <label>
                  <input type="radio" name="procedur" />
                  <a href="#" className="link">Auswahl</a>
                </label>
              </fieldset>

              <fieldset>
                <legend>Histologie:</legend>
                <div className="field-content"></div>
              </fieldset>

              <fieldset>
                <legend>Anamnese:</legend>
                <label>
                  <input type="radio" name="anamnese" checked readOnly />
                  <a href="#" className="link">aus Aufnahmeabschluss übernehmen</a>
                </label>
                <div className="field-content">
                  Die Patientin wurde vom Rettungsdienst vom zu Hause wegen Allgemeinzustandsverschlechterung und 
                  Appetitlosigkeit im Rahmen EBV-Infektes (seit 23.09.2025) gebracht. Beim Eintreffen in ZNA: 
                  Patienten wach, klar und orientiert, hat Hypotonie bis 86 mmHg systolisch bei Exsikkose bei 
                  wenigem Flüssigkeitszuvort sowie...
                </div>
              </fieldset>

              <fieldset>
                <legend>Medikation bei Aufnahme:</legend>
                <div className="field-content"></div>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PatientForm
