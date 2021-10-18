<template>
  <!--这个页面用于在页面的主体部分异步显示-->

  <div class="demo-image">

    <div class="block" v-for="fit in fits" :key="fit">
      <span class="demonstration">{{ fit }}</span>
      <el-image
        style="width: 100px; height: 100px"
        :src="url"
        :fit="fit"></el-image>
    </div>
  </div>

</template>

<script>
export default {
  name: "PageMain",
  data() {
    return {
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    }
  }
}
</script>

<style scoped>
.h1{
  color: darkorange;
}


</style>
