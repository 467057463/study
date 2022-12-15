"use strict";
function handleEvent(e) {
    console.log(e);
}
const httpRequest = new XMLHttpRequest();
// httpRequest.onreadystatechange = function(e){
//   if(httpRequest.readyState === XMLHttpRequest.DONE){
//     if(httpRequest.status === 200){
//       console.log(httpRequest.getAllResponseHeaders())
//       console.log(httpRequest.responseType, httpRequest.responseXML, httpRequest.responseURL)
//     }
//   }
// }
// httpRequest.timeout = 1;
httpRequest.addEventListener('loadstart', handleEvent);
httpRequest.addEventListener('load', handleEvent);
httpRequest.addEventListener('loadend', handleEvent);
httpRequest.addEventListener('progress', handleEvent);
httpRequest.addEventListener('abort', handleEvent);
httpRequest.responseType = 'document';
httpRequest.open('GET', 'http://localhost:3003');
httpRequest.send();
