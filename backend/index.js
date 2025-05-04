
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import Task from './models/task.js';
const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.json());


app.get('/api/v1/tasks', async (req, res) => {
    try {
        const getTasks = await Task.find({})
        res.status(200).json({ getTasks });
        
    } catch (error) {
        console.error("Error fetching tasks:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

app.post('/api/v1/tasks', async (req, res) => {
    const { title, completed } = req.body;
    try {
        const task = await Task.create({ title, completed });
        res.status(201).json({ task });
    } catch (error) {
        console.error("Error creating task:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

app.get('/api/v1/tasks/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Get task with id: ${id}`);
})

app.patch('/api/v1/tasks/:id', (req, res) => {
})

app.delete('/api/v1/tasks/:id', (req, res) => {
})

dotenv.config();

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}` );
})
