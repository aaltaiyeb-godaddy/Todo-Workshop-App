// Stage 05: Pass event handlers through TaskList to TaskItem

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
