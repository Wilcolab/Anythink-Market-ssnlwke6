const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Initial tasks array (same as Python version)
let tasks = [
    "Write a diary entry from the future",
    "Create a time machine from a cardboard box",
    "Plan a trip to the dinosaurs",
    "Draw a futuristic city",
    "List items to bring on a time-travel adventure"
];

// GET / - Hello World
app.get('/', (req, res) => {
    res.send('Hello World');
});

// POST /tasks - Add a new task
app.post('/tasks', (req, res) => {
    const { text } = req.body;
    tasks.push(text);
    res.json({ message: 'Task added successfully' });
});

// GET /tasks - Get all tasks
app.get('/tasks', (req, res) => {
    res.json({ tasks: tasks });
});

// Start server on port 8000
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
