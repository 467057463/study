import { WebSocketServer } from 'ws'


const server = new WebSocketServer({ port: 8080 });

server.on('connection', (socket) => {
  console.log('client connected');

  socket.on('message', (message) => {
    console.log(`received: ${message}`);

    socket.send(`you said: ${message}`);
  });
});