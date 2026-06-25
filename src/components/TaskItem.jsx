// Stage 02: Props
// TaskItem now receives a `task` object and displays its real data.
// We convert the numeric priority to a label using a lookup object.

// Maps numeric priority values to display labels and badge styles
const PRIORITY_CONFIG = {
  3: { label: 'High',   classes: 'bg-red-100 text-red-700' },
  2: { label: 'Medium', classes: 'bg-yellow-100 text-yellow-700' },
  1: { label: 'Low',    classes: 'bg-green-100 text-green-700' },
}

function TaskItem({ task }) {
  const { label, classes } = PRIORITY_CONFIG[task.priority]

  return (
    <li className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200">
      <input
        type="checkbox"
        defaultChecked={task.completed}
        className="w-4 h-4 accent-blue-600 cursor-pointer"
      />
      <span className={`flex-1 text-sm ${task.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
        {task.title}
      </span>
      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${classes}`}>
        {label}
      </span>
      <button className="text-xs px-2 py-1 rounded text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors">
        Delete
      </button>
    </li>
  )
}

export default TaskItem
