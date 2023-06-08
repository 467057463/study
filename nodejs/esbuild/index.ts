import { access, appendFile, chmod, constants, copyFile, cp, createReadStream, fstat } from "fs";

// access('./test.txt', constants.X_OK | constants.R_OK | constants.W_OK, function(err){
//   console.log(err)
//   console.log(`${err ? '不存在' : '存在'}`)
// })

// appendFile('./testa.txt', '1234567890', function(err){
//   console.log(err)
// })

// chmod('./test.txt', 0o777, function(err) {
//   console.log(err)
// })

// copyFile('./test.txt', './testa.txt', constants.COPYFILE_FICLONE_FORCE, function(err){
//   console.log(err)
// })

// cp('./utils', './utils-bak', {recursive: true}, function(err){
//   console.log(err)
// })

const rs = createReadStream('./test.txt').pipe(process.stdout)
// console.log(rs)

rs.on('data', (data) => {
  console.log(data)
})

// import { build } from 'esbuild';

// (async function(){
//   const res = await build({
//     entryPoints: ['react/app.jsx'],
//     bundle: true,
//     loader: {
//       '.png': 'dataurl'
//     },
//     outdir: 'dist',
//     metafile: true,
//     write: false
//     // outfile: 'index.js',
//     // external: ['./react/utils/index.ts']
//   })
//   console.log(res)
// })()

