
console.log('1')

function f(){
  console.log('3')
  return new Promise((resolve, reject) => {
    resolve('sssss')
  })
}
// async function f(){
//   console.log('3')
//   return 'ssss'
// }

f().then(r=>{
  console.log('4')
  console.log(r)
})

console.log('2')
