import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
import discovery from '../views/discovery'
import playlists from '../views/playlists'
import songs from '../views/songs'
import mvs from '../views/mvs'
const routes = [
  {
    //地址
    path:'/',
    //组件
    component:discovery
  },
    {
      //地址
      path:'/discovery',
      //组件
      component:discovery
    },
    {
      //地址
      path:'/playlists',
      //组件
      component:playlists
    },
    {
      //地址
      path:'/songs',
      //组件
      component:songs
    },
    {
      //地址
      path:'/mvs',
      //组件
      component:mvs
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
