import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'
import { Monitor } from 'lucide-react'
import { screenTimeData } from '../data/sampleData'
import './ScreenTime.css'

const ScreenTime = () => {
  const totalHours = screenTimeData.reduce((sum, item) => sum + item.hours, 0).toFixed(1)
  const maxHours = Math.max(...screenTimeData.map(item => item.hours))

  const CustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    if (percent < 0.05) return null
    
    const RADIAN = Math.PI / 180
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        fontSize={12}
        fontWeight={600}
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }

  return (
    <div className="dashboard-card screen-card">
      <div className="card-header">
        <div className="card-title">
          <Monitor size={24} color="#ec4899" />
          <span>Screen Time</span>
        </div>
        <div className="screen-total">{totalHours}h</div>
      </div>

      <div className="screen-chart">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={screenTimeData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={CustomLabel}
              outerRadius={90}
              fill="#8884d8"
              dataKey="hours"
              animationDuration={1500}
            >
              {screenTimeData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: '#1a1f3a',
                border: '1px solid #2d3748',
                borderRadius: '8px',
                color: '#ffffff',
              }}
              formatter={(value) => [`${value} hours`, '']}
            />
            <Legend
              wrapperStyle={{ paddingTop: '20px' }}
              iconType="circle"
              formatter={(value, entry) => (
                <span style={{ color: entry.color, marginLeft: '8px' }}>
                  {value} ({screenTimeData.find(d => d.app === value)?.hours}h)
                </span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="screen-breakdown">
        {screenTimeData.map((item, index) => (
          <div key={index} className="screen-item">
            <div className="screen-item-header">
              <div
                className="screen-item-color"
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="screen-item-name">{item.app}</span>
            </div>
            <div className="screen-item-bar-container">
              <div
                className="screen-item-bar"
                style={{
                  width: `${(item.hours / maxHours) * 100}%`,
                  backgroundColor: item.color,
                }}
              ></div>
            </div>
            <span className="screen-item-hours">{item.hours}h</span>
          </div>
        ))}
      </div>

      <div className="insight">
        <p>
          You spent {totalHours} hours on screen today. 
          {parseFloat(totalHours) > 8 
            ? " Consider taking more breaks! ⚠️" 
            : " That's a healthy balance! ✅"}
        </p>
      </div>
    </div>
  )
}

export default ScreenTime
