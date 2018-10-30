import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
    routes: [{
            // 如果访问的是 / 根路径 则重定向到 /login 登录页面
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            component: Login
        }
    ]
})