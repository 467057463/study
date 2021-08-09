const rollup = require('rollup');
const electron = require('electron')
const path = require('path')
const { spawn } = require('child_process')
const chalk = require('chalk')
const { build } = require('esbuild');

let electronProcess = null;
let manualRestart = false;

async function startMain(config, address){  
  const res = await build({
    entryPoints: [path.join(config.root, './main.js')],
    outdir: 'dist',
    platform: 'node',
    bundle: true,
    format: 'cjs',
    sourcemap: 'inline',
    metafile: true,
    plugins: [
      {
        name: 'externalize-deps',
        setup(build) {
          build.onResolve({ filter: /.*/ }, (args) => {
            const id = args.path
            if (id[0] !== '.' && !path.isAbsolute(id)) {
              return {
                external: true
              }
            }
          })
        }
      },
    ],
    watch: {
      onRebuild(error, result){
        if (error){
          throw('watch build failed:', error)
        }
        if(electronProcess && electronProcess.kill){
          manualRestart = true
          process.kill(electronProcess.pid)
          electronProcess = null

          startElectron(config, address)
          setTimeout(() => {
            manualRestart = false
          }, 5000)
        }
      }
    }
  })    
}

function startElectron(config, address){
  console.log('config', address)
  var args = [
    '--inspect=5858',
    path.join(config.root, 'dist', './main.js')
  ]
  electronProcess = spawn(electron, args, {
    env: {
      DEV_SERVER_URL: 'http://' + address.address + ':' + address.port,
      ...config.env
    }
  })

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
