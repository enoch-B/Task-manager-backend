const express = require('express');
const fs = require('fs-extra');
const cors = require('cors');
const app = express();
const PORT = 3000;

const TASK_FILE = './tasks.json';

app.use(cors());
app.use(express.json());

// Utility: Load tasks from file
const loadTasks = async () => await fs.readJson(TASK_FILE).catch(() => []);
const saveTasks = async (tasks) => await fs.writeJson(TASK_FILE, tasks);

// API Health Page
app.get('/', (req, res) => {
  res.send('<h2>✅ Task API is running.</h2>');
});

// Get all tasks
app.get('/api/tasks', async (req, res) => {
  const tasks = await loadTasks();
  res.json(tasks);
});

// Add a new task
app.post('/api/tasks', async (req, res) => {
  const tasks = await loadTasks();
  const newTask = {
    id: Date.now().toString(),
    title: req.body.title || 'Untitled Task',
    completed: false,
  };
  tasks.push(newTask);
  await saveTasks(tasks);
  res.status(201).json(newTask);
});

// Mark task as completed
app.put('/api/tasks/:id', async (req, res) => {
  const tasks = await loadTasks();
  const index = tasks.findIndex((t) => t.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Task not found' });
  tasks[index].completed = true;
  await saveTasks(tasks);
  res.json(tasks[index]);
});

// Delete a task
app.delete('/api/tasks/:id', async (req, res) => {
  let tasks = await loadTasks();
  const initialLength = tasks.length;
  tasks = tasks.filter((t) => t.id !== req.params.id);
  if (tasks.length === initialLength)
    return res.status(404).json({ error: 'Task not found' });
  await saveTasks(tasks);
  res.json({ success: true });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
