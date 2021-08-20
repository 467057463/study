<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup: sss
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a
      href="https://marketplace.visualstudio.com/items?itemName=octref.vetur"
      target="_blank"
    >
      Vetur
    </a>
    or
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    (if using
    <code>&lt;script setup&gt;</code>)
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
// import fs from 'fs';
// console.log(fs.stat)
// const fs = require('fs');
// const path = require('path')
// console.log('path', path, __dirname, process.cwd())
// const fileLocation = path.join(process.cwd(), 'public/static', 'test.txt')
// // const fileLocation = path.join(process.cwd(), 'public', 'test.txt')
// const fileContents = fs.readFileSync(fileLocation, 'utf8')
console.log('fileContents')

const worker = new Worker('/worker/worker.js');
worker.postMessage('Hello World');
worker.postMessage({method: 'echo', args: ['Work']});

worker.onmessage = function(event){
  console.log('received message', event)
}

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: () => {
    const count = ref(0)
    return { count }
  }
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
