# Challenge 1: Fix Backend Bugs

**Difficulty**: 🟢 Easy  
**Time**: 20 minutes  
**Files**: `backend/routes/tasks.js`

## 🎯 Goal

Fix HTTP status codes and error response formats to match REST API standards defined in `.claude/CLAUDE.md`.

## 📚 Background

REST APIs follow conventions for:
- **HTTP Status Codes** - Communicate outcome (200, 201, 204, 400, 404, 500)
- **Response Format** - Consistent structure for success and error responses

These conventions make APIs predictable and easy to use.

## 🐛 Bugs to Fix

### Bug 1: Wrong Error Format (Line 40)
**Location**: `backend/routes/tasks.js:40`

**Issue**: GET /api/tasks/:id returns error as a string instead of an object.

**Current Code**:
```javascript
if (!task) {
  return res.status(404).json({
    success: false,
    error: 'Not found'  // String
  });
}
```

**Expected Format** (from CLAUDE.md):
```javascript
{
  "success": false,
  "error": {
    "message": "Task not found"
  }
}
```

**Why it matters**: Consistent error format makes error handling easier on the frontend.

---

### Bug 2: Wrong Status Code on POST (Line 73)
**Location**: `backend/routes/tasks.js:73`

**Issue**: POST /api/tasks returns 200 OK instead of 201 Created.

**Current Code**:
```javascript
res.json({
  success: true,
  data: newTask
});
```

**Expected**: Should use `res.status(201).json(...)` when creating a resource.

**Why it matters**: 
- `200 OK` means "request processed successfully"
- `201 Created` means "new resource was created"
- Proper status codes communicate intent and follow REST standards

---

### Bug 3: Wrong Status Code on DELETE (Line 126)
**Location**: `backend/routes/tasks.js:126`

**Issue**: DELETE /api/tasks/:id returns 200 OK with JSON body instead of 204 No Content.

**Current Code**:
```javascript
res.json({
  success: true,
  message: 'Task deleted'
});
```

**Expected**: `res.status(204).send()` with no response body.

**Why it matters**:
- `200 OK` means "here's a response body"
- `204 No Content` means "success, but no body to return"
- DELETE operations don't need to return the deleted resource

---

## 💪 Your Tasks

1. **Fix Bug 1** - Error format in GET /tasks/:id
2. **Fix Bug 2** - Status code in POST /tasks
3. **Fix Bug 3** - Status code in DELETE /tasks/:id

## 🧪 Testing Your Fixes

### Test Bug 1 Fix
```bash
# Try to get non-existent task
curl -i http://localhost:3000/api/tasks/nonexistent

# Should return 404 with proper error format:
# {"success":false,"error":{"message":"Task not found"}}
```

### Test Bug 2 Fix
```bash
# Create a new task
curl -i -X POST http://localhost:3000/api/tasks -H "Content-Type: application/json" -d "{\"title\":\"New task\",\"description\":\"Testing\"}"

# Should return 201 Created (check first line of response)
# HTTP/1.1 201 Created
```

### Test Bug 3 Fix
```bash
# Delete a task (use an ID from your tasks.json)
curl -i -X DELETE http://localhost:3000/api/tasks/1

# Should return 204 No Content with no body
# HTTP/1.1 204 No Content
```

## 💡 Tips

### Example Good Prompt

```
I'm fixing Bug 2 in backend/routes/tasks.js at line 73.

The POST /api/tasks endpoint currently returns 200 OK when 
creating a new task. According to REST standards in CLAUDE.md, 
it should return 201 Created for successful resource creation.

Current code:
res.json({
  success: true,
  data: newTask
});

Can you:
1. Show me how to add the correct status code
2. Explain why 201 is correct for POST operations
3. Tell me how to verify this with curl
```

---

## 📖 Reference

### HTTP Status Codes (from CLAUDE.md)
- `200 OK` - Successful GET/PUT
- `201 Created` - Successful POST (new resource)
- `204 No Content` - Successful DELETE (no body)
- `400 Bad Request` - Validation error
- `404 Not Found` - Resource not found
- `500 Internal Server Error` - Server error

---

## ✅ Completion Checklist

- [ ] Bug 1 fixed: GET /tasks/:id error is an object
- [ ] Bug 2 fixed: POST /tasks returns 201
- [ ] Bug 3 fixed: DELETE /tasks/:id returns 204
- [ ] Tested all three fixes with curl
- [ ] Understand WHY each fix is correct
- [ ] Server still runs without errors

---

## 🚀 Next Challenge

Once all three bugs are fixed and tested:

**Go to Challenge 2**: `.claude/challenges/02-add-validation.md`

---

**Good luck!** 🎉
