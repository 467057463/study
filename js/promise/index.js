function MPromise(executor){
  var self = this;
  self.status = 'pending';
  self.result = undefined;
  if(typeof executor !== 'function'){
    throw new Error('Promise executor not a function')
  }

  function resolve(value){
    if(self.status === 'pending'){
      self.status = 'resolved'
      self.result = value;
    }
  }

  function reject(reason){
    if(self.status === 'pending'){
      self.status = 'rejected'
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

  onResolved = typeof onResolved === 'function' ? onResolved : function(v){};
  onRejected = typeof onResolved === 'function' ? onRejected : function(r){};

  if(self.status === 'resolved'){   
    return new MPromise((resolve, reject) => {
      try{        
        var x = onResolved(self.result);
        resolve(x)
      }catch(error){
        reject(error)
      }
    })
  }

  if(self.status === 'rejected'){
    onRejected(self.result)
  }

  if(self.status === 'pending'){

  }
}

var p = new MPromise((resolve, reject)=>{
  reject('ssss')
  // resolve('bbbb')
})


var p2 = p.then(
  value => {
    console.log(value)
    throw 'p2';
  }, 
  error => {
    console.log(error)
    throw 'p2 error';
  }
)


var promise = new Promise((resolve, reject)=>{
  // throw('ssss')
  resolve('bbbb')
})

var promise2 = promise.then(
  "a", 
  "b"
)


console.log(p)
console.log(promise)