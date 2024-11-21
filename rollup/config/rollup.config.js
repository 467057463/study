import { defineConfig } from "rollup";
import { fileURLToPath } from "node:url";
import path, { extname } from 'node:path'
import * as glob from 'glob';
import pgk from './package.json' assert { type: 'json' }
import css from 'rollup-plugin-css-only'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

console.log(fileURLToPath(new URL('src/util.js', import.meta.url)))


export default defineConfig((comanndLineArgs) => {
  console.log(comanndLineArgs)
  return {
    input: 'src/main.js',
    output: [
      {
        format: 'iife',
        dir: 'dist',
        name: 'elecxt',
        entryFileNames: '[name].[format].js',
        globals:{
          lodash: "_"
        }
      },
      {
        format: 'cjs',
        dir: 'dist',
        entryFileNames: '[name].[format].js'
      },
      {
        format: 'amd',
        dir: 'dist',
        entryFileNames: '[name].[format].js',
        amd: {
          id: "elecxt"
        }
      },
      {
        format: 'umd',
        dir: 'dist',
        entryFileNames: '[name].[format].js',
        name: 'elecxt',
        globals:{
          lodash: "_"
        },
        amd: {
          id: "elecxt"
        }
      },
      {
        format: 'es',
        dir: 'dist',
        entryFileNames: '[name].[format].js',
        // assetFileNames: '[name][hash:10][extname].[ext]',
        banner: (chunk) => {
          console.log(chunk)
          return '// test '
        }
      },
      {
        format: 'system',
        dir: 'dist',
        entryFileNames: '[name].[format].js'
      }
    ],
    plugins: [
      resolve(),
      commonjs(),
      css()
    ],
    // 数组
    // external: ['lodash']
    // 函数
    external(id, parentId, isResolved){
      console.log({id, parentId, isResolved})
      return false;
    },
    external: [
      'lodash',
      // fileURLToPath(new URL('src/utils/index.js', import.meta.url)),
      // /node_modules/
    ]
  }
})