# Priority Task Manager — React Bootcamp Workshop

A beginner-friendly React workshop app built with **Vite**, **React**, and **Tailwind CSS v4**.

Students build a Priority Task Manager step by step, learning core React concepts through a series of git branches. Each branch is a fully working checkpoint they can run at any time.

---

## Quick Start

```bash
git clone <repo-url>
cd todo-workshop-app

# Checkout the branch for the stage you want to start from
git checkout stage-00-boilerplate

npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## What the Finished App Does

- Add tasks with a **title** and **priority** (High / Medium / Low)
- Mark tasks **complete** or **incomplete**
- **Delete** tasks
- **Filter** tasks by status or priority via a sidebar
- Tasks are automatically **sorted** by priority (High first), then alphabetically
- Empty state shown when no tasks match the current filter
- Task counts displayed next to each filter

---

## Tech Stack

| Tool | Version | Why |
|---|---|---|
| Vite | 6.x | Fast dev server and build tool |
| React | 19.x | UI library |
| Tailwind CSS | v4 | Utility-first styling, no config file needed |

No router, no state management library, no backend. Everything lives in memory.

---

## Branch Guide

Work through these branches in order. Each one is a complete, runnable snapshot of the app at that stage.

### `stage-00-boilerplate`
**Concepts:** Project setup, Vite, React entry point, JSX  
Vite + React scaffolded with Tailwind v4. `App.jsx` renders a title and layout shell with sidebar and main area placeholders. Nothing is interactive yet.

### `stage-01-components`
**Concepts:** Components, JSX, component tree  
Four static components added: `Sidebar`, `TaskForm`, `TaskList`, `TaskItem`. All data is hardcoded inside each component. The goal is to establish the component hierarchy before adding any data flow.

### `stage-02-props`
**Concepts:** Props, passing data from parent to child, lists with `.map()`, `key`  
A `SAMPLE_TASKS` array is defined in `App` and passed down through props: `App → TaskList → TaskItem`. `TaskItem` receives a `task` object and maps the numeric priority (1/2/3) to a label and badge colour. The `key` prop on list items is explained.

### `stage-03-state`
**Concepts:** `useState`, the concept of state vs. plain variables, when to re-render  
`tasks` and `selectedFilter` are moved from plain constants into `useState`. The app looks identical to stage-02 — the lesson is *why* we need state and what calling the setter function does.

### `stage-04-add-task-form`
**Concepts:** Controlled inputs, forms, `e.preventDefault()`, lifting state up  
`TaskForm` becomes a controlled component: every keystroke updates local state, and submitting calls `onAddTask` (passed from `App`). After submission the form resets. Empty-title validation prevents blank tasks.

### `stage-05-events-complete-delete`
**Concepts:** Event handlers, immutable state updates, `.map()`, `.filter()`  
`App` gains `handleToggle` and `handleDelete`. Both update state immutably — `.map()` to flip a field on one item, `.filter()` to remove an item. These are the two most important patterns for updating arrays in React state.

### `stage-06-filtering`
**Concepts:** Derived data, computing values during render, props vs. state  
`filteredTasks` is computed in `App` during render using `.filter()` — no new `useState` required. `Sidebar` receives `selectedFilter` and `onFilterChange` and renders interactive filter buttons that update the selected filter in `App`.

### `stage-07-sorting-derived-data`
**Concepts:** Chaining derived data, `Array.sort()`, spread to prevent mutation  
`sortedTasks` is derived from `filteredTasks`. Because `Array.sort()` mutates in place, we spread `[...filteredTasks]` first. Primary sort key: priority descending. Secondary sort key: title alphabetically.

### `stage-08-polish-empty-state`
**Concepts:** Conditional rendering, small presentational components, composing UI  
Adds `PriorityBadge` (extracted from `TaskItem`) and `EmptyState` (shown when the task list is empty). `Sidebar` receives a `counts` object (derived data) and shows count badges. App header shows the remaining active task count.

### `final`
The complete, polished application. Identical to stage-08 plus this README and `INSTRUCTOR_NOTES.md`.

### `main`
This README only. No app code. Use main to orient students before they checkout a stage branch.

---

## Suggested 4-Hour Teaching Flow

| Time | Branch | Focus |
|---|---|---|
| 0:00 – 0:20 | — | Intro: what are we building? Walk through the finished app on `final`. |
| 0:20 – 0:40 | `stage-00` | Project setup, Vite, JSX, how React renders to the DOM |
| 0:40 – 1:00 | `stage-01` | What is a component? Build the component tree together. |
| 1:00 – 1:20 | `stage-02` | Props: data flows one way, parent to child. `key` in lists. |
| 1:20 – 1:40 | `stage-03` | State: why plain variables don't work. `useState` intro. |
| 1:40 – 2:10 | `stage-04` | Controlled forms. Lifting state up. `e.preventDefault()`. |
| 2:10 – 2:30 | `stage-05` | Immutable updates with `.map()` and `.filter()`. |
| 2:30 – 2:50 | `stage-06` | Derived data. Filtering without extra state. |
| 2:50 – 3:10 | `stage-07` | Sorting. Why `.sort()` needs a copy. Chaining derivations. |
| 3:10 – 3:40 | `stage-08` | Polish: conditional rendering, extracting components. |
| 3:40 – 4:00 | — | Q&A, extension ideas, next steps. |

---

## React Concepts Demonstrated

| Concept | Where |
|---|---|
| **Components** | Every `.jsx` file is a component |
| **Props** | stage-02: `tasks`, `onAddTask`, `onToggle`, `onDelete` |
| **State** | stage-03+: `useState` in `App.jsx` |
| **Events** | stage-04+: `onChange`, `onSubmit`, `onClick` |
| **Forms** | stage-04: controlled inputs in `TaskForm` |
| **Lists** | stage-02+: `.map()` in `TaskList`, `key` prop |
| **Conditional rendering** | stage-08: `EmptyState` shown when list is empty |
| **Derived data** | stage-06+: `filteredTasks`, `sortedTasks`, `counts` |
| **Immutability** | stage-05+: spread and `.filter()` in state updates |

---

## Troubleshooting

**`npm install` fails**  
Make sure you are on Node.js 18 or later: `node --version`

**Blank page in the browser**  
Check the browser console (F12) for errors. A common cause is a syntax error in a JSX file.

**Tailwind classes not applying**  
Ensure `src/index.css` starts with `@import "tailwindcss";` and that `vite.config.js` includes the `tailwindcss()` plugin.

**`onToggle is not a function`**  
Props must be passed down through every component in the chain. Check that `TaskList` passes `onToggle` to `TaskItem`.

**Changes don't appear after editing**  
Vite has HMR (hot module replacement) so edits should appear instantly. If they don't, save the file again or restart `npm run dev`.

---

## Emergency Teaching Fallback

If live coding breaks and you need to get back to a known good state, just checkout the next stage branch:

```bash
# Example: you are live-coding stage-04 and something breaks
git checkout stage-05-events-complete-delete
npm run dev
```

Every branch is a fully working, runnable app. You can jump to any branch at any time.

```bash
# List all branches
git branch

# Jump to any stage
git checkout stage-06-filtering
```

---

## Extension Ideas

These are good exercises for interns who finish early or for homework:

1. **Persist tasks to `localStorage`** — tasks survive a page refresh  
2. **Edit a task title** — click to edit inline  
3. **Drag to reorder** — manual ordering within a priority group  
4. **Due dates** — add a `dueDate` field and sort by date within priority  
5. **Multiple lists / boards** — group tasks into named projects  
6. **Animations** — use CSS transitions for adding/removing tasks  
7. **Unit tests** — write tests for the sorting and filtering logic with Vitest  
