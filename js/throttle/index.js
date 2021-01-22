// function throttle(fn, wait){
//   var previous = 0;
//   return function(){
//     var now = +new Date();
//     var context = this;
//     var args = arguments;
//     if( now - previous > wait){
//       fn.apply(context, args)
//       previous = now;
//     }
//   }
// }

// function throttle(fn, wait){
//   var timer;
//   return function(){
//     var context = this;
//     var args = arguments;
//     if(!timer){
//       timer = setTimeout(function(){
//         fn.apply(context, args)
//         timer = null;
//       }, wait)
//     }
//   }
// }

function throttle(fn, wait, leading = true, trailing = true){
  var timer;
  var previous = 0;
  return function(){
    var context = this;
    var args = arguments;
    var now = +new Date();
    if(!previous && !leading){
      previous = now;
    }
    var remaining = wait - (now - previous);
    if(remaining <= 0 || remaining > wait){  
      if(timer){
        clearTimeout(timer)
        timer = null;
      }
      fn.apply(context, args)
      previous = now;
    }else if(!timer && trailing){
      timer = setTimeout(function(){
        previous = leading ? +new Date() : 0;
        timer = null;
        fn.apply(context, args)
      }, remaining)
    }
  }
}

var count = 1;
var container = document.getElementById('container');

function getUserAction(){
  console.log(this)
  container.innerHTML = count ++;
}

container.onmousemove = throttle(getUserAction, 1000, false);
// container.onmousemove = getUserAction;