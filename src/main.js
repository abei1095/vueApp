// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 入口文件
import Vue from 'vue'
// 1.1 导入路由的包
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)

// 导入App根组件
import App from './App'
// 1.3导入自己的 router.js 路由模块
import router from './router'


// 引入mui样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//全局引入的mini-ui
import MintUI from 'mint-ui'
Vue.use(MintUI)

// 按需引入mint-ui组件里header标签
// import {Header} from 'mint-ui'
// Vue.component(Header.name, Header)
import 'mint-ui/lib/style.css'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, //1.4挂载路由对象到 VM 实例上
  components: { App },
  template: '<App/>'
})
