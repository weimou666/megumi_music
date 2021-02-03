<template>
  <div class='tabbar'>
       <div class="left-sign">
         <div class="ico">
           <span class="ico-item"></span>
           <span class="ico-item"></span>
           <span class="ico-item"></span>
         </div>
         <div class="title">megumi_music</div>
       </div>
       <div class="history">
         <i class="el-icon-arrow-left pre"></i>
         <i class="el-icon-arrow-right next"></i>
       </div>
       <div class="search_block">
          <el-input class="seach_input" placeholder="请输入内容" v-model="input">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
       </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
     input:''
    }
  },
  
}
</script>
<style  scoped>
/* 导航栏 */
.tabbar{
    width: 100%;
    height: 60px;
    background: #f9f9f9;
    display: flex;
    align-items: center;
}
/* 左边标志容器 */
.tabbar .left-sign{
  width: 16%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 25px;
}
/* 图标容器 */
.tabbar .left-sign .ico{
  display: flex;
}
/* 图标公共样式 */
.tabbar .left-sign .ico .ico-item{
   width: 18px;
   height: 18px;
   border-radius: 50%;
   margin-right: 15px;
}
/* 图标样式一 */
.tabbar .left-sign .ico span:nth-child(1){
   background-color: #dd6d60;
}
/* 图标样式二 */
.tabbar .left-sign .ico span:nth-child(2){
   background-color: #dcc060;
}
/* 图标样式三 */
.tabbar .left-sign .ico span:nth-child(3){
   background-color: #84bb58;
}
/* 名字样式 */
.tabbar .left-sign .title{
  color: yellowgreen;
  font-size: 18px;
  padding:0 20px;
}
/* 上一步下一步样式 */
.tabbar .history i{
  font-size: 24px;
  padding: 6px;  
  color: #808080;
  font-weight: bold;
  border-radius: 50%;
}
/* 上一步下一步鼠标浮动 */
.tabbar .history i:hover{
  background-color: #ebebeb;
  cursor: pointer;
}
/*上一步间隔 */
.tabbar .history .pre{
  margin-right: 10px;
}
/* 下一步间隔 */
.tabbar .history .next{
  margin-left: 10px;
}
/* 搜索块外边距 */
.search_block{
  margin-left: 120px;
}
</style>
