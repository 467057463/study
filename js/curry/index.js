function subCurry(fn, ...args){
  return function(..._args){
    return fn.apply(this, [...args, ..._args])
  }
}

function curry(fn, length){
  length = length || fn.length;
  return function(...args){
    if(args.length < length){
      return curry(subCurry.apply(this, [fn, ...args]), length - args.length)
    }else{
      return fn.apply(this, [...args])
    }
  }
}

var fn1 = curry(function(a, b, c){
  console.log([a, b, c])
})

// var fn2 = fn1()

// curry(function(){
//   return fn()
// })

// var fn3 = fn2();

// curry((function(){
//   return function(){
//     return fn()
//   }
// })())