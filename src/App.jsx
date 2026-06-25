// Stage 03: State
// We move tasks and selectedFilter into useState.
// The app still looks the same as stage-02 — the change is internal.
// This is the foundation for all the interactive features we add next.

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
  // useState returns [currentValue, setterFunction].
  // Calling the setter triggers a re-render with the new value.
  const [tasks, setTasks] = useState(SAMPLE_TASKS)
  const [selectedFilter, setSelectedFilter] = useState('all')

  // setTasks and setSelectedFilter are not yet used — we add that next.
  // For now, just note that the state exists and is ready to be wired up.
  console.log('Current filter:', selectedFilter)

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 p-8 max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Priority Task Manager
        </h1>
        <TaskForm />
        <TaskList tasks={tasks} />
      </main>
    </div>
  )
}

export default App
