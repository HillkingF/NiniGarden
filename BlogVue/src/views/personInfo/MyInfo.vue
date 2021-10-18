<template>
  <h1>个人页面</h1>

</template>

<script>
import HeadNavBar from "@/views/NavigationBar/HeadNavBar"


export default {
  name: "MyIfnfo",
  components: {HeadNavBar},
  methods: {
  }
}
</script>

<style scoped>
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
  opacity: 0.8;
}
.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 100;
  /*height: 100%;*/
  opacity: 0;
}

body > .el-container {
  margin-bottom: 30px;
}

/*.el-container:nth-child(5) .el-aside,*/
/*.el-container:nth-child(6) .el-aside {*/
/*  line-height: 260px;*/
/*}*/

/*.el-container:nth-child(7) .el-aside {*/
/*  line-height: 320px;*/
/*}*/
.header1{
  display: inline;
  height: 30px;
}
.el-menu-demo{
  display: inline;
  text-align: left;
  position: fixed;
  border-bottom: 0px;
  left: 0px;
  right: 0px;
}
.header_menu_item{
  text-align: right;
  float: right;
}
</style>
