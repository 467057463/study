const arr = [1, '1', 1 , 2, NaN, NaN, null, null, {}, {}];

function shallowCopy(obj){
  if(typeof obj !== 'object') return;
  let res = obj instanceof Array ? [] : {};
  for(let key in obj){
    const item = obj[key];
    res[key] = typeof item !== 'object' ? item : shallowCopy(item);
  }
  return res;
}

shallowCopy(arr)