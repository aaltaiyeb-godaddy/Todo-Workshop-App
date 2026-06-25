# Priority Task Manager — React Bootcamp Workshop

A beginner-friendly React workshop app built with **Vite + React + Tailwind CSS v4**.

This repository is structured as a series of git branches, each representing a complete teaching checkpoint. Students checkout a branch, run the app, and follow along as concepts are introduced one at a time.

> **You are on `main`.** There is no app code here — see the branch guide below.  
> The finished app lives on the `final` branch.

---

## How to Use This Repo

```bash
# Clone the repo
git clone <repo-url>
cd todo-workshop-app

# See all branches
git branch -a

# Start from the beginning
git checkout stage-00-boilerplate
npm install
npm run dev

# Jump to any stage (emergency fallback or self-study)
git checkout stage-05-events-complete-delete
npm run dev
```

---

## Branch Guide

| Branch | What it teaches |
|---|---|
| `stage-00-boilerplate` | Vite scaffold, project structure, JSX, React entry point |
| `stage-01-components` | Components, component tree, static JSX |
| `stage-02-props` | Props, passing data parent → child, `.map()`, `key` |
| `stage-03-state` | `useState`, why plain variables don't trigger re-renders |
| `stage-04-add-task-form` | Controlled inputs, forms, `e.preventDefault()`, lifting state up |
| `stage-05-events-complete-delete` | Event handlers, immutable state updates with `.map()` and `.filter()` |
| `stage-06-filtering` | Derived data, filtering during render, no extra state |
| `stage-07-sorting-derived-data` | Chaining derived data, `Array.sort()`, spread to prevent mutation |
| `stage-08-polish-empty-state` | Conditional rendering, presentational components, task counts |
| `final` | Finished app + full README + instructor notes |
| `main` | This file only |

---

## What the App Does

- Add tasks with a **title** and **priority** (High / Medium / Low)
- Mark tasks **complete** or **incomplete**
- **Delete** tasks
- **Filter** by status or priority (sidebar)
- Tasks sorted by priority descending, then alphabetically
- Empty state when no tasks match the filter
- Task counts shown per filter

---

## Prerequisites

- Node.js 18 or later
- npm 9 or later

Check your versions: `node --version && npm --version`

---

## Instructor Resources

After checking out the `final` branch you will find:

- **`README.md`** — full branch guide, teaching flow, concept index, troubleshooting
- **`INSTRUCTOR_NOTES.md`** — talking points, questions to ask, common mistakes, concept explanations

```bash
git checkout final
```
