const obj = {
  a: '1',
  b: {
    b1: 'b1',
    b2: 'b2'
  }
};

function extend(){
  var deep = false;
  var target = arguments[0] || {};
  let i = 1;
  if(typeof target !== 'boolean'){
    deep = target;
    target = arguments[i]
    i++;
  }
  for(; i < arguments.length; i++){
    const options = arguments[i];
    if(options != null){
      for(let key in options){
        let src = target[key];
        let copy = options[key];
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

window.n = extend({}, obj, {
  a: 2, 
  b: {
    b3: 'b3'
  }
})