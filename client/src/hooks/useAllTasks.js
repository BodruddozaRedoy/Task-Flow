import React, { useEffect, useState } from "react";
import { axiosPublic } from "../axiosPublic";

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
  }, [])
  return { allTasks, setAllTasks };
}
