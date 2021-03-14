function curry(fn, ...currArgs){
  
  return function(...args){
    const _args = currArgs.concat(args);
    console.log(currArgs, args, _args)
    if(_args.length < fn.length){
      return curry.apply(null, [fn, ..._args])
    }

    return fn.apply(null, _args)
  }
}




// var msort = curry(function(obja, objb){
//   console.log(arguments)
// })

function sort(...sortArgs){
  return function(A,B){
    let i = 0;
    for(let item of sortArgs){
      if(A[item] !== B[item]){
        i = B[item] - A[item]
        break;
      }
    }
    return i;
  }
}


arr = [
  {
    name: 'mm',
    age: 29,
    scope: 100
  },
  {
    name: 'cw',
    age: 29,
    scope: 99
  },
  {
    name: 'ff',
    age: 30,
    scope: 98
  },
  {
    name: 'kl',
    age: 29,
    scope: 98
  },
  {
    name: '111',
    age: 30,
    scope: 100
  }
]

na = arr.sort(sort('age', 'scope'))