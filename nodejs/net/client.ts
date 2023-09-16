// const net = require('net');
// const PORT = 3000;
// const HOST = '127.0.0.1';



// // new net.Socket() 返回的是一个双工流
// let client = new net.Socket()

// client.connect(PORT, HOST, () => {
//   console.log('connected server')
//   client.write('client: hello server');
// })
// client.on('data', function (data) {
//   console.log(data.toString())
// });
// setTimeout(()=>{
//   client.end()
// },5000)

import { request } from "http";

const req = request({
  // method: 'get',
  port: 3001,
  host: '127.0.0.1',
  // path: 'www.google.com:80',
  headers: {
    'Connection': 'Upgrade',
    'Upgrade': 'websocket',
  }
})



// req.on('response', (res) => {
//   // console.log('ssss', res)
//   res.on('data', (data) => {
//     console.log(data.toString())
//   })

//   res.on('end', () => {
//     console.log('end =======>')
//   })
// })



req.end();

req.on('upgrade', (res, socket, upgradeHead) => {
  console.log('got upgraded!');
  socket.end();
  process.exit(0);
});

