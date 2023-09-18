import { WebSocketServer } from 'ws'
import { createServer } from 'http';
import { parse } from 'url';

const server = createServer();


let timeoutHeartbeat = false;

const wss = new WebSocketServer({ noServer: true });

wss.on('connection', (socket) => {
  console.log('client connected');

  socket.on('message', (message) => {
    const res = JSON.parse(message.toString())
    const { method, id } = res;
    console.log(`received: ${message}`);

    // if(method === 100000 && !timeoutHeartbeat) {
    //   timeoutHeartbeat = true;
    //   setTimeout(() => {
    //     socket.send(JSON.stringify({
    //       ...res,
    //       code: 200
    //     }));
    //   }, 6000)
    //   return;
    // }

    socket.send(JSON.stringify({
      ...res,
      code: 200
    }));
    
  });
  
  socket.on('pong', (data) => {
    console.log('pong', data.toString())
  })

  socket.on('ping', (data) => {
    console.log('ping', data.toString())
  })

  // setTimeout(() => {
  //   socket.close()
  // }, 7000)
});

server.on('upgrade', (request, socket, head) => {
  console.log('upgrad', request, socket, head)
  const { pathname } = parse(request.url);

  if (pathname === '/foo') {
    wss.handleUpgrade(request, socket, head, function done(ws) {
      wss.emit('connection', ws, request);
    });
  }
})


server.listen(8080)