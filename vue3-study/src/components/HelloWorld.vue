<template lang="pug">
b {{msg}}
test
</template>

<script setup lang="ts">
import Test from './Test.vue'
import { defineProps } from 'vue'

const props = defineProps({
  msg: String
})

</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
