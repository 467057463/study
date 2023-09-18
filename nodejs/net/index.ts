import { createServer } from 'net';

var PIPE_NAME = "study_pipe";
var PIPE_PATH = "\\\\.\\pipe\\" + PIPE_NAME;

const server = createServer()

server.on('connection', (socket) => {
  socket.on('data', (c)=> {
    console.log('data', c.toString())
    socket.write('test abcdefg')
  })

})

server.listen(PIPE_PATH, () => {
  console.log('server 监听成功', PIPE_PATH)
})


import { Buffer } from 'buffer';

console.log(Buffer)