<template>
  <el-container>
    <el-aside width="200px">
      <!--左侧知识分类导航栏-->
      <el-row class="tac">
        <el-col :span="24">
          <h1 class="aside-title">知识类别</h1>

          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            mode="vertical"
            @open="handleOpen"
            @close="handleClose">

            <el-menu-item index="1" class="el-submenu-item">
              <i class="el-icon-location"></i>
              <span>图像处理</span>
            </el-menu-item>
            <el-menu-item index="2" class="el-submenu-item">
              <i class="el-icon-menu"></i>
              <span slot="title">深度学习</span>
            </el-menu-item>

            <!--disabled 设置是否可见-->
            <el-menu-item index="3" class="el-submenu-item">
              <i class="el-icon-document"></i>
              <span slot="title">计算机视觉</span>
            </el-menu-item>
            <el-menu-item index="4" class="el-submenu-item">
              <i class="el-icon-setting"></i>
              <span slot="title">Java</span>
            </el-menu-item>
            <el-menu-item index="5" class="el-submenu-item">
              <i class="el-icon-setting"></i>
              <span slot="title">Python</span>
            </el-menu-item>
            <el-menu-item index="6" class="el-submenu-item">
              <i class="el-icon-setting"></i>
              <span slot="title">框架</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-aside>
    <div>nnn</div>
    <el-main>
      <!--在这里增加列表或者目录,显示不同分类下面的文章列表-->
      <el-table
        :data="tableData"
        style="width: 100%"
        class="el-table">
        <el-table-column
          prop="date"
          label="更新日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="作者">
        </el-table-column>
      </el-table>

    </el-main>
  </el-container>

</template>

<script>
export default {
  name: "Knowledge",
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '温霓',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }

}
</script>

<style scoped>
.h1{
  color: darkorange;
}
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

/*==============左侧==============*/
.aside-title{
  height: 1px;
  line-height: 40%;
  font-weight: bold;
  font-size: 20px;
  color: darkorange;
}
.el-submenu-item{
  float: left;
  /*width: 100%;*/
  right: 0px;
}
/*===============页面主体的表格=======*/
.el-table{

}
.el-table__header-wrapper{
  height: 40px;
}
</style>
