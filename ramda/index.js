// console.log(R)

const add = R.curry((x, y, c) => {
  return x + y + c;
})

const increment = add(1);
const addTen = add(10);

console.log(addTen(5))
console.log(increment(5))