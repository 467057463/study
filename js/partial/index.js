var  _ = {};
function partial(fn){
  var args = Array.prototype.slice.call(arguments, 1);
  return function(){
    var position = 0, len = args.length;
    for(var i = 0; i < len; i++){
      args[i] = args[i] === _ ? arguments[position++] : args[i];
    }
    while(position < arguments.length) args.push(arguments[position++]);
    // var newArgs = args.concat(Array.prototype.slice.call(arguments));
    return fn.apply(this, args)
  }
}

function add(a, b){
  return a + b;
}

var addOne = partial(add, _, 1);

var n = addOne(10)
// var addOne = add.bind(null, 1)

// var value = 1;
// var obj = {
//   value: 2,
//   addOne
// }
// var n = obj.addOne(2);