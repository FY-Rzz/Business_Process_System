import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Main from '../views/Main.vue'
import Document from '../views/Document.vue'
import Task from '../views/Task.vue'
import Login from '../views/Login.vue'
import UserInfo from '../views/UserInfo'

Vue.use(VueRouter)
// 1. 创建路由组件
// 2. 将路由与组件进行映射

const routes = [
    // 主路由
    {
        path: '/',
        name: 'home',
        component: Main,
        redirect: '/home', // 重定向 路径：‘/’
        children: [ // 子路由
            { path: '/home', component: Home }, // 首页
            { path: '/user', component: User }, // 人员管理
            { path: '/document', component: Document }, // 文档管理
            { path: '/task', component: Task }, // 任务管理
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/userinfo',
        component: UserInfo
    }
    
]

// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
  })

 export default router
