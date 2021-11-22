<template>
  <el-scrollbar style="height: 100%" >
    <!--Left-div-->
    <div class="area-div div-left" style="background: lemonchiffon" :style="{minHeight: windowHeight}">
      <el-card class="box-card-left" :body-style="{ padding: '5px' }">
        <el-image
          :src="photourl"
          :fit="fit"
          style="{ padding: 0px}"
          ></el-image>
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          size="mini"
          @selection-change="handleSelectionChange">
          <el-table-column
            type="index"
            width="10">
          </el-table-column>
          <el-table-column
            type="selection"
            width="40">
          </el-table-column>
          <el-table-column
            prop="musicName"
            label="歌名"
            width="80"
            show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            prop="musicName"
            label="歌手名"
            width="60"
            show-overflow-tooltip>
          </el-table-column>
        </el-table>
      </el-card>
    </div>

    <!--Middle-div-->
    <div class="area-div div-middle" style="background: white" :style="{minHeight: windowHeight, width: windowWidth}">
      <h2>bb</h2>
    </div>

    <!--Right-div-->
    <div class="area-div div-right" style="background: lemonchiffon" :style="{minHeight: windowHeight}">
      <h3>cc</h3>
    </div>
  </el-scrollbar>
</template>

<script>
export default {
  name: "Amusement",
  data() {
    return {
      windowHeight: document.documentElement.clientHeight + "px",
      windowWidth: (document.documentElement.clientWidth - 460) + "px",
      // 左侧div的属性
      photourl: '../../static/img/music.jpg',
      fit: 'fill',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
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
      }],
    }
  },
  // <!--在watch中监听实时宽高-->
  watch: {
    windowHeight (val) {
      let that = this;
    },
    windowWidth (val) {
      let that = this;
    }
  },

  mounted() {
    var that = this;
    // <!--把window.onresize事件挂在到mounted函数上-->
    window.onresize = () => {
      return (() => {
        window.fullHeight = document.documentElement.clientHeight + "px";
        window.fullWidth = (document.documentElement.clientWidth - 460) + "px";
        that.windowHeight = window.fullHeight;  // 高
        that.windowWidth = window.fullWidth;  // 高
      })()
    };
  },
}
</script>

<style scoped>
/*===========页面的div================*/
.area-div{
  display: inline-block;
}
.div-left{
  left: 0;
  float: left;
  width: 230px;
}
.div-middle{
  float: left;
}
.div-right{
  float: left;
  right: 0;
  width: 230px;
}

/*===========左侧的div================*/
.box-card-left {
  margin: 10px;
  padding: 0;
}

</style>

