const Task = require("../model/taskModel");

// create task
exports.createTask = async (req, res) => {
  const body = req.body;
  if (!body) return res.json("Required field needed");
  try {
    const task = await Task.create(body);
    req.io.emit("task_created", task);
    res.json(task).status(201);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// get task
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// update task
exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  try {
    const updatedTask = await Task.findByIdAndUpdate(id, updatedData, {
      new: true,
    });
    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    req.io.emit("task_updated", updatedTask);
    res.json(updatedTask).status(200);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// delete task
exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  // console.log(id);
  // console.log(body)
  try {
    const task = await Task.findByIdAndDelete(id);
    if (!task) return res.json("Task not found");
    req.io.emit("task_deleted", task._id);
    // console.log("Emitting task_deleted:", task._id);
    res.json("Deleted");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
