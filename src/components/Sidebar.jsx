// Stage 01: Static Sidebar
// This component renders the filter navigation.
// Right now all the filter names are hardcoded directly in JSX.
// In a later stage we'll turn these buttons into real filters.

function Sidebar() {
  return (
    <aside className="w-56 min-h-screen bg-white border-r border-gray-200 p-4">
      <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
        Filters
      </h2>
      <nav className="space-y-1">
        <button className="w-full text-left px-3 py-2 rounded-lg text-sm bg-blue-50 text-blue-700 font-medium">
          All Tasks
        </button>
        <button className="w-full text-left px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
          Active
        </button>
        <button className="w-full text-left px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
          Completed
        </button>
        <button className="w-full text-left px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
          High Priority
        </button>
        <button className="w-full text-left px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
          Medium Priority
        </button>
        <button className="w-full text-left px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
          Low Priority
        </button>
      </nav>
    </aside>
  )
}

export default Sidebar
