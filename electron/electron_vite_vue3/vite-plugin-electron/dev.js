import electron from 'electron';
import path from 'path';
import { spawn } from 'child_process';
import { mainProcessBuild, log, preloadBuild } from './util';

const startTime = Date.now();
let electronProcess = null;
let manualRestart = false;

// 编译主进程文件
async function buildMain(config){
  function onRebuild(error, result){
    if (error){
      throw('watch build failed:', error)
    }
    if(electronProcess && electronProcess.kill){      
      log('info',  `electron 即将重启...`)
      manualRestart = true
      process.kill(electronProcess.pid)
      electronProcess = null

      startElectron(config)
      setTimeout(() => {
        manualRestart = false
      }, 5000)
    }
  }  
  await mainProcessBuild(config, 'dev', onRebuild)
}
// 启动/重新启动 electron
function startElectron(config){
  const args = [
    '--inspect=5858',
    path.join(config.root, 'dist', './main.js')
  ]

  electronProcess = spawn(electron, args)
  // electronProcess.stdout.on('data', data => {
  //   log('info', data)
  // })
  electronProcess.stderr.on('data', data => {
    log('info', data)
  })
  electronProcess.on('close', () => {
    if (!manualRestart) process.exit()
  })
}

export default async function(config){
  // remove(path.join(config.root, config.build.outDir))
  // build preload 文件和主进程文件
  await Promise.all([
    preloadBuild(config),
    buildMain(config)
  ])
  await startElectron(config);
  log('info',  `electron 开发模式启动完成, 用时${(Date.now() - startTime) / 1000}s`)
}

