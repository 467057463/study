import { h, ref, reactive } from 'vue'

export default {
  setup(){
    const text = ref('abc')
    return () => h('div', {onClick: () => text.value = 'aaaaaaa'}, text.value)
  }
}