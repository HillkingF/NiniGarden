<template>

    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-avatar class="avatar" shape="square" :size="35"
                 src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">Nini</el-avatar>
      <router-link to="/pagemain">
        <el-menu-item class="header_menu_item" index="1" v-on:click="pagemain()">主页</el-menu-item>
      </router-link>
      <router-link to="/knowledge">
        <el-menu-item class="header_menu_item" index="2" v-on:click="knoSort()">知识分类</el-menu-item>
      </router-link>
      <router-link to="/amusement">
        <el-menu-item class="header_menu_item" index="3" v-on:click="playmic()">娱乐影音</el-menu-item>
      </router-link>
      <router-link to="/message">
        <el-menu-item class="header_menu_item" index="4" v-on:click="myssage()">留言板</el-menu-item>
      </router-link>
      <router-link to="/myinfo">
        <el-menu-item class="header_menu_item" index="5" v-on:click="person()">个人</el-menu-item>
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
  height: 50px;
  display: inline-block;
  position: fixed;
  border-bottom: 10px;
  background-color: black;
  left: 0px;
  right: 0px;
}

.avatar{
  margin-left: 30px;
  margin-right: 100px;
  margin-bottom: 1px;
}

.header_menu_item{
  height: 50px;
  text-align: center;
  display: inline-block;
  vertical-align: 10px;
  font-weight: bold;
  font-size: medium;
  color: floralwhite;
}


</style>
