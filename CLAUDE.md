# Claude Code Workshop - Task Manager

## Project Overview

This is a simple fullstack Task Manager application used for teaching Claude Code in a hands-on workshop setting.

**Important**: This codebase contains **intentional bugs and incomplete features** as teaching material. Students will use Claude Code to identify and fix these issues.

### Tech Stack
- **Backend**: Node.js + Express
- **Frontend**: Vanilla JavaScript (HTML/CSS/JS)
- **Data Storage**: JSON file (`backend/data/tasks.json`)
- **Testing**: Jest + Supertest

### Architecture
```
/backend - Express API server
  /routes/tasks.js - Task CRUD endpoints
  /data/tasks.json - JSON database
  server.js - Server entry point

/frontend - Vanilla JS client
  /css/styles.css - Styling
  /js/api.js - API client wrapper
  /js/app.js - UI logic & state
  index.html - Main page
```

**Note**: For detailed API standards, validation rules, and known bugs, see `.claude/CLAUDE.md`

## Behavioral Guidelines (Karpathy Principles)

When working on this codebase, follow these principles to write clean, maintainable code:

### 1. Think Before Coding
**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

### 2. Simplicity First
**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

### 3. Surgical Changes
**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

### 4. Goal-Driven Execution
**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

---

## Workshop Approach

When fixing bugs or implementing features in this codebase:

1. **Read `.claude/CLAUDE.md` first** - Contains all API standards, validation rules, and known issues
2. **Apply Karpathy principles** - Think, simplify, surgical changes, verify
3. **Follow the test-driven flow**:
   - Write a test that fails
   - Implement the minimal fix
   - Verify the test passes
   - Move to next issue

This workshop teaches practical Claude Code usage while reinforcing clean coding habits.
