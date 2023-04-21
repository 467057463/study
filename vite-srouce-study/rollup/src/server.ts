import { access, constants, copyFile, open } from 'fs/promises';
// import fs, { createReadStream } from 'fs';
import { createServer } from 'http';
import path from 'path';
import os from 'os'
import { spawn, execFile } from 'child_process';
const server = createServer();

server.on('request', async function(req, res){
  const paht = path.resolve(__dirname, '../test.txt');

  // spawn 衍生子进程
  // const ls = spawn('ls', ['-lh', '/usr']);
  // ls.stdout.on('data', (data) => {
  //   console.log(`data: ${data}`)
  // })

  // ls.stderr.on('data', (data) => {
  //   console.log(`erro: ${data}`)
  // })

  // ls.on('close', (code) => {
  //   console.log(`child process exited with code ${code}`);
  // })

  // execFile 衍生子进程
  const child = execFile('node', ['--version'], (error, stdout, stderr) => {
    if(error){
      throw error;
    }
    console.log(stdout)
  })
  child.stdout?.on('data', (data) => {
    console.log(`data: ${data}`)
  })
  child.stderr?.on('data', (data) => {
    console.log(`erro: ${data}`)
  })
  child.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  })

  // access 判断用户权限
  // const r = await access(paht, constants.R_OK | constants.W_OK)
  // console.log(r)
  
  // 
  const r = await copyFile(paht, path.resolve(__dirname, '../testaaa.txt'))
  console.log(r);
  console.log(os.cpus())
  const file = await open(path.resolve(__dirname, '../test.txt'));
  const result = await file.readFile();
  console.log(result);
  // for await (const line of file.readLines()) {
  //   console.log(line);
  // }
  // const _res = await file.stat()
  // console.log(_res)
  // const fd = await file.createReadStream()
  // fd.pipe(res)
})

server.listen(8000);