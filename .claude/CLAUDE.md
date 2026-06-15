# Claude Code Workshop - Task Manager

## Project Overview

This is a simple fullstack Task Manager application used for teaching Claude Code in a hands-on workshop setting.

**Important**: This codebase contains **intentional bugs and incomplete features** as teaching material. Students will use Claude Code to identify and fix these issues.

## Tech Stack

- **Backend**: Node.js + Express
- **Frontend**: Vanilla JavaScript (HTML/CSS/JS)
- **Data Storage**: JSON file (`backend/data/tasks.json`)
- **Testing**: Jest + Supertest

## Architecture

```
/backend
  /routes - API endpoints
  /data - JSON database file
  server.js - Express server

/frontend
  /css - Styles
  /js - Frontend logic (api.js, app.js)
  index.html - Main page
```

## Known Issues (Intentional - For Learning)

### Backend Bugs
1. **Line 40** `backend/routes/tasks.js` - Error format inconsistency (string instead of object)
2. **Line 73** `backend/routes/tasks.js` - POST returns 200 instead of 201 Created
3. **Line 54** `backend/routes/tasks.js` - No validation on POST endpoint
4. **Line 92** `backend/routes/tasks.js` - No validation on PUT endpoint
5. **Line 126** `backend/routes/tasks.js` - DELETE returns 200 instead of 204 No Content
6. **Line 25** `backend/routes/tasks.js` - GET /tasks doesn't support filtering by status

### Frontend Bugs
7. **Line 21** `frontend/js/app.js` - Filter buttons have no event listeners
8. **Line 52** `frontend/js/app.js` - No client-side validation before submit
9. **Line 101** `frontend/js/app.js` - getFilteredTasks() doesn't actually filter

### Incomplete Features
- TODO: PATCH /api/tasks/:id/toggle endpoint (line 132 in routes/tasks.js)
- TODO: Validation helper functions
- TODO: Error handling middleware
- TODO: Tests

## API Standards

### Response Format
All API responses must follow this format:

**Success**:
```json
{
  "success": true,
  "data": { ... }
}
```

**Error**:
```json
{
  "success": false,
  "error": {
    "message": "Error description"
  }
}
```

### HTTP Status Codes
- `200 OK` - Successful GET/PUT
- `201 Created` - Successful POST (resource created)
- `204 No Content` - Successful DELETE (no response body)
- `400 Bad Request` - Validation error
- `404 Not Found` - Resource not found
- `500 Internal Server Error` - Server error

### Task Object Schema
```json
{
  "id": "string (timestamp)",
  "title": "string (required, 1-100 chars)",
  "description": "string (optional, max 500 chars)",
  "completed": "boolean",
  "createdAt": "ISO 8601 timestamp"
}
```

## Validation Rules

### Task Title
- Required
- Minimum 1 character
- Maximum 100 characters
- Cannot be only whitespace

### Task Description
- Optional
- Maximum 500 characters

## Coding Standards

### JavaScript Style
- Use `const` and `let`, never `var`
- Use async/await, not callbacks
- Handle errors explicitly
- Use descriptive variable names

### File Organization
- Keep routes thin, logic in services (future refactor)
- One route handler per endpoint
- Validate at route level
- Business logic separate from HTTP logic

### Error Handling
- Always catch async errors
- Return consistent error format
- Log errors to console
- Never expose stack traces to client

## Testing Guidelines

When writing tests:
- Test happy path first
- Test validation errors
- Test edge cases (empty strings, missing fields)
- Mock external dependencies
- Use descriptive test names

## Git Workflow

1. Make small, focused commits
2. Test before committing
3. Write descriptive commit messages:
   - `fix: correct POST status code`
   - `feat: add task filtering`
   - `test: add validation tests`

## Working with Claude Code

### Good Prompts
- Be specific about file and line number
- Explain what the bug is
- Ask "why" to understand concepts
- Request explanations with fixes

### Example
```
I'm working on fixing Bug 2 in backend/routes/tasks.js line 73.

The POST endpoint currently returns 200 OK, but according to REST 
standards in CLAUDE.md, it should return 201 Created for successful 
resource creation.

Can you:
1. Fix the status code
2. Explain why 201 is correct for POST
3. Show me how to test this change
```

## Workshop Flow

Engineers will:
1. Fix backend API bugs (HTTP standards)
2. Implement validation
3. Fix frontend bugs (filters, validation)
4. Add missing features (toggle endpoint)
5. Write tests
6. (Optional) Refactor to service layer

Each challenge builds on previous work and introduces new concepts.
