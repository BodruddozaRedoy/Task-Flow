import React from "react";
import { PiTimerFill } from "react-icons/pi";
import moment from "moment";
import { FaEdit } from "react-icons/fa";
import { ImBin2 } from "react-icons/im";
import { axiosPublic } from "../axiosPublic";
import Swal from "sweetalert2";

export default function TaskCard({ task }) {
  const handleDelete = async () => {
    try {
      const res = await axiosPublic.delete(`/api/task/${task?._id}`)
      console.log(res)
      if(res.status === 200){
        Swal.fire({
          title: "Task Deleted",
          icon: "success"
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="p-5 rounded-lg primary-bg">
      <div className="flex items-center justify-between">
        <p className="text-gray-400 font-semibold flex items-center gap-2 mb-4">
          <PiTimerFill />{" "}
          {moment(task?.createdAt).format("YYYY - MM - DD | HH:MM")}
        </p>
        {/* buttons  */}
        <div className="space-x-3">
          <button>
            <FaEdit />
          </button>
          <button onClick={handleDelete}>
            <ImBin2 />
          </button>
        </div>
      </div>
      <h1 className="font-semibold text-lg">{task?.title}</h1>
      <p className="text-gray-400 font-semibold">{task?.desc}</p>
      <hr className="my-3" />
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold">Time Left: 2</p>
        <div className="py-1 text-sm cursor-pointer select-none px-2 rounded-lg secondary-bg">
          On Progress
        </div>
      </div>
    </div>
  );
}
