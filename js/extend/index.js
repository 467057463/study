function isFunction(obj){
  return Object.prototype.toString.call(obj) == '[object Function]';
}

var a = function(){

};

var obj1 = {
  a: 1,
  b: {
    c: 2
  }
}


var obj2 = {
  b: {
    c: [5],
    // c: 1
  },
  d: null
}

function extend(){
  var deep = false;
  var target = arguments[0] || {};
  let i = 1;
  if(typeof target == 'boolean'){
    deep = target;
    target = arguments[i]
    i++;
  }
  if(typeof target !== 'object' && !isFunction(target)){
    target = {}
  }
  for(; i < arguments.length; i++){
    const options = arguments[i];
    if(options != null){
      for(let key in options){
        let src = target[key];
        let copy = options[key];
        console.log(src, copy)
        if(deep && copy && typeof copy == 'object'){
          target[key] = extend(deep, src, copy)
        }else if(copy !== undefined){
          target[key] = options[key]
        }
      }
    }
  }
  return target;
}

var d = extend(true, a, obj1, obj2)