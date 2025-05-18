import React from "react";
import { FiPlus } from "react-icons/fi";
import { MdEditSquare } from "react-icons/md";
import { TbProgress } from "react-icons/tb";
import useAllTasks from "../hooks/useAllTasks";
import TaskCard from "./TaskCard";


export default function OnProgress() {
   const { allTasks } = useAllTasks();
    const filterTodo = allTasks?.filter((prev) => prev.category === "on-progress");
  return (
    <div>
      {/* header  */}
      <div className="flex items-center gap-2 primary-bg rounded-lg p-3 justify-between sticky top-0 shadow-md">
        <div className="flex items-center gap-2">
          <FiPlus />
          <h1 className="font-semibold">On Progress</h1>
        </div>
        <div className="flex items-center gap-1.5 rounded-lg px-2 py-1 bg-[#FAD59A]/60">
          <TbProgress className="text-lg" />
          <p className="font-bold text-xl">5</p>
        </div>
      </div>

      {/* on progress tasks  */}
            <div className="space-y-4 mt-5">
              {filterTodo?.map((task, index) => (
                <TaskCard key={index} task={task} />
              ))}
            </div>
    </div>
  );
}
