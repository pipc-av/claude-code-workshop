# Challenge 6: Git Operations with GitHub MCP

**Difficulty**: 🟡 Intermediate  
**Time**: 20 minutes  
**Goal**: Learn to use Claude Code for Git operations through natural language instead of memorizing Git commands

---

## 🚨 IMPORTANT: Multiple Engineers Workshop Rules

Since **many engineers are doing this workshop on the same repository**, follow these critical rules:

### ✅ ALWAYS Include Your Name

**Branch Names**:
```
✅ feature/yourname-description
✅ fix/yourname-description
❌ feature/description (NO! Will conflict!)
```

**Commit Messages**:
```
✅ feat(yourname): description
✅ fix(yourname): description
❌ feat: description (NO! Hard to track!)
```

**PR Titles**:
```
✅ [YourName] Feature Description
✅ [Angel] Add Validation
❌ Feature Description (NO! Too many similar PRs!)
```

### 🛑 DO NOT Merge Your Own PRs

- Instructors will review and merge all PRs
- This prevents conflicts and maintains clean history
- Focus on creating good PRs, not merging them

### ✍️ Replace "yourname" with YOUR actual name!

Examples throughout this guide use placeholder names. **Replace them with YOUR name**:
- If your name is **Angel**, use: `feature/angel-add-validation`
- If your name is **John**, use: `feature/john-add-validation`
- If your name is **Maria**, use: `feature/maria-add-validation`

---

## Prerequisites

Before starting this challenge, ensure:
- ✅ You have completed Challenges 1-4 (or at least have some changes to commit)
- ✅ GitHub MCP is configured in your Claude Code settings
- ✅ You have a GitHub account and repository access
- ✅ Your local git is configured with your name and email
- ✅ **You know YOUR name to include in all Git operations!** 😊

---

## Learning Objectives

By the end of this challenge, you'll be able to:
- Create branches using natural language prompts
- Commit changes with proper commit messages
- Create pull requests with descriptive titles and bodies
- Review and manage PRs using Claude
- Understand Git workflow without memorizing commands

---

## Part 1: Create a Feature Branch (5 min)

### ⚠️ IMPORTANT: Use Your Name in Branch Names!

Since multiple engineers are doing this workshop on the same repository, **always include your name** in branch names to avoid conflicts.

**Branch Naming Convention**:
```
feature/<your-name>-<description>
fix/<your-name>-<description>
```

**Examples**:
- `feature/angel-add-validation` (if your name is Angel)
- `feature/john-add-validation` (if your name is John)
- `fix/maria-status-codes` (if your name is Maria)

---

### Task 1.1: Create a new branch with YOUR name

Instead of typing `git checkout -b feature/add-validation`, ask Claude:

**Good Prompt** ✅ (Replace "yourname" with your actual name):
```
Create a new branch called 'feature/yourname-add-validation' from main
```

**Example**:
```
Create a new branch called 'feature/angel-add-validation' from main
```

**What Claude does**:
- Uses `github_create_branch` MCP tool
- Switches you to the new branch
- Confirms branch creation

**Verify**:
```bash
git branch
# Should show: * feature/yourname-add-validation
```

---

### Task 1.2: Alternative - Create branch from specific commit

**Advanced Prompt** ✅ (with your name):
```
Create a branch called 'fix/yourname-status-codes' from commit abc123
```

**What to learn**:
- Claude understands Git concepts (branches, commits, refs)
- You don't need to remember Git command syntax
- Claude can help with complex Git operations
- **ALWAYS include your name to avoid conflicts with other participants**

---

## Part 2: Commit Changes (5 min)

### Task 2.1: Commit with proper message

Instead of typing `git add . && git commit -m "..."`, ask Claude:

**Good Prompt** ✅ (Include your name in commit for tracking):
```
Commit all my changes with message: 
"feat(yourname): add input validation for task title and description

- Title must be 1-100 characters
- Description max 500 characters
- Returns 400 Bad Request for invalid input

Implemented by: Your Full Name"
```

**Example**:
```
Commit all my changes with message: 
"feat(angel): add input validation for task title and description

- Title must be 1-100 characters
- Description max 500 characters
- Returns 400 Bad Request for invalid input

Implemented by: Angel Viola"
```

**What Claude does**:
- Stages all changes (`git add .`)
- Creates commit with proper format
- Follows Conventional Commits format (feat:, fix:, etc.)

**Verify**:
```bash
git log -1
# Should show your commit with the message
```

---

### Task 2.2: Understanding Conventional Commits

Claude helps you write proper commit messages following this format:

```
<type>(<your-name>): <short summary>

<optional longer description>

Implemented by: Your Full Name
```

**Types**:
- `feat:` - New feature
- `fix:` - Bug fix
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `docs:` - Documentation changes
- `chore:` - Maintenance tasks

