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
    }
  }

  function reject(reason){
    if(self.status === PENDING){
      self.status = REJECTED;
      self.result = reason;
    }
  }

  try {
    executor(resolve, reject)    
  } catch (error) {
    reject(error)
  }
}

MPromise.prototype.then = function(onResolved, onRejected){
  var self = this;

  onResolved = typeof onResolved === 'function' ? onResolved : function(v){ return v};
  onRejected = typeof onResolved === 'function' ? onRejected : function(r){ return r};

  if(self.status === FULFILLED){   
    return new MPromise((resolve, reject) => {
      try{        
        var x = onResolved(self.result);
        if(x instanceof MPromise){
          x.then(resolve, reject);
        }else{
          resolve(x)
        }
      }catch(error){
        reject(error)
      }
    })
  }

  if(self.status === REJECTED){
    return new MPromise((resolve, reject)=>{
      try{
        var x = onRejected(self.result);  
        resolve(x)      
      }catch(error){
        reject(error)
      }
    })
  }

  if(self.status === PENDING){
    return new MPromise((resolve, reject)=>{
      self.fulfilledQueues.push(onResolved)
      self.rejectedQueues.push(onRejected)
    })
  }
}

var p = new MPromise((resolve, reject)=>{
  // reject('ssss')
  // resolve('bbbb')
})



var p2 = p.then(
  value => {
    return p3
  }, 
  error => {
    console.log(error)
    return 'p2 error';
  }
)

var p3 = p2.then(value => {}, error => {})


var promise = new Promise((resolve, reject)=>{
  // throw('ssss')
  resolve('bbbb')
})

var promise3 =  new Promise((resolve, reject)=>{
  setTimeout(() => {
    resolve('prmose is promise')
  }, 5000)
})

var promise2 = promise.then(()=>{
  return promise3;
}, () => {
  // return 'sssssss'
})


console.log(p)
console.log(promise)