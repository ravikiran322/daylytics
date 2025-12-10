import { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { Smile } from 'lucide-react'
import { moodData } from '../data/sampleData'
import './MoodTracker.css'

const MoodTracker = () => {
  const [selectedMetric, setSelectedMetric] = useState('mood')

  const avgMood = (moodData.reduce((sum, d) => sum + d.mood, 0) / moodData.length).toFixed(1)
  const avgEnergy = (moodData.reduce((sum, d) => sum + d.energy, 0) / moodData.length).toFixed(1)

  return (
    <div className="dashboard-card mood-card">
      <div className="card-header">
        <div className="card-title">
          <Smile size={24} color="#6366f1" />
          <span>Mood Tracker</span>
        </div>
      </div>

      <div className="mood-summary">
        <div className="summary-item">
          <span className="summary-label">Avg Mood</span>
          <span className="summary-value">{avgMood}/10</span>
        </div>
        <div className="summary-item">
          <span className="summary-label">Avg Energy</span>
          <span className="summary-value">{avgEnergy}/10</span>
        </div>
      </div>

      <div className="metric-toggle">
        <button
          className={`toggle-btn ${selectedMetric === 'mood' ? 'active' : ''}`}
          onClick={() => setSelectedMetric('mood')}
        >
          Mood
        </button>
        <button
          className={`toggle-btn ${selectedMetric === 'energy' ? 'active' : ''}`}
          onClick={() => setSelectedMetric('energy')}
        >
          Energy
        </button>
      </div>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={moodData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2d3748" />
            <XAxis dataKey="day" stroke="#a0aec0" />
            <YAxis domain={[0, 10]} stroke="#a0aec0" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1a1f3a',
                border: '1px solid #2d3748',
                borderRadius: '8px',
                color: '#ffffff',
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey={selectedMetric}
              stroke={selectedMetric === 'mood' ? '#6366f1' : '#10b981'}
              strokeWidth={3}
              dot={{ fill: selectedMetric === 'mood' ? '#6366f1' : '#10b981', r: 5 }}
              animationDuration={1000}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="insight">
        {selectedMetric === 'mood' ? (
          <p>Your mood has been relatively stable this week. Saturday was your best day! 🎉</p>
        ) : (
          <p>Energy levels are consistent. You're maintaining good energy throughout the week! ⚡</p>
        )}
      </div>
    </div>
  )
}

export default MoodTracker
