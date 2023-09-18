var ws = new WebSocket("ws://localhost:8080/foo");

ws.onopen = function(event){
  console.log('链接成功')
  ws.send(
    JSON.stringify({method: 100000, id: 1, device: 'web'})
  );
  ws.onmessage = function(event){
    console.log('Received Message:', event);
    // ws.close()
  }
  
  ws.onclose = function(event){
    console.log('close')
  }
  
  setInterval(() => {
    ws.send(
      JSON.stringify({method: 100000, id: 1, device: 'web'})
    );
  }, 5000);
}

