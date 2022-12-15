function throttle(fn, wait, options = {}){
  let timer;
  let previous = 0;

  return function(...args){
    const context = this;
    const now = Date.now();
    if(!previous && options.leading === false){
      previous = now;
    }
    const remaining = wait - (now - previous);
    // 大于 wait 执行
    if(remaining <= 0 || remaining > wait){
      if(timer){
        clearTimeout(timer);
        timer = null;
      }
      fn.apply(context, args)
      previous = now;
    } else if(!timer){
      if(options.trailing !== false){
        previous = options.leading === false ? 0 : Date.now();
        timer = setTimeout(function(){
          fn.apply(context, args)
          timer = null;
        }, remaining)
      }
    }
  }
}

var count = 1;
var container = document.getElementById('container');

function getUserAction(){
  console.log(this)
  container.innerHTML = count ++;
}

container.onmousemove = throttle(getUserAction, 1000, {
  leading: false,
  trailing: false
});
// container.onmousemove = getUserAction;