// Stage 08: TaskList maps the tasks array to TaskItem components.
// The tasks array has already been filtered and sorted in App.

import TaskItem from './TaskItem'

function TaskList({ tasks, onToggle, onDelete }) {
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
