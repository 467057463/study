const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.send('<b>hello world</b>')
});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('login', (msg) => {
    console.log('msg', msg)
  })

  socket.emit('message', 'cao ni ma')
});



server.listen(3000, () => {
  console.log('listening on *:3000');
});