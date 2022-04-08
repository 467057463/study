document.querySelector('#copy')?.addEventListener('click', function(){
  console.log('abcedfg')
  navigator.clipboard.read().then(res => {
    console.log(res)
  })
  // const clipboard = new Clipboard();
  // clipboard.read().then(res => {
  //   console.log(res)
  // })
})