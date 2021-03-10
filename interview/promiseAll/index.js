var p1 = Promise.resolve('1');
var p2 = Promise.resolve('2');
var p3 = Promise.reject('3')

Promise.all([p1, p2, p3])
.then(res => console.log(res))
.catch(err => console.log(err))

function promiseAll(promises){
  let resolveCount = 0;
  let resolveValues = [];
  return new Promise((resolve, reject)=>{
    for(let i = 0; i < promises.length; i++){
      Promise.resolve(promises[i]).then(value => {
        resolveCount++;
        resolveValues[i] = value;
        if(resolveCount === promises.length){
          resolve(resolveValues)
        }
      }, error => {
        reject(error)
      })
    }
  })
}

promiseAll([p1, p2])
.then(res => console.log(res))
.catch(err => console.log(err))


function promiseRace(promises){
  return new Promise((resolve, reject) => {
    promises.forEach(item => {
      Promise.resolve(item).then(value => {
        resolve(value)
      }, error => {
        reject(error)
      })
    })
  })
}

promiseRace([p1, p2])
.then(res => console.log(res))
.catch(err => console.log(err))

function promiseAllSettled(promises){
  let resolveCount = 0;
  let resolveValues = [];

  return new Promise((resolve, reject) => {
    promises.forEach(item => {
      Promise.resolve(item).then(value => {
        resolveCount++;
        resolveValues.push(value);
        if(resolveCount === promises.length){
          resolve(resolveValues)
        }
      }, error => {
        resolveCount++;
        resolveValues.push(error);
        if(resolveCount === promises.length){
          resolve(resolveValues)
        }
      })
    })
  })
}

promiseAllSettled([p1, p2, p3])
.then(res => console.log(res))
.catch(err => console.log(err))
