// import { request } from "http";

// const req = request('http://localhost:3001', {
//   method: 'get',
// }, function(res) {
//   res.on('data', (chunk) => {
//     console.log(chunk.toString())
//   })
// })

// req.end();

import { createConnection } from "net";

const client = createConnection(3001);

client.on('connect', () => {
  console.log('connecting...')
  console.log(client.localAddress)
  console.log(client.localPort)
  console.log(client.localFamily)

  console.log(client.remoteAddress)
  console.log(client.remotePort)
  console.log(client.remoteFamily)
})

client.on('data', (data) => {
  console.log(data)
})

client.on('close', (error)=>{
  console.log('error', error)
  console.log('closed')
})

client.on('end', () => {
  console.log('on end')
})

client.on('lookup', function(){
  console.log('on lookup', arguments)
})

client.end('hello server');

