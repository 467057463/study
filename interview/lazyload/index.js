var images = Array.from(document.querySelectorAll('img'));

function debounce(fn, wait, immediate){
  let timer, result;

  var debounce = function (){
    var context = this;
    var args = arguments;

    if(timer){
      clearTimeout(timer);
    }
    if(immediate){
      var callNow = !timer;
      timer = setTimeout(function(){
        fn.apply(context, args)
        timer = null;
      }, wait)
      if(callNow){
        result = fn.apply(context, args)
      }
    }else{
      timer = setTimeout(function(){
        fn.apply(context, args);
      }, wait);
    }  
    return result;  
  }

  debounce.cancel = function(){
    clearTimeout(timer);
    timer = null;
  }

  return debounce;
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

var count = 0;
 function scroll(e){
  count++;
  console.log(count)
  return count;
}

var move = debounce(scroll, 10000, true)

// window.addEventListener('scroll', debounce(scroll, 100))
document.addEventListener('mousemove', move)
document.addEventListener('click', move.cancel)

// lazyLoad()

// window.addEventListener('scroll', throttle(lazyLoad, 100))

// images.forEach(item => {
//   item.src = item.dataset['src'];
//   item.style.height = 'auto';
//   item.dataset['src'] = '';
// })

// var obersver = new IntersectionObserver((entries, observer)=>{
//   entries.forEach(item => {
//     let img = item.target;
//     if(item.intersectionRatio > 0){
//       img.src = img.dataset['src'];
//       img.style.height = 'auto';
//       img.dataset['src'] = ''
//       observer.unobserve(img);
//     }
//   })
// })

// images.forEach(item => {
//   obersver.observe(item)
// })