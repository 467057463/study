import * as util from './utils.js';

function traversal(node){
  if(node.nodeType === 1){
    console.log(node.nodeName)
  }
  if(node.children){
    for(let item of node.children){
      traversal(item)
    }
  }
}

traversal(document.children[0])

console.log(util)