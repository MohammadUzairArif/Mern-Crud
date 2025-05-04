import express from "express";
import mongoose from "mongoose";
import Task from "../models/task.js";

export const getTask = async (req, res) => {
    try {
        const getTasks = await Task.find({})
        res.status(200).json({ getTasks });
        
    } catch (error) {
        console.error("Error fetching tasks:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const createTask = async (req, res) => {
    const { title, completed } = req.body;
    try {
        const task = await Task.create({ title, completed });
        res.status(201).json({ task });
    } catch (error) {
        console.error("Error creating task:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const getsingleTask = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Task.findById(id);
        if (!task) {
            return res.status(404).json({ error: "Task not found" });
        }
        res.status(200).json({ task });
    } catch (error) {
        console.error("Error fetching task:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
   
}

export const updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, completed } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid task ID" });  
    }
    try {
        const task = await Task.findByIdAndUpdate(id, { title, completed }, { new: true, runValidators: true });
        
        res.status(200).json({ task });
    } catch (error) {
        console.error("Error updating task:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Task.findByIdAndDelete(id);
        if (!task) {
            return res.status(404).json({ error: "Task not found" });
        }
        res.status(200).json({ task });
    } catch (error) {
        console.error("Error deleting task:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}