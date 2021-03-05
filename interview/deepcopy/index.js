function isObject(target){
  return target !== null && (typeof target === 'object' || typeof target === 'function')
}

function firstUppercase(str){
  return str.substr(0, 1).toUpperCase() + str.substr(1);
}

var toStr = Object.prototype.toString;

function getType(target){
  const types = ['date', 'regExp'].reduce((prev, item)=>{
    return{
      ...prev,
      [`[object ${firstUppercase(item)}]`]: item
    }
  }, {})

  return types[toStr.apply(target)];
}

function deepCopy(target, map = new Map()){
  if(!isObject(target)){
    return target;
  }
  var result = Array.isArray(target) ? [] : {};

  // 解决循环引用
  if(map.get(target)){
    return map.get(target)
  }
  map.set(target, result)

  // 解决date对象问题
  if(getType(target) === 'date'){
    return new Date(target)
  }
  
  // 解决正则问题
  if(getType(target) === 'regExp'){
    return new RegExp(target.source, reg.flags)
  }

  for(var i in target){
    var item = target[i];
    result[i] = typeof item === 'object' ? deepCopy(item, map) : item 
  }
  return result;
} 

var f = function(){
  console.log('name')
}
f.foo = 1111;
f.bar = 2222;

var time = new Date();
var reg = /abc/gi;
var str = new String('abcdef');
var obj = {
  time,
  reg,
  str,
  age: 1,
  name: 'mm',
  firend: ['ff', 'cw'],
  method: f
}

obj.obj = obj;

var test1 = deepCopy(obj);

var obj2 = {
  map: new Map([['a', 1], ['b', 2]])
}
var test2 = deepCopy(obj2);






