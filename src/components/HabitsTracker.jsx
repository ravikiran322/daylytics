import { CheckCircle2, Circle } from 'lucide-react'
import { habits } from '../data/sampleData'
import './HabitsTracker.css'

const HabitsTracker = () => {
  const totalHabits = habits.length
  const completedToday = habits.filter(h => h.completed === h.total).length
  const completionRate = ((completedToday / totalHabits) * 100).toFixed(0)

  return (
    <div className="dashboard-card habits-card">
      <div className="card-header">
        <div className="card-title">
          <CheckCircle2 size={24} color="#10b981" />
          <span>Habits Tracker</span>
        </div>
        <div className="completion-badge">{completionRate}%</div>
      </div>

      <div className="habits-list">
        {habits.map((habit) => {
          const percentage = (habit.completed / habit.total) * 100

          return (
            <div key={habit.id} className="habit-item">
              <div className="habit-header">
                <div className="habit-info">
                  <span className="habit-icon">{habit.icon}</span>
                  <div>
                    <span className="habit-name">{habit.name}</span>
                    <span className="habit-streak">🔥 {habit.streak} day streak</span>
                  </div>
                </div>
                <span className="habit-progress-text">
                  {habit.completed}/{habit.total}
                </span>
              </div>
              <div className="progress-bar-container">
                <div
                  className="progress-bar"
                  style={{
                    width: `${percentage}%`,
                    background: `linear-gradient(90deg, ${
                      percentage === 100 ? '#10b981' : '#6366f1'
                    }, ${
                      percentage === 100 ? '#059669' : '#8b5cf6'
                    })`,
                  }}
                >
                  <div className="progress-glow"></div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="insight">
        <p>
          Great job! You've completed {completedToday} out of {totalHabits} habits this week. 
          Keep the momentum going! 🚀
        </p>
      </div>
    </div>
  )
}

export default HabitsTracker
