function debounce(fn, wait){
  var timer;
  return function(){
    var context = this;
    clearTimeout(timer);
    timer = setTimeout(function(){
      fn.apply(context)
    }, wait)
  }
}

var count = 1;
var container = document.getElementById('container');

function getUserAction(){
  console.log(this)
  container.innerHTML = count ++;
}

container.onmousemove = debounce(getUserAction, 100);
// container.onmousemove = getUserAction;