**Example Prompts** (with your name):
```
Commit changes with message "fix(angel): correct POST status code from 200 to 201

Implemented by: Angel Viola"

Commit changes with message "refactor(john): extract validation logic to helper functions

Implemented by: John Doe"

Commit changes with message "test(maria): add tests for task validation

Implemented by: Maria Garcia"
```

**Why include your name?**
- Easy to identify who made which changes
- Helps instructors track individual progress
- Prevents confusion when multiple people work on same repository
- Professional practice for team environments

---

## Part 3: Create Pull Request (5 min)

### Task 3.1: Create a PR with Claude

Instead of using `gh pr create` or GitHub web UI, ask Claude:

**Good Prompt** ✅ (Include your name in title):
```
Create a pull request from this branch to main with:
- Title: "[YourName] Add Input Validation for Tasks"
- Description: "This PR implements validation for task creation and updates:
  
  ## Changes
  - Added validation for task title (1-100 chars, required)
  - Added validation for task description (max 500 chars, optional)
  - Returns 400 Bad Request for invalid input
  - Follows error format from CLAUDE.md
  
  ## Testing
  - Tested with curl for valid input (201 Created)
  - Tested with empty title (400 Bad Request)
  - Tested with title > 100 chars (400 Bad Request)
  - Tested with description > 500 chars (400 Bad Request)
  
  ## Author
  Implemented by: Your Full Name
  Workshop Challenge: 6
  
  Closes #2"
```

**Example**:
```
Create a pull request from this branch to main with:
- Title: "[Angel] Add Input Validation for Tasks"
- Description: "This PR implements validation for task creation and updates:
  
  ## Changes
  - Added validation for task title (1-100 chars, required)
  - Added validation for task description (max 500 chars, optional)
  - Returns 400 Bad Request for invalid input
  - Follows error format from CLAUDE.md
  
  ## Testing
  - Tested with curl for valid input (201 Created)
  - Tested with empty title (400 Bad Request)
  - Tested with title > 100 chars (400 Bad Request)
  - Tested with description > 500 chars (400 Bad Request)
  
  ## Author
  Implemented by: Angel Viola
  Workshop Challenge: 6
  
  Closes #2"
```

**What Claude does**:
- Uses `github_create_pull_request` MCP tool
- Creates PR with formatted description
- Links to issues if you mention them (`Closes #2`)
- Provides PR URL

---

### Task 3.2: Review PR structure

A good PR should include:
- **Clear title with your name** (who made the change and what changed)
- **Context** (why it changed)
- **Changes list** (what specifically was done)
- **Testing notes** (how it was verified)
- **Author information** (your full name and challenge number)
- **Issue references** (links to related issues)

**Example Template** (Replace YourName):

```
Create a pull request from this branch to main with:
- Title: "[YourName] Fix Backend API Status Codes"
- Description: "Fixes incorrect HTTP status codes in REST API:
  
  ## Problem
  POST /tasks was returning 200 instead of 201 Created
  DELETE /tasks/:id was returning 200 instead of 204 No Content
  
  ## Solution
  Updated status codes to follow REST standards from CLAUDE.md
  
  ## Testing
  curl -X POST ... (returns 201)
  curl -X DELETE ... (returns 204)
  
  ## Author
  Implemented by: Your Full Name
  Workshop Challenge: 6
  
  Fixes #1"
```

**Why include your name in the PR title?**
- Instructors can easily identify each participant's PRs
- Prevents confusion when sorting through many PRs
- Simulates real team environments where attribution matters
- Makes it easy to find your own PRs later

---

## Part 4: Manage Pull Requests (5 min)

### Task 4.1: List PRs

**Prompt** ✅:
```
List all open pull requests in this repository
```

**What you'll see**:
- PR number
- Title
- Author
- Status (open/closed)
- Created date

---

### Task 4.2: Get PR details

**Prompt** ✅:
```
Get details for pull request #1
```

**What you'll see**:
- Full description
- Commits in the PR
- Files changed
- Review status

---

### Task 4.3: Merge PR (if you have permissions)

**Prompt** ✅:
```
Merge pull request #1 and delete the feature branch
```

**What Claude does**:
- Merges PR to main
- Deletes the feature branch
- Confirms completion

---

## Part 5: Complete Git Workflow Example

Here's a complete workflow using only Claude prompts **(with your name included)**:

```
# Step 1: Create branch (with YOUR name)
"Create a new branch called 'fix/angel-delete-status-code' from main"

# Step 2: Make changes
[Use Claude to fix the code...]

# Step 3: Commit changes (with YOUR name)
"Commit all changes with message 'fix(angel): change DELETE status code from 200 to 204

Implemented by: Angel Viola'"

# Step 4: Push to remote (if needed)
"Push this branch to origin"

# Step 5: Create PR (with YOUR name in title)
"Create a pull request from this branch to main with:
- Title: '[Angel] Fix DELETE Endpoint Status Code'
- Description: 'Changes DELETE /tasks/:id to return 204 No Content instead of 200 OK, following REST standards.

## Author
Implemented by: Angel Viola
Workshop Challenge: 6'"

# Step 6: Review (ask teammate or review yourself)
"List all open pull requests"

# Step 7: Merge (DO NOT MERGE unless instructor approves!)
# During workshop, instructors will review and merge
# "Merge pull request #2 and delete the branch"
```

