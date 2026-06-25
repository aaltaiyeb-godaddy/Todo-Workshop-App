// Stage 06: Sidebar filter buttons are now interactive.
// selectedFilter and onFilterChange come from App.
// Clicking a button calls onFilterChange, which updates selectedFilter in App,
// which triggers a re-render with the new filteredTasks.

// Defining the filter list outside the component avoids re-creating it on every render
const FILTERS = [
  { id: 'all',       label: 'All Tasks' },
  { id: 'active',    label: 'Active' },
  { id: 'completed', label: 'Completed' },
  { id: 'high',      label: 'High Priority' },
  { id: 'medium',    label: 'Medium Priority' },
  { id: 'low',       label: 'Low Priority' },
]

function Sidebar({ selectedFilter, onFilterChange }) {
  return (
    <aside className="w-56 min-h-screen bg-white border-r border-gray-200 p-4">
      <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
        Filters
      </h2>
      <nav className="space-y-1">
        {FILTERS.map(filter => (
          <button
            key={filter.id}
            onClick={() => onFilterChange(filter.id)}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
              selectedFilter === filter.id
                ? 'bg-blue-50 text-blue-700 font-medium'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
