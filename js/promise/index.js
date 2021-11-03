const PENDING = 'pending';
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
  #status = PENDING;
  #resolveQueue = [];
  #rejectQueue = [];
  #value = '';
  #reason = '';
  #resolve = (val) => {
    if(this.#status !== PENDING) {
      return;
    }
    this.#status = FULFILLED;
    this.#value = val;
    while(this.#resolveQueue.length){
      const callback = this.#resolveQueue.shift();
      callback(val);
    }
  }
  #reject = (reason) => {
    if(this.#status !== PENDING) {
      return;
    }
    this.#status = REJECTED;
    this.#reason = reason;
    while(this.#rejectQueue.length){
      const callback = this.#rejectQueue.shift();
      callback(reason);
    }
  }
  constructor(executor){   
    try {
      executor(this.#resolve, this.#reject)      
    } catch (error) {
      this.#reject(error)
    }
  }

  then(onResolve, onReject){
    typeof onResolve !== 'function' ? onResolve = value => value : null;
    typeof onReject !== 'function' ? onReject = reason => { throw reason } : null;

    const promise2 = new MyPromise((resolve, reject) => {
      const _resolveFn = () => {
        queueMicrotask(() => {
          try{
            let x = onResolve(this.#value)
            resolvePromise(x, promise2, resolve, reject)
          } catch(error){
            reject(error)
          }
        })        
      }
      const _rejectFn = () => {
        queueMicrotask(() => {
          try{
            let x = onReject(this.#reason)
            resolvePromise(x, promise2, resolve, reject)
          } catch(error){
            reject(error)
          }
        }) 
      }
      switch(this.#status){
        case PENDING:
          this.#resolveQueue.push(_resolveFn)
          this.#rejectQueue.push(_rejectFn)
          break;
        case FULFILLED:
          _resolveFn(this.#value)
          break;
        case REJECTED:
          _rejectFn(this.#reason)
          break;
      }
    })
    return promise2
  }

  catch(onReject){
    return this.then(undefined, onReject)
  }

  finally(callback){
    return this.then(
      (value) => {
        callback()
        return MyPromise.resolve(value)
      },
      (reason) => {
        callback()
        return MyPromise.reject(reason)
      }
    )
  }

  static resolve(params){
    if(params instanceof MyPromise){
      return params
    }
    return new MyPromise((resolve) => {
      resolve(params)
    })
  }

  static reject(reason){
    return new MyPromise((resolve, reject) => {
      reject(reason)
    })
  }

  static all(promises){
    let index = 0;
    let result = [];
    return new MyPromise((resolve, reject) => {
      promises.forEach((p, i) => {
        MyPromise.resolve(p).then(res => {
          index++;
          result[i] = res;
          if(result.length === index){
            resolve(result)
          }
        }).catch(err => {
          reject(err)
        })
      })
    })
  }

  static race(promises){
    return new MyPromise((resolve, reject) => {
      promises.forEach(p => {
        MyPromise.resolve(p)
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
      })
    })
  }

  static allSettled(promises){
    let index = 0;
    let result = []
    return new MyPromise((resolve) => {
      promises.forEach((p, i) => {
        MyPromise.resolve(p)
        .then(value => {
          result[i] = {
            status: 'fulfilled',
            value
          }
        })
        .catch(reason => {
          result[i] = {
            status: 'rejected',
            reason
          }
        })
        .finally(() => {
          index++;
          if(index === result.length){
            resolve(result)
          }
        })
      })
    })
  }

  static any(promises){
    let index = 0;
    let errs = [];
    return new MyPromise((resolve, reject) => {
      promises.forEach((p, i) => {
        MyPromise.resolve(p).then(res => {
          resolve(res)          
        }).catch(err => {
          index++;
          errs[i] = err;
          if(errs.length === index){
            reject(new AggregateError(errs, 'All promises were rejected'))
          }
        })
      })
    })
  }
}

function resolvePromise(x, promise2, resolve, reject){
  if(x === promise2){
    return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
  }
  if(x instanceof MyPromise){
    x.then(resolve, reject)
  } else {
    resolve(x)
  }
}

// new MyPromise((resolve, reject) => {
//   // setTimeout(()=>{
//   //   resolve('abc')
//   //   reject('123')
//   // },1000)
//   resolve('abc')
// }).then((res) => {
//   console.log(res)
//   return 1;
// }, (err) => {
//   console.log(err)
// })
// .then()
// .then(res => {
//   console.log(res)
//   return 2;
// }).then(res => {
//   console.log(res)
// })

// console.log('sss')

// const p = new Promise((resolve, reject) => {
//   resolve(100)
// })

// const p1 = p.then(value => {
//   console.log(value)
//   return p1;
// })

// const p = new MyPromise((resolve, reject) => {
//   resolve(100)
// })

// const p1 = p
// .then(value => {
//   console.log(value)
//   return p1;
// })

// p1
// .then(null, (err) => {
//   console.error(err)
// })

// const p = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(1000)
//   }, 1000)
// })

// p2 = MyPromise.resolve('abc').then(res => {
//   console.log(res)
//   return 1111
// })
// .then(res => {
//   console.log(res)
//   a + blur;
// })
// .catch(error => {
//   console.error(error)
// })

// MyPromise.resolve().then(() => {
//   console.log(0);
//   return MyPromise.resolve(4);
// }).then((res) => {
//   console.log(res)
// })

// MyPromise.resolve().then(() => {
//   console.log(1);
// }).then(() => {
//   console.log(2);
// }).then(() => {
//   console.log(3);
// }).then(() => {
//   console.log(5);
// }).then(() =>{
//   console.log(6);
// })

// MyPromise.resolve(1)
// .finally(()=>{
//   console.log('abc')
//   throw('123456')
// })
// .then(val => {
//   console.log(val)
// })
// .catch(err => {
//   console.error(err)
// })

const p1 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    reject(4)
  }, 3000)
})

const p2 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    reject(5)
  }, 2000)
})

MyPromise.any([p1, p2, 'aa']).then(res => {
  console.log(res)
})
.catch(e => {
  console.log(e.message);
  console.log(e.name);
  console.log(e.errors);
})