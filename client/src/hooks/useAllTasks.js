import React, { useEffect, useState } from "react";
import { axiosPublic } from "../axiosPublic";
import socket from "../socket";

export default function useAllTasks() {
  const [allTasks, setAllTasks] = useState([]);
  const fetchData = async () => {
    try {
      const res = await axiosPublic.get("/api/task");
      //   console.log(res.data);
      setAllTasks(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();

    const handleTaskCreated = (newTask) => {
      // console.log("creating Task ID:", newTask);
      setAllTasks((prev) => [...prev, newTask]);
    };
    const handleTaskUpdated = (updatedTask) => {
      setAllTasks( prev => prev.map(task => task._id === updatedTask._id ? updatedTask : task))
    }
    const handleTaskDeleted = (taskId) => {
      // console.log("Deleted Task ID:", taskId);
      setAllTasks(prev => prev.filter(prev => prev._id !== taskId))
    }

    socket.on("task_created", handleTaskCreated);
    socket.on("task_updated", handleTaskUpdated);
    socket.on("task_deleted", handleTaskDeleted);

    return () => {
      socket.off("task_created", handleTaskCreated);
      socket.off("task_updated", handleTaskUpdated);
      socket.off("task_deleted", handleTaskDeleted);
    };
  }, []);

  return { allTasks, setAllTasks };
}
