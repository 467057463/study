import { exec, execFile } from "child_process";

const t1 = performance.now();
exec('ls -al .', (error, stdout, stderr) => {
  console.log('t1', performance.now() - t1)
  console.log(stdout)
})

// const t2 = performance.now();
execFile('ls', ['-al', '.'], (error, stdout, stderr) => {
  console.log('t2', performance.now() - t1)
  console.log(error, stdout, stderr)
})


const t = new Error('test')
console.log(t)