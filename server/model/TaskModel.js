const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: String,
    desc: String,
    category: String,
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
