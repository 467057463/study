import VLoading from './src/directive'

export default {
  install(app, options){
    // console.log(app, options)
    app.directive('loading', VLoading)
  }
}