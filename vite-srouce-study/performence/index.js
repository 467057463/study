import('./test.js').then(r => console.log(r.default()))

function ramdomFunc(n){
  if (!n) {
    // 生成一个随机数
    n = ~~(Math.random() * 10000);
  }

  const nameStart = 'markStart' + n; 
  const nameEnd   = 'markEnd' + n; 

  performance.mark(nameStart)
  for (var i = 0; i < n; i++) {
    // do nothing
    100000000 * 1000000 * n * n
  }
  // 函数执行后再做个标记
  performance.mark(nameEnd);
  // 然后测量这个两个标记间的时间距离，并保存起来
  const name = 'measureRandomFunc' + n;
  performance.measure(name, nameStart, nameEnd);
}

// 执行三次看看
ramdomFunc();  
ramdomFunc();  
// 指定一个名字
ramdomFunc(888); 