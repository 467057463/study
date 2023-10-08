import { createServer } from "https";
import { readFileSync } from "fs";

// const privateKey = readFileSync('./cert/ca-key.pem').toString();
// const certificate = readFileSync('./cert/ca-cert.pem').toString();
// const client_certificate = readFileSync('./cert/client.crt').toString();

const options = {
  pfx: readFileSync('./cert/server.pfx'),
  // key: readFileSync('./cert/server-key.pem'), 
  // cert: readFileSync('./cert/server-cert.pem'), 
  // ca: readFileSync('./cert/ca-cert.pem'), 
  requestCert: true, 
  rejectUnauthorized: true
}

const server = createServer(options, function(req, res){
  console.log(req)
  res.writeHead(200);
  res.end('hello world\n');
})

server.listen(3000, function(){
  console.log('success')
})