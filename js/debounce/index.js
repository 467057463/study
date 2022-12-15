function debounce(fn, wait, immediate){
  let timer;
  return function(...args){
    let context = this;
    clearTimeout(timer)
    if(immediate){
      const callNow = !timer;
      timer = setTimeout(function(){
        timer = null;
      }, wait)
      if(callNow){
        fn.apply(context, args)
      }
    }else{
      timer = setTimeout(function(){
        fn.apply(context, args)
      }, wait)
    }
  }
}

var count = 1;
var container = document.getElementById('container');

function getUserAction(e){
  console.log(this, e)
  container.innerHTML = count ++;
}

container.onmousemove = debounce(getUserAction, 100, true);
// container.onmousemove = getUserAction;