**⚠️ IMPORTANT FOR WORKSHOP**:
- **DO** create branches with your name
- **DO** commit with your name
- **DO** create PRs with your name in the title
- **DON'T** merge PRs during the workshop (let instructors review first)
- Instructors will review all PRs before merging to avoid conflicts

---

## Common Git Operations with Claude

### Check status
```
"What's the status of my git repository?"
"Show me uncommitted changes"
```

### View history
```
"Show me the last 5 commits"
"Show commits from the last week"
```

### Branch management
```
"List all branches"
"Delete branch 'old-feature'"
"Switch to branch 'develop'"
```

### Stash changes
```
"Stash my current changes"
"Apply the last stash"
```

### Undo changes
```
"Undo my last commit but keep the changes"
"Discard all uncommitted changes"
```

---

## Best Practices

### DO ✅

**Write descriptive commit messages**:
```
✅ "feat: add email validation to user registration form"
❌ "fix stuff"
```

**Create focused PRs**:
```
✅ One PR per feature/fix
❌ Multiple unrelated changes in one PR
```

**Link issues**:
```
✅ "Closes #5" or "Fixes #5" in PR description
❌ No issue references
```

**Test before committing**:
```
✅ Run tests, verify changes work
❌ Commit untested code
```

**Use descriptive branch names with your name**:
```
✅ feature/angel-add-user-auth
✅ fix/john-login-validation
✅ refactor/maria-extract-services
❌ my-branch
❌ test
❌ fix
❌ feature/add-validation (missing name - conflicts with others!)
```

### DON'T ❌

**Vague commit messages**:
```
❌ "updates"
❌ "fix"
❌ "changes"
```

**Commit without testing**:
```
❌ Committing code that doesn't run
❌ Committing failing tests
```

**Mix unrelated changes**:
```
❌ Fixing bug A + adding feature B in same commit
```

**Force push to shared branches**:
```
❌ "Force push to main"
```

---

## Troubleshooting

### "GitHub MCP not configured"
**Solution**: Check `.claude/settings.json` has GitHub MCP server configured with valid token

### "Branch already exists"
**Solution**: 
```
"Delete branch 'feature/old-name'"
"Create a new branch called 'feature/new-name'"
```

### "Nothing to commit"
**Solution**: Make sure you have changes:
```
"Show me what files have changed"
```

### "Permission denied"
**Solution**: Check your GitHub token has required permissions (repo scope)

---

## Success Criteria

You've completed this challenge when you can:
- ✅ Create branches using natural language
- ✅ Commit with proper Conventional Commit messages
- ✅ Create PRs with descriptive titles and descriptions
- ✅ List and review PRs
- ✅ Merge PRs using Claude
- ✅ Understand Git workflow without memorizing commands

---

## What You Learned

### Technical Skills
- Git branching strategy
- Conventional Commits format
- Pull request best practices
- Code review workflow

### Claude Code Skills
- Using GitHub MCP for Git operations
- Writing natural language prompts for Git tasks
- Understanding Claude can replace memorizing Git commands
- Letting AI handle Git complexity while you focus on code

---

## Next Steps

After completing this challenge:
1. Practice creating branches for different types of work (features, fixes, refactors)
2. Review your team's Git workflow and adapt prompts accordingly
3. Experiment with more advanced Git operations through Claude
4. Set up Git hooks in `.claude/settings.json` to automate checks

---

## Example Session

Here's what a complete session looks like **(with your name included)**:

```
You: "Create a branch called 'feature/angel-add-priority-field'"
Claude: [Creates branch]

You: [Make code changes using Claude...]

You: "Commit with message 'feat(angel): add priority field to tasks
- Added priority enum (low, medium, high)
- Updated task schema
- Added validation

Implemented by: Angel Viola'"
Claude: [Commits changes]

You: "Push this branch to origin"
Claude: [Pushes branch]

You: "Create a PR to main with title '[Angel] Add Task Priority Field' 
and description 'Adds optional priority field to tasks. 
Default is medium. Tested with all priority values.

## Author
Implemented by: Angel Viola
Workshop Challenge: 6'"
Claude: [Creates PR with URL]

You: "List open PRs"
Claude: [Shows PR #15 - [Angel] Add Task Priority Field]

You: "Show me the details of my PR"
Claude: [Shows your PR details]

# During workshop: DON'T merge yourself!
# Instructors will review and merge
```

**Total time**: 5 minutes  
**Git commands memorized**: 0  
**Focus**: On your code, not Git syntax  
**Conflict risk**: Zero (your name makes your branches unique!)

---

**Congratulations!** 🎉

You now know how to use Claude Code for your entire Git workflow. No more memorizing commands, no more searching Stack Overflow for Git syntax. Just describe what you want to do, and Claude handles the rest!
