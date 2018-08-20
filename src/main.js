// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 入口文件
import Vue from 'vue'

// 导入App根组件
import App from './App'
import router from './router'

//全局引入的mini-ui
// import MintUI from 'mint-ui'
// Vue.use(MintUI)

// 引入mui样式
import './lib/mui/css/mui.min.css'

// 按需引入mint-ui组件里header标签
import {Header} from 'mint-ui'
Vue.component(Header.name, Header)
import 'mint-ui/lib/style.css'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
