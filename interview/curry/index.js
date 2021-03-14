function curry(fn, ...currArgs){
  
  return function(...args){
    const _args = currArgs.concat(args);
    if(_args.length < fn.length){
      return curry.apply(null, [fn, ..._args])
    }

    return fn.apply(null, _args)
  }
}


function add (a, b, c, d){
  return a + b + c + d;
}