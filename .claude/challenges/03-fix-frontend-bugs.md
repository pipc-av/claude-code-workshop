# Challenge 3: Fix Frontend Bugs

**Difficulty**: 🟡 Intermediate  
**Time**: 15 minutes  
**Files**: `frontend/js/app.js`

## 🎯 Goal

Fix frontend bugs to make filter buttons work and add client-side validation for better user experience.

## 🐛 Bugs to Fix

### Bug 7: Filter Buttons Don't Work (Line 21)
**Location**: `frontend/js/app.js:21`

**Problem**: The filter buttons (All/Active/Completed) are rendered but clicking them does nothing!

**What needs to happen**:
1. Attach click listeners to all filter buttons
2. Update `currentFilter` state when clicked
3. Update button active states (styling)
4. Re-render tasks with new filter

---

### Bug 8: No Client-Side Validation (Line 52)
**Location**: `frontend/js/app.js:52`

**Problem**: Frontend sends requests even with invalid data, causing unnecessary API calls and poor UX.

**What needs to happen**:
1. Check title is not empty
2. Check title length (1-100 chars)
3. Check description length (max 500 chars)
4. Show error message to user
5. Only call API if valid

---

### Bug 9: getFilteredTasks() Doesn't Filter (Line 101)
**Location**: `frontend/js/app.js:101`

**Problem**: The filtering logic isn't implemented, so changing filters does nothing.

---

## 💪 Your Tasks

### Task 1: Fix Filter Buttons Event Listeners

Update `setupEventListeners()`:

```javascript
function setupEventListeners() {
  taskForm.addEventListener('submit', handleTaskSubmit);

  // Add filter button listeners
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Update filter state
      currentFilter = button.dataset.filter;

      // Update button active states
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Re-render with new filter
      renderTasks();
    });
  });
}
```

### Task 2: Implement getFilteredTasks()

```javascript
function getFilteredTasks() {
  if (currentFilter === 'all') {
    return tasks;
  } else if (currentFilter === 'active') {
    return tasks.filter(task => !task.completed);
  } else if (currentFilter === 'completed') {
    return tasks.filter(task => task.completed);
  }
  return tasks;
}
```

### Task 3: Add Client-Side Validation

Update `handleTaskSubmit()` to validate before API call.

## 🧪 Testing Your Fixes

### Test 1: Filter Buttons Work
1. Open http://localhost:3000 in browser
2. Add a few tasks
3. Mark some as completed (click checkbox)
4. Click "Active" button - should show only incomplete tasks
5. Click "Completed" button - should show only completed tasks
6. Click "All" button - should show all tasks

### Test 2: Client-Side Validation Works
1. Try to submit empty task - Should show alert: "Title is required"
2. Try to submit task with 101 character title - Should show alert
3. Valid task should still work normally

---

## 💡 Example Good Prompt

```
I need to fix Bug 7 in frontend/js/app.js at line 21.

The filter buttons (All/Active/Completed) are rendered but don't 
respond to clicks. I need to:

1. Add click event listeners to all filter buttons
2. Update the currentFilter state variable
3. Toggle the 'active' class on buttons for styling
4. Re-render the task list when filter changes

Each button has a data-filter attribute ('all', 'active', 'completed').

Can you show me how to implement this in setupEventListeners()?
```

---

## ✅ Completion Checklist

- [ ] Filter buttons have click listeners
- [ ] Clicking "Active" shows only incomplete tasks
- [ ] Clicking "Completed" shows only completed tasks
- [ ] Active button is highlighted
- [ ] Client-side validation prevents empty titles
- [ ] Valid submissions still work

---

## 🚀 Next Challenge

**Go to Challenge 4**: `.claude/challenges/04-add-toggle.md`

---

**Great job!** 🎉
