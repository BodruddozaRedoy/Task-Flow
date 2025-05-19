const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const connectDB = require("./lib/connectDB");
const dotenv = require("dotenv").config();
const taskRoute = require('./routes/taskRoutes');

const app = express();
const server = http.createServer(app);

// Middleware
app.use(cors());
app.use(express.json());

// Inject io to every request
app.use((req, res, next) => {
  req.io = io;
  next();
});

// Routes
app.use("/api", taskRoute);

// Connect MongoDB
connectDB();

// Setup Socket.IO
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", 
    methods: ["GET", "POST", "PUT", "DELETE"],
  },
});

io.on("connection", (socket) => {
  console.log("🔌 New client connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("❌ Client disconnected:", socket.id);
  });
});

// Make IO accessible in routes
app.set("io", io);

// Start server
server.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
