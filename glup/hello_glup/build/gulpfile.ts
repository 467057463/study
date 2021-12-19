import { series, src, dest } from 'gulp';
import { build } from './build'

function clean(cb){
  cb()
}

export default series(clean, build);


