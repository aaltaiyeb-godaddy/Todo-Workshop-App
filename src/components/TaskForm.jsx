// Stage 01: Static TaskForm
// The form exists but nothing happens when you submit it yet.
// We will wire up the submit handler in a later stage.

function TaskForm() {
  return (
    <form className="flex gap-2 mb-6">
      <input
        type="text"
        placeholder="Add a new task..."
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
      <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-300">
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
