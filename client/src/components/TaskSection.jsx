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
  const [showTab, setShowTab] = useState("todo")
  const { allTasks } = useAllTasks();
  console.log(allTasks);

  return (
    <div className="primary-bg rounded-lg p-5 lg:h-full flex flex-col">
      {/* Header */}
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="flex justify-between lg:justify-start w-full items-center gap-4">
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
          className="py-3 px-5 rounded-lg secondary-bg  w-full mt-5 lg:mt-0"
        />
      </div>

      <hr className="my-3 lg:my-5" />
      {/* for mobile  */}
      <div className="flex gap-3 items-center mb-3">
        <div onClick={() => setShowTab("todo")} className="py-3 px-2 w-full text-center font-semibold text-sm rounded-lg secondary-bg">Todo</div>
        <div onClick={() => setShowTab("on-progress")} className="py-3 px-2 w-full text-center font-semibold text-sm rounded-lg secondary-bg">On Progress</div>
        <div onClick={() => setShowTab("completed")} className="py-3 px-2 w-full text-center font-semibold text-sm rounded-lg secondary-bg">Completed</div>
      </div>

      {/* Main Task Grid */}
      <div className="secondary-bg p-3 lg:p-5 rounded-lg grid grid-cols-1 lg:grid-cols-3 lg:gap-5 flex-grow overflow-hidden">
        {/* To-Do */}
        <div className="overflow-y-auto h-full scrollbar-hide rounded-lg">
          <div className="hidden lg:block">
            <Todo />
          </div>
          <div className="flex lg:hidden w-full">
            {showTab === "todo" && <Todo/>}
          </div>
        </div>

        {/* On Progress */}
        <div className="overflow-y-auto h-full scrollbar-hide rounded-lg">
          <div className="hidden lg:block">
            <OnProgress />
          </div>
          <div className="flex lg:hidden w-full">
            {showTab === "on-progress" && <OnProgress/>}
          </div>
        </div>

        {/* Completed */}
        <div className="overflow-y-auto h-full scrollbar-hide rounded-lg">
          <div className="hidden lg:block">
            <Completed />
          </div>
          <div className="flex lg:hidden w-full">
            {showTab === "completed" && <Completed/>}
          </div>
        </div>
      </div>

      {/* Modal: Add Task */}
      {addTask && <AddTask setAddTask={setAddTask} />}
      
    </div>
  );
}
