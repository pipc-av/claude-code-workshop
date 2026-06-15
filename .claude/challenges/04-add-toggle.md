# Challenge 4: Add Toggle Endpoint

**Difficulty**: 🟡 Intermediate  
**Time**: 15 minutes  
**Files**: `backend/routes/tasks.js`

## 🎯 Goal

Implement a PATCH endpoint to toggle task completion status - a common API pattern for boolean field updates.

## 📚 Background

A **dedicated toggle endpoint** is:
- ✅ More convenient for frontend
- ✅ Clearer intent (semantic)
- ✅ Atomic operation (no race conditions)
- ✅ RESTful pattern

**HTTP Method**: `PATCH` (partial update, not full replacement)

**Endpoint**: `PATCH /api/tasks/:id/toggle`

---

## 📋 Requirements

### Endpoint Behavior
- Toggle the `completed` field (true ↔ false)
- Return the updated task
- Return 404 if task not found
- Use 200 OK status code (successful update)

### Response Format
```json
{
  "success": true,
  "data": {
    "id": "123",
    "title": "Task title",
    "description": "...",
    "completed": true,
    "createdAt": "2026-06-14T10:00:00.000Z"
  }
}
```

---

## 🔧 Current State

**Location**: `backend/routes/tasks.js:132`

```javascript
// TODO: Add PATCH /api/tasks/:id/toggle - Toggle completed status

module.exports = router;
```

---

## 💪 Your Task

Implement the PATCH endpoint before `module.exports = router;`:

```javascript
// PATCH /api/tasks/:id/toggle - Toggle completed status
router.patch('/:id/toggle', (req, res) => {
  const tasks = readTasks();
  const index = tasks.findIndex(t => t.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      error: { message: 'Task not found' }
    });
  }

  // Toggle the completed field
  tasks[index].completed = !tasks[index].completed;

  writeTasks(tasks);

  res.json({
    success: true,
    data: tasks[index]
  });
});
```

---

## 🧪 Testing Your Implementation

### Test 1: Toggle Incomplete → Complete
```bash
# Get current tasks to find an ID
curl http://localhost:3000/api/tasks

# Toggle a task (use real ID from above)
curl -i -X PATCH http://localhost:3000/api/tasks/1/toggle

# Should return 200 OK with completed:true
```

### Test 2: Toggle Complete → Incomplete
```bash
# Toggle the same task again
curl -i -X PATCH http://localhost:3000/api/tasks/1/toggle

# Should return completed:false
```

### Test 3: Non-existent Task
```bash
curl -i -X PATCH http://localhost:3000/api/tasks/nonexistent/toggle

# Should return 404 Not Found
```

### Test 4: In the Browser
1. Open http://localhost:3000
2. Click checkbox on a task
3. Task should toggle between complete/incomplete
4. Refresh page - state should persist

---

## 💡 Example Good Prompt

```
I need to implement a PATCH endpoint to toggle task completion 
in backend/routes/tasks.js at line 132.

Requirements:
- Endpoint: PATCH /api/tasks/:id/toggle
- Find task by ID
- Toggle the completed field (true → false, false → true)
- Return 200 OK with updated task
- Return 404 if task not found
- Save to JSON file

This should follow the same pattern as other endpoints in the file.

Can you show me how to implement this?
```

---

## 📖 Reference

### Why PATCH not PUT?

- **PUT** = Replace entire resource (requires all fields)
- **PATCH** = Partial update (modify specific fields)

Toggle is a **partial update**, so PATCH is semantically correct!

---

## ✅ Completion Checklist

- [ ] PATCH /api/tasks/:id/toggle endpoint implemented
- [ ] Toggles completed field correctly
- [ ] Returns 200 OK with updated task
- [ ] Returns 404 for non-existent task
- [ ] Saves changes to JSON file
- [ ] All tests pass
- [ ] Frontend checkboxes still work

---

## 🎉 Congratulations!

You've completed all 4 main challenges! You've learned:
- ✅ REST API standards
- ✅ Input validation
- ✅ Frontend event handling
- ✅ API design patterns

**Optional**: Challenge 5 (Write Tests) for advanced practice

---

**Awesome work!** 🎉
