// State
let tasks = [];
let currentFilter = 'all';

// DOM Elements
const taskForm = document.getElementById('taskForm');
const taskTitle = document.getElementById('taskTitle');
const taskDescription = document.getElementById('taskDescription');
const taskList = document.getElementById('taskList');
const filterButtons = document.querySelectorAll('.filter-btn');

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
  loadTasks();
  setupEventListeners();
});

// Event Listeners
function setupEventListeners() {
  taskForm.addEventListener('submit', handleTaskSubmit);

  // BUG: Filter buttons don't do anything!
  // TODO: Add event listeners for filter buttons
}

// Load tasks from API
async function loadTasks() {
  try {
    taskList.innerHTML = '<p class="loading">Loading tasks...</p>';
    tasks = await api.getTasks();
    renderTasks();
  } catch (error) {
    console.error('Error loading tasks:', error);
    taskList.innerHTML = `<p class="error">Failed to load tasks: ${error.message}</p>`;
  }
}

// Handle task form submission
async function handleTaskSubmit(e) {
  e.preventDefault();

  const title = taskTitle.value.trim();
  const description = taskDescription.value.trim();

  // BUG: No client-side validation!
  // TODO: Validate that title is not empty and meets length requirements

  try {
    const newTask = await api.createTask({ title, description });
    tasks.push(newTask);
    renderTasks();

    // Clear form
    taskForm.reset();
  } catch (error) {
    console.error('Error creating task:', error);
    alert(`Failed to create task: ${error.message}`);
  }
}

// Toggle task completion
async function toggleTask(id) {
  const task = tasks.find(t => t.id === id);
  if (!task) return;

  try {
    const updated = await api.updateTask(id, {
      completed: !task.completed
    });

    // Update local state
    const index = tasks.findIndex(t => t.id === id);
    tasks[index] = updated;
    renderTasks();
  } catch (error) {
    console.error('Error toggling task:', error);
    alert(`Failed to update task: ${error.message}`);
  }
}

// Delete task
async function deleteTask(id) {
  if (!confirm('Are you sure you want to delete this task?')) {
    return;
  }

  try {
    await api.deleteTask(id);

    // Remove from local state
    tasks = tasks.filter(t => t.id !== id);
    renderTasks();
  } catch (error) {
    console.error('Error deleting task:', error);
    alert(`Failed to delete task: ${error.message}`);
  }
}

// BUG: Filter function doesn't work correctly
function getFilteredTasks() {
  // TODO: This should filter based on currentFilter
  // 'all' -> all tasks
  // 'active' -> tasks where completed === false
  // 'completed' -> tasks where completed === true

  return tasks; // Currently just returns all tasks
}

// Render tasks to DOM
function renderTasks() {
  const filteredTasks = getFilteredTasks();

  if (filteredTasks.length === 0) {
    taskList.innerHTML = '<p class="empty">No tasks found. Add one above!</p>';
    return;
  }

  taskList.innerHTML = filteredTasks.map(task => `
    <div class="task-item ${task.completed ? 'completed' : ''}">
      <input
        type="checkbox"
        class="task-checkbox"
        ${task.completed ? 'checked' : ''}
        onchange="toggleTask('${task.id}')"
      >
      <div class="task-content">
        <div class="task-title">${escapeHtml(task.title)}</div>
        ${task.description ? `<div class="task-description">${escapeHtml(task.description)}</div>` : ''}
        <div class="task-meta">Created: ${formatDate(task.createdAt)}</div>
      </div>
      <div class="task-actions">
        <button class="btn btn-danger" onclick="deleteTask('${task.id}')">Delete</button>
      </div>
    </div>
  `).join('');
}

// Utility: Escape HTML to prevent XSS
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Utility: Format date
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}
