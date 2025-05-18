import React from "react";
import { FiPlus } from "react-icons/fi";
import { MdEditSquare } from "react-icons/md";
import { TbProgress } from "react-icons/tb";


export default function OnProgress() {
  return (
    <div>
      {/* header  */}
      <div className="flex items-center gap-2 primary-bg rounded-lg p-3 justify-between">
        <div className="flex items-center gap-2">
          <FiPlus />
          <h1 className="font-semibold">On Progress</h1>
        </div>
        <div className="flex items-center gap-1.5 rounded-lg px-2 py-1 bg-[#FAD59A]/60">
          <TbProgress className="text-lg" />
          <p className="font-bold text-xl">5</p>
        </div>
      </div>
    </div>
  );
}
