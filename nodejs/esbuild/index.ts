import { build } from 'esbuild';
import { accessSync, appendFileSync, constants, copyFileSync, cpSync, existsSync, linkSync, readFileSync, readdirSync, statSync, unlinkSync } from 'fs';
import { spawnSync } from 'child_process';
import { join } from 'path';

const test = readFileSync('./package.json');
console.log(test);
// copyFileSync('./dist/app.js', 'app.copy.js')
// appendFileSync('./dist/app.js', 'test')
// cpSync('react', 'react-copy', { 
//   recursive: true,
//   filter(item, n){
//     console.log(item, n)
//     return true
//   }
// })

// linkSync('index.ts', 'index-line.ts')
unlinkSync('index-line.ts')
// function getDIr(path: string){  
//   if(!existsSync(path)){
//     return
//   }
//   // console.log('path', path)
//   return readdirSync(path).reduce((prev: any, item) => {
//     const np = join(path, item)
//     if(statSync(np).isDirectory()){
//       prev[item] = getDIr(np)
//     } else {
//       prev[item] = item;
//     }
//     console.log('prev', np, prev)
//     return prev;
//   }, {})
// }

// const res = getDIr('./node_modules');
// console.log(res);


spawnSync("npm help", {
  shell: true,
  stdio: "inherit"
})
process.exit

// build({
//   entryPoints: ['react/app.jsx'],
//   bundle: true,
//   loader: {
//     '.png': 'dataurl'
//   },
//   outdir: 'dist',
//   // outfile: 'index.js',
//   // external: ['./react/utils/index.ts']
// })