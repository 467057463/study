import { Loading } from './service';

const INSTANCE_KEY = Symbol('CLoading');


const createInstance = (el, binding) => {
  console.log(el, binding)
  
  el[INSTANCE_KEY] = {
    instance: Loading({
      target: el
    }),
  }
}

 const vLoading = {
  mounted(el, binding){
    if(binding.value){
      createInstance(el, binding)
    }
  },
  updated(el, binding, vnode){
    const instance = el[INSTANCE_KEY]
    if(binding.oldValue !== binding.value){
      if(binding.value && !binding.oldValue){
        createInstance(el, binding)
      } else {
        instance.instance.vm.close()
      }
    }
  }
}

export default vLoading;