export default comanndLineArgs => {
  console.log(comanndLineArgs)
  return {
    input: 'src/main.js',
    output: {
      file: 'bundle.js',
      format: 'cjs'
    }
  }
}