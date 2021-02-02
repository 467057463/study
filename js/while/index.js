// console.log("script start")

// setTimeout(function cb(){
//   console.log('timeout')
// }, 0)

// const event = new Event('build');

// document.addEventListener('build', function(){
//   console.log('click')
// }, false)

// document.dispatchEvent(event)

// console.log("script end")


// let outer = document.querySelector("#outer");
// let inner = document.querySelector("#inner");

// new MutationObserver(function(){
//   console.log('mutate')
// }).observe(outer, {
//   attributes: true
// })

// function onClick(){
//   console.log('click');

//   setTimeout(function(){
//     console.log('timeout')
//   }, 0);

//   outer.setAttribute('data-random', Math.random());

//   Promise.resolve().then(function(){
//     console.log('promise')
//   })

// }

// inner.addEventListener('click', onClick, false)
// outer.addEventListener('click', onClick, false)

// function foo(){
//   console.log('foo')
// }

// foo()

// console.log('baz')

(function(a){
  console.log(b)
  let b = 10;
})(10)
