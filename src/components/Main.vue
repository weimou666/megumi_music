<template>
  <div class='main'>
     <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: '',
  data(){
    return {}
  },
  components: {},
  created(){},
  mounted(){},
  methods: {}
}
</script>
<style  scoped>

.main{
    -webkit-box-flex: 1;
    flex: 1;
    padding: 10px 20px;
    height: 830px;
    background: orange;
    box-sizing: border-box;
    overflow: scroll;
    overflow-x: hidden;
}
.main .discovery-container{
    padding: 10px 20px;
}
</style>
