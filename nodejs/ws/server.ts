import { createServer } from "http";


const server = createServer(function(req, res){
  // res.write('hellow')
  res.end('hello nihao')
});

server.listen(8080)
