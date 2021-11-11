<template>
  <el-container class="con1">
    <el-header style="height:40px">
      <HeadNavBar></HeadNavBar>
      <!--<router-view></router-view>-->
    </el-header>
      <el-main class="main1">
        <!--router-view用于异步显示页面的主体部分-->
        <router-view></router-view>
      </el-main>
  </el-container>

  <!--接下来将view子目录中的两个页面添加到这里,进行路由嵌套处理-->


</template>


<script>
import HeadNavBar from "@/views/NavigationBar/HeadNavBar"

export default {
  name: "Main",
  components:{
    HeadNavBar
  },
}
</script>

<style scoped>

.main1{
  background: url("../../static/img/bgMain.jpg");
  background-size: 100% 100%;
  top: 40px;
  height: 100vh;
  width: 100%;
  position: fixed;
  padding-top: 0;
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 20px;
}
</style>
