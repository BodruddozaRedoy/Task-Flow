import React from "react";
import { FiPlus } from "react-icons/fi";
import { MdEditSquare } from "react-icons/md";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

export default function Completed() {
  return (
    <div>
      {/* header  */}
      <div className="flex items-center gap-2 primary-bg rounded-lg p-3 justify-between">
        <div className="flex items-center gap-2">
          <FiPlus />
          <h1 className="font-semibold">Completed</h1>
        </div>
        <div className="flex items-center gap-1.5 rounded-lg px-2 py-1 bg-[#B0DB9C]/60">
          <IoCheckmarkDoneCircle className="text-lg" />
          <p className="font-bold text-xl">5</p>
        </div>
      </div>
    </div>
  );
}
