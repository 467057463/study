function* g(){
  yield 1 + 1;
  yield 2 + 2;
  return 'ssssssss'
}

var arr = [1, [[2, 3], 4], [5, 6]];

function* flat(a){
  var length = a.length;
  for(let i = 0; i < length; i++){
    if(Array.isArray(a[i])){
      yield* flat(a[i])
    }else{
      yield a[i]
    }
  }
}

// for(let item of flat(arr)){
//   console.log(item)
// }

function foo(a, b){
  console.log(a, b)
}

function* demo(){
  // console.log('hello' + (yield));
  // console.log('hello' + (yield 123));

  // foo(yield 'a', yield 'b')
  let input = yield;
  console.log(input)
}

function* f(){
  for(var i = 0; true; i++){
    var reset = yield i;
    console.log(reset);
  }
}

function* foo(x){
  var y = 2 * (yield (x + 1));
  var z = yield (y / 3);
  return x + y + z;
}

function* dataConsumer(){
  console.log('started');
  console.log(`1. ${yield}`);
  console.log(`2. ${yield}`);
  return 'result';
}

function* fibonacci() {
  let [prev, curr] = [0, 1];
  for (;;) {
    yield curr;
    [prev, curr] = [curr, prev + curr];
  }
}

for (let n of fibonacci()) {
  if (n > 1000) break;
  console.log(n);
}

function* g(){
  try{
    yield
  }catch(e){
    console.log('内部捕获', e)
  }
}

var i = g();
i.next()

try{
  i.throw('a')
  i.throw('b')
}catch(e){
  console.log('外部捕获', e)
}