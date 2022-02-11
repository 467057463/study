import glob from 'fast-glob'
import { src, dest } from 'gulp';
import babel from 'gulp-babel';
import through2 from 'through2';

// export async function build(){
//   const res = await glob('**/*.{js,ts,vue}');
//   console.log(res)
//   return Promise.resolve('abc')
// }

export function build(){
 return src('../src/*.js')
        .pipe(through2.obj(function(chunk, enc, cb){
          console.log(chunk)
          cb();
        }))
        .pipe(babel({
          presets: ['@babel/env']
        }))
        .pipe(dest('../output/'));
}