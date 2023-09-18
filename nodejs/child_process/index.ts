import { exec, execFile, spawn } from "child_process";
import * as iconv from 'iconv-lite';

// const cp = execFile('ls', {encoding: 'buffer', shell: 'powershell.exe'}, (error, stdout, stderr) => {
//   console.log('stdout', iconv.decode(stdout, 'cp936'))
//   console.log('stderr', iconv.decode(stderr, 'cp936'))
// })

const lsCp = spawn('dir', {shell: false})

lsCp.stdout.on('data', (data) => {
  console.log('data', data.toString())
})


// const ls = exec(
//   'leishenSdk.exe', 
//   {
//     encoding: 'buffer',
//     cwd: './leishenSdk'
//   },
//   (error, stdout, stderr) => {
//     // console.log(error, stdout, stderr)
//     console.log('stdout', iconv.decode(stdout, 'cp936'))
//     console.log('stderr', iconv.decode(stderr, 'cp936'))
//   }
// )

// ls.stdout.on('data', (data) => {
//   console.log('data', iconv.decode(data, 'cp936'))
// })

// ls.on('exit', (code, signal) => {
//   console.log('exit')
//   console.log(code, signal)
// })

// setTimeout(() => {
//   ls.disconnect()
// }, 5000)
// cp.stderr.on('data', (data) => {
//   console.log(data)
// })