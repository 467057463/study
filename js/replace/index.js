var str = 'this is a good day. is a bedaful day.';

var ret = str.replace(/(is)/g, function(){
  console.log(arguments)
  return 'IS';
})
console.log(ret)