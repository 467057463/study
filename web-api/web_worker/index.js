"use strict";
var worker = new Worker('work.js');
worker.postMessage('hello world');
worker.addEventListener('message', (e) => {
    console.log(e);
    worker.terminate();
});
