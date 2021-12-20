let count = 666;
let ports = []

self.addEventListener('connect', (e) => {
  console.log(e)
  const port = e.ports[0];
  ports.push(port)
  // port.onmessage = function () {
  //   port.postMessage(count++);
  // };

  port.addEventListener('message', function(e){
    console.log(e);
    console.log(ports)
    ports.forEach(port => {
      port.postMessage(++count);
    })
  })

  port.start()
})