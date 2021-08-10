const electron = require('electron');
const path = require('path');
const { spawn } = require('child_process');
const { stat, remove, writeFile } = require('fs-extra')

import { mainProcessBuild, log } from './util';

let electronProcess = null;
let manualRestart = false;
const startTime = Date.now();

// 编译主进程文件
async function buildMain(config){
  function onRebuild(error, result){
    if (error){
      throw('watch build failed:', error)
    }
    if(electronProcess && electronProcess.kill){      
      log('info',  `electron 主进程启动重启中...`)
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
  electronProcess.stdout.on('data', data => {
    log('info', data)
  })
  electronProcess.stderr.on('data', data => {
    log('info', data)
  })
  electronProcess.on('close', () => {
    if (!manualRestart) process.exit()
  })
}

export default async function(config){
  remove(path.join(config.root, config.build.outDir))
  await buildMain(config);
  await startElectron(config);
  log('info',  `electron 主进程启动完毕, 用时${(Date.now() - startTime) / 1000}s`)
}

