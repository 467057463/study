var images = Array.from(document.querySelectorAll('img'));

function debounce(fn, wait){
  let timer;
  return function(args){
    if(timer){
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(function(){
      fn(args)
    }, wait)
  }
}

function throttle(fn, wait){
  let lastTime;
  return function(args){
    let currentTime = Date.now();
    if(currentTime - lastTime > wait || !lastTime){
      fn.apply({}, args);
      lastTime = currentTime;
    }
  }
}

function lazyLoad(){
  // 窗口高度
  var screenHeight = window.innerHeight;
  // 被卷去高度
  var scrollTop = document.documentElement.scrollTop;

  images.forEach(item => {
    if(item.offsetTop < screenHeight + scrollTop && item.dataset['src']){
      item.src = item.dataset['src'];
      item.style.height = 'auto';
      item.dataset['src'] = '';
    }
  })
}

lazyLoad()

window.addEventListener('scroll', throttle(lazyLoad, 100))

// images.forEach(item => {
//   item.src = item.dataset['src'];
//   item.style.height = 'auto';
//   item.dataset['src'] = '';
// })