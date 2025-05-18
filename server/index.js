const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const connectDB = require('./lib/connectDB');
const dotenv = require('dotenv').config()

const app = express();
app.use(cors());
const server = http.createServer(app);
connectDB()

// Socket.IO server
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173', // React client
    methods: ['GET', 'POST']
  }
});

io.on('connection', (socket) => {
  console.log('⚡️ New client connected:', socket.id);

  // Example: receive a message from client
  socket.on('send_message', (data) => {
    console.log('Received message:', data);

    // Broadcast message to all connected clients
    io.emit('receive_message', data);
  });

  socket.on('disconnect', () => {
    console.log('🔌 Client disconnected:', socket.id);
  });
});

server.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
