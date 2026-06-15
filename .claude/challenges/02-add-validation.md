# Challenge 2: Add Validation

**Difficulty**: 🟢 Easy  
**Time**: 20 minutes  
**Files**: `backend/routes/tasks.js`

## 🎯 Goal

Implement input validation for POST and PUT endpoints to prevent invalid data from being saved.

## 📚 Background

**Validation** ensures data meets requirements before processing. Without validation:
- Empty/invalid data corrupts your database
- Security vulnerabilities (XSS, injection attacks)
- Poor user experience (unclear errors)

This challenge focuses on **server-side validation**.

## 📋 Validation Rules (from CLAUDE.md)

### Task Title
- ✅ **Required** - Cannot be empty
- ✅ **Minimum 1 character** - No empty strings
- ✅ **Maximum 100 characters** - Keep titles concise
- ✅ **Cannot be only whitespace** - "   " is invalid

### Task Description
- ✅ **Optional** - Can be empty or omitted
- ✅ **Maximum 500 characters** - Prevent abuse

## 💪 Your Tasks

### Task 1: Create Validation Helper
Add validation function before the route handlers in `backend/routes/tasks.js`:

```javascript
function validateTask(data, isUpdate = false) {
  const errors = [];

  // Title validation (required for create, optional for update)
  if (!isUpdate || data.title !== undefined) {
    if (!data.title || typeof data.title !== 'string') {
      errors.push('Title is required');
    } else if (data.title.trim().length === 0) {
      errors.push('Title cannot be empty or only whitespace');
    } else if (data.title.length > 100) {
      errors.push('Title cannot exceed 100 characters');
    }
  }

  // Description validation (optional)
  if (data.description !== undefined) {
    if (typeof data.description !== 'string') {
      errors.push('Description must be a string');
    } else if (data.description.length > 500) {
      errors.push('Description cannot exceed 500 characters');
    }
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}
```

### Task 2: Add Validation to POST
Update POST handler to validate before creating (around line 54).

### Task 3: Add Validation to PUT
Update PUT handler to validate before updating (around line 92).

## 🧪 Testing Your Fixes

### Test 1: Empty Title (POST)
```bash
curl -i -X POST http://localhost:3000/api/tasks -H "Content-Type: application/json" -d "{\"title\":\"\",\"description\":\"Test\"}"

# Should return 400 Bad Request with error
```

### Test 2: Title Too Long (POST)
```bash
curl -i -X POST http://localhost:3000/api/tasks -H "Content-Type: application/json" -d "{\"title\":\"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\"}"

# Should return 400 Bad Request with "cannot exceed 100 characters"
```

### Test 3: Valid Task (POST)
```bash
curl -i -X POST http://localhost:3000/api/tasks -H "Content-Type: application/json" -d "{\"title\":\"Valid task\",\"description\":\"This should work\"}"

# Should return 201 Created with task data
```

---

## 💡 Example Good Prompt

```
I need to add input validation to the POST /api/tasks endpoint 
in backend/routes/tasks.js starting at line 54.

According to CLAUDE.md, validation rules are:
- Title: required, 1-100 chars, not just whitespace
- Description: optional, max 500 chars

I want to:
1. Create a validateTask() helper function
2. Call it before creating the task
3. Return 400 Bad Request with error details if invalid
4. Return 201 with task data if valid

Can you show me how to implement this?
```

---

## ✅ Completion Checklist

- [ ] Created `validateTask()` helper function
- [ ] Added validation to POST /api/tasks
- [ ] Added validation to PUT /api/tasks/:id
- [ ] Tested all validation rules
- [ ] Returns 400 with clear error messages
- [ ] Valid requests still work

---

## 🚀 Next Challenge

**Go to Challenge 3**: `.claude/challenges/03-fix-frontend-bugs.md`

---

**Excellent work!** 🎉
