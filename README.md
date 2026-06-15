# Task Manager - Claude Code Workshop

A hands-on workshop teaching AI-assisted development using Claude Code. Learn by fixing real bugs and completing features in a realistic codebase!

## 🎯 What You'll Learn

- Debug existing code with Claude Code
- Write effective prompts for AI assistance
- Fix HTTP status codes and API standards
- Implement input validation
- Complete missing features
- Write tests for your fixes

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or pnpm package manager
- Claude Code CLI ([install guide](https://docs.anthropic.com/claude/docs/claude-code))
- Basic JavaScript knowledge
- GitHub account (for Challenge 6)
- GitHub Personal Access Token (for Challenge 6 - see setup below)

### Setup (5 minutes)

```bash
# 1. Navigate to this directory
cd "..\claude-code-workshop"

# 2. Install dependencies
npm install

# 3. Start the server
npm start

# 4. Open in browser
# Visit: http://localhost:3000
```

### Verify It Works

```bash
# In another terminal:
curl http://localhost:3000/api/health
# Should return: {"status":"ok","timestamp":"..."}

curl http://localhost:3000/api/tasks
# Should return: {"success":true,"data":[...]}
```

### Configure GitHub MCP (Optional - Required for Challenge 6)

See the Gist Provided

### Start Claude Code

```bash
claude
```

## 📚 Project Structure

```
claude-code-workshop/
├── backend/
│   ├── server.js           # Express server
│   ├── routes/
│   │   └── tasks.js        # Task CRUD API (has bugs!)
│   └── data/
│       └── tasks.json      # Simple JSON database
├── frontend/
│   ├── index.html          # Main page
│   ├── css/styles.css      # Styling
│   └── js/
│       ├── api.js          # API client
│       └── app.js          # UI logic (has bugs!)
├── .claude/
│   ├── CLAUDE.md           # Project context & standards
│   └── challenges/         # Challenge guides
├── package.json
└── README.md               # This file
```

## 🐛 Known Issues (Intentional!)

This codebase has **9 intentional bugs** for you to find and fix:

### Backend Issues (6)
1. ❌ GET /tasks/:id returns wrong error format
2. ❌ POST /tasks returns 200 instead of 201
3. ❌ POST /tasks has no validation
4. ❌ PUT /tasks/:id has no validation
5. ❌ DELETE /tasks/:id returns 200 instead of 204
6. ❌ GET /tasks doesn't support filtering

### Frontend Issues (3)
7. ❌ Filter buttons don't work
8. ❌ No client-side validation
9. ❌ Filter function doesn't filter

### Missing Features
- PATCH /api/tasks/:id/toggle endpoint

## 📖 Challenges

### Challenge 1: Fix Backend Bugs (20 min) 🟢
**Goal**: Fix HTTP status codes and error formats

**Files**: `backend/routes/tasks.js`

**Tasks**:
- Fix error format inconsistency (Bug 1)
- Fix POST status code (Bug 2)
- Fix DELETE status code (Bug 5)

**Skills**: REST API standards, HTTP status codes

👉 **Start**: Open `.claude/challenges/01-fix-backend-bugs.md`

---

### Challenge 2: Add Validation (20 min) 🟢
**Goal**: Implement input validation on backend

**Files**: `backend/routes/tasks.js`

**Tasks**:
- Validate POST request body (Bug 3)
- Validate PUT request body (Bug 4)
- Return proper 400 errors

**Skills**: Input validation, error handling

👉 **Start**: Open `.claude/challenges/02-add-validation.md`

---

### Challenge 3: Fix Frontend Bugs (15 min) 🟡
**Goal**: Make filter buttons work and add client validation

**Files**: `frontend/js/app.js`

**Tasks**:
- Add filter button event listeners (Bug 7)
- Implement getFilteredTasks() logic (Bug 9)
- Add client-side validation (Bug 8)

**Skills**: DOM manipulation, form validation

👉 **Start**: Open `.claude/challenges/03-fix-frontend-bugs.md`

---

### Challenge 4: Add Toggle Feature (15 min) 🟡
**Goal**: Implement PATCH endpoint to toggle task completion

**Files**: `backend/routes/tasks.js`

**Tasks**:
- Create PATCH /api/tasks/:id/toggle endpoint
- Update only the completed field
- Return proper response

**Skills**: REST API design, partial updates

👉 **Start**: Open `.claude/challenges/04-add-toggle.md`

---

### Challenge 5: Write Tests (Optional, 20 min) 🔴
**Goal**: Write automated tests for your API

**Files**: Create `backend/routes/tasks.test.js`

**Tasks**:
- Write tests for all CRUD operations
- Test validation errors
- Test edge cases

**Skills**: Jest, Supertest, TDD

👉 **Start**: Open `.claude/challenges/05-write-tests.md`

---

### Challenge 6: Git Operations with GitHub MCP (20 min) 🟡
**Goal**: Use Claude Code for your entire Git workflow

**Prerequisites**: GitHub MCP configured (see setup above)

**🚨 IMPORTANT FOR MULTI-PARTICIPANT WORKSHOPS**:
Since many engineers will work on the same repository, **YOU MUST include your name** in all Git operations:

**Required Format**:
- Branch: `feature/yourname-description` (e.g., `feature/angel-validation`)
- Commit: `feat(yourname): description` (e.g., `feat(angel): add validation`)
- PR Title: `[YourName] Description` (e.g., `[Angel] Add Validation`)

**Why?** Prevents branch conflicts, makes tracking easy, prepares you for real team collaboration!

**Tasks**:
- Create feature branch using Claude (**with YOUR name**)
- Commit changes using Claude (**with YOUR name in message**)
- Create pull request using Claude (**with YOUR name in title**)
- Review PR (**instructors will merge to avoid conflicts**)

**Skills**: Git workflow, branching, PRs, Conventional Commits, team collaboration

👉 **Start**: Open `.claude/challenges/06-git-operations.md`

**Example Prompts** (Replace "angel" with YOUR name):
```
"Create a branch called 'feature/angel-my-feature'"

"Commit with message 'feat(angel): add new feature

Implemented by: Angel Viola'"

"Create a pull request to main with title '[Angel] Add Feature' 
and description '...

## Author
Implemented by: Angel Viola
Workshop Challenge: 6'"

"List all open pull requests"

# NOTE: Instructors will merge PRs during workshop
```

---

## 💡 Tips for Success

### DO ✅
- Read `.claude/CLAUDE.md` first (project standards)
- Read each challenge file completely before starting
- Be specific in your prompts to Claude
- Test after each fix
- Ask Claude to explain "why", not just "how"
- Review git diff before committing
- Work through challenges in order

### DON'T ❌
- Try to fix all bugs at once
- Use vague prompts like "fix it" or "make it work"
- Skip testing your changes
- Commit code you don't understand
- Rush through challenges

## 🧪 Testing Your Changes

### Manual Testing

```bash
# Health check
curl http://localhost:3000/api/health

# Get all tasks
curl http://localhost:3000/api/tasks

# Create task
curl -X POST http://localhost:3000/api/tasks -H "Content-Type: application/json" -d "{\"title\":\"Test task\",\"description\":\"Testing\"}"

# Update task
curl -X PUT http://localhost:3000/api/tasks/1 -H "Content-Type: application/json" -d "{\"completed\":true}"

# Delete task
curl -X DELETE http://localhost:3000/api/tasks/1
```

## 🆘 Common Issues

### "Port 3000 already in use"
```bash
# Find process
netstat -ano | findstr :3000
# Kill it
taskkill /PID <PID> /F
```

### "npm not found"
Install Node.js from nodejs.org

### "Claude Code not working"
```bash
claude login
claude --version
```

## 🎉 Completion Checklist

### Core Challenges (Required)
- [ ] Challenge 1: All backend bugs fixed
- [ ] Challenge 2: Validation implemented
- [ ] Challenge 3: All frontend bugs fixed
- [ ] Challenge 4: Toggle endpoint added

### Advanced Challenges (Optional)
- [ ] Challenge 5: Tests written
- [ ] Challenge 6: Git operations completed

### Git Workflow (Using Claude Code)
- [ ] Created feature branches using Claude
- [ ] Committed with proper Conventional Commit messages
- [ ] Created pull request with descriptive title/body
- [ ] Merged and cleaned up branches

### Understanding
- [ ] Understand what each fix does and why
- [ ] Can explain REST API standards
- [ ] Know how to write effective Claude prompts
- [ ] Comfortable using Claude for Git operations

## 📞 Need Help?

1. Check the challenge file for hints
2. Review `.claude/CLAUDE.md` for project standards
3. Ask Claude Code with specific context
4. Ask the workshop instructor

**Happy Learning!** 🚀
