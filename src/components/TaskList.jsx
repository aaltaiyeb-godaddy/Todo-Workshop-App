// Stage 08: TaskList shows EmptyState when there are no tasks to display.
// This is conditional rendering — we check tasks.length and return a
// different component depending on the result.

import TaskItem from './TaskItem'
import EmptyState from './EmptyState'

function TaskList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) {
    return <EmptyState />
  }

  return (
    <ul className="space-y-2">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}

export default TaskList
