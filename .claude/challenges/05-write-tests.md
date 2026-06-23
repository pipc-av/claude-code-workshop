# Challenge 5: Write Tests

**Difficulty**: 🔴 Advanced  
**Time**: 20 minutes  
**Files**: Create `backend/routes/tasks.test.js`

## 🎯 Goal

Write automated tests for your Task API using Jest and Supertest to ensure code quality and prevent regressions.

## 📚 Background

**Automated testing** provides:
- ✅ Confidence in your code
- ✅ Protection against regressions
- ✅ Documentation of expected behavior
- ✅ Faster development (catch bugs early)

This challenge focuses on **integration testing** - testing the API endpoints as a whole.

### Testing Tools

- **Jest**: JavaScript testing framework
- **Supertest**: HTTP assertion library for testing Express apps

---

## 📋 What to Test

### 1. GET /api/tasks
- ✅ Returns 200 OK
- ✅ Returns array of tasks
- ✅ Response format matches API standards

### 2. GET /api/tasks/:id
- ✅ Returns 200 OK with valid ID
- ✅ Returns task object
- ✅ Returns 404 with invalid ID
- ✅ Error format matches standards

### 3. POST /api/tasks
- ✅ Returns 201 Created with valid data
- ✅ Creates task with correct fields
- ✅ Returns 400 Bad Request with empty title
- ✅ Returns 400 with title too long
- ✅ Returns 400 with whitespace-only title
- ✅ Returns 400 with description too long

### 4. PUT /api/tasks/:id
- ✅ Returns 200 OK with valid update
- ✅ Updates task correctly
- ✅ Returns 404 with invalid ID
- ✅ Returns 400 with invalid data

### 5. DELETE /api/tasks/:id
- ✅ Returns 204 No Content
- ✅ Removes task from database
- ✅ Returns 404 with invalid ID

### 6. PATCH /api/tasks/:id/toggle
- ✅ Returns 200 OK
- ✅ Toggles completed field
- ✅ Returns 404 with invalid ID

---

## 💪 Your Task

Create `backend/routes/tasks.test.js` with comprehensive tests.

### Test File Structure

```javascript
const request = require('supertest');
const express = require('express');
const fs = require('fs');
const path = require('path');
const tasksRouter = require('./tasks');

const app = express();
app.use(express.json());
app.use('/api/tasks', tasksRouter);

const TEST_DATA_FILE = path.join(__dirname, '../data/tasks.test.json');

// Backup original data and use test data
beforeAll(() => {
  // Setup test environment
});

// Clean up after each test
afterEach(() => {
  // Reset test data
});

// Restore original data
afterAll(() => {
  // Cleanup
});

describe('GET /api/tasks', () => {
  it('should return all tasks with 200 OK', async () => {
    const response = await request(app).get('/api/tasks');
    
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(Array.isArray(response.body.data)).toBe(true);
  });
});

describe('GET /api/tasks/:id', () => {
  it('should return task with 200 OK when found', async () => {
    // TODO: Implement test
  });

  it('should return 404 when task not found', async () => {
    // TODO: Implement test
  });

  it('should return error in correct format', async () => {
    // TODO: Implement test
  });
});

describe('POST /api/tasks', () => {
  it('should create task with 201 Created', async () => {
    const newTask = {
      title: 'Test Task',
      description: 'Test Description'
    };

    const response = await request(app)
      .post('/api/tasks')
      .send(newTask);

    expect(response.status).toBe(201);
    expect(response.body.success).toBe(true);
    expect(response.body.data.title).toBe(newTask.title);
    expect(response.body.data).toHaveProperty('id');
    expect(response.body.data).toHaveProperty('createdAt');
  });

  it('should return 400 with empty title', async () => {
    // TODO: Implement validation test
  });

  it('should return 400 with title too long', async () => {
    // TODO: Implement validation test
  });

  it('should return 400 with whitespace-only title', async () => {
    // TODO: Implement validation test
  });

  it('should return 400 with description too long', async () => {
    // TODO: Implement validation test
  });
});

describe('PUT /api/tasks/:id', () => {
  it('should update task with 200 OK', async () => {
    // TODO: Implement test
  });

  it('should return 404 when task not found', async () => {
    // TODO: Implement test
  });

  it('should validate updated data', async () => {
    // TODO: Implement validation test
  });
});

describe('DELETE /api/tasks/:id', () => {
  it('should delete task with 204 No Content', async () => {
    // TODO: Implement test
  });

  it('should return 404 when task not found', async () => {
    // TODO: Implement test
  });
});

describe('PATCH /api/tasks/:id/toggle', () => {
  it('should toggle completed field with 200 OK', async () => {
    // TODO: Implement test
  });

  it('should toggle from false to true', async () => {
    // TODO: Implement test
  });

  it('should toggle from true to false', async () => {
    // TODO: Implement test
  });

  it('should return 404 when task not found', async () => {
    // TODO: Implement test
  });
});
```

