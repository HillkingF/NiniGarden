<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <i class="el-icon-sunny"></i>
        <el-menu-item class="header_menu_item" index="1" v-on:click="knoSort()">知识分类</el-menu-item>
        <el-menu-item class="header_menu_item" index="2" v-on:click="playmic()">娱乐影音</el-menu-item>
        <el-menu-item class="header_menu_item" index="3" v-on:click="myssage()">留言板</el-menu-item>
        <el-menu-item class="header_menu_item" index="4" v-on:click="person()">个人</el-menu-item>
      </el-menu>
</template>

<script>
export default {
  name: "HeadNavBar",
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    knoSort(){
      console.log("知识分类")
      this.$router.push("/main/myinfo");
    },
    playmic(){
      console.log("影音娱乐")
      this.$router.push("/main/playmic");
    },
    myssage(){
      console.log("留言板")
      this.$router.push("/main/myssage");
    },
    person(){
      console.log("个人信息")
      this.$router.push("/main/person");
    },

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
  display: inline-block;
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
