let obj = {
  name: 'mm',
  say(){
    console.log('wu wu')
  }
}

// function obj(){
//   console.log('wu wu')
// }

const objProxy = new Proxy(obj, {
  get(target, attr){
    // console.log(arguments)
    const v = Reflect.get(...arguments);
    console.log(v);
    return v;
  },
  apply(){
    console.log(arguments)
    return Reflect.apply(...arguments)
  }
})

// objProxy.say();
console.log(objProxy)