import { series, parallel, src, dest } from 'gulp';
import { build } from './build'
import { run } from './utils/run'

function withTaskName(name, fn){
  return Object.assign(fn, {
    displayName: name
  })
}

export function clean(cb){
  console.log('test clean')
  cb()
}

export default parallel(
  withTaskName('test', () => run('git status')),
  clean, 
  build,
);

export {
  build
}


