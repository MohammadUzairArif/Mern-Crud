import express from "express";  
import { getTask, createTask, getsingleTask, updateTask, deleteTask } from "../controllers/task.controller.js";

const router = express.Router();

// get all tasks
router.get("/", getTask);

// create task
router.post("/", createTask);

// get single task
router.get("/:id", getsingleTask);

// update single task
router.patch("/:id", updateTask);

// delete single task
router.delete("/:id", deleteTask);

export default router;