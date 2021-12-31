import CLoading from './src/directive'
import{ Loading } from './src/service'

export default {
  install(app, options){
    // console.log(app, options)
    app.directive('cloading', CLoading)
  },
  service: Loading
}