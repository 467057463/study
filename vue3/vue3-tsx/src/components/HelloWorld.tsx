import { ref, getCurrentInstance } from 'vue'

function HelloWorld(_, {slots}){
  const current = getCurrentInstance()
  const defaultSlot = slots.default()
  console.log(current, defaultSlot[0].children)
  return (
    <>
      {slots.default()}
    </>
  )
}

export default HelloWorld