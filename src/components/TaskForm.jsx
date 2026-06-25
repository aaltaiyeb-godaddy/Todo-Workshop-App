// Stage 04: Controlled Form
// A "controlled" input is one where React controls its value via state.
// Every keystroke calls setTitle, which updates the state, which updates the input.
// On submit we call onAddTask (passed from App) and clear the fields.

import { useState } from 'react'

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('')
  const [priority, setPriority] = useState('2') // default to Medium

  function handleSubmit(e) {
    // Prevent the browser from reloading the page — default form behaviour
    e.preventDefault()

    // Basic validation: do nothing if the title is blank
    if (title.trim() === '') return

    const newTask = {
      id: crypto.randomUUID(), // browser built-in for unique IDs
      title: title.trim(),
      priority: Number(priority), // convert string from <select> to a number
      completed: false,
    }

    onAddTask(newTask)

    // Reset the form after adding
    setTitle('')
    setPriority('2')
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
      <select
        value={priority}
        onChange={e => setPriority(e.target.value)}
        className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        <option value="3">High</option>
        <option value="2">Medium</option>
        <option value="1">Low</option>
      </select>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
      >
        Add
      </button>
    </form>
  )
}

export default TaskForm
