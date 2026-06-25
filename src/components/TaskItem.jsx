// Stage 08: TaskItem now uses PriorityBadge instead of inline badge markup

import PriorityBadge from './PriorityBadge'

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        className="w-4 h-4 accent-blue-600 cursor-pointer flex-shrink-0"
      />
      <span className={`flex-1 text-sm ${task.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
        {task.title}
      </span>
      <PriorityBadge priority={task.priority} />
      <button
        onClick={() => onDelete(task.id)}
        className="text-xs px-2 py-1 rounded text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors flex-shrink-0"
      >
        Delete
      </button>
    </li>
  )
}

export default TaskItem
