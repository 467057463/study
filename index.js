function debounce(fn, wait){
  var timer;
  return function(){
    clearTimeout(timer);
    timer = setTimeout(fn, wait)
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