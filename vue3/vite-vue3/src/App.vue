<template>
  <p>
    {{message}}
  </p>
  <input v-model="message"/>
  <hello-world
    v-for="item of list"
    :text="item" 
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue';

const message = ref('hello world');
const list = ["111", '2222']
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
