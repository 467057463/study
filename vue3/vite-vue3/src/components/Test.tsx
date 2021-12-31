import { defineComponent, ref, onUpdated, watch, watchEffect } from 'vue'

const isShow = ref(true)
const message = ref('aaaa')
export const isShowClick = () => {
  isShow.value = !isShow.value
  message.value = message.value + '1111'
}

watchEffect(() => {
  console.log(message.value)
})

export const TestChild = (props, ctx) => {
  console.log(props, ctx)
  onUpdated(() => {
    console.log('abbbb')
  })

  return (
    <div>
      <span v-show={isShow.value}>{props.name || '123456'}</span> - {message.value}
    </div>
  )
}

// export const TestChild = {
//   name: 'TestChild',
//   props: {
//     name: String
//   },
//   setup(props, ctx) {
//     return () => {
//       console.log(props, ctx)
//       return <div>{props.name} {ctx.attrs.age.value}  - {message.value}</div>
//     }
//   }
// }

export function WithConsole(WrappedComponent){
  return {
    name: `WithConsole${WrappedComponent.name}`,
    setup (props, ctx) {    
      console.log(props, ctx)
      const age = ref(18)
      onUpdated(() => {
        console.log(props, ctx)
      })
      return () => (
        <>
          <div>
            wint console hoc
          </div>
          <WrappedComponent age={age} {...ctx.attrs}></WrappedComponent>
        </>
      )
    }
  }
}

const Test = {
  name: 'Test',
  setup () {    
    return () => (
      <div>
        <el-button onClick={isShowClick}>显示隐藏</el-button>
        <p v-show={isShow.value}>11111111111111111</p>
      </div>
    )
  }
}

export default Test