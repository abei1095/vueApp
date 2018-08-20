# vue练习项目

> A Vue.js project

## vue-cli npm  git mint-ui mui

### 用传统方式（命令方式）把修改后的代码上传到github上去？
1.git add .
2.git commit -m "提交信息"
3.git push

#### 

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 制作首页App组件
1.完成 Header 区域，使用的是 Mint-UI 中的Header组件
2.制作底部的tabbar区域，使用的是 MUI 的 Tabbar.html
 + 在制作 购物车 小图标的时候，操作会相对多一些；
 + 先把 扩展图标的 CSS 样式，拷贝到 项目中
 + 拷贝 扩展字体库 ttf 文件，到项目中
 + 为购物车 小图标 ， 添加 入下样式 `mui-icon mui-icon-extra mui-icon-extra-cart`
3.要在 中间区域放置一个 router-view 来展示路由匹配到的组件

## 改造 tabbar 为 router-link
##设置路由高亮属性 linkActiveClass

##点击 tabbar 中的路由链接，展示对应的路由组件