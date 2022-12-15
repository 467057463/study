const net = require('net');
const PORT = 3000;
const HOST = '127.0.0.1';



// new net.Socket() 返回的是一个双工流
let client = new net.Socket()

client.connect(PORT, HOST, () => {
  console.log('connected server')
  client.write('client: hello server');
})
client.on('data', function (data) {
  console.log(data.toString())
});
setTimeout(()=>{
  client.end()
},5000)