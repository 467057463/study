import { spawn } from 'child_process'
import path from 'path'

export const run =async (command: string) => 
  new Promise<void>((resolve, reject) => {
    const [cmd, ...args] = command.split(' ');
    console.log(`run: ${command}`)
    console.log(path.join(__dirname, '../../'))
    const app = spawn(cmd, args, {
      cwd: path.join(__dirname, '../../'),
      stdio: 'inherit',
      shell: process.platform === 'win32',
    })

    const onProcessExit = () => app.kill('SIGHUP')

    app.on('close', (code) => {
      process.removeListener('exit', onProcessExit)

      if(code === 0){
        resolve()
      } else {
        reject(
          new Error(`Command failed. \n Command: ${command} \n Code: ${code}`)
        )
      }
    })

    process.on('exit', onProcessExit)
  })