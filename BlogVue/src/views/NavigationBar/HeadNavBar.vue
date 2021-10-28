<template>

    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">

      <el-avatar class="avatar" shape="square" :size="32" index="1"
                   src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">Nini</el-avatar>
      <!--<el-menu-item class="name" index="2" disabled aria-hidden="true">霓霓的博客</el-menu-item>-->
      <h3 class="title">霓霓的博客</h3>

      <router-link to="/pagemain">
        <el-menu-item class="header_menu_item" index="3" v-on:click="pagemain()">主页</el-menu-item>
      </router-link>
      <router-link to="/knowledge">
        <el-menu-item class="header_menu_item" index="4" v-on:click="knoSort()">知识分类</el-menu-item>
      </router-link>
      <router-link to="/amusement">
        <el-menu-item class="header_menu_item" index="5" v-on:click="playmic()">娱乐影音</el-menu-item>
      </router-link>
      <router-link to="/message">
        <el-menu-item class="header_menu_item" index="6" v-on:click="myssage()">留言板</el-menu-item>
      </router-link>
      <router-link to="/myinfo">
        <el-menu-item class="header_menu_item" index="7" v-on:click="person()">个人</el-menu-item>
      </router-link>
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
      //this.$router.push("/main/knoSort");
    },
    playmic(){
      console.log("影音娱乐")
      //this.$router.push("/main/playmic");
    },
    myssage(){
      console.log("留言板")
      //this.$router.push("/main/myssage");
    },
    person(){
      console.log("个人信息")
    },

  }
}
</script>

<style scoped>


.el-menu-demo{
  position: fixed;
  left: 0;
  top: 0;
  right: 0;


  height: 40px;
  display: inline-block;

  border-bottom: 0px;
  background-color: black;

  /*border-bottom: 1px solid #333333 ;*/
}

.avatar{
  position: fixed;
  left: 15px;
  top: 4px;

  margin-left: 10px;
  margin-right: 0px;
  border-bottom: 0px solid #333333 ;
}

.title{
  position: fixed;
  left: 60px;
  top: -2px;
  /*color: floralwhite;*/
  font-family: cursive;
  color: cornflowerblue;

}


.header_menu_item{
  position: relative;
  left: 180px;
  height: 40px;
  text-align: center;
  display: inline-block;
  vertical-align: 10px;
  font-weight: bold;
  font-size: medium;
  color: floralwhite;
  line-height: 40px;
  border-bottom: 0px solid #333333 ;
}


</style>
