function call(fn, context){
  var context = Object(context) || window;
  var args = [];
  for(var i = 2; i < arguments.length; i ++){
    args.push('arguments[' + i + ']')
  }

  context.fn = fn;
  var result = eval('context.fn(' + args +')')
  delete context.fn;
  return result;
}

Function.prototype._call = function(context){
  var context = Object(context) || window;
  
  var args = [];
  for(var i = 1; i < arguments.length; i ++){
    args.push('arguments[' + i + ']')
  }
  
  context.fn = this;
  var result = eval('context.fn(' + args +')');
  delete context.fn;
  return result;
}

Function.prototype._apply = function(context, arr){
  var context = Object(context) || window;
  context.fn = this;

  var result;
  if(!arr){
    result = context.fn()
  } else {
    var args = []
    for(var i = 0; i < arr.length; i++){
      args.push('arr[' + i + ']')
    }
    result = eval('context.fn(' + args +')');
  }
  delete context.fn;
  return result;
}

function bind(fn, context){
  var args = Array.prototype.slice.call(arguments, 2)
  
  var fBound = function(){
    var bindArgs = Array.prototype.slice.call(arguments)
    return fn.apply(this instanceof fBound ? this : context, args.concat(bindArgs))
  }
  // var fNOP = function(){};
  // fNOP.prototype = fn.prototype;
  // fBound.prototype = new fNOP();
  fBound.prototype = Object.create(fn.prototype)
  return fBound;
}

Function.prototype._bind = function(context){
  var fn = this;
  var args = Array.prototype.slice.call(arguments, 1)
  
  var fBound = function(){
    var bindArgs = Array.prototype.slice.call(arguments)
    return fn.apply(this instanceof fBound ? this : context, args.concat(bindArgs))
  }
  // var fNOP = function(){};
  // fNOP.prototype = fn.prototype;
  // fBound.prototype = new fNOP();
  fBound.prototype = Object.create(fn.prototype)
  return fBound;
}

var value = 'maoyou'

var obj = {
  name: 'mm'
}

function sayName(age, friends){
  console.log(this.value)
  console.log(this.name)
  return this.name + age + friends.join()
}

sayName.prototype.test = function(){
  console.log('test')
}

function test(){
  console.log(this)
}

// var bindSay = bind(sayName, obj, 18)
// bindSay.prototype.testOhter = function(){
//   console.log('cnmd')
// }
// var o = new bindSay(['cw'])
// console.log(bindSay(['cw']))

var bindSay = sayName._bind(obj, 18)
// console.log(bindSay(['cw']))
bindSay.prototype.testOhter = function(){
  console.log('cnmd')
}
var o = new bindSay(['cw'])

// call(sayName, null, 18, 'ff')
// sayName._call(obj, 18, ['ff', 'cw'])
// sayName._apply(obj, [18, ['ff', 'cw']])


// console.group()
// console.log('sssss')
// console.groupEnd()


// console.groupCollapsed()
// console.log('sssssbbbbb')
// console.groupEnd()


// console.trace(sayName._apply(obj, [18, ['ff', 'cw']]))