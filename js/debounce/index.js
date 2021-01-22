function debounce(fn, wait, immediate){
  var timer;
  var result;
  return function(){
    var context = this;
    var args = arguments
    if(timer) clearTimeout(timer);
    if(immediate){
      var callNow = !timer;
      timer = setTimeout(function(){
        timer = null;
      }, wait)
      if(callNow) result = fn.apply(context, args)
    }else{
      timer = setTimeout(function(){
        fn.apply(context, args)
      }, wait)
    }    
    return result;
  }
}

var count = 1;
var container = document.getElementById('container');

function getUserAction(){
  console.log(this)
  container.innerHTML = count ++;
}

container.onmousemove = debounce(getUserAction, 10000, true);
// container.onmousemove = getUserAction;