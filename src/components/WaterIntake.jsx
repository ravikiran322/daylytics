import { useState } from 'react'
import { Droplet, Plus, Minus } from 'lucide-react'
import { waterIntake as initialWater } from '../data/sampleData'
import './WaterIntake.css'

const WaterIntake = () => {
  const [water, setWater] = useState(initialWater)
  const percentage = (water.current / water.goal) * 100

  const addGlass = () => {
    if (water.current < water.goal) {
      setWater({ ...water, current: water.current + 1 })
    }
  }

  const removeGlass = () => {
    if (water.current > 0) {
      setWater({ ...water, current: water.current - 1 })
    }
  }

  return (
    <div className="dashboard-card water-card">
      <div className="card-header">
        <div className="card-title">
          <Droplet size={24} color="#14b8a6" />
          <span>Water Intake</span>
        </div>
      </div>

      <div className="water-visual">
        <div className="water-glass-container">
          <div className="water-glass">
            <div
              className="water-fill"
              style={{
                height: `${Math.min(percentage, 100)}%`,
                background: `linear-gradient(to top, #14b8a6, #2dd4bf, #5eead4)`,
              }}
            >
              <div className="water-wave"></div>
            </div>
          </div>
        </div>
        <div className="water-stats">
          <div className="water-amount">
            <span className="water-current">{water.current}</span>
            <span className="water-separator">/</span>
            <span className="water-goal">{water.goal}</span>
            <span className="water-units">{water.units}</span>
          </div>
          <div className="water-percentage">{Math.round(percentage)}%</div>
        </div>
      </div>

      <div className="water-controls">
        <button className="water-btn" onClick={removeGlass} disabled={water.current === 0}>
          <Minus size={18} />
        </button>
        <div className="water-indicator-dots">
          {Array.from({ length: water.goal }).map((_, i) => (
            <div
              key={i}
              className={`water-dot ${i < water.current ? 'filled' : ''}`}
            ></div>
          ))}
        </div>
        <button className="water-btn" onClick={addGlass} disabled={water.current >= water.goal}>
          <Plus size={18} />
        </button>
      </div>

      <div className="insight">
        <p>
          {percentage >= 100 
            ? "🎉 Hydration goal reached! You're doing great!" 
            : percentage >= 75
            ? `Almost there! Just ${water.goal - water.current} more ${water.units} to go. 💧`
            : `Keep hydrating! You've had ${water.current} ${water.units} so far.`}
        </p>
      </div>
    </div>
  )
}

export default WaterIntake
