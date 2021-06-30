// var obj = {
//   a: '1'
// }
// console.log(Object.getOwnPropertyDescriptors(obj))

// Object.freeze(obj)
// console.log(Object.getOwnPropertyDescriptors(obj))

// Object.seal(obj)
// console.log(Object.getOwnPropertyDescriptors(obj))

// Object.preventExtensions(obj)
// console.log(Object.getOwnPropertyDescriptors(obj))



// Object.defineProperty(obj, 'b', {
//   enumerable: true,
//   set(val){
//     console.log('set')
//     this._val = val;
//   },
//   get(){
//     console.log('get')
//     return this._val;
//   }
// })

const obj = {
  a: 'a'
}

Object.preventExtensions(obj)

obj.a = 1111;
console.log(obj.a);

obj.b = '1111';
console.log(obj.b) // undefined

delete obj.a;
// console.log(obj.a) // undefined

(function(){
  'use strict';
	
  // 严格模式下报错
  delete obj.a;
  console.log(obj.a) // undefined
}())