<template>
  <!--这个页面用于在页面的主体部分异步显示-->

  <div class="div-wholepage">
    <div class="indiv">

      <el-container>
        <el-aside width="300px" class="aside">
          <div class="div-leftside">
            <div class="sub-left">
              <div>
                <el-image
                  :src="photourl"
                  :fit="fit" lazy
                  class="photoimg"></el-image>
              </div>
              <div class="left-block2">
                <el-descriptions class="left-person-info" title="个人信息" :column="1" style="font-size: 10px">
                  <el-descriptions-item class="des-item" label="Name">Nini</el-descriptions-item>
                  <el-descriptions-item label="Tel">18100000000</el-descriptions-item>
                  <el-descriptions-item label="Address" :span="2">BeiJing</el-descriptions-item>
                </el-descriptions>
              </div>
            </div>

            <div class="sub-left">
              <ul class="left-ul">
                <li>aaaa</li>
                <li>bbbb</li>
                <li>cccc</li>
              </ul>
            </div>

            <div class="sub-left">
              <el-row class="el-row2">
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
        </el-aside>

        <el-main class="div-main">
          <!--right===========-->
          <div class="div-rightside">
            <div class="sub-right">
              <!---->
              <h1>第一篇文章</h1>
            </div>
            <div class="sub-right">
              <h1>第二篇文章</h1>
            </div>
            <div class="sub-right">
              <h1>第三篇文章</h1>
            </div>
            <div class="sub-right">
              <h1>第四篇文章</h1>
            </div>
            <div class="sub-right">
              <h1>第五篇文章</h1>
            </div>
            <div class="sub-right">
              <h1>第六篇文章</h1>
            </div>
            <div class="sub-right">
              <h1>第四篇文章</h1>
            </div>
            <div class="sub-right">
              <h1>第五篇文章</h1>
            </div>
            <div class="sub-right">
              <h1>第六篇文章</h1>
            </div>
          </div>
        </el-main>
      </el-container>

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
  width: 100%;
}
.indiv{
  position: inherit;
  background-color: cornsilk;
}
.aside{
  background-color: #B3C0D1;
}
.div-main{
  background-color: snow;
}

/*================下面是左侧的属性===================*/
.div-leftside{
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
}
.sub-left{
  margin-bottom: 10px;
  background-color: #E9EEF3;
  border-radius: 5px;
  box-shadow: 0 10px 12px 0 rgba(0, 0, 0, 0.1)
}
.photoimg{
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  position: inherit;
}
.left-block2{
  padding: 10px;
}
.left-person-info{
  padding: 10px;
  background: #f9fafc;
}


/*================下面是右侧的属性===================*/
.sub-right{
  height: 120px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 7px 12px 0 rgba(0, 0, 0, 0.1)
}





/*==============左下角的小图===============*/
.el-row2{
  position: inherit;
}
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
