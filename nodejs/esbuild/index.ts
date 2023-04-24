import { build } from 'esbuild';
import { accessSync, constants, existsSync, readdirSync, statSync } from 'fs';
import { spawnSync } from 'child_process';
import { join } from 'path';

// function getDIr(path: string){  
//   function walk(p: string){
//     if(!existsSync(p)){
//       return
//     }
//     console.log('p', p)
//     return readdirSync(p).reduce((prev: Record<string, any>, item) => {
//       const np = join(p, item)
//       if(statSync(np).isDirectory()){
//         prev.list = walk(np)
//       } else {
//         prev[item] = item;
//       }
//       return prev;
//     }, {})
//   }

//   return walk(path)
// }

// const res = getDIr('./node_modules');
// console.log(res);


// spawnSync("npm help", {
//   shell: true,
//   stdio: "inherit"
// })
// process.exit

build({
  entryPoints: ['react/app.jsx'],
  bundle: true,
  loader: {
    '.png': 'dataurl'
  },
  outdir: 'dist',
  // outfile: 'index.js',
  // external: ['./react/utils/index.ts']
})