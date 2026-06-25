// Stage 01: Static TaskItem
// Renders a single task row with hardcoded values.
// In later stages the task data will come in via props.

function TaskItem() {
  return (
    <li className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200">
      <input type="checkbox" className="w-4 h-4 accent-blue-600 cursor-pointer" />
      <span className="flex-1 text-sm text-gray-700">Example task title</span>
      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-red-100 text-red-700">
        High
      </span>
      <button className="text-xs px-2 py-1 rounded text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors">
        Delete
      </button>
    </li>
  )
}

export default TaskItem
