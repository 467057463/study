<template>  
  <HelloWorld name="mm" age="18" msg="Welcome to Your Vue.js App"/> 
  <div v-lazyload:foo.a.b='1+1'>test</div>
  <!-- <div class="image-wrapper">
    <template v-for="item in images" :key="item">
      <img v-lazyload="item"/>
    </template>
  </div> -->
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data(){
    return{
      isActive: true,
      images: [
        "https://t7.baidu.com/it/u=1904765955,37705782&fm=193",
        "https://t7.baidu.com/it/u=330673057,2524707684&fm=193",
        "https://t9.baidu.com/it/u=3764708569,1112967377&fm=193&app=53&size=w828&n=0&g=0n&f=jpeg?sec=1617525122&t=60c27aacc78d8186b90ecf5dccbe7d52",
        "https://t8.baidu.com/it/u=1828554722,1726041580&fm=193",
        "https://t9.baidu.com/it/u=3546753905,671292089&fm=193",
        "https://t7.baidu.com/it/u=15474189,1048745004&fm=193&app=53&size=w828&n=0&g=0n&f=jpeg?sec=1617525122&t=216f0087a222bc63509b3bed84cc5221",
        "https://t9.baidu.com/it/u=2052760660,3121023041&fm=193&app=53&size=w828&n=0&g=0n&f=jpeg?sec=1617525122&t=2b1abcfc0380f8c3246e9cd5d47bb94a",
        "https://t7.baidu.com/it/u=2781395401,2211863589&fm=193&app=53&size=w828&n=0&g=0n&f=jpeg?sec=1617526302&t=5d89c2b0bb1be18684654f6d8325d6ad",
        "https://t7.baidu.com/it/u=965914450,3484169397&fm=193&app=53&size=w828&n=0&g=0n&f=jpeg?sec=1617526302&t=c164ec946388b060df05b0ffab2372e7",
        "https://t8.baidu.com/it/u=290869725,568943680&fm=193",
        "https://t9.baidu.com/it/u=4225298079,3755706656&fm=193",
      ]
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
.img-wrapper{
  display: flex;
  flex-direction: column;
}
img{
  width: 100%;
  min-height: 300px;
}
</style>
