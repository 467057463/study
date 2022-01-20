const net  = require('net');

const PORT = 3000;
const HOST = '127.0.0.1';

const server = net.createServer((socket) => {
  socket.on('data', (data) => {
    console.log('data', data.toString())

    socket.write('hello')
  })

  socket.on('close', () => {
    console.log('close')
  })
})

server.listen(PORT, HOST, () => {
  console.log('服务创建成功')
})