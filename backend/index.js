
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cors from 'cors';
import Taskroute from './routes/task.route.js';

const app = express();


const PORT = process.env.PORT || 3000;
app.use(cors())
app.use(express.json());
app.use("/api/v1/tasks", Taskroute)


dotenv.config();

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}` );
})
