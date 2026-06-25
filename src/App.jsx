// Stage 00: Boilerplate
// This is the root component. Right now it just renders the app shell.
// In the next stage we will add real components inside it.

function App() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar placeholder */}
      <aside className="w-56 min-h-screen bg-white border-r border-gray-200 p-4">
        <h2 className="text-sm font-semibold text-gray-400">Filters</h2>
      </aside>

      {/* Main content area */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Priority Task Manager
        </h1>
        <p className="text-gray-500">Tasks will go here.</p>
      </main>
    </div>
  )
}

export default App
