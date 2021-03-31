
var num = 10000;
// var frag = document.createDocumentFragment();
// console.time('for')
// for(let i = 0; i < num; i++){
//   var div = document.createElement('div');
//   var text = document.createTextNode(i)
//   div.appendChild(text)
//   frag.appendChild(div)
// }
// document.body.appendChild(frag)
// console.timeEnd('for')

// console.time('other')
// for(let i = 0; i < num; i++){
//   var div = document.createElement('div');
//   var text = document.createTextNode(i)
//   div.appendChild(text)
//   // frag.appendChild(div)
//   document.body.appendChild(div)
// }
// console.timeEnd('other')

console.time('other')
let _html = ''
for(let i = 0; i < num; i++){
  _html += '<div></div>'
}
document.body.innerHTML = _html;
console.timeEnd('other')