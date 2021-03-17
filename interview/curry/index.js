// function curry(fn, ...currArgs){
  
//   return function(...args){
//     const _args = currArgs.concat(args);
//     if(_args.length < fn.length){
//       return curry.apply(null, [fn, ..._args])
//     }

//     return fn.apply(null, _args)
//   }
// }


// function add (a, b, c, d){
//   return a + b + c + d;
// }

function curry(fn){
  var slice = Array.prototype.slice;
  var args = slice.call(arguments, 1)
  return function(){
      var _args = args.concat(slice.call(arguments, 0))
      if(_args.length < fn.length){
          return curry.call(this, fn, ..._args)
      }
      return fn.apply(this, _args)
  }
}

function add (a, b, c, d){
  return a + b + c + d;
}