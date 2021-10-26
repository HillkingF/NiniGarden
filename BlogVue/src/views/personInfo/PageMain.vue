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
        <el-row>
          <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '0px' }">
              <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
              <div style="padding: 14px;">
                <span>好吃的汉堡</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="text" class="button">操作按钮</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>

    <!--right===========-->
    <div class="div-rightside one-display">
      <div class="sub-right">
        <h1>第一篇文章</h1>
      </div>
      <div class="sub-right">
        <h1>第二篇文章</h1>
      </div>
      <div class="sub-right">
        <h1>第二篇文章</h1>
      </div>
    </div>
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
      fit: 'fill',
      currentDate: new Date()
    }
  }
}
</script>

<style scoped>
.div-wholepage{
  display: inline;
  /*!*页面滑动*!*/
  /*overflow-y: hidden;*/
  /*max-height: 500px;*/
  /*width:150px;*/

  /*height:300%;*/
  /*overflow: inherit;*/
  /*scroll-behavior:smooth*/

  /*页面滑动*/
  overflow-y: scroll;
  max-height: 100%;
  position: inherit;
}
.one-display{
  position: fixed;
  display: inline-block;
}
.div-leftside{
  width: 25%;
  left: 20px;
  /*right: 840px;*/
  top: 60px;
  /*!*页面滑动*!*/
  /*overflow-y: hidden;*/
  /*max-height: 500px;*/
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
  background-color: #D2E9FF;;
  /*opacity: 30%;*/
  left: 28%;
  top: 60px;
  right: 20px;
  height: 200%;
  border-radius: 3px;
  /*页面滑动*/
  overflow-y: scroll;
  max-height: 85%;
  position: fixed;
}
.sub-right{
  margin-left: 20px;
  margin-right: 20px;
  height: 120px;
  background-color: white;
  /*opacity: 50%;*/
  border-radius: 3px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
}


/*=============================*/
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  /*line-height: 12px;*/
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}


</style>
