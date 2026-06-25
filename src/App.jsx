// Stage 02: Props
// We define a SAMPLE_TASKS array here in App and pass it down to TaskList.
// TaskList passes each task to a TaskItem.
// This teaches how data flows from parent to child via props.

import Sidebar from './components/Sidebar'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

// Priority numeric values map to human-readable labels.
// 1 = Low, 2 = Medium, 3 = High
const SAMPLE_TASKS = [
  { id: '1', title: 'Set up project structure', priority: 3, completed: true },
  { id: '2', title: 'Build TaskItem component', priority: 3, completed: false },
  { id: '3', title: 'Add form validation', priority: 2, completed: false },
  { id: '4', title: 'Write unit tests', priority: 2, completed: false },
  { id: '5', title: 'Update README', priority: 1, completed: false },
]

function App() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 p-8 max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Priority Task Manager
        </h1>
        <TaskForm />
        {/* Pass the tasks array down as a prop */}
        <TaskList tasks={SAMPLE_TASKS} />
      </main>
    </div>
  )
}

export default App
