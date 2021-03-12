function makeIterator(arr){
  let nextIndex = 0;
  return{
    next(){
      return nextIndex < arr.length ? 
        { value: arr[nextIndex++], done: false } :
        { value: undefined, done: true }
    },
    return(){
      console.log('is break')
      return{
        done: true
      }
    }
  }
}

var o = {
  [Symbol.iterator](){
    return makeIterator([1, 2, 3])
  } 
}

function idMarker(){
  let id = 0;
  return {
    next(){
      return {
        value: id++,
        done: false
      }
    }
  }
}

var id = {
  [Symbol.iterator](){
    return makeIterator([1, 2, 3])
  }
}