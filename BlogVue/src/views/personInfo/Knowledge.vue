<template>
  <div class="div-wholepage">
    <div class="indiv">
      <el-container>
        <el-aside width="200px" class="left-aside">
              <!--左侧知识分类导航栏-->
              <el-row class="left-guide">
                <el-col :span="24">
                  <h1 class="aside-title">知识类别</h1>

                  <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    mode="vertical"
                    @open="handleOpen"
                    @close="handleClose"
                  >

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
        <el-main class="right-main">
          <!--right===========-->
          <div class="div-right" >

                <!--在这里增加列表或者目录,显示不同分类下面的文章列表-->
                <el-table
                  :data="tableData"
                  class="el-table"
                  height="700px"
                  >
                  <el-table-column
                    class="table-cell"
                    prop="date"
                    label="更新日期"
                    width="180"
                    height="10">
                  </el-table-column>
                  <el-table-column
                    class="table-cell"
                    prop="name"
                    label="名称"
                    width="180"
                    height="30">
                  </el-table-column>
                  <el-table-column
                    class="table-cell"
                    prop="address"
                    label="作者"
                    height="30">
                  </el-table-column>
                </el-table>

          </div>
        </el-main>
      </el-container>

    </div>
  </div>
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
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
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
/*=================外层的一些框架================*/
.div-wholepage{
}
.indiv{
  position: fixed;
  left: 10px;
  right: 10px;
  bottom: 10px;
  top: 50px;
  background-color: aliceblue;
}
.left-aside{
  margin: 10px;
  margin-top: 20px;
  border-radius: 5px;
  box-shadow: 0 10px 12px 0 rgba(0, 0, 0, 0.1)
  /*background-color: #B3C0D1;*/
}
.right-main{
  right: 10px;
  /*margin: 10px;*/
  /*margin-top: 20px;*/
  /*width: 100%;*/
  background-color: snow;
}

/*=================左侧================*/
.left-guide{
  position: initial;
  text-align: center;
  background: lightblue;
}
.aside-title{
  height: 1px;
  line-height: 40%;
  font-weight: bold;
  font-size: 20px;
  color: darkorange;
  position: initial;
}
.el-menu-vertical-demo{
  position: initial;
}
.el-submenu-item{
  text-align: left;  /*每一行的文字靠左对齐*/
  position: inherit;
}

/*=================右侧================*/
.div-right{
  background: lightcoral;
  width: 100%;
  height: 100%;
  box-shadow: 0 10px 12px 0 rgba(0, 0, 0, 0.1)
}
.el-table{

}
.table-cell {
}



</style>
