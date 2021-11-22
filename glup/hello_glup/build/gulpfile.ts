import { series, src, dest } from 'gulp';
import babel from 'gulp-babel';

function clean(cb){
  cb()
}

export async function build() {
  console.log('abc')
  return Promise.resolve('abc')
}

export default series(clean, build);


