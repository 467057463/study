import { ref, getCurrentInstance } from 'vue'
const name = ref('mmm')

function HelloWorld(props, ctx){
  // console.log(props, ctx)
  const current = getCurrentInstance()
  console.log(current)
  return (
    <>
      <input v-model={name.value}/>
      {props.foo}: {name.value}
    </>
  )
}

// HelloWorld.props = ['foo']

export default HelloWorld