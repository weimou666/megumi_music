<template>
  <div class='index'>
      <SideNav/>
      <Main/>
  </div>
</template>

<script>
import SideNav from '../components/SideNav'
import Main from '../components/Main'
export default {
  name: '',
  data(){
    return {}
  },
  components: {
      SideNav,
      Main
  },

}
</script>
<style   scoped>
.index{
    width: 100%;
    display: flex;
}
</style>
