function makeIterator(arr){
  let nextIndex = 0;
  return{
    next(){
      console.log(nextIndex)
      return nextIndex < arr.length ? 
        { value: arr[++nextIndex], done: false } :
        { value: undefined, done: true }
    }
  }
}