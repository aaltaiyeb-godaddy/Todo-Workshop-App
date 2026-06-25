// Stage 07: Sorting with Derived Data
// We chain filteredTasks through a sort step to get sortedTasks.
// The spread [...filteredTasks] creates a copy before sorting —
// Array.sort() mutates in place, so we must copy first to stay immutable.
// Sort rule: High priority first (3 → 2 → 1), then A-Z by title.

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

  // Step 1: filter
  const filteredTasks = tasks.filter(task => {
    if (selectedFilter === 'all')       return true
    if (selectedFilter === 'active')    return !task.completed
    if (selectedFilter === 'completed') return task.completed
    if (selectedFilter === 'high')      return task.priority === 3
    if (selectedFilter === 'medium')    return task.priority === 2
    if (selectedFilter === 'low')       return task.priority === 1
    return true
  })

  // Step 2: sort (on a copy — do not mutate filteredTasks)
  const sortedTasks = [...filteredTasks].sort((a, b) => {
    // Primary sort: higher priority number comes first
    if (b.priority !== a.priority) return b.priority - a.priority
    // Secondary sort: alphabetical by title
    return a.title.localeCompare(b.title)
  })

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar
        selectedFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
      />

      <main className="flex-1 p-8 max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Priority Task Manager
        </h1>
        <TaskForm onAddTask={handleAddTask} />
        <TaskList tasks={sortedTasks} onToggle={handleToggle} onDelete={handleDelete} />
      </main>
    </div>
  )
}

export default App
