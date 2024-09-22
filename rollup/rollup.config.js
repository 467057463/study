import { defineConfig } from "rollup";
import { fileURLToPath } from "node:url";
import path, { extname } from 'node:path'
import * as glob from 'glob';
import pgk from './package.json' assert { type: 'json' }
import css from 'rollup-plugin-css-only'

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
          lodash: "lodash"
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
          lodash: "lodash"
        },
        amd: {
          id: "elecxt"
        }
      },
      {
        format: 'es',
        dir: 'dist',
        entryFileNames: '[name].[format].js'
      },
      {
        format: 'system',
        dir: 'dist',
        entryFileNames: '[name].[format].js'
      }
    ],
    external: ['lodash']
  }
})