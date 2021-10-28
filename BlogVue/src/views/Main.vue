<template>
  <el-container>
    <el-header style="height:40px">
      <HeadNavBar></HeadNavBar>
      <!--<router-view></router-view>-->
    </el-header>

    <!--<el-container>-->
      <el-main class="main1">
        <!--router-view用于异步显示页面的主体部分-->
        <router-view></router-view>
      </el-main>
    <!--</el-container>-->
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
  height: 100vmax;
  width: 100%;
  position: initial;
  overflow: hidden;
  scroll-behavior: smooth;
}
</style>
