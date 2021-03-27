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

var name = 'maoyou'

var obj = {
  name: 'mm'
}

function sayName(age, friends){
  console.log(arguments)
  console.log(this.name)
  return this.name + age + friends.join()
}

function test(){
  console.log(this)
}

// call(sayName, null, 18, 'ff')
// sayName._call(obj, 18, ['ff', 'cw'])
sayName._apply(obj, [18, ['ff', 'cw']])

// console.group()
// console.log('sssss')
// console.groupEnd()


// console.groupCollapsed()
// console.log('sssssbbbbb')
// console.groupEnd()


// console.timeStamp('for')
for(var i = 0; i < 10000; i++){
  // var t = document.createTextNode()
  // document.body.append(t)
}
// console.timeEnd('for')

console.trace(sayName._apply(obj, [18, ['ff', 'cw']]))