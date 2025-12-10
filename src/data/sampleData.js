// Sample data for the dashboard

export const moodData = [
  { day: 'Mon', mood: 4, energy: 7 },
  { day: 'Tue', mood: 5, energy: 8 },
  { day: 'Wed', mood: 3, energy: 6 },
  { day: 'Thu', mood: 4, energy: 7 },
  { day: 'Fri', mood: 5, energy: 8 },
  { day: 'Sat', mood: 6, energy: 9 },
  { day: 'Sun', mood: 5, energy: 8 },
]

export const habits = [
  { id: 1, name: 'Morning Exercise', icon: '💪', completed: 5, total: 7, streak: 5 },
  { id: 2, name: 'Meditation', icon: '🧘', completed: 7, total: 7, streak: 12 },
  { id: 3, name: 'Read 30min', icon: '📚', completed: 6, total: 7, streak: 6 },
  { id: 4, name: 'No Phone Before Bed', icon: '📱', completed: 4, total: 7, streak: 4 },
  { id: 5, name: 'Journal', icon: '✍️', completed: 7, total: 7, streak: 18 },
]

export const sleepData = [
  { day: 'Mon', hours: 7.5, quality: 85 },
  { day: 'Tue', hours: 8.0, quality: 90 },
  { day: 'Wed', hours: 6.5, quality: 70 },
  { day: 'Thu', hours: 7.0, quality: 75 },
  { day: 'Fri', hours: 8.5, quality: 92 },
  { day: 'Sat', hours: 9.0, quality: 95 },
  { day: 'Sun', hours: 8.0, quality: 88 },
]

export const tasks = [
  { id: 1, text: 'Complete project proposal', completed: true },
  { id: 2, text: 'Schedule dentist appointment', completed: false },
  { id: 3, text: 'Review quarterly reports', completed: false },
  { id: 4, text: 'Prepare presentation slides', completed: true },
  { id: 5, text: 'Call mom', completed: false },
  { id: 6, text: 'Grocery shopping', completed: true },
]

export const waterIntake = {
  current: 6,
  goal: 8,
  units: 'glasses',
}

export const screenTimeData = [
  { app: 'Work', hours: 5.5, color: '#6366f1' },
  { app: 'Social Media', hours: 1.8, color: '#8b5cf6' },
  { app: 'Entertainment', hours: 1.2, color: '#ec4899' },
  { app: 'Other', hours: 0.5, color: '#14b8a6' },
]
