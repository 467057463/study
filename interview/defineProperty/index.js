class Observer{
  constructor(data){
    for(let key of Object.keys(data)){
      if(typeof data[key] === 'object'){
        data[key] = new Observer(data[key]);
      }
      Object.defineProperty(this, key, {
        enumerable: true,
        configurable: true,
        get(){
          console.log('get', key)
          return data[key]
        },
        set(value){
          console.log('set:', key)
          console.log('new' + key + '=' + value)
          if(value === data[key]){
            return;
          }
          data[key] = value
        }        
      })
    }
  }
}

var obj = {
  name: 'aaaa',
  age: 18,
  a: {
    b: 1,
    c: 2
  }
}

p = new Observer(obj)

var obj2 = {
  name: 'aaaa',
  age: 18,
  a: {
    b: 1,
    c: 2
  }
}

p2 = new Proxy(obj2, {
  get(target, proKey, receiver){
    console.log(`get ${proKey}`);
    return Reflect.get(target, proKey, receiver)
  },
  set(target, proKey, value, receiver){
    console.log(target, proKey, value, receiver)
    return Reflect.set(target, proKey, value, receiver)
  }
})

function createArray(...elements) {
  let handler = {
    get(target, propKey, receiver) {
      let index = Number(propKey);
      if (index < 0) {
        propKey = String(target.length + index);
      }
      return Reflect.get(target, propKey, receiver);
    }
  };

  let target = [];
  target.push(...elements);
  return new Proxy(target, handler);
}

