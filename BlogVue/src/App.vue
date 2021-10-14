<template>
  <div id="app">
    <!--<router-link to="/login">Login</router-link>-->
    <!--<router-link to="/mainpage">MainPage</router-link>-->
    <router-view></router-view>
    <!--在app页面点击上面两个链接后,跳转到对应的新页面-->
    <HelloWorld/>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
