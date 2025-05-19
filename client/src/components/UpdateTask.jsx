import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { axiosPublic } from "../axiosPublic";
import Swl from "sweetalert2";
import useAllTasks from "../hooks/useAllTasks";
import { useEffect } from "react";

export default function UpdateTask({ setUpdateTask, id }) {
  const { allTasks } = useAllTasks();
  const [task, setTask] = useState({
    title: "",
    desc: "",
    category: "todo",
  });
  console.log(task);
  useEffect(() => {
    const findTask = allTasks?.find((prev) => prev._id === id);
    if (findTask) {
      setTask(findTask);
    }
  }, [allTasks, id]);

  //   console.log(task);
  const handleUpdate = async () => {
    try {
      const res = await axiosPublic.put(`/api/task/${id}`, task);
      console.log(res);
      if (res.status === 200) {
        setUpdateTask(false);
        // setTask("")
        Swl.fire({
          title: "Task Updated",
          icon: "success",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex items-center justify-center backdrop-blur-md bg-black/20 w-screen h-screen overflow-hidden fixed  top-0 z-50 left-0">
      <div className="p-5 w-[90%] lg:p-10 rounded-lg bg-white text-black lg:w-1/2">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-center mb-5">Update Task</h1>
        </div>
        <hr className="text-gray-400" />
        {/* title  */}
        <div className="my-4">
          <h3 className="font-semibold mb-3">Title</h3>
          <input
            type="text"
            name=""
            id=""
            value={task?.title}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
            placeholder="Type here"
            className="py-3 px-5 rounded-lg bg-gray-200 w-full"
          />
        </div>
        {/* desc  */}
        <div>
          <h3 className="font-semibold mb-3">Description</h3>
          <input
            type="text"
            name=""
            id=""
            value={task?.desc}
            onChange={(e) => setTask({ ...task, desc: e.target.value })}
            placeholder="Type here"
            className="py-3 px-5 rounded-lg bg-gray-200 w-full"
          />
        </div>
        {/* buttons  */}
        <div className="flex mt-5 gap-5">
          <button
            onClick={() => setUpdateTask(false)}
            className=" py-3 px-5 rounded-lg bg-red-500 w-full text-center text-white font-semibold"
          >
            Close
          </button>
          <button
            onClick={handleUpdate}
            className=" py-3 px-5 rounded-lg primary-bg w-full text-center text-white font-semibold"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
