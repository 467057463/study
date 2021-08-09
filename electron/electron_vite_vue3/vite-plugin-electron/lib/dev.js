const rollup = require('rollup');
const electron = require('electron')
const path = require('path')
const { spawn } = require('child_process')
const chalk = require('chalk')

let electronProcess = null;
let manualRestart = false;

function startMain(config, address){
  return new Promise((resolve, reject) => {
    const watchOptions = {
      input: path.join(config.root, './main.js'),
      external: ['electron'],
      output:[
        {          
          dir: path.join(config.root, './dist'),
          format: 'cjs',
          sourcemap: process.env.NODE_ENV === 'development' ? 'inline' : false
        }
      ]
    };
    const watcher = rollup.watch(watchOptions);
    watcher.on('event', event => {
      // console.log(event);
      // startElectron(config, address)
      if(electronProcess && electronProcess.kill){
        manualRestart = true
        process.kill(electronProcess.pid)
        electronProcess = null
        startElectron(config, address)

        setTimeout(() => {
          manualRestart = false
        }, 5000)
      }
    })
    resolve();
  })  
}

function startElectron(config, address){
  var args = [
    '--inspect=5858',
    path.join(config.root, 'dist', './main.js')
  ]
  electronProcess = spawn(electron, args)

  electronProcess.stdout.on('data', data => {
    electronLog(data, 'blue')
  })
  electronProcess.stderr.on('data', data => {
    electronLog(data, 'red')
  })

  electronProcess.on('close', () => {
    if (!manualRestart) process.exit()
  })
}

export default function(config, address){
  startMain(config, address).then(res => {
    startElectron(config, address)
  })
}

function electronLog (data, color) {
  let log = ''
  data = data.toString().split(/\r?\n/)
  data.forEach(line => {
    log += `  ${line}\n`
  })
  if (/[0-9A-z]+/.test(log)) {
    console.log(
      chalk[color].bold('┏ Electron -------------------') +
      '\n\n' +
      log +
      chalk[color].bold('┗ ----------------------------') +
      '\n'
    )
  }
}
