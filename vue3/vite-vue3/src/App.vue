<template>
<el-button v-loading="loading">test</el-button>
<el-button v-cloading:[name].test="loading">cloading button</el-button>
<el-button @click="test">change</el-button>

<div :class="classList" @click="testHover">
  test abcdef
</div>
<Test></Test>
<div @click="testClick">click aaaaaaaaaaaaaaa</div>
<TestHoc :name='name'/>
</template>

<script lang="ts" setup>
import { ref,createApp } from 'vue';
import CLoading from './plugins/loading'
import Test, { isShowClick, TestChild, WithConsole } from './components/Test'
import ElementPlus from 'element-plus'

const TestHoc = WithConsole(TestChild)

// data
const loading = ref(false);
const name = ref('');
let cLoading;
function test(){
  loading.value = !loading.value;
  if(cLoading){
    console.log(cLoading.vm)
    if(cLoading.vm.visible){
      cLoading.vm.close()
    } else {
      cLoading.vm.show()
    }
  } else {
    cLoading = CLoading.service()
  }
}

function testClick(){
  isShowClick()
}

const classList = ref<any>(['test-transition-form']);
function testHover(){
  console.log('abc')
  classList.value.push('test-transiton-active')
  classList.value.shift();
  classList.value.push('test-transition-to')
}
const vm = createApp(Test).use(ElementPlus).mount(document.createElement('div'))
console.log(vm)
document.body.append(vm.$el)
</script>

<style>
.test-transition-form{
  color: chartreuse;
  transform: translateX(20px);
}
.test-transiton-active{
  transition: all 0.25s ease;
}
.test-transiton-active{
  color: red;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
