// Stage 02: Props
// TaskList now receives a `tasks` array from App via props.
// It maps over the array and renders one TaskItem per task.
// Notice the `key` prop — React needs it to track list items efficiently.

import TaskItem from './TaskItem'

function TaskList({ tasks }) {
  return (
    <ul className="space-y-2">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  )
}

export default TaskList
