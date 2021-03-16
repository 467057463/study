// 原型链式继承
// function Parent(){
//   this.name = 'mxh';
//   this.colors = ['red', 'blue', 'yellow']
// }

// Parent.prototype.sayName = function(){
//   console.log(this.name)
// }


// function Child(name){
//   this.name = name;
// }


// // 子类的原型指向父类的实例
// Child.prototype = new Parent()
// Child.prototype.constructor = Child;



// 借用构造函数继承
// function Parent(name){
//   this.name = name;
//   this.colors = ['red', 'blue', 'yellow']
// }

// Parent.prototype.sayName = function(){
//   console.log(this.name)
// }


// function Child(name){
//   // 通过 call调用父类构造函数
//   Parent.call(this, name)
//   this.age = 18;
// }

// // 组合继承
// // 子类的原型指向父类的实例
// Child.prototype = new Parent()
// Child.prototype.constructor = Child;


function P1(name){
  this.name = name;
}
P1.prototype.sayName = function(){
  console.log(this.name)
}

function P2(age){
  this.age = age;
}
P1.prototype.sayAge = function(){
  console.log(this.age)
}

function Child(name, age){
  P1.call(this, name)
  P2.call(this, age)
}

Child.prototype = Object.create(P1.prototype)
Object.assign(Child.prototype, P2.prototype)
Child.prototype.constructor = Child;
Child.prototype.sayInfo = function(){
  console.log(this.name + this.age)
}

async function f(){
  return 'ssss'
}