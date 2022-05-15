import { defineComponent, renderSlot } from 'vue'

export default defineComponent({
  setup(props, {slots}){
    console.log(slots)
    return() => {
      const children = renderSlot(slots, 'default', { key: 0}, () => []);
      console.log(children)
      return (
        <div>test</div>
      )
    }
  }
})