<template>
<input v-model="name" v-loading.test="'ssss'"/>
</template>

<script lang="ts" setup>
import { watch, ref, computed, watchEffect, reactive,  nextTick, readonly, isProxy, isReactive, isReadonly, toRaw, markRaw, toRef, toRefs, getCurrentInstance } from 'vue';
const obj = reactive({name: 'mm'})
// const name = toRef(obj, 'name')
const {name} = toRefs(obj)
console.log(name)
console.log(getCurrentInstance())
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
