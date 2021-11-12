<template>
  <el-scrollbar style="height: 100%" >
    <div id="d1"v-infinite-scroll="load"  style="overflow:auto">
      <div id="d2">
        留言：
        <el-input
          type="textarea"
          autosize
          placeholder="请输入内容"
          v-model="textarea"
          clearable>
        </el-input>
        <h1>wenzi</h1>
        <h1>wenzi</h1>
        <h1>wenzi</h1>
        <h1>wenzi</h1>
        <h1>wenzi</h1>
        <h1>wenzi</h1>
        <h1>wenzi</h1>
        <h1>wenzi</h1>
        <h1>wenzi</h1>
        <h1>wenzi</h1>
        <h1>wenzi</h1>
        <h1>wenzi</h1>
        <h1>wenzi</h1>
        <h1>wenzi</h1>
      </div>

    </div>

  </el-scrollbar>

</template>

<script>
export default {
  name: "Message",
  data: function() {
    return {
      textarea: '',
    }
  },
  methods: {
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
  background: #E9EEF3;
  top: 0;
  left: 90px;
  right: 90px;
}

</style>
