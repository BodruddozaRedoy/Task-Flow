import React from "react";
import HomePage from "./pages/HomePage";
import { io } from "socket.io-client";
import { useState } from "react";

const socket = io("http://localhost:5000"); // connect to backend

export default function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Receive message from server
    socket.on("receive_message", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => {
      socket.disconnect(); // cleanup on unmount
    };
  }, []);

  const sendMessage = () => {
    socket.emit("send_message", message);
    setMessage("");
  };
  return (
    <div className="text-white secondary-bg font-raleway">
      <HomePage />
    </div>
  );
}
