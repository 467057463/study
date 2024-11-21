import resolve from '@rollup/plugin-node-resolve'
export default {
  // 对象模式
  input: {
    index: 'src/main.js',
  },

  output: {
    dir: 'dist',
    format: 'iife',
  },

  plugins: [
    resolve()
  ]
}