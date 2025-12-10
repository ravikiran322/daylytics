import { useState } from 'react'
import { CheckCircle2, Circle, ListTodo, Trash2, Plus, X } from 'lucide-react'
import { tasks as initialTasks } from '../data/sampleData'
import './DailyTasks.css'

const DailyTasks = () => {
  const [tasks, setTasks] = useState(initialTasks)
  const [newTaskText, setNewTaskText] = useState('')
  const [showAddInput, setShowAddInput] = useState(false)

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (id, e) => {
    e.stopPropagation()
    setTasks(tasks.filter(task => task.id !== id))
  }

  const addTask = () => {
    if (newTaskText.trim()) {
      const newId = Math.max(...tasks.map(t => t.id), 0) + 1
      setTasks([...tasks, { id: newId, text: newTaskText.trim(), completed: false }])
      setNewTaskText('')
      setShowAddInput(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask()
    } else if (e.key === 'Escape') {
      setShowAddInput(false)
      setNewTaskText('')
    }
  }

  const completedCount = tasks.filter(t => t.completed).length
  const totalCount = tasks.length
  const completionPercentage = totalCount > 0 ? (completedCount / totalCount) * 100 : 0

  return (
    <div className="dashboard-card tasks-card">
      <div className="card-header">
        <div className="card-title">
          <ListTodo size={24} color="#f59e0b" />
          <span>Daily Tasks</span>
        </div>
        <div className="tasks-progress">
          {completedCount}/{totalCount}
        </div>
      </div>

      <div className="tasks-list">
        {tasks.length === 0 ? (
          <div className="empty-tasks">
            <p>No tasks yet. Add one to get started! 📝</p>
          </div>
        ) : (
          tasks.map((task) => (
            <div
              key={task.id}
              className={`task-item ${task.completed ? 'completed' : ''}`}
              onClick={() => toggleTask(task.id)}
            >
              <div className="task-checkbox">
                {task.completed ? (
                  <CheckCircle2 size={20} color="#10b981" fill="#10b981" />
                ) : (
                  <Circle size={20} color="#a0aec0" />
                )}
              </div>
              <span className="task-text">{task.text}</span>
              <button
                className="task-delete-btn"
                onClick={(e) => deleteTask(task.id, e)}
                aria-label="Delete task"
              >
                <Trash2 size={16} color="#ef4444" />
              </button>
            </div>
          ))
        )}

        {showAddInput ? (
          <div className="add-task-input-container">
            <input
              type="text"
              className="add-task-input"
              placeholder="Enter new task..."
              value={newTaskText}
              onChange={(e) => setNewTaskText(e.target.value)}
              onKeyDown={handleKeyPress}
              autoFocus
            />
            <div className="add-task-actions">
              <button
                className="add-task-confirm-btn"
                onClick={addTask}
                disabled={!newTaskText.trim()}
              >
                <Plus size={18} />
              </button>
              <button
                className="add-task-cancel-btn"
                onClick={() => {
                  setShowAddInput(false)
                  setNewTaskText('')
                }}
              >
                <X size={18} />
              </button>
            </div>
          </div>
        ) : (
          <button
            className="add-task-button"
            onClick={() => setShowAddInput(true)}
          >
            <Plus size={20} />
            <span>Add New Task</span>
          </button>
        )}
      </div>

      <div className="tasks-progress-bar">
        <div
          className="tasks-progress-fill"
          style={{ width: `${completionPercentage}%` }}
        ></div>
      </div>

      <div className="insight">
        <p>
          {completedCount === totalCount 
            ? "🎉 All tasks completed! Great job!" 
            : `You've completed ${completedCount} of ${totalCount} tasks. Keep going! 💪`}
        </p>
      </div>
    </div>
  )
}

export default DailyTasks
