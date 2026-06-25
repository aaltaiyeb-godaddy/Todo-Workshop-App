// Stage 08: Sidebar shows task counts next to each filter label.
// The counts object comes from App — it's derived data, computed there.

const FILTERS = [
  { id: 'all',       label: 'All Tasks' },
  { id: 'active',    label: 'Active' },
  { id: 'completed', label: 'Completed' },
  { id: 'high',      label: 'High Priority' },
  { id: 'medium',    label: 'Medium Priority' },
  { id: 'low',       label: 'Low Priority' },
]

function Sidebar({ selectedFilter, onFilterChange, counts }) {
  return (
    <aside className="w-56 min-h-screen bg-white border-r border-gray-200 p-4 flex-shrink-0">
      <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
        Filters
      </h2>
      <nav className="space-y-1">
        {FILTERS.map(filter => (
          <button
            key={filter.id}
            onClick={() => onFilterChange(filter.id)}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
              selectedFilter === filter.id
                ? 'bg-blue-50 text-blue-700 font-medium'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <span>{filter.label}</span>
            <span className="text-xs bg-gray-100 text-gray-500 rounded-full px-2 py-0.5 min-w-5 text-center">
              {counts[filter.id]}
            </span>
          </button>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
