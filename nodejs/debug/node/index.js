const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3456;
const serverUrl = `http://${hostname}:${port}`;

function test(){
  const a = 'a';
  const b = 'b'
  return a + b;
}

function getName(req){
  const { name } = url.parse(req.url, true).query;
  return name;
}

function getGreeting(name){
  const greeting = `hello, ${name}`;
  return greeting
}

const server = http.createServer((req, res) => {
  const name = getName(req);
  const greeting = getGreeting(name)

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(greeting);
})

server.listen(port, hostname, () => {
  console.log(`Server running at ${serverUrl}`);
})