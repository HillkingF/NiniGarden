<template>
  <div id="app">
    <!--<router-link to="/login">Login</router-link>-->
    <!--<router-link to="/mainpage">MainPage</router-link>-->
    <router-view></router-view>
    <!--在app页面点击上面两个链接后,跳转到对应的新页面-->
    <!--<HelloWorld/>-->
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
/*去除背景的白边*/
html,body{
  margin:0;
  padding:0;
}
#app {
  /*background: url("../static/img/bgMain.jpg");*/
  /*background-size: 100% 100%;*/
  /*height: 100vmax;*/
  /*width: 100%;*/
  /*!*position: relative;*!*/
  /*overflow: hidden;*/
  /*scroll-behavior: smooth;*/

}



</style>
