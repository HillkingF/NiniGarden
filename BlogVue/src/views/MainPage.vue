<template>
  <div class="demo-image__lazy">
    <h1>首页</h1>
    <el-image :src="urls" :fit="none" lazy>

    </el-image>
  </div>

  <!--接下来将view子目录中的两个页面添加到这里,进行路由嵌套处理-->


</template>


<script>

export default {
  name: "MainPage",
  data() {
    return {
      urls: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',

    }
  }
}
</script>

<style scoped>

</style>
