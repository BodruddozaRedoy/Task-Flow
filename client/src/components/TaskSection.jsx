import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { MdEditSquare } from "react-icons/md";
import { PiPlusThin } from "react-icons/pi";
import Todo from "./Todo";
import Completed from "./Completed";
import OnProgress from "./OnProgress";
import TaskCard from "./TaskCard";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import AddTask from "./AddTask";
import useAllTasks from "../hooks/useAllTasks";

const taskData = [
  {
    title: "title",
    desc: "desc",
    date: "May 25, 2025",
    category: "todo",
  },
];

export default function TaskSection() {
  const [addTask, setAddTask] = useState(false)
  const {allTasks} = useAllTasks()
  console.log(allTasks)
  return (
    <div className="primary-bg rounded-lg p-5 h-full">
      {/* all tasks */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* add task button  */}
          <button onClick={() => setAddTask(!addTask)} className="w-full rounded-lg py-3 px-5 backdrop-blur bg-black/20 cursor-pointer select-none font-semibold flex items-center gap-2 justify-center ">
            {" "}
            <MdOutlineAddCircleOutline /> Add Task
          </button>
          <h1 className="font-bold text-xl text-nowrap">All Tasks</h1>
        </div>
        <input
          type="text"
          placeholder="Search your task"
          className="py-3 px-5 rounded-lg secondary-bg"
        />
      </div>
      <hr className="my-5" />
      <div className="secondary-bg p-5 rounded-lg grid grid-cols-3 gap-5 h-[86%] ">
        {/* todo */}
        <div className="overflow-y-auto h-full scrollbar-none">
          <Todo />
          <div className="space-y-4">
                      {
            allTasks?.map((task,index) => (
              <TaskCard key={index} task={task}/>
            ))
          }

          </div>
        </div>
        {/* on going  */}
        <OnProgress />
        {/* completed  */}
        <Completed />
      </div>
      {
        addTask && <AddTask setAddTask={setAddTask}/>
      }
    </div>
  );
}
