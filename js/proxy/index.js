// function sub(left, right){
//   return left + right;
// }
// var p = new Proxy(sub, {
//   apply(target, ctx, args){
//     console.log(args, arguments)
//     return Reflect.apply(...arguments) * 2
//   }
// })

// var target = {
//   _prop: 'foo',
//   prop: 'foo'
// }

// var p = new Proxy(target, {
//   has(target, key){
//     if(key[0] === '_'){
//       return false
//     }
//     return key in target
//   }
// })


function target(){

}

var p = new Proxy(target, {
  construct(target, args, newTarget){
    console.log(target, args, newTarget)
    return {}
  }
})

