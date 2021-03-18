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


var p2 = new Proxy(obj2, {
  get(target, key, receiver){
    console.log(`${key} is get`)
    return Reflect.get(target, key, receiver)
  },

  set(target, key, value, receiver){
    console.log(`${key} is set`)
    return Reflect.get(target, key, value, receiver)
  }
})

