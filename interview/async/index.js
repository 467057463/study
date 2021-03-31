function myAsync(generator){
  var iterator = generator();

  function handler(iteratorResult){
    if(iteratorResult.done){
      return;
    }

    var value = iteratorResult.value;
    if(value instanceof Promise){
      value.then(res => handler(iterator.next(res)))
      .catch(e => iterator.throw(e))
    }
  }

  try{
    handler(iterator.next())
  } catch(e){
    console.log(e)
  }
}

myAsync(function*(){
  try {
    const a = yield Promise.resolve(1);
    const b = yield Promise.resolve(a + 10);
    const c = yield Promise.reject(b + 100);
    console.log(a, b, c)
  } catch (e) {
    console.log('发生了错误', e)
  }
})