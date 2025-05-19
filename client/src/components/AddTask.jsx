import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { axiosPublic } from "../axiosPublic";
import Swl from 'sweetalert2'

export default function AddTask({ setAddTask }) {
  const [task, setTask] = useState({
    title: "",
    desc: "",
    category: "todo",
  });
//   console.log(task);
  const handleAdd = async () => {
    try {
      const res = await axiosPublic.post("/api/task", task);
      console.log(res);
      if(res.status === 200){
        setAddTask(false)
        setTask("")
        Swl.fire({
            title: "Task Added",
            icon: "success"
        })
      }
    } catch (error) {
      Swl.fire({
            title: "Network Error",
            icon: "error"
        })
        console.log(error)
    }
  };
  return (
    <div className="flex items-center justify-center backdrop-blur-md bg-black/20 w-screen h-screen absolute top-0 z-50 left-0">
      <div className="p-10 rounded-lg bg-white text-black w-1/2">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-center mb-5">Add Task</h1>
        </div>
        <hr className="text-gray-400" />
        {/* title  */}
        <div className="my-4">
          <h3 className="font-semibold mb-3">Title</h3>
          <input
            type="text"
            name=""
            id=""
            onChange={(e) => setTask({ ...task, title: e.target.value })}
            placeholder="Type here"
            className="py-3 px-5 rounded-lg bg-gray-200 w-full"
          />
        </div>
        {/* desc  */}
        <div>
          <h3 className="font-semibold mb-3">Description <span className="text-sm text-gray-400">(optional)</span></h3>
          <input
            type="text"
            name=""
            id=""
            onChange={(e) => setTask({ ...task, desc: e.target.value })}
            placeholder="Type here"
            className="py-3 px-5 rounded-lg bg-gray-200 w-full"
          />
        </div>
        {/* buttons  */}
        <div className="flex mt-5 gap-5">
          <button
            onClick={() => setAddTask(false)}
            className=" py-3 px-5 rounded-lg bg-red-500 w-full text-center text-white font-semibold"
          >
            Close
          </button>
          <button
            onClick={handleAdd}
            className=" py-3 px-5 rounded-lg primary-bg w-full text-center text-white font-semibold"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
