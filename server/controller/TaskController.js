const Task = require("../model/taskModel");

// create task
exports.createTask = async (req, res) => {
  const body = req.body;
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
    const tasks = await Task.find()
    res.json(tasks)
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
