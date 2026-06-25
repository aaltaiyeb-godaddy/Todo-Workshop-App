// Stage 06: Filtering
// We compute filteredTasks as derived data — a value calculated from state
// during render. We do NOT store it in useState; we just compute it fresh
// every time App re-renders. This keeps the state minimal.

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

  // Derived data: filter tasks based on the selected sidebar filter.
  // This runs on every render — no extra state needed.
  const filteredTasks = tasks.filter(task => {
    if (selectedFilter === 'all')       return true
    if (selectedFilter === 'active')    return !task.completed
    if (selectedFilter === 'completed') return task.completed
    if (selectedFilter === 'high')      return task.priority === 3
    if (selectedFilter === 'medium')    return task.priority === 2
    if (selectedFilter === 'low')       return task.priority === 1
    return true
  })

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Pass selectedFilter and the setter so Sidebar can update it */}
      <Sidebar
        selectedFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
      />

      <main className="flex-1 p-8 max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Priority Task Manager
        </h1>
        <TaskForm onAddTask={handleAddTask} />
        {/* Pass filteredTasks instead of the raw tasks array */}
        <TaskList tasks={filteredTasks} onToggle={handleToggle} onDelete={handleDelete} />
      </main>
    </div>
  )
}

export default App
