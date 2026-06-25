# Instructor Notes — Priority Task Manager Workshop

This document is for instructors and TAs. It contains live-coding order, talking points, questions to ask interns, common mistakes, and short concept explanations.

---

## Suggested Live-Coding Order

1. Show the finished app on `final` first — let interns see where they're going.
2. Checkout `stage-00-boilerplate` and start from there.
3. Do **not** skip stages. Each one has a deliberate teaching moment.
4. It is fine to spend extra time on stages 03–05. State and immutability are where most interns get stuck.

---

## Stage-by-Stage Talking Points

### stage-00: Boilerplate

- Walk through `vite.config.js` — Vite is the build tool, not React.
- Show `index.html` → `src/main.jsx` → `App.jsx`. This is the React entry chain.
- Ask: *What does `createRoot` do?* (It tells React which DOM node to control.)
- Ask: *What is JSX?* (Syntactic sugar for `React.createElement(...)`. It compiles to JS.)
- Point out the Tailwind setup: one import in `index.css`, one plugin in `vite.config.js`. No config file needed in v4.

### stage-01: Components

- Draw a component tree on the whiteboard: `App → Sidebar, TaskForm, TaskList → TaskItem`.
- Emphasise: a component is just a function that returns JSX.
- Ask: *Why do we split into multiple components?* (Separation of concerns, reuse, readability.)
- Point out: TaskList renders three `<TaskItem />` — but they all look identical. Why? Because none of them receive different data yet.

### stage-02: Props

- Introduce the one-way data flow rule: data flows **down** via props, never up.
- Show the `PRIORITY_CONFIG` object in `TaskItem` — a lookup table is cleaner than a chain of `if/else`.
- Ask: *Why does React need a `key` prop on list items?*
  - React uses keys to track which DOM elements correspond to which list items.
  - Without keys, React may reuse the wrong DOM element when the list changes, causing bugs.
  - Keys must be stable and unique within the list — do not use the array index as a key if the list can be reordered or filtered.
- Ask: *What happens if you pass no `task` prop to `TaskItem`?* (Let them discover the error message.)

### stage-03: State

- This is conceptually the most important stage even though nothing visible changes.
- Key point: *why can't we just use a regular `let tasks = [...]`?*
  - When a regular variable changes, React doesn't know to re-render.
  - Calling `setTasks` tells React: "something changed, please re-render."
- Ask: *Where should state live?* (In the lowest common ancestor component that needs it — here, `App` owns it because both `Sidebar` and `TaskList` need access.)
- Note the `console.log` — ask interns to open the browser DevTools to see it.

### stage-04: Controlled Form

- Define "controlled input": the input's value is always driven by React state.
- Contrast with "uncontrolled" where you read the DOM directly with a ref.
- Walk through the data loop: type → `onChange` fires → `setTitle` called → React re-renders → input value updated.
- Ask: *What happens if you remove the `onChange` handler?* (The input becomes read-only because React controls the value.)
- Ask: *Why do we call `e.preventDefault()`?* (Default form submit behaviour is a page reload, which would wipe all state.)
- Show `crypto.randomUUID()` — a browser built-in for unique IDs. No library needed.

### stage-05: Events — Toggle & Delete

- This is where immutability becomes concrete.
- Discuss the **map pattern** for updating one item:
  ```js
  tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  )
  ```
  Ask: *Why not just do `task.completed = !task.completed`?*  
  Because mutating state directly does not trigger a re-render. React compares the old state reference to the new one — if you mutate in place, they're the same object, so React sees no change.
- Discuss the **filter pattern** for deletion.
- Ask: *What would happen if we used `splice` instead of `filter`?* (It mutates the original array — same problem as above.)

### stage-06: Filtering

- Introduce the concept of **derived data**: values you compute from state during render, rather than storing separately in state.
- Ask: *Why don't we store filteredTasks in useState?*
  - Because it's always calculable from `tasks` and `selectedFilter`.
  - Storing it in state would mean we need to keep two pieces of state in sync, which causes bugs.
  - Rule of thumb: if a value can be computed from existing state, compute it — don't store it.
- Show that `Sidebar` is a "dumb" component: it calls `onFilterChange` but doesn't decide what the filter value means. `App` owns that logic.

### stage-07: Sorting

- Show that `.sort()` mutates the original array:
  ```js
  const arr = [3, 1, 2]
  arr.sort()
  console.log(arr) // [1, 2, 3] — the original array is changed
  ```
