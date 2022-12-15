"use strict";
// worker.onmessage = function(event){
//   console.log(event)
// }
addEventListener('message', function (e) {
    console.log(e);
    this.setTimeout(() => {
        this.postMessage('hello');
        this.close();
    }, 5000);
});
