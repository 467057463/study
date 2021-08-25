<template lang="pug">
router-link(to="/") 首页
router-link(to="/about") 关于我们
router-view
b {{msg}}
span test
el-button(
  type="primary"
  @click="increment"
) {{store.state.count}}
el-button(@click="count++") {{count}}
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from 'vuex'

const store = useStore()
console.log(store)
const count = ref(0);
const msg: string = 'test';

function increment(){
  store.commit('increment')
}
</script>

<style>
body{
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  height: 100vh;
  width: 100vw;
  
}
webview{
  width: 100vw;
  height: 100vh;
}
</style>
