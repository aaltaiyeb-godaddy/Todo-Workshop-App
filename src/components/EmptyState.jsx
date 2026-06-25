// EmptyState is shown when no tasks match the current filter.
// Conditional rendering: TaskList decides whether to show this or the task list.

function EmptyState() {
  return (
    <div className="text-center py-16 text-gray-400">
      <p className="text-5xl mb-4">📋</p>
      <p className="text-lg font-medium text-gray-500">No tasks here</p>
      <p className="text-sm mt-1">Add a task above or try a different filter.</p>
    </div>
  )
}

export default EmptyState
