<template>
  <div class='discovery'>
     <div class="discovery-content">
         <el-carousel :interval="4000" type="card" height="230px">
            <el-carousel-item v-for="item in 6" :key="item">
              <h3 class="medium">
                <img src="../assets/lunbo.jpg" alt="">
              </h3>
            </el-carousel-item>
         </el-carousel>
      <div class="recommend"></div>
     </div>
   
  </div>
</template>

<script>
export default {
  name: '',

}
</script>
<style  scoped>
.discovery .discovery-content{
  max-width: 1100px;
  background: red;
  margin: 0 auto;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
}
  
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}
  
.el-carousel__item:nth-child(2n+1) {
   background-color: #d3dce6;
}
img{
  width: 100%;
  height: 230px;
}
</style>
