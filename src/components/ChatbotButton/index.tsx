import React, { useState, useEffect } from 'react'
import './index.css'
import { AppState } from '../../App'

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: number
  isFile?: boolean
  fileName?: string
  data?: {
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
}

interface ChatbotButtonProps {
  updateAppState: (updates: Partial<AppState>) => void
}

const ChatbotButton: React.FC<ChatbotButtonProps> = ({ updateAppState }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: '1',
      text: '👋 Hallo! Ich bin Ihr KI-Assistent.\nWie kann ich Ihnen heute helfen?', 
      isUser: false,
      timestamp: Date.now()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [waitingForRecipient, setWaitingForRecipient] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'de'>('de')

  // Keyboard navigation: Escape to close
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }
    
    if (isOpen) {
      window.addEventListener('keydown', handleEscape)
      return () => window.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  // Language detection helper
  const detectLanguage = (text: string): 'en' | 'de' => {
    const germanKeywords = ['der', 'die', 'das', 'ich', 'und', 'für', 'mit', 'einen', 'eine', 'ein', 'zeige', 'mir', 'letzte', 'letzten', 'monate', 'monat', 'entlassungsbericht', 'erstelle', 'bericht', 'gib']
    const lowerText = text.toLowerCase()
    
    // Check for German-specific words
    const hasGerman = germanKeywords.some(keyword => lowerText.includes(keyword))
    
    // Check for English-specific words
    const hasEnglish = lowerText.match(/\b(give|show|me|the|last|months|month|discharge|summary|create|generate|report|patient|info)\b/)
    
    if (hasGerman) return 'de'
    if (hasEnglish) return 'en'
    
    return currentLanguage // Default to current language
  }

  const handleDownload = (_fileName: string, data?: Message['data']) => {
    // Set John Doe as selected patient and open the sidebar
    updateAppState({
      selectedPatient: {
        id: 'P-2024-001',
        name: 'Doe, John',
        birthDate: '15.03.1985',
        caseNumber: '2600080909',
        status: 'Active',
        department: 'ACH',
        admissionDate: data?.admissionDate || '05.10.2025',
        dischargeDate: data?.dischargeDate || '14.10.2025'
      },
      showSidebar: true,
      sidebarSection2Visible: true,
      currentPage: 'patientFile',
      arztbriefData: data
    })
    setIsOpen(false)
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text: inputValue,
      isUser: true,
      timestamp: Date.now()
    }

    // Add user message
    setMessages(prev => [...prev, userMessage])
    
    const userInput = inputValue.toLowerCase().trim()
    const detectedLang = detectLanguage(inputValue)
    setCurrentLanguage(detectedLang)
    
    // Check if we're waiting for recipient name
    if (waitingForRecipient) {
      setWaitingForRecipient(false)
      
      const isEnglish = currentLanguage === 'en'
      const recipientName = inputValue.trim()
      
      // Generate discharge summary
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: `bot-${Date.now()}-1`,
          text: isEnglish 
            ? '⏳ Generating discharge summary...\nCollecting data...'
            : '⏳ Generiere Entlassungsbericht...\nDaten werden gesammelt...',
          isUser: false,
          timestamp: Date.now()
        }])
      }, 500)
      
      setTimeout(() => {
        const report = isEnglish 
          ? `✅ Discharge summary successfully created!\n\n📋 Report Details:\n━━━━━━━━━━━━━━━━━━\n👤 Recipient: ${recipientName}\n👨‍⚕️ Patient: John Doe\n🆔 ID: P-2024-001\n\n📊 Diagnoses:\n• Acute Bronchitis (J20.9)\n• Arterial Hypertension (I10)\n\n🏥 Procedures Performed:\n• Blood examination\n• Chest X-ray\n• ECG\n• Medication therapy\n\n📝 Medical History:\n• Known hypertension since 2020\n• No allergies\n• Non-smoker\n\n🔬 Examinations:\n• Lab: Slight inflammation markers\n• X-ray: No abnormalities\n• Vital parameters: Stable\n\n💊 Medication at Discharge:\n• Ramipril 5mg 1-0-0\n• Acetylcysteine 600mg 1-0-1\n\n━━━━━━━━━━━━━━━━━━\n\n✅ File saved!\n⚠️ Waiting for signature confirmation...`
          : `✅ Entlassungsbericht erfolgreich erstellt!\n\n📋 Bericht-Details:\n━━━━━━━━━━━━━━━━━━\n👤 Empfänger: ${recipientName}\n👨‍⚕️ Patient: John Doe\n🆔 ID: P-2024-001\n\n📊 Diagnosen:\n• Akute Bronchitis (J20.9)\n• Arterielle Hypertonie (I10)\n\n🏥 Durchgeführte Maßnahmen:\n• Blutuntersuchung\n• Röntgen Thorax\n• EKG\n• Medikamentöse Therapie\n\n📝 Anamnese:\n• Bekannte Hypertonie seit 2020\n• Keine Allergien\n• Nichtraucher\n\n🔬 Untersuchungen:\n• Labor: Leichte Entzündungszeichen\n• Röntgen: Keine Auffälligkeiten\n• Vitalparameter: Stabil\n\n💊 Medikation bei Entlassung:\n• Ramipril 5mg 1-0-0\n• Acetylcystein 600mg 1-0-1\n\n━━━━━━━━━━━━━━━━━━\n\n✅ Datei gespeichert!\n⚠️ Warte auf Unterschrift-Bestätigung...`
        
        setMessages(prev => [...prev, {
          id: `bot-${Date.now()}-2`,
          text: report,
          isUser: false,
          timestamp: Date.now()
        }])
      }, 2500)
      
      // Create the data object to pass to Arztbrief
      const arztbriefData = {
        recipient: recipientName,
        patientName: 'John Doe',
        patientBirthDate: '15.03.1985',
        patientId: 'P-2024-001',
        admissionDate: '05.10.2025',
        dischargeDate: '14.10.2025',
        diagnoses: [
          'Acute Bronchitis (J20.9)',
          'Arterial Hypertension (I10)'
        ],
        procedures: [
          'Blood examination',
          'Chest X-ray',
          'ECG',
          'Medication therapy'
        ],
        anamnese: isEnglish 
          ? 'The patient was brought from home due to general deterioration and loss of appetite in the context of EBV infection (since 23.09.2025). On arrival at ZNA: Patient awake, clear and oriented, has hypotension up to 86 mmHg systolic with oliguria due to little fluid beforehand due to loss of appetite and further intake of Candesartan and Hydroton. In ZNA, fluid was administered via 2 different i.v. accesses, below blood pressure values quickly rose adequately.'
          : 'Die Patientin wurde vom zu Hause wegen Allgemeinzustandsverschlechterung und Appetitlosigkeit im Rahmen EBV-Infektion (seit 23.09.2025) gebracht. beim Eintreffen im ZNA: Patientin wach, klar und orientiert, hat Hypotonie bis 86 mmHg systolisch bei Oligurie durch wenig Flüssigkeit zuvor bei Appetitlosigkeit sowie weitere Einnahme von Candesartan und Hydroton. In ZNA wurde Flüssigkeit über 2 verschiedene i.v. Zugänge verabreicht, darunter Blutdruckwerte schnell sich adäquat steigend.',
        medication: [
          'Ramipril 5mg 1-0-0',
          'Acetylcysteine 600mg 1-0-1'
        ]
      }
      
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: `bot-${Date.now()}-3`,
          text: isEnglish ? 'Discharge_Summary_John_Doe.pdf' : 'Entlassungsbericht_John_Doe.pdf',
          isUser: false,
          timestamp: Date.now(),
          isFile: true,
          fileName: isEnglish ? 'Discharge_Summary_John_Doe.pdf' : 'Entlassungsbericht_John_Doe.pdf',
          data: arztbriefData
        }])
      }, 3500)
      
      setInputValue('')
      return
    }
    
    // Check for report generation requests (3 months)
    if (
      userInput.includes('last 3 months') || 
      userInput.includes('letzte 3 monate') ||
      userInput.includes('letzten 3 monate') ||
      (userInput.includes('info') && userInput.includes('3') && userInput.includes('month')) ||
      (userInput.includes('bericht') && userInput.includes('3') && userInput.includes('monat'))
    ) {
      const isEnglish = detectedLang === 'en'
      
      // Simulate report generation
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: `bot-${Date.now()}-1`,
          text: isEnglish 
            ? '⏳ Collecting patient data from the last 3 months...'
            : '⏳ Sammle Patientendaten der letzten 3 Monate...',
          isUser: false,
          timestamp: Date.now()
        }])
      }, 500)
      
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: `bot-${Date.now()}-2`,
          text: isEnglish
            ? '🔍 Analyzing treatment history...\n📊 Processing lab results...\n💊 Checking medication records...'
            : '🔍 Analysiere Behandlungshistorie...\n📊 Verarbeite Laborergebnisse...\n💊 Überprüfe Medikationsverlauf...',
          isUser: false,
          timestamp: Date.now()
        }])
      }, 1500)
      
      setTimeout(() => {
        const summary = isEnglish
          ? '✅ Report successfully generated!\n\n📋 Summary:\n━━━━━━━━━━━━━━━━━━\n👤 Patient: John Doe\n🆔 ID: P-2024-001\n📅 Period: Aug 2024 - Nov 2024\n\n📈 Treatments: 8 appointments\n🏥 Hospital stays: 1\n💉 Examinations: 12\n💊 Medications: 3 active\n\n⚕️ Main Diagnoses:\n• Hypertension\n• Diabetes Type 2\n• Bronchitis (acute)\n\n📊 Latest Values:\n• Blood Pressure: 135/85 mmHg\n• HbA1c: 6.8%\n• Weight: 82 kg\n━━━━━━━━━━━━━━━━━━'
          : '✅ Bericht erfolgreich generiert!\n\n📋 Zusammenfassung:\n━━━━━━━━━━━━━━━━━━\n👤 Patient: John Doe\n🆔 ID: P-2024-001\n📅 Zeitraum: Aug 2024 - Nov 2024\n\n📈 Behandlungen: 8 Termine\n🏥 Stationäre Aufenthalte: 1\n💉 Untersuchungen: 12\n💊 Medikamente: 3 aktiv\n\n⚕️ Hauptdiagnosen:\n• Hypertonie\n• Diabetes Typ 2\n• Bronchitis (akut)\n\n📊 Letzte Werte:\n• Blutdruck: 135/85 mmHg\n• HbA1c: 6.8%\n• Gewicht: 82 kg\n━━━━━━━━━━━━━━━━━━'
        
        setMessages(prev => [...prev, {
          id: `bot-${Date.now()}-3`,
          text: summary,
          isUser: false,
          timestamp: Date.now()
        }])
      }, 3000)
      
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: `bot-${Date.now()}-4`,
          text: isEnglish ? 'Patient_Report_3_Months.pdf' : 'Patientenbericht_3_Monate.pdf',
          isUser: false,
          timestamp: Date.now(),
          isFile: true,
          fileName: isEnglish ? 'Patient_Report_3_Months.pdf' : 'Patientenbericht_3_Monate.pdf'
        }])
      }, 4000)
      
      setInputValue('')
      return
    }
    
    // Check for discharge summary request
    if (
      userInput.includes('discharge summary') || 
      userInput.includes('discharge') ||
      userInput.includes('entlassungsbericht') ||
      userInput.includes('entlassung')
    ) {
      const isEnglish = detectedLang === 'en'
      
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: `bot-${Date.now()}`,
          text: isEnglish
            ? '📋 I will create a discharge summary.\n\n❓ Who should receive this report?\nPlease enter the recipient\'s name:'
            : '📋 Ich erstelle einen Entlassungsbericht.\n\n❓ An wen soll der Bericht gesendet werden?\nBitte geben Sie den Namen des Empfängers ein:',
          isUser: false,
          timestamp: Date.now()
        }])
      }, 500)
      
      setWaitingForRecipient(true)
      setInputValue('')
      return
    }
    
    // Default response
    setTimeout(() => {
      const isEnglish = detectedLang === 'en'
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        text: isEnglish
          ? '👋 I can help you with:\n\n📊 "Give me the info of the last 3 months"\n📋 "Generate a discharge summary"\n\nHow can I assist you?'
          : '👋 Ich kann Ihnen helfen mit:\n\n📊 "Zeige mir die Info der letzten 3 Monate"\n📋 "Erstelle einen Entlassungsbericht"\n\nWie kann ich Ihnen weiterhelfen?',
        isUser: false,
        timestamp: Date.now()
      }
      setMessages(prev => [...prev, botMessage])
    }, 500)

    setInputValue('')
  }

  return (
    <>
      {/* Chatbot Panel */}
      {isOpen && (
        <div 
          className="chatbot-panel"
          role="dialog"
          aria-modal="true"
          aria-labelledby="chatbot-title"
        >
          <div className="chatbot-header">
            <h3 id="chatbot-title">AI Assistant</h3>
            <button 
              className="chatbot-close"
              onClick={handleToggle}
              aria-label="Close chatbot"
              type="button"
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="white" 
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          
          <div className="chatbot-messages" role="log" aria-live="polite">
            {messages.map((msg) => (
              <div 
                key={msg.id}
                className={`chatbot-message ${msg.isUser ? 'user' : 'bot'} ${msg.isFile ? 'file-message' : ''}`}
                role={msg.isUser ? 'user' : 'assistant'}
              >
                {msg.isFile ? (
                  <div className="file-download">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="12" y1="18" x2="12" y2="12"/>
                      <polyline points="9 15 12 18 15 15"/>
                    </svg>
                    <span>{msg.fileName}</span>
                    <button 
                      className="download-btn" 
                      onClick={() => handleDownload(msg.fileName || '', msg.data)}
                      type="button"
                    >
                      📂 Open
                    </button>
                  </div>
                ) : (
                  msg.text
                )}
              </div>
            ))}
          </div>

          <form className="chatbot-input-area" onSubmit={handleSendMessage}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Stellen Sie mir eine Frage..."
              className="chatbot-input"
              aria-label="Message input"
            />
            <button 
              type="submit" 
              className="chatbot-send"
              disabled={!inputValue.trim()}
              aria-label="Send message"
            >
              Senden
            </button>
          </form>
        </div>
      )}

      {/* Chatbot Button */}
      <button 
        className="chatbot-button"
        onClick={handleToggle}
        aria-label={isOpen ? "Close chatbot" : "Open chatbot"}
        aria-expanded={isOpen}
        type="button"
      >
        <svg 
          width="28" 
          height="28" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="8" width="18" height="12" rx="2"/>
          <rect x="7" y="2" width="10" height="6" rx="1"/>
          <circle cx="9" cy="13" r="1.5" fill="currentColor"/>
          <circle cx="15" cy="13" r="1.5" fill="currentColor"/>
          <path d="M9 17h6"/>
        </svg>
      </button>
    </>
  )
}

export default ChatbotButton
