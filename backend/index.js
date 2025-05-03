
import express from 'express';
import dotenv from 'dotenv';
const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.json());

app.get('/api/v1/tasks', (req, res) => {
})

app.post('/api/v1/tasks', (req, res) => {
})

app.get('/api/v1/tasks/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Get task with id: ${id}`);
})

app.patch('/api/v1/tasks/:id', (req, res) => {
})

app.delete('/api/v1/tasks/:id', (req, res) => {
})



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}` );
})