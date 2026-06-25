// Stage 04: Add Task Form
// App now has a handleAddTask function that it passes to TaskForm.
// When the form submits, it calls this function with the new task object.
// We use the spread operator to create a new array — never mutate state directly.

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
    // [...tasks, newTask] creates a brand new array — this is immutable state update
    setTasks([...tasks, newTask])
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 p-8 max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Priority Task Manager
        </h1>
        {/* Pass the handler down as a prop */}
        <TaskForm onAddTask={handleAddTask} />
        <TaskList tasks={tasks} />
      </main>
    </div>
  )
}

export default App
