<template>
  <el-scrollbar style="height: 100%" >
    <div id="d1" v-infinite-scroll="load"  style="overflow:auto">
      <div id="d2" :style="{minHeight: windowHeight}">
        <!--留言框-->
        <div id="up">
          <div class="t1">
            <el-row>
              <el-col :span="3">
                <el-image
                  style="width: 70px; height: 70px"
                  :src="photourl"
                  :fit="fit"
                  class="photo"
                  ></el-image>
              </el-col>
              <el-col :span="21">
                <div class="inputline">
                  <el-input
                    type="textarea"
                    autosize
                    placeholder="留言板..."
                    v-model="textarea"
                    clearable
                    maxlength="300"
                    show-word-limit
                    id="input1"
                  >
                  </el-input>
                  <!--按钮组-->
                  <el-button-group id="up-btn">
                    <el-button type="primary" class="btn1" icon="el-icon-check" size="mini" @click="submit">发表</el-button>
                    <el-button type="primary" class="btn1" icon="el-icon-delete" size="mini" @click="clear">清空</el-button>
                  </el-button-group>
                </div>
              </el-col>
            </el-row>
          </div>
          <!--<el-divider class="divdier-line"></el-divider>-->
        </div>
        <el-divider class="divdier-line"></el-divider>


        <!--新增留言动态显示 v-if="photoshow"根据属性状态判断是否显示-->
        <div v-if="photoshow">
            <el-row>
              <!--左侧的留言用户头像-->
              <el-col :span="3" >
                <el-avatar shape="square" class="avatar"> user </el-avatar>
              </el-col>
              <el-col :span="21">
                <div class="messline">
                  <div class="down-text">
                    {{newInsertText}}
                  </div>
                  <div class="down-ip-addr">
                    <span>发布时间:{{pubtime}}&nbsp;</span>
                    <span>用户IP:{{userip}}&nbsp;</span>
                    <span>{{useraddress}}</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-divider class="divdier-line"></el-divider>
        </div>


        <!--历史留言动态显示:有留言才显示-->
        <div v-if="historyshow" v-for="(eachHistory, index) in historyMessages">
            <el-row>
              <!--左侧的留言用户头像-->
              <el-col :span="3" >
                <el-avatar shape="square" class="avatar"> u{{index}} </el-avatar>
              </el-col>
              <el-col :span="21">
                <div class="messline">
                  <div class="down-text">
                    {{eachHistory.history_text}}
                  </div>
                  <div class="down-ip-addr">
                    <span>发布时间:{{pubtime}}&nbsp;</span>
                    <span>用户IP:{{eachHistory.history_ip}}&nbsp;</span>
                    <span>{{eachHistory.history_addr}}</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-divider class="divdier-line"></el-divider>
        </div>


      </div>
    </div>

  </el-scrollbar>

</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      fit: 'fill',
      textarea: '',   // 文本框输入的内容
      photourl: '../../static/img/commonPhoto.jpg',
      windowWidth: document.documentElement.clientWidth + "px",  //实时屏幕宽度
      windowHeight: document.documentElement.clientHeight + "px",   //实时屏幕高度
      // 留言板文本,IP,用户国内地址

      // 新增留言中的对象
      newInsertText: "",
      userip: "",
      useraddress: "",
      pubtime: "2021.11.18.20:04",
      photoshow: false,

      // 历史留言中的对象
      historyshow: false,
      historyMessages: [
        {
          history_ip: 132,
          history_addr: "国内",
          history_text: "文本1",
          history_time: "发布时间"
        },{
          history_ip: 133,
          history_addr: "国内",
          history_text: "文本2",
          history_time: "发布时间"
        },
        {
          history_ip: 134,
          history_addr: "国内",
          history_text: "文本3",
          history_time: "发布时间"
        },{
          history_ip: 135,
          history_addr: "国内",
          history_text: "文本4",
          history_time: "发布时间"
        }
      ],


    }
  },
  methods: {
    load(){

    },
    submit(){
      if (this.textarea !== ""){
        // 上传操作,异步请求
        // write you code here .....
        // 上传操作成功后才能将最新的留言显示在页面中
        this.newInsertText = this.textarea;      //显示在div中的文本
        this.userip = returnCitySN['cip'];       //留言用户的IP地址
        this.useraddress = returnCitySN['cname'] //留言用户的国内地址
        // 文本框非空白, 清空文本框,并将文本上传到后端数据库中
        this.textarea = "";                      //将留言板清空
        // 插入留言的图像是否显示
        this.photoshow = true;
      }else{
        // 文本框空白, 按钮失效
      }
    },
    clear(){
      if(this.textarea !== ""){
        this.textarea = "";
      }
    },
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
        window.fullWidth = document.documentElement.clientWidth + "px";
        that.windowHeight = window.fullHeight;  // 高
        that.windowWidth = window.fullWidth; // 宽
      })()
    };
  },
  created() {
    // 在html渲染的时候调用这个钩子, 获取历史用户留言数据
    if (this.historyMessages.length > 0){
      this.historyshow = true;
    }

  }

}
</script>


<style scoped>
/*下面是整页滚动条的相关属性*/
::-webkit-scrollbar {
  width: 8px;
  height: 10px;
}

::-webkit-scrollbar-thumb {
    background-color: lightsteelblue;
    border-radius: 3px;
}

/*下面是两个外层div的属性*/
#d1{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
#d2{
  position: absolute;
  background: ghostwhite;
  left: 140px;
  right: 140px;
}
/*下面是留言框相关的属性*/
#up{
  background: whitesmoke;
}
/*文本框*/
.t1{
  padding: 10px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 0;
  margin-bottom: 0;
}
#input1{
  margin-left: 50px;
}
#up-btn{
  padding-top: 3px;
  float: right;
}
.btn1{
  border-color: #f9fafc;
}
.inputline{
  padding-top: 10px;
  padding-right: 20px;
}
.photo{
  border-radius: 4px;
}

/*下面是新增留言div相关的属性*/
.divdier-line{
  margin: 0 0;
  width: 100%;
}

/*历史留言部分属性*/
.avatar{
  margin: 5px 0 5px 35px;
}
.messline{
  padding-top: 5px;
  padding-left: 15px;
  padding-right: 45px;
}
.down-text{
  font-size: 12px;
}
.down-ip-addr{
  float: right;
  padding-top: 5px;
  margin-bottom: 5px;
  color: #999999;
  font-size: 12px;
}

</style>