- That's why we spread first: `[...filteredTasks].sort(...)`.
- Walk through the comparator function: `(a, b) => b.priority - a.priority`.
  - If the result is negative, `a` comes before `b`.
  - If positive, `b` comes before `a`.
  - If zero, we fall through to the title comparison.
- Ask: *What would happen if you sorted the tasks array directly?* (The display would update, but you'd have mutated state — bad. Also this would ignore the filter step.)

### stage-08: Polish

- Ask: *When would you extract something into its own component?* (When you use the same markup in more than one place, or when a piece of markup has its own clear purpose/responsibility.)
- `PriorityBadge` is a good example of a small **presentational component** — it only renders, it has no state, it just takes props and returns JSX.
- Show the conditional rendering pattern: `if (tasks.length === 0) return <EmptyState />`.
- Show the `counts` object — another piece of derived data. Ask: *Could we put counts in state?* (Yes, but then we'd have to update it everywhere we update `tasks`. Deriving it is simpler and less error-prone.)

---

## Questions to Ask Interns

Use these to check understanding throughout the session:

- What is the difference between `props` and `state`?
- If I have a value that I can calculate from existing state, should I put it in `useState`?
- Why do we spread `[...tasks]` before calling `.sort()`?
- What is a controlled input?
- Why does React need a `key` prop on list items?
- What does calling `setTasks(newArray)` actually do?
- Where should state live — in the component that uses it, or higher up?
- What is the difference between `.map()` and `.forEach()`?

---

## Common Mistakes Interns Make

### Mutating state directly
```js
// Wrong — React won't re-render
tasks.push(newTask)
setTasks(tasks)

// Correct
setTasks([...tasks, newTask])
```

### Using array index as a key
```jsx
// Wrong — breaks if the list is reordered or filtered
{tasks.map((task, index) => <TaskItem key={index} task={task} />)}

// Correct
{tasks.map(task => <TaskItem key={task.id} task={task} />)}
```

### Storing derived data in state
```js
// Wrong — now you have to keep two values in sync
const [filteredTasks, setFilteredTasks] = useState([])

// Correct — compute it during render
const filteredTasks = tasks.filter(...)
```

### Forgetting `e.preventDefault()` on form submit
The page reloads and all state is lost. Easy fix but confusing the first time.

### Calling the setter with the old value
```js
// Wrong — stale closure if called inside a loop or async function
setTasks([...tasks, newTask])

// Safer pattern using the function form (good to mention, not required here)
setTasks(prev => [...prev, newTask])
```

### Not passing handlers down every level
If `onToggle` is defined in `App`, it must be passed to `TaskList`, which must pass it to `TaskItem`. Forgetting one level causes "is not a function" errors.

---

## Short Concept Explanations

### Why React state must be updated immutably

React decides whether to re-render a component by checking if the state value has changed. For objects and arrays, it checks the **reference** (memory address), not the contents. If you mutate an array in place (`tasks.push(...)`) and then call `setTasks(tasks)`, you're passing the same array reference — React sees no change and skips the re-render. Creating a new array (`[...tasks, newTask]`) gives React a new reference, so it knows to re-render.

### Why we use keys in lists

When React renders a list of elements, it needs to efficiently update the DOM when the list changes. It uses `key` to match up virtual DOM elements with real DOM nodes between renders. Without a stable key, React may reuse the wrong DOM node — for example, preserving an input's typed text on the wrong list item after a deletion. Keys must be unique within the list and should not change between renders (so don't use the array index when the list can be reordered).

### Why derived data should be computed during render instead of stored in state

Keeping two pieces of state in sync is a source of bugs. If `filteredTasks` were stored in state, every function that changes `tasks` would also have to update `filteredTasks`. Forgetting one place causes the UI to go stale. Instead, compute `filteredTasks` directly from `tasks` and `selectedFilter` on every render — it's fast, always correct, and requires no synchronisation. The rule: if you can derive it, don't store it.

---

## Pre-Session Checklist

- [ ] Clone the repo and `npm install` on your machine the night before
- [ ] Run `npm run dev` and verify every branch works
- [ ] Check Node.js version (`node --version`) — must be 18+
- [ ] Have the finished `final` branch tab open in the browser to show at the start
- [ ] Know the emergency fallback: `git checkout stage-XX && npm run dev`