---

## 🧪 Running Your Tests

### Run All Tests
```bash
npm test
```

### Run Tests in Watch Mode
```bash
npm test -- --watch
```

### Run with Coverage
```bash
npm test -- --coverage
```

### Run Specific Test File
```bash
npm test tasks.test.js
```

---

## 💡 Example Good Prompts

### Prompt 1: Setup
```
I need to create integration tests for my Task API using Jest and Supertest.

File: backend/routes/tasks.test.js

Requirements:
- Test all CRUD endpoints (GET, POST, PUT, DELETE, PATCH)
- Test validation errors return 400
- Test 404 errors for missing resources
- Test correct HTTP status codes (201, 204, etc.)
- Use test data file to avoid corrupting real data

Can you help me set up the test file structure with beforeAll, 
afterEach, and afterAll hooks?
```

### Prompt 2: Validation Tests
```
I need to add validation tests for POST /api/tasks in tasks.test.js.

According to CLAUDE.md validation rules:
- Empty title should return 400
- Title > 100 chars should return 400
- Whitespace-only title should return 400
- Description > 500 chars should return 400

Can you show me how to write these test cases using Supertest?
```

### Prompt 3: Edge Cases
```
I want to test edge cases for the toggle endpoint.

Scenarios:
1. Toggle incomplete task → should become complete
2. Toggle complete task → should become incomplete
3. Toggle non-existent task → should return 404
4. Response should match API standard format

Can you help me write these tests?
```

---

## 📖 Testing Best Practices

### Good Test Structure (AAA Pattern)
```javascript
it('should create task with 201 Created', async () => {
  // Arrange - Setup test data
  const newTask = { title: 'Test', description: 'Test' };

  // Act - Perform the action
  const response = await request(app).post('/api/tasks').send(newTask);

  // Assert - Verify the result
  expect(response.status).toBe(201);
  expect(response.body.success).toBe(true);
});
```

### Descriptive Test Names
- ✅ `should return 404 when task not found`
- ❌ `test get task`

### Test One Thing Per Test
- Each `it()` block should test a single behavior
- Makes failures easier to diagnose

### Use Test Data Isolation
- Don't modify production data
- Reset state between tests

---

## ✅ Completion Checklist

- [ ] Created `backend/routes/tasks.test.js`
- [ ] All GET endpoint tests pass
- [ ] All POST validation tests pass
- [ ] All PUT endpoint tests pass
- [ ] All DELETE endpoint tests pass
- [ ] All PATCH toggle tests pass
- [ ] Test coverage > 80%
- [ ] All tests use correct status code assertions
- [ ] All tests verify response format
- [ ] Tests run without modifying production data

---

## 🚀 Next Steps

### Challenge 6: Git Operations
Go to `.claude/challenges/06-git-operations.md` to learn Git workflow with Claude Code!

### Advanced Testing (Optional)
- Add error handling tests
- Test concurrent requests
- Add performance tests
- Mock external dependencies

---

## 📊 Expected Test Results

```
PASS  backend/routes/tasks.test.js
  GET /api/tasks
    ✓ should return all tasks with 200 OK (25ms)
  GET /api/tasks/:id
    ✓ should return task with 200 OK when found (15ms)
    ✓ should return 404 when task not found (12ms)
    ✓ should return error in correct format (10ms)
  POST /api/tasks
    ✓ should create task with 201 Created (20ms)
    ✓ should return 400 with empty title (18ms)
    ✓ should return 400 with title too long (16ms)
    ✓ should return 400 with whitespace-only title (14ms)
    ✓ should return 400 with description too long (15ms)
  PUT /api/tasks/:id
    ✓ should update task with 200 OK (22ms)
    ✓ should return 404 when task not found (11ms)
    ✓ should validate updated data (19ms)
  DELETE /api/tasks/:id
    ✓ should delete task with 204 No Content (17ms)
    ✓ should return 404 when task not found (10ms)
  PATCH /api/tasks/:id/toggle
    ✓ should toggle completed field with 200 OK (20ms)
    ✓ should toggle from false to true (18ms)
    ✓ should toggle from true to false (16ms)
    ✓ should return 404 when task not found (12ms)

Test Suites: 1 passed, 1 total
Tests:       18 passed, 18 total
Time:        2.5s
```

---

**Excellent work!** 🎉 You've mastered API testing!
