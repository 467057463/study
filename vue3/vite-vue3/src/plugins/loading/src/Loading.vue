<template>
  <transition name="bounce" @after-leave="afterLeave" appear>
  <div class="loading" v-if="visible">
    <div>pppppppp</div>
    <span>{{props.text}}</span>
  </div>
  </transition>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  text: string
}

const props = withDefaults(defineProps<Props>(),{
  text: 'loading...'
})

const visible = ref(false)
function show(){
  visible.value = true;
}
function close(){
  visible.value = false;
}
function afterLeave(){
  console.log('afterLeave')
}
defineExpose({
  show,
  close,
  visible
})
</script>

<style>
/* 定义 */
.fade-enter-from {
  /* opacity: 0.5; */
  color: chartreuse;
  transform: translateX(20px);
}
.fade-enter-active {
  transition: all 0.25s ease;
  /* transition-delay: 100s; */
}
.fade-enter-to {
  color: red;
}

.fade-leave-from {
  transform: translateX(-20px);
  opacity: 0.5;
  color: red;
}
.fade-leave-active{
  transition: all 0.5s ease;
}
.fade-leave-to {
  transform: translateX(20px);
  color: yellow;
  opacity: 0;
}
.bounce-enter-from{
  color: red;
  /* transform: translateX(20px); */
}
.bounce-enter-active{
  animation: bounce-in 0.5s;
  /* animation-delay: 10s; */
}
.bounce-enter-to{
  color: yellow;
}
.bounce-leave-active{
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0%{
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
/* .fade-enter-active, 
.fade-leave-active{
  transition:  opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
} */
</style>