import { useState, useEffect } from 'react'
import WelcomePage from './components/WelcomePage'
import MoodTracker from './components/MoodTracker'
import HabitsTracker from './components/HabitsTracker'
import SleepCycles from './components/SleepCycles'
import DailyTasks from './components/DailyTasks'
import WaterIntake from './components/WaterIntake'
import ScreenTime from './components/ScreenTime'
import { Smile, CheckCircle2, Moon, ListTodo, Droplet, Monitor, LogOut } from 'lucide-react'
import './App.css'

const tabs = [
  { id: 'mood', label: 'Mood', icon: Smile, color: '#6366f1' },
  { id: 'habits', label: 'Habits', icon: CheckCircle2, color: '#10b981' },
  { id: 'sleep', label: 'Sleep', icon: Moon, color: '#8b5cf6' },
  { id: 'tasks', label: 'Tasks', icon: ListTodo, color: '#f59e0b' },
  { id: 'water', label: 'Water', icon: Droplet, color: '#14b8a6' },
  { id: 'screen', label: 'Screen Time', icon: Monitor, color: '#ec4899' },
]

function App() {
  const [userName, setUserName] = useState(null)
  const [activeTab, setActiveTab] = useState('mood')

  // Check if user is already logged in (from localStorage)
  useEffect(() => {
    const savedName = localStorage.getItem('lifeDashboard_userName')
    if (savedName) {
      setUserName(savedName)
    }
  }, [])

  const handleLogin = (name) => {
    setUserName(name)
    localStorage.setItem('lifeDashboard_userName', name)
  }

  const handleLogout = () => {
    setUserName(null)
    localStorage.removeItem('lifeDashboard_userName')
    setActiveTab('mood')
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'mood':
        return <MoodTracker />
      case 'habits':
        return <HabitsTracker />
      case 'sleep':
        return <SleepCycles />
      case 'tasks':
        return <DailyTasks />
      case 'water':
        return <WaterIntake />
      case 'screen':
        return <ScreenTime />
      default:
        return <MoodTracker />
    }
  }

  // Show welcome page if not logged in
  if (!userName) {
    return <WelcomePage onLogin={handleLogin} />
  }

  // Show dashboard if logged in
  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <div>
            <h1>🌟 Life Dashboard</h1>
            <p className="subtitle">Welcome back, <span className="user-name">{userName}</span>! 👋</p>
          </div>
          <button className="logout-button" onClick={handleLogout} title="Logout">
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </header>

      <nav className="tab-navigation">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              className={`tab-button ${isActive ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
              style={{
                '--tab-color': tab.color,
                ...(isActive && {
                  backgroundColor: `${tab.color}1a`,
                }),
              }}
            >
              <Icon size={20} />
              <span>{tab.label}</span>
            </button>
          )
        })}
      </nav>

      <div className="tab-content">
        {renderContent()}
      </div>

      <footer className="app-footer">
        <p>Built with ❤️ for a better life</p>
        <p className="fork-note">Fork this project to build your own dashboard!</p>
      </footer>
    </div>
  )
}

export default App
