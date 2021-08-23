<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite + electron" /> -->
  <webview 
    ref="webview"
    src="http://www.google.com"
    style="display:inline-flex; width:100vw; height:100vh"  
    partition="persist:test_webview_session"
    :preload="preload"
  ></webview>
</template>

<script lang="ts">
const fs = require('fs');
const path = require('path');
const url = require('url')
import { defineComponent } from 'vue'
// import HelloWorld from './components/HelloWorld.vue'


export default defineComponent({
  name: 'App',
  // components: {
  //   HelloWorld
  // },

  data(){
    // console.log(import.meta)
    // const __preload = import.meta.env.MODE === 'development' ? path.join(process.cwd(), 'dist/preload') : path.join(__dirname, '../../app.asar', 'preload')
    return{
      // @ts-ignore
      preload: url.pathToFileURL(path.join(__preload, 'test.js'))
    }
  },

  mounted(){
    // @ts-ignore
    const webview = document.querySelector('webview');    
    // @ts-ignore
    webview.addEventListener('dom-ready', () => {
      // @ts-ignore
      webview.openDevTools()
    })
    
    // @ts-ignore    
    console.log(__static)
    // @ts-ignore
    const fileLocation = path.join(__static, 'static/test.txt');
    const fileContents = fs.readFileSync(fileLocation, 'utf8')
    console.log(fileContents)
  }
})
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
