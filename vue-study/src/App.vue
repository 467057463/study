<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld name="mm" age="18" msg="Welcome to Your Vue.js App"/>
  <b class="test" :class="{active: isActive}">sss</b>
  <p class="test" :class="[{active: isActive}, 'has-error']">bbbb</p>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data(){
    return{
      isActive: true,
    }
  },

  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
