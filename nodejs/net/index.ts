import { createServer } from "http";

// const server = createServer(function (req, res) {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
//   res.setHeader("Access-Controll-Allow-Methods", "*");
//   res.setHeader("Allow", "GET");
//   res.setHeader("Access-Control-Allow-Headers", "Content-type");
//   res.setHeader("Access-Control-Max-Age", 20);
//   res.setHeader("Set-Cookie", "sid=123344; path=/;");
//   res.setHeader("Access-Control-Allow-Credentials", "true");
//   res.end("<b>OKJB</b>");
// });



const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('okay');
});
server.on('upgrade', (req, socket, head) => {
  console.log('test.....')
  socket.write('HTTP/1.1 101 Web Socket Protocol Handshake\r\n' +
               'Upgrade: WebSocket\r\n' +
               'Connection: Upgrade\r\n' +
               '\r\n');

  socket.pipe(socket); // echo back
});

// server.on('request', function(req, res){
//   console.log(res)
//   res.setHeader("Content-type", 'application/json')
//   res.end(JSON.stringify({
//     data: 'hello world!'
//   }))
// })

// server.on('connect', (req, clientSocket, head) => {
//   console.log('ssss')
// })

server.on('upgrade', (req, socket, head) => {
  console.log(req, socket, head)
})

server.listen(3001);

// console.log(exports);
