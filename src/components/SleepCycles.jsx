import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import { Moon } from 'lucide-react'
import { sleepData } from '../data/sampleData'
import './SleepCycles.css'

const SleepCycles = () => {
  const avgHours = (sleepData.reduce((sum, d) => sum + d.hours, 0) / sleepData.length).toFixed(1)
  const avgQuality = (sleepData.reduce((sum, d) => sum + d.quality, 0) / sleepData.length).toFixed(0)

  const getBarColor = (hours) => {
    if (hours >= 8) return '#10b981'
    if (hours >= 7) return '#6366f1'
    if (hours >= 6) return '#f59e0b'
    return '#ef4444'
  }

  return (
    <div className="dashboard-card sleep-card">
      <div className="card-header">
        <div className="card-title">
          <Moon size={24} color="#8b5cf6" />
          <span>Sleep Cycles</span>
        </div>
      </div>

      <div className="sleep-summary">
        <div className="summary-item sleep-item">
          <span className="summary-label">Avg Hours</span>
          <span className="summary-value sleep-hours">{avgHours}h</span>
        </div>
        <div className="summary-item sleep-item">
          <span className="summary-label">Quality Score</span>
          <span className="summary-value sleep-quality">{avgQuality}%</span>
        </div>
      </div>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={sleepData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2d3748" />
            <XAxis dataKey="day" stroke="#a0aec0" />
            <YAxis stroke="#a0aec0" domain={[0, 10]} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1a1f3a',
                border: '1px solid #2d3748',
                borderRadius: '8px',
                color: '#ffffff',
              }}
              formatter={(value, name) => {
                if (name === 'hours') return [`${value} hours`, 'Sleep Duration']
                return [value, name]
              }}
            />
            <Bar dataKey="hours" radius={[8, 8, 0, 0]} animationDuration={1500}>
              {sleepData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getBarColor(entry.hours)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="insight">
        <p>
          Your average sleep duration is {avgHours} hours with {avgQuality}% quality. 
          {avgHours >= 8 ? " Excellent! Keep it up! 😴" : " Try to aim for 8+ hours for optimal rest."}
        </p>
      </div>
    </div>
  )
}

export default SleepCycles
