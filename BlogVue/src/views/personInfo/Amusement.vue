<template>
  <el-row :gutter="20">
    <el-col :span="8">
      <div class="grid-content bg-purple">
        <h1 class="h1">影音娱乐</h1>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="grid-content bg-purple">
        <h1 class="h1">影音娱乐</h1>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="grid-content bg-purple">
        <h1 class="h1">影音娱乐</h1>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "Amusement"
}
</script>

<style scoped>
.h1{
  color: darkorange;
}
.el-row {

  margin-bottom: 20px;
 /* &:last-child {*/
 /*  margin-bottom: 0;*/
 /*}*/
}
.el-col {
  top: 50px;
  /*padding-top: 0;*/
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  /*position: relative;*/
  border-radius: 4px;
  /*min-height: 36px;*/
  line-height: 3550%;
  opacity: 50%;
  z-index: -1;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>

