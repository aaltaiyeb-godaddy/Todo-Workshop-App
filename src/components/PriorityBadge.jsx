// PriorityBadge renders a small colored pill for a task's priority.
// Extracting this into its own component keeps TaskItem clean,
// and shows how small presentational components are useful.

const PRIORITY_CONFIG = {
  3: { label: 'High',   classes: 'bg-red-100 text-red-700' },
  2: { label: 'Medium', classes: 'bg-yellow-100 text-yellow-700' },
  1: { label: 'Low',    classes: 'bg-green-100 text-green-700' },
}

function PriorityBadge({ priority }) {
  const { label, classes } = PRIORITY_CONFIG[priority]
  return (
    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${classes}`}>
      {label}
    </span>
  )
}

export default PriorityBadge
