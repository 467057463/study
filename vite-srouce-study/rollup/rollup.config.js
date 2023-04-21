export default commands => {
  console.log(commands)
  return {
    input: 'src/main.js',
    output: {
      // dir: 'dist',
      file: 'bundle.js',
      format: 'es'
    }
  }
}