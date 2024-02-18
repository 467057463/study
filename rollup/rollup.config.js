import { defineConfig } from "rollup";
import { fileURLToPath } from "node:url";
import path, { extname } from 'node:path'
import * as glob from 'glob';
import pgk from './package.json' assert { type: 'json' }
import css from 'rollup-plugin-css-only'

console.log(fileURLToPath(new URL('src/util.js', import.meta.url)))
console.log(pgk)

const inputs = Object.fromEntries(
  glob.sync('src/**/*.js').map(file => {
    const url = import.meta.url;
    const f = new URL(file, import.meta.url)
    return [
      path.relative(
        'src', 
        file.slice(0, path.extname(file).length * -1)
      ),
      fileURLToPath(new URL(file, import.meta.url))
    ]
  })
)

console.log(inputs)

export default defineConfig((comanndLineArgs) => {
  console.log(comanndLineArgs)
  return {
    // 相对路径
    external: [
      './utils/index'
    ],
    // 绝对路径
    // external: [
    //   fileURLToPath(
    //     new URL(
    //       'src/utils/index.js',
    //       import.meta.url
    //     )
    //   )
    // ],

    // 函数
    // external(id, parent, isResoved){
    //   console.log(id, parent, isResoved)
    //   return true;
    // },

    // 数组模式
    // input: ['src/main.js', 'src/electron.js'],

    // 对象模式
    input: {
      index: 'src/main.js',
      'electron/index': 'src/electron.js'
    },

    // 测试转换所有文件格式
    // input: inputs,
    output: {
      // file: 'bundle.js',
      dir: 'dist',
      format: 'cjs',
      assetFileNames: "assets/[name]-[hash:10].[extname]",
      // assetFileNames(assestInfo){
      //   console.log('assestInfo', assestInfo)
      // },
      // 字符串
      // banner: `// test ${pgk.version}`，
      // banner(assestInfo){
      //   console.log(assestInfo)
      //   return '// sss'
      // },
      entryFileNames(assestInfo){
        console.log(assestInfo)
        return assestInfo.name
      }
    },

    plugins: [
      css()
    ]
  }
})