import React, { useState, useEffect } from 'react'
import './index.css'

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: number
}

const ChatbotButton: React.FC = () => {
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
    
    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        text: 'Vielen Dank für Ihre Nachricht. Ich bin ein Beispiel-Chatbot. Wie kann ich Ihnen weiterhelfen?',
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
                className={`chatbot-message ${msg.isUser ? 'user' : 'bot'}`}
                role={msg.isUser ? 'user' : 'assistant'}
              >
                {msg.text}
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
