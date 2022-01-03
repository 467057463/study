<template lang="pug">
.app
  .slider
    ul
      li 
        router-link(to="/") 首页
      li
        router-link(to="/scss") scss
      li
        router-link(to="/plugin") plugin
  .main
    router-view
</template>



<style lang="scss">
.app{
  display: flex;
  height: 100vh;
  .slider{
    width: 200px;
    border-right: 1px solid #eee;
    padding: 10px;
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
  }
  .main{
    padding-left: 20px;
  }
}
</style>
