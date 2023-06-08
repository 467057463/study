import { WebSocketServer } from 'ws'


const server = new WebSocketServer({ 
  host: '127.0.0.1',
  path: '/test',
  port: 8080 
});

server.on('connection', (socket) => {
  console.log('client connected');

  socket.on('message', (message) => {
    console.log(`received: ${message}`);

    socket.send(`you said: ${message}`);
  });
});

// import { createServer } from "http";
// import { WebSocketServer } from 'ws'
// import { parse } from 'url';

// function heartbeat() {
//   console.log('heartbeat')
//   this.isAlive = true;
// }

// const server = createServer();

// const wss = new WebSocketServer({noServer: true})

// server.on('upgrade', function(request, socket, head){
//   console.log('==============')
//   const { pathname } = parse(request.url);
//   if(pathname === "/"){
//     wss.handleUpgrade(request, socket, head, function done(ws) {
//       wss.emit('connection', ws, request);
//     })
//   }
// })

// wss.on('connection', function connection(ws) {
//   ws.on('error', console.error);

//   ws.on('message', function message(data) {
//     console.log('received: %s', data);

//     ws.send(`hello ${data}`)
//   });

//   ws.send('something');

//   ws.on('pong', heartbeat);
// });

// const interval = setInterval(function ping() {
//   console.log('ssss')
//   console.log(wss.clients)
//   wss.clients.forEach(function each(ws) {
//     if ((ws as any).isAlive === false) return ws.terminate();

//     (ws as any).isAlive = false;
//     ws.ping();
//   });
// }, 3000);

// wss.on('close', function close() {
//   clearInterval(interval);
// });

// server.listen(8080)