// API Configuration
const API_BASE_URL = 'http://localhost:3000/api';

// API Helper Functions
const api = {
  // Get all tasks
  async getTasks() {
    const response = await fetch(`${API_BASE_URL}/tasks`);
    const data = await response.json();

    if (!data.success) {
      throw new Error(data.error?.message || 'Failed to fetch tasks');
    }

    return data.data;
  },

  // Create new task
  async createTask(taskData) {
    const response = await fetch(`${API_BASE_URL}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(taskData)
    });

    const data = await response.json();

    if (!data.success) {
      throw new Error(data.error?.message || 'Failed to create task');
    }

    return data.data;
  },

  // Update task
  async updateTask(id, updates) {
    const response = await fetch(`${API_BASE_URL}/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updates)
    });

    const data = await response.json();

    if (!data.success) {
      throw new Error(data.error?.message || 'Failed to update task');
    }

    return data.data;
  },

  // Delete task
  async deleteTask(id) {
    const response = await fetch(`${API_BASE_URL}/tasks/${id}`, {
      method: 'DELETE'
    });

    // BUG: Backend returns wrong status code, but we handle it
    if (!response.ok) {
      throw new Error('Failed to delete task');
    }

    // Handle both 204 (correct) and 200 with JSON (incorrect but current)
    if (response.status === 204) {
      return true;
    }

    const data = await response.json();
    return data.success;
  }
};
