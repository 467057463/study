var ws = new WebSocket("wss://echo.websocket.org");

ws.onopen = function(event){
  console.log('链接成功')
  ws.send('hello WebSockets!');
}

ws.onmessage = function(event){
  console.log('Received Message:', event);
  // ws.close()
}

ws.onclose = function(event){
  console.log('close')
}