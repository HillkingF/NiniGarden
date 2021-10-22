<template>
  <el-container>
    <el-header class="header1">
      <HeadNavBar></HeadNavBar>
      <!--<router-view></router-view>-->
    </el-header>
    <el-container>
      <el-main>
        <!--router-view用于异步显示页面的主体部分-->
        <router-view></router-view>
      </el-main>
    </el-container>
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
.header1{
  height: 40px;
  left: 0px;
  right: 0px;
}

</style>
