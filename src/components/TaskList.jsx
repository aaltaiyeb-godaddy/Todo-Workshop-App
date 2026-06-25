// Stage 01: Static TaskList
// Renders a hardcoded list of TaskItem components.
// In the next stage we will replace these with real task data passed via props.

import TaskItem from './TaskItem'

function TaskList() {
  return (
    <ul className="space-y-2">
      <TaskItem />
      <TaskItem />
      <TaskItem />
    </ul>
  )
}

export default TaskList
