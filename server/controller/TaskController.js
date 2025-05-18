const Task = require("../model/TaskModel");

exports.createTask = async (req, res) => {
  const body = req.body;
  try {
    const task = await Task.create(body);
    req.io.emit("Task created", task);
    req.json(task).status(201);
  } catch (error) {
    res.status(400).json({ message: err.message });
  }
};
