import { defineConfig } from "rollup";
import myExample from "./rollup-plugin-my-example"; 
import css from 'rollup-plugin-css-only'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default defineConfig({
  input: 'src/index.js',
  plugins: [
    resolve(),
    // commonjs(),
    // css(),
    myExample()
  ],
  output: [{
    format: 'es',
    dir: 'dist'
  }],
})