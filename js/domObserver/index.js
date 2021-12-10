// resize observer
// const ro = new ResizeObserver((entries) => {
//   console.log(entries)
// })

// ro.observe(document.getElementById('right'))

// intersection observer
// const io = new IntersectionObserver((entries) => {
//   console.log(entries)
// })

// const elements = document.querySelectorAll('.container')
// for(let i = 0; i < elements.length; i++){
//   io.observe(elements[i])
// }

// window storage evnet
window.addEventListener('storage', function(event){
  console.log(event)
}, false)