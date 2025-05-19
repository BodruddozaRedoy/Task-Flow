import React from "react";
import { FiPlus } from "react-icons/fi";
import { MdEditSquare } from "react-icons/md";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import useAllTasks from "../hooks/useAllTasks";
import TaskCard from "./TaskCard";

export default function Completed() {
  const { allTasks } = useAllTasks();
  const filterTodo = allTasks?.filter((prev) => prev.category === "completed");
  return (
    <div>
      {/* header  */}
      <div className="flex items-center gap-2 primary-bg rounded-lg p-3 justify-between sticky top-0 shadow-md">
        <div className="flex items-center gap-2">
          <FiPlus />
          <h1 className="font-semibold">Completed</h1>
        </div>
        <div className="flex items-center gap-1.5 rounded-lg px-2 py-1 bg-[#B0DB9C]/60">
          <IoCheckmarkDoneCircle className="text-lg" />
          <p className="font-bold text-xl">{filterTodo?.length}</p>
        </div>
      </div>

      {/* todo tasks  */}
      <div className="space-y-4 mt-5">
        {filterTodo?.map((task, index) => (
          <TaskCard key={index} task={task} />
        ))}
      </div>
    </div>
  );
}
