import React from "react";
import { PiTimerFill } from "react-icons/pi";
import moment from "moment";
import { FaEdit } from "react-icons/fa";
import { ImBin2 } from "react-icons/im";
import { axiosPublic } from "../axiosPublic";
import Swal from "sweetalert2";
import { useState } from "react";
import UpdateTask from "./UpdateTask";

export default function TaskCard({ task }) {
  const [updateTask, setUpdateTask] = useState(false);
  const handleDelete = async () => {
    try {
      const res = await axiosPublic.delete(`/api/task/${task?._id}`);
      console.log(res);
      if (res.status === 200) {
        Swal.fire({
          title: "Task Deleted",
          icon: "success",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleOnProgress = async () => {
    if (task?.category === "todo") {
      try {
        const res = await axiosPublic.put(`/api/task/${task?._id}`, {
          category: "on-progress",
        });
        if (res.status === 200) {
          Swal.fire({
            title: "Task Updated",
            icon: "success",
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
    if (task?.category === "on-progress") {
      try {
        const res = await axiosPublic.put(`/api/task/${task?._id}`, {
          category: "completed",
        });
        if (res.status === 200) {
          Swal.fire({
            title: "Task Updated",
            icon: "success",
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="p-5 rounded-lg primary-bg">
      <div className="flex items-center justify-between">
        <p className="text-gray-400 font-semibold flex items-center gap-2 mb-4">
          <PiTimerFill />{" "}
          {moment(task?.createdAt).format("YYYY - MM - DD | HH:MM")}
        </p>
        {/* buttons  */}
        <div className="space-x-3">
          <button onClick={() => setUpdateTask(!updateTask)}>
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
        <button
          disabled={task?.category === "completed"}
          onClick={handleOnProgress}
          className={`
    py-1 px-2 text-sm rounded-lg select-none
    ${
      task?.category === "completed"
        ? "bg-green-500 cursor-not-allowed opacity-50 cur"
        : "secondary-bg cursor-pointer"
    }
  `}
        >
          {task?.category === "todo" ? "On Progress" : "Completed"}
        </button>
      </div>
      {updateTask && (
        <UpdateTask setUpdateTask={setUpdateTask} id={task?._id} />
      )}
    </div>
  );
}
