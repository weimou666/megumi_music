<template>
  <div id='app'>
    <!-- 头部组件 -->
    <Tabbar/>
    <index/>

  </div>
</template>

<script>
import Tabbar from './components/Tabbar'
import Index from './components/index'
export default {
  name: '',
  components:{
    Tabbar,
    Index,
   
  }
}
</script>
<style>
*{
  padding: 0;
  margin: 0;
}
</style>
