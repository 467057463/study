// const mod = require('./module1');

// console.log(mod)

// console.log(__dirname)
// console.log(__filename)

const src = process.argv.slice(2);
console.log(src)
const fs = require('fs');

fs.readFile(src[0], (error, res) => {
  console.log(res)
})