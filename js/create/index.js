// var obj = Object.create(Object.prototype, {
//   name: {
//     value: 1,
//     // enumerable: true,
//     // configurable: true,
//     // configurable: true,
//   },
//   age: {
//     set(){
//       console.log('set')
//     },
//     get(){
//       console.log('get')
//     }
//   }
// })

function Shape(){
  this.x = 0;
  this.y = 0;
}

Shape.prototype.move = function(x, y){
  this.x += x;
  this.y += y;
}

function OtherClass(){
  this.z = 0
}

OtherClass.prototype.jump = function(){
  console.log('jump')
}

function Rectangle(){
  Shape.call(this)
  OtherClass.call(this)
}

Rectangle.prototype = Object.create(Shape.prototype);
Object.assign(Rectangle.prototype, OtherClass.prototype)
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.test = function(){}
