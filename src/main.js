// 这是项目打包的入口文件
// 今后只要运行webpack 就会自动把main.js打包
// 1.导入vue模块
import Vue from 'vue'
// 2.导入app根组件
import App from './App'
// 3.路由模块
import router from './router'

// 配置当前的环境 开发环境
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App) // 使用 render函数渲染app根组件
})