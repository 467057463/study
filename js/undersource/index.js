document.querySelector("#target").addEventListener('mousemove', _.debounce(function(){
  console.log('test')
}, 300))