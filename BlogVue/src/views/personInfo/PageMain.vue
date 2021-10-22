<template>
  <!--这个页面用于在页面的主体部分异步显示-->

  <div class="div-wholepage">
    <!--left============-->
    <div class="div-leftside one-display">
      <div class="sub-left sub-l1">
        <div class="left-block1 block1css">
          <el-image
            style="width: 90%"
            :src="photourl"
            :fit="fit" lazy
            class="photoimg"></el-image>
        </div>
        <div class="left-block1 block2css">
          <el-descriptions title="个人信息" class="el-descriptions-out">
            <el-descriptions-item label="Name">Nini</el-descriptions-item>
          </el-descriptions>
          <el-descriptions class="el-descriptions-out">
            <el-descriptions-item label="Tel">18100000000</el-descriptions-item>
          </el-descriptions>
          <el-descriptions class="el-descriptions-out">
            <el-descriptions-item label="Address">China</el-descriptions-item>
          </el-descriptions>
        </div>
      </div>

      <div class="sub-left">
        <ul class="left-ul">
          <li>个人名字</li>
          <li>侧背</li>
          <li>侧背</li>
        </ul>
      </div>

      <div class="sub-left">
        <ul class="left-ul">
          <li>网站访问量</li>
          <li>侧背</li>
          <li>侧背</li>
        </ul>
      </div>
    </div>

    <!--right===========-->
    <div class="div-rightside one-display">
      <div class="sub-right">
        <ul class="right-ul">
          <li>个人名字</li>
          <li>侧背</li>
          <li>侧背</li>
        </ul>
      </div>
    </div>

    <!--<div class="" v-for="fit in fits" :key="fit">-->
    <!--  <span class="demonstration">{{ fit }}</span>-->
    <!--  <el-image-->
    <!--    style="width: 100px; height: 100px"-->
    <!--    :src="url"-->
    <!--    :fit="fit">-->

    <!--  </el-image>-->
    <!--</div>-->
  </div>
</template>

<script>
export default {
  name: "PageMain",
  data() {
    return {
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      photourl: '../../static/img/MyPhoto.jpg',
      fit: 'fill'
    }
  }
}
</script>

<style scoped>
.div-wholepage{
  display: inline;
}
.one-display{
  position: fixed;
  display: inline-block;
}
.div-leftside{
  width: 25%;
  top: 60px;
}
.sub-left{
  background-color: #D2E9FF;
  border-radius: 3px;
  top: 60px;

}
.sub-l1{
  text-align: center;
}
.left-ul{
  weight: 20%;
}
.photoimg{
  padding-top: 10px;
}

/*===========================*/
.div-rightside{
  background-color: floralwhite;
  opacity: 30%;
  left: 30%;
  top: 72px;
  right: 20px;
  border-radius: 3px;
}
.sub-right{
  background-color: floralwhite;
  opacity: 50%;
  border-radius: 3px;
}
.right-ul{
  weight: 20%;
}

</style>
