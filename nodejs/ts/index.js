const http = require('http')

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', "*")
  res.writeHead(200, {
    'Content-Type': 'text/html'
  })
  res.write('<html><body>this is home page</body></html>')
  res.end()
})

server.listen('3003', function(){
  console.log('sever start at: http://localhost:3003')
})