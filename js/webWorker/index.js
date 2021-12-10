// dedicate worker
// let worker = new Worker('dw-worker.js')
// worker.onmessage = (e) => {
//   console.log(e)
// }
// worker.postMessage("PING")


// service worker
// navigator.serviceWorker.register('service-worker.js')
// document.querySelector('#show').addEventListener('click', () => {
//   const iconUrl = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F3c%2F12%2F4c%2F3c124c5277386c897dad2977bb964ea1.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641624547&t=306844d0ce533c6fe0f1918cf3c4027a';

//   let imgElement = document.createElement('img')
//   imgElement.src = iconUrl;
//   document.body.append(imgElement)
// })

// shared worker
const worker = new SharedWorker('shared-worker.js');
worker.port.start();

document.querySelector('#show').addEventListener('click', (evnet) => {
  console.log(evnet)
  worker.port.postMessage("like");
})

worker.port.addEventListener('message', (event) => {
  console.log(event)
})