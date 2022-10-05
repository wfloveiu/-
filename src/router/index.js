import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login.vue'
import Home from '@/components/Home.vue'
Vue.use(VueRouter)
const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/login'
            // 路由重定向
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/home',
            component: Home
        }
    ]
})

//挂载路由导航
router.beforeEach((to, from, next) => {
    //to是要访问的路径
    //from是来自哪个路径
    //next是一个函数，表示放行。next()或者next('路径')
    if (to.path == '/login') return next();//放行
    const tokenstr = window.sessionStorage.getItem('token')
    if (!tokenstr) return next('/login')
    return next();
})
export default router