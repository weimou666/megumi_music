<template>
  <div class="SideNav">
          <ul class="SideNav-list">
              <li>
                  <span class="iconfont icon-yinle"></span>
                  <router-link to="/discovery">发现音乐</router-link>
              </li>
              <li>
                  <span class="iconfont icon-yinleliebiao-"></span>
                  <router-link to="/playlists">推荐歌单</router-link>
              </li>
              <li>
                  <span class="iconfont icon-yinle1"></span>
                  <router-link to="/songs">最新音乐</router-link>
              </li>
              <li>
                  <span class="iconfont icon-mv"></span>
                  <router-link to="/mvs">最新MV</router-link>
              </li>
          </ul>
  </div>
  
</template>

<script>
export default {
  name: '',
 
}
</script>
<style scoped>
@import url('../assets/img/iconfont/iconfont.css');
.SideNav{
    width: 200px;
    background: rgb(237,237,237);
    height: 830px;
}
.SideNav .SideNav-list li{
 height: 60px;
 line-height: 60px;
 padding-left: 20px;
 cursor: pointer;
}
.SideNav .SideNav-list li:hover{
    background: rgb(231,231,231);
}
.SideNav .SideNav-list li a{
    font-size: 18px;
    text-decoration: none;
    color: black;
}
.SideNav .SideNav-list li span{
    font-size: 21px;
    margin-right: 10px;
}

</style>
