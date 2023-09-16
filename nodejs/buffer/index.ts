import { Buffer, Blob, constants } from "buffer";

const b1 = new Blob(['test']);
b1.text().then(r => {
  console.log('r', r)
})
console.log(Buffer.from('test'))
console.log(new Blob(['test']))
console.log(constants)
console.log(Buffer.poolSize, Buffer.poolSize >> 1)
console.log('sssss')