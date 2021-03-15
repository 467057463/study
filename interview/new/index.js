function _new(constructor, ...args){
  var obj = {}
  Object.setPrototypeOf(obj, constructor.prototype)
  var result = constructor.apply(obj, args)
  return typeof result === 'object' ? result : obj;
}

function Person(name, age){
  this.name = name;
  this.age = age;
  // return ['name', age]
}


function instanceOf(obj, target){
  const targetProto = target.prototype;
  let objProto = obj.__proto__;

  while(true){
    if(objProto === null){
      return false
    }
    if(objProto === targetProto){
      return true;
    }
    objProto = objProto.__proto__;
  }
}

p = _new(Person, 'mm', 18)