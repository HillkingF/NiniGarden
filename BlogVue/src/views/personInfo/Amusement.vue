<template>
  <el-scrollbar style="height: 100%; width: 100%" :style="{minWidth: '560px'}">
    <div style="width: 100%; overflow-x: hidden; background: azure; left: 0; right: 0" :style=" {minHeight: windowHeight}">
    <!--Left-div-->
    <div class="area-div div-left" style="background: lemonchiffon; width: 240px; left: 0" :style="{minHeight: windowHeight}">
      <el-card class="box-card-left" :body-style="{ padding: '5px' }" >
        <el-image
          :src="photourl"
          :fit="fit"
          style="{ padding: 0}"
          ></el-image>
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          size="mini"
          class="el-table1"
          @row-click="rowclick"
          :style="{maxHheight: (windowHeight-60)+'px'}"
        >
          <el-table-column
            type="index"
            width="30"
            class="table1"
          >
          </el-table-column>
          <el-table-column
            type=""
            prop="musicName"
            label="歌名"
            width="70"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="singerName"
            label="歌手名"
            width="60"
            show-overflow-tooltip
          >
          </el-table-column>
        </el-table>
      </el-card>
    </div>

    <!--Middle-div-->
    <div class="area-div div-middle" style="background: white" :style="{minHeight: windowHeight,  width: windowWidth,  minWidth: '100px'}">
      <h2>{{musicrow}}</h2>



    </div>

    <!--Right-div-->
    <div class="area-div" style="background: lemonchiffon; right: 0; width: 240px; position: fixed" :style="{minHeight:windowHeight}">
      <h3>cc</h3>
    </div>
    </div>
  </el-scrollbar>
</template>

<script>

export default {
  name: "Amusement",
  data() {
    return {
      asideWidth: 480,
      windowHeight: document.documentElement.clientHeight + "px",
      windowWidth: (document.documentElement.clientWidth - 480) + "px",

      // 左侧div的属性
      photourl: '../../static/img/music.jpg',
      fit: 'fill',
      tableData: [
        {
        musicName: '大鱼1',
        singerName: '周深'
      }, {
        musicName: '大鱼2',
        singerName: '周深'
      }, {
        musicName: '大鱼3',
        singerName: '周深'
      },{
        musicName: '大鱼4',
        singerName: '周深'
      }, {
        musicName: '大鱼5',
        singerName: '周深'
      }, {
        musicName: '大鱼6',
        singerName: '周深'
      },{
        musicName: '大鱼7',
        singerName: '周深'
      }, {
        musicName: '大鱼8',
        singerName: '周深'
      }, {
        musicName: '大鱼9',
        singerName: '周深'
      },{
        musicName: '大鱼10',
        singerName: '周深'
      }, {
        musicName: '大鱼',
        singerName: '周深'
      }, {
        musicName: '大鱼',
        singerName: '周深'
      },{
        musicName: '大鱼',
        singerName: '周深'
      }, {
        musicName: '大鱼',
        singerName: '周深'
      }, {
        musicName: '大鱼',
        singerName: '周深'
      },{
        musicName: '大鱼',
        singerName: '周深'
      }, {
        musicName: '大鱼',
        singerName: '周深'
      }, {
        musicName: '大鱼',
        singerName: '周深'
      }
      ],
      musicrow: '',
    }
  },
  methods: {
    rowclick(val){
      // 获取点击的行的歌名和歌手名
      this.musicrow = val.musicName;
    }

  },
  // <!--在watch中监听实时宽高-->
  watch: {
    windowHeight (val) {
      let that = this;
    },
    windowWidth (val) {
      let that = this;
    },
  },

  mounted() {
    var that = this;
    // <!--把window.onresize事件挂在到mounted函数上-->
    window.onresize = () => {
      return (() => {
        window.fullHeight = document.documentElement.clientHeight + "px";
        window.fullWidth = (document.documentElement.clientWidth - this.asideWidth) + "px";
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
  width: 240px;
}
.div-middle{
  float: left;
}
.div-right{
  float: left;
  right: 0;
  width: 240px;
}

/*===========左侧的div================*/
.box-card-left {
  margin: 10px;
  margin-top: 5px;
}
.el-table1{
  margin-top: 5px;
}
/*.el-table--mini .el-table__cell {*/
/*  padding: 0 0;*/
/*}*/


</style>

<!--下面的style是用来修改element-ui默认值的-->
<style>
.el-table--mini .el-table__cell {
  padding: 0 0;
}
.el-table td.el-table__cell, .el-table th.el-table__cell.is-leaf {
  border-bottom: 0px solid #EBEEF5;
}
.el-table--mini, .el-table--small, .el-table__expand-icon {
  font-size: 6px;
}
.el-table .cell, .el-table--border .el-table__cell:first-child .cell {
  padding-left: 5px;
}
.el-scrollbar .el-scrollbar__warp{
  overflow-x: hidden;
}
</style>

