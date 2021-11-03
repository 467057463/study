function* gen(){
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}

function run(gen){
  const g = gen();
  let res = g.next();

  while(!res.done){
    console.log(res);
    res = g.next();
  }
}