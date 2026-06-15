# Quick Start Guide

## ✅ Setup Complete!

All files have been created. You're ready to test the workshop!

---

## 🚀 Start the Workshop

### 1. Open Terminal in this directory
```bash
cd "..\claude-code-workshop"
```

### 2. Start the server (if not already running)
```bash
npm start
```

You should see:
```
🚀 Server running at http://localhost:3000
📱 Open your browser to see the app!
```

### 3. Open in Browser
Visit: **http://localhost:3000**

You should see the Task Manager UI!

---

## 🧪 Quick Test

### Test the Application
1. **Add a task** - Fill in title and description, click "Add Task"
2. **Mark complete** - Click the checkbox
3. **Delete a task** - Click the "Delete" button
4. **Try filters** - Click "All", "Active", "Completed" buttons

### Verify Bugs Exist
These should NOT work (intentional bugs):
- ❌ Filter buttons don't change the view (Bug 7)
- ❌ Can submit empty task (Bug 8)

---

## 📚 Workshop Structure

### For Engineers:
1. Read `README.md` - Complete workshop guide
2. Read `.claude/CLAUDE.md` - Project standards
3. Start with `.claude/challenges/01-fix-backend-bugs.md`
4. Work through challenges 1-4 in order

### The 9 Intentional Bugs:

**Backend** (`backend/routes/tasks.js`):
1. Line 40 - Wrong error format
2. Line 73 - POST returns 200 (should be 201)
3. Line 54 - No validation on POST
4. Line 92 - No validation on PUT
5. Line 126 - DELETE returns 200 (should be 204)
6. Line 25 - No filtering support

**Frontend** (`frontend/js/app.js`):
7. Line 21 - Filter buttons don't work
8. Line 52 - No client-side validation
9. Line 101 - Filter function broken

---

## 🧪 Test Backend with curl

```bash
# Health check
curl http://localhost:3000/api/health

# Get all tasks
curl http://localhost:3000/api/tasks

# Create task
curl -X POST http://localhost:3000/api/tasks -H "Content-Type: application/json" -d "{\"title\":\"Test task\",\"description\":\"Testing\"}"

# Get task by ID
curl http://localhost:3000/api/tasks/1

# Delete task
curl -X DELETE http://localhost:3000/api/tasks/1
```

---

## 📁 Important Files

| File | Purpose |
|------|---------|
| `README.md` | Complete workshop guide |
| `.claude/CLAUDE.md` | Project standards & bugs list |
| `.claude/challenges/01-*.md` | Challenge 1: Fix Backend Bugs |
| `.claude/challenges/02-*.md` | Challenge 2: Add Validation |
| `.claude/challenges/03-*.md` | Challenge 3: Fix Frontend Bugs |
| `.claude/challenges/04-*.md` | Challenge 4: Add Toggle Feature |
| `backend/routes/tasks.js` | Main file with backend bugs |
| `frontend/js/app.js` | Main file with frontend bugs |

---

## 🎯 Next Steps

### Option 1: Test as an Engineer
1. Start Claude Code: `claude`
2. Open Challenge 1: `.claude/challenges/01-fix-backend-bugs.md`
3. Try fixing the first bug using Claude Code

### Option 2: Prepare for Workshop
1. Review all challenge files
2. Practice fixing one bug yourself
3. Push to GitHub (optional)
4. Share with students

### Option 3: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit: Claude Code Workshop"
git remote add origin <your_origin>
git branch -M main
git push -u origin main
```

---

## 🆘 Troubleshooting

### Server won't start
- Check if port 3000 is in use: `netstat -ano | findstr :3000`
- Kill process: `taskkill /PID <PID> /F`
- Or use different port: `set PORT=3001 && npm start`

### Can't see changes
- Hard refresh browser: `Ctrl + Shift + R`
- Clear browser cache
- Restart server

### npm errors
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again

---

## ✅ Verification Checklist

Before running workshop:
- [ ] Server starts without errors
- [ ] Browser shows Task Manager UI at http://localhost:3000
- [ ] Can add tasks
- [ ] Can delete tasks
- [ ] Can mark tasks complete
- [ ] Filter buttons exist but DON'T work (Bug 7)
- [ ] Can submit empty task (Bug 8)
- [ ] All .claude documentation files exist
- [ ] All 4 challenge guides are complete

---

## 🎉 You're Ready!

The workshop is fully set up and ready to use. Students will learn Claude Code by fixing real bugs in a realistic application!

**Total Setup Time**: ~2 minutes  
**Workshop Duration**: 90 minutes  
**Difficulty**: Beginner to Intermediate  

**Have fun teaching!** 🚀
