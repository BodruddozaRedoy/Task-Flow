import React, { useState } from "react";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import Todo from "./Todo";
import Completed from "./Completed";
import OnProgress from "./OnProgress";
import AddTask from "./AddTask";
import UpdateTask from "./UpdateTask";
import useAllTasks from "../hooks/useAllTasks";

export default function TaskSection() {
  const [addTask, setAddTask] = useState(false);
  
  const { allTasks } = useAllTasks();
  console.log(allTasks);

  return (
    <div className="primary-bg rounded-lg p-5 h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setAddTask(!addTask)}
            className="rounded-lg py-3 px-5 backdrop-blur bg-black/20 cursor-pointer select-none font-semibold flex items-center gap-2"
          >
            <MdOutlineAddCircleOutline /> Add Task
          </button>
          <h1 className="font-bold text-xl whitespace-nowrap">All Tasks</h1>
        </div>
        <input
          type="text"
          placeholder="Search your task"
          className="py-3 px-5 rounded-lg secondary-bg"
        />
      </div>

      <hr className="my-5" />

      {/* Main Task Grid */}
      <div className="secondary-bg p-5 rounded-lg grid grid-cols-3 gap-5 flex-grow overflow-hidden">
        {/* To-Do */}
        <div className="overflow-y-auto h-full scrollbar-hide rounded-lg">
          <Todo />
        </div>

        {/* On Progress */}
        <div className="overflow-y-auto h-full scrollbar-hide rounded-lg">
          <OnProgress />
        </div>

        {/* Completed */}
        <div className="overflow-y-auto h-full scrollbar-hide rounded-lg">
          <Completed />
        </div>
      </div>

      {/* Modal: Add Task */}
      {addTask && <AddTask setAddTask={setAddTask} />}
      
    </div>
  );
}
