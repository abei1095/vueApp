import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

//导入对应的路由组件
import Home from '@/components/tabbar/Home'
import Member from '@/components/tabbar/Member'
import Shopcar from '@/components/tabbar/Shopcar'
import Search from '@/components/tabbar/Search'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',name: 'Home',redirect: Home },
    { path:'/home',component:Home },
    { path:'/member',component:Member },
    { path:'/shopcar',component:Shopcar },
    { path:'/search',component:Search }
  ],
  linkActiveClass:'mui-active' // 覆盖默认的路由高亮的类，默认的类叫做 router-link-active
})
