import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 创建并暴露一个路由器
export default new VueRouter({
    mode:'history',
    routes: [
        // 一级路由
        {
            path: '/',
            redirect: 'login'
        },
        {
            path: '/login',
            name: 'Login',
            component: () =>
                import("../pages/Login.vue")
        },
        {
            path: '/manage',
            name: 'Manage',

            component: () =>
                import("../pages/Manage.vue"),
            children: [
                {
                    path: '/socialize',
                    name: 'Socialize',
                    component: () => import("../pages/Socialize"),
                },
                {
                    path: '/home',
                    name: 'Home',
                    component: () => import("../pages/Home"),
                },
                {
                    path: '/article',
                    name: 'Article',
                    component: () => import("../pages/Article"),
                },
                {
                    path: '/music',
                    name: 'Music',
                    component: () => import("../pages/Music"),
                },
                {
                    path: '/board',
                    name: 'Board',
                    component: () => import("../pages/Board"),
                },
            ]
        }
    ]
})