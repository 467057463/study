const arr = [1, '1', 1 , 2, NaN, NaN, null, null, {}, {}];

function unique(arr){
  // let res = []
  // for(let i = 0; i < arr.length; i++){
  //   let item = arr[i];
  //   if(!res.includes(item) ){
  //     res.push(item)
  //   }
  // }

  let res = arr.filter((item, index, array) => {
    return array.indexOf(item) === index;
  })
  return res;
}

unique(arr)