const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const DB_FILE = path.join(__dirname, '../data/tasks.json');

// Helper to read tasks from JSON file
function readTasks() {
  try {
    const data = fs.readFileSync(DB_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

// Helper to write tasks to JSON file
function writeTasks(tasks) {
  fs.writeFileSync(DB_FILE, JSON.stringify(tasks, null, 2));
}

// GET /api/tasks - List all tasks
// BUG: No filtering by status
router.get('/', (req, res) => {
  const tasks = readTasks();
  res.json({
    success: true,
    data: tasks
  });
});

// GET /api/tasks/:id - Get single task
router.get('/:id', (req, res) => {
  const tasks = readTasks();
  const task = tasks.find(t => t.id === req.params.id);

  // BUG: Wrong error format
  if (!task) {
    return res.status(404).json({
      success: false,
      error: 'Not found'  // Should be an object
    });
  }

  res.json({
    success: true,
    data: task
  });
});

// POST /api/tasks - Create task
// BUG: No validation!
router.post('/', (req, res) => {
  const tasks = readTasks();
  const { title, description } = req.body;

  // TODO: Add validation
  // - title required, 1-100 chars
  // - description optional, max 500 chars

  const newTask = {
    id: Date.now().toString(),
    title,
    description: description || '',
    completed: false,
    createdAt: new Date().toISOString()
  };

  tasks.push(newTask);
  writeTasks(tasks);

  // BUG: Should return 201
  res.json({
    success: true,
    data: newTask
  });
});

// PUT /api/tasks/:id - Update task
router.put('/:id', (req, res) => {
  const tasks = readTasks();
  const index = tasks.findIndex(t => t.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      error: { message: 'Task not found' }
    });
  }

  // BUG: Doesn't validate input
  const { title, description, completed } = req.body;

  tasks[index] = {
    ...tasks[index],
    ...(title && { title }),
    ...(description !== undefined && { description }),
    ...(completed !== undefined && { completed })
  };

  writeTasks(tasks);

  res.json({
    success: true,
    data: tasks[index]
  });
});

// DELETE /api/tasks/:id - Delete task
router.delete('/:id', (req, res) => {
  const tasks = readTasks();
  const index = tasks.findIndex(t => t.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      error: { message: 'Task not found' }
    });
  }

  tasks.splice(index, 1);
  writeTasks(tasks);

  // BUG: Should return 204
  res.json({
    success: true,
    message: 'Task deleted'
  });
});

// TODO: Add PATCH /api/tasks/:id/toggle - Toggle completed status

module.exports = router;
