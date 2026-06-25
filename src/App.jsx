// Stage 05: Events — Toggle Complete & Delete
// Two new handlers: handleToggle and handleDelete.
// Both demonstrate immutable state updates — we never modify the existing array.
//   - handleToggle uses .map() to flip one task's completed field
//   - handleDelete uses .filter() to return all tasks except the deleted one

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
    // Map returns a NEW array. For the matching task, we spread its fields
    // and flip `completed`. All other tasks pass through unchanged.
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  function handleDelete(id) {
    // Filter returns a NEW array containing only tasks that don't match the id
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 p-8 max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Priority Task Manager
        </h1>
        <TaskForm onAddTask={handleAddTask} />
        <TaskList tasks={tasks} onToggle={handleToggle} onDelete={handleDelete} />
      </main>
    </div>
  )
}

export default App
