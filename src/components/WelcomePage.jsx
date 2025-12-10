import { useState } from 'react'
import { User, ArrowRight, Sparkles } from 'lucide-react'
import './WelcomePage.css'

const WelcomePage = ({ onLogin }) => {
  const [name, setName] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmedName = name.trim()
    
    if (!trimmedName) {
      setError('Please enter your name')
      return
    }

    if (trimmedName.length < 2) {
      setError('Name must be at least 2 characters')
      return
    }

    setError('')
    onLogin(trimmedName)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e)
    }
  }

  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <div className="welcome-header">
          <div className="welcome-icon">
            <Sparkles size={48} color="#6366f1" />
          </div>
          <h1 className="welcome-title">🌟 Life Dashboard</h1>
          <p className="welcome-subtitle">Your Day as Beautiful Data</p>
        </div>

        <div className="welcome-card">
          <div className="welcome-card-header">
            <User size={24} color="#6366f1" />
            <h2>Welcome!</h2>
          </div>
          
          <p className="welcome-description">
            Enter your name to start tracking your daily life metrics and build better habits.
          </p>

          <form onSubmit={handleSubmit} className="welcome-form">
            <div className="input-group">
              <label htmlFor="name-input">Your Name</label>
              <input
                id="name-input"
                type="text"
                className="name-input"
                placeholder="Enter your name..."
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                  setError('')
                }}
                onKeyDown={handleKeyPress}
                autoFocus
                maxLength={50}
              />
              {error && <span className="error-message">{error}</span>}
            </div>

            <button type="submit" className="login-button">
              <span>Get Started</span>
              <ArrowRight size={20} />
            </button>
          </form>

          <div className="welcome-features">
            <p className="features-title">Track your:</p>
            <div className="features-list">
              <span className="feature-badge">😊 Mood</span>
              <span className="feature-badge">✅ Habits</span>
              <span className="feature-badge">😴 Sleep</span>
              <span className="feature-badge">📝 Tasks</span>
              <span className="feature-badge">💧 Water</span>
              <span className="feature-badge">📱 Screen Time</span>
            </div>
          </div>
        </div>

        <p className="welcome-footer">
          Built with ❤️ for a better life
        </p>
      </div>
    </div>
  )
}

export default WelcomePage

