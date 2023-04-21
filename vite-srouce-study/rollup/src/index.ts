import { rollup } from 'rollup';
import type { OutputOptions } from 'rollup';
import path from 'path';
import { open, chown, writeFile, chmod } from 'fs/promises';
import {  readFileSync } from 'fs';
import { stdin } from 'process';

const inputOptions = {
  input: 'src/main.js',
}


console.log(__dirname)
console.log(__filename)

 
const pkgPath =  path.resolve(__dirname, '../package.json');
// const pkg = readFileSync(
//   pkgPath
// )


(async function(){
  // const w = await writeFile('test.txt', 'test');

  const filePath = path.resolve(__dirname, '../test.txt');
  const file = await open(filePath, 'a', 0o777)
  try {
    const ws = await file.createWriteStream();
    for(let i = 0; i<=1e6; i++){
      ws.write('test abcdefg \n');
    }
    ws.end();
    // const res = await file.appendFile('abcdefg')
    // console.log(res);
  } catch (error) {
    console.error(error)
  } finally {
    file.close()
  }
})()


// @ts-ignore
// console.log(import.meta.url);
// @ts-ignore
// console.log(import.meta.resolve)

// const outputOptions: OutputOptions = {
//   format: "es",
//   file: 'test'
// }

// async function build(){
//   const bundle = await rollup(inputOptions);
//   const { output } = await bundle.generate(outputOptions)
//   await bundle.write(outputOptions)
//   console.log(bundle)
//   console.log(output)
// }

// build();