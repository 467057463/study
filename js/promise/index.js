const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

function MPromise(executor){
  if(typeof executor !== 'function'){
    throw new Error('Promise executor not a function')
  }

  var self = this;
  self.status = PENDING;
  self.result = undefined;
  self.fulfilledQueues = [];
  self.rejectedQueues = [];

  function resolve(value){
    if(self.status === PENDING){
      self.status = FULFILLED;
      self.result = value;
      for(var i = 0; i < self.fulfilledQueues.length; i++){
        self.fulfilledQueues[i](value)
      }
    }
  }

  function reject(reason){
    if(self.status === PENDING){
      self.status = REJECTED;
      self.result = reason;
      for(var i = 0; i < self.rejectedQueues.length; i++){
        self.rejectedQueues[i](reason)
      }
    }
  }

  try {
    executor(resolve, reject)    
  } catch (error) {
    reject(error)
  }
}

function resolvePromise(promise, x, resolve, reject) {
  var then
  var thenCalledOrThrow = false

  if (promise === x) {
    return reject(new TypeError('Chaining cycle detected for promise!'))
  }

  if ((x !== null) && ((typeof x === 'object') || (typeof x === 'function'))) {
    try {
      then = x.then
      if (typeof then === 'function') {
        then.call(x, function rs(y) {
          if (thenCalledOrThrow) return
          thenCalledOrThrow = true
          return resolvePromise(promise, y, resolve, reject)
        }, function rj(r) {
          if (thenCalledOrThrow) return
          thenCalledOrThrow = true
          return reject(r)
        })
      } else {
        return resolve(x)
      }
    } catch(e) {
      if (thenCalledOrThrow) return
      thenCalledOrThrow = true
      return reject(e)
    }
  } else {
    return resolve(x)
  }
}

MPromise.prototype.then = function(onResolved, onRejected){
  var self = this;
  var promise2;

  onResolved = typeof onResolved === 'function' ? onResolved : function(v){ return v};
  onRejected = typeof onRejected === 'function' ? onRejected : function(r){ return r};

  if(self.status === FULFILLED){   
    return promise2 = new MPromise((resolve, reject) => {
      try{        
        var x = onResolved(self.result);
        resolvePromise(promise2, x, resolve, reject)
      }catch(error){
        reject(error)
      }
    })
  }

  if(self.status === REJECTED){
    return promise2 = new MPromise((resolve, reject)=>{
      try{
        var x = onRejected(self.result);  
        resolvePromise(promise2, x, resolve, reject)    
      }catch(error){
        reject(error)
      }
    })
  }

  if(self.status === PENDING){
    return promise2 = new MPromise((resolve, reject)=>{
      self.fulfilledQueues.push(function(value){
        try{
          var x = onResolved(self.result);
          resolvePromise(promise2, x, resolve, reject)
        }catch(error){
          reject(error)
        }
      })
      self.rejectedQueues.push(function(reason){
        try{
          var x = onRejected(self.result);  
          resolvePromise(promise2, x, resolve, reject)  
        }catch(error){
          reject(error)
        }
      })
    })
  }
}

MPromise.prototype.catch = function(onRejected){
  return this.then(null, onRejected)
}

var p = new MPromise((resolve, reject)=>{
  // reject('ssss')
  resolve('bbbb')
})

var p1 = new MPromise((resolve, reject) => {
  setTimeout(() => {
    reject('p1 error')
  }, 3000)
})


var p2 = p.then(
  value => {
    return p1
  }, 
  error => {
    console.log(error)
    return 'p2 error';
  }
)

var p3 = p2.then().then().catch((error)=>{
  console.log(error)
})


var promise = new Promise((resolve, reject)=>{
  // throw('ssss')
  resolve('bbbb')
})

var promise1 = new Promise((resolve, reject) => {
  setTimeout(()=> {
    reject('promise1 error')
  }, 3000)
})

var promise2 = promise1.then().then().catch(error => console.log(error))


// var promise2 = promise.then(()=>{
//   return promise1;
// }, () => {
//   // return 'sssssss'
// })


console.log(p)
console.log(promise)