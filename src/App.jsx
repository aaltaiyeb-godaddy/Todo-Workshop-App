// Stage 08: Polish — EmptyState, PriorityBadge, task counts in sidebar
// App now computes a counts object and passes it to Sidebar.
// counts is derived data — calculated from tasks state during render.

import { useState } from 'react'
import Sidebar from './components/Sidebar'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

const SAMPLE_TASKS = [
  { id: '1', title: 'Set up project structure', priority: 3, completed: true },
  { id: '2', title: 'Build TaskItem component', priority: 3, completed: false },
  { id: '3', title: 'Add form validation', priority: 2, completed: false },
  { id: '4', title: 'Write unit tests', priority: 2, completed: false },
  { id: '5', title: 'Update README', priority: 1, completed: false },
]

function App() {
  const [tasks, setTasks] = useState(SAMPLE_TASKS)
  const [selectedFilter, setSelectedFilter] = useState('all')

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask])
  }

  function handleToggle(id) {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  function handleDelete(id) {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const filteredTasks = tasks.filter(task => {
    if (selectedFilter === 'all')       return true
    if (selectedFilter === 'active')    return !task.completed
    if (selectedFilter === 'completed') return task.completed
    if (selectedFilter === 'high')      return task.priority === 3
    if (selectedFilter === 'medium')    return task.priority === 2
    if (selectedFilter === 'low')       return task.priority === 1
    return true
  })

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (b.priority !== a.priority) return b.priority - a.priority
    return a.title.localeCompare(b.title)
  })

  // Counts for the sidebar badges — all derived from the tasks array
  const counts = {
    all:       tasks.length,
    active:    tasks.filter(t => !t.completed).length,
    completed: tasks.filter(t => t.completed).length,
    high:      tasks.filter(t => t.priority === 3).length,
    medium:    tasks.filter(t => t.priority === 2).length,
    low:       tasks.filter(t => t.priority === 1).length,
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar
        selectedFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
        counts={counts}
      />
      <main className="flex-1 p-8 max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Priority Task Manager
        </h1>
        <p className="text-sm text-gray-400 mb-6">
          {counts.active} task{counts.active !== 1 ? 's' : ''} remaining
        </p>
        <TaskForm onAddTask={handleAddTask} />
        <TaskList tasks={sortedTasks} onToggle={handleToggle} onDelete={handleDelete} />
      </main>
    </div>
  )
}

export default App
