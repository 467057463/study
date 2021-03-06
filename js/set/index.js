function makeIterator(arr){
  let nextIndex = 0;
  return{
    next(){
      return nextIndex < arr.length ? 
        { value: arr[nextIndex++], done: false } :
        { value: undefined, done: true }
    }
  }
}