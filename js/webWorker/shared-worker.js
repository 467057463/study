let count = 666;

self.addEventListener('connect', (e) => {
  console.log(e)
  const port = e.ports[0];

  port.onmessage = function () {
    port.postMessage(count++);
  };
})