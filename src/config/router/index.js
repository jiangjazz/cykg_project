/********
 * 基础结构
 */
import App from '@/vue/App.vue'
/********
 * 首页
 */
// import Home from '@/vue/Home.vue'

// 有关vue的一些帮助文档
import Hello from '@/vue/Hello.vue'

export default (Vue, VueRouter) => {
    const router = new VueRouter({
        routes: [{
            path: '/404',
            name: '404',
            component: Hello
        }, {
            path: '/help',
            name: 'vuehrlp',
            component: Hello
        }, {
            path: '/',
            name: 'home',
            component: Hello
        }]
    })

    /**
     * 路由更改前
     * @param  {[type]} (to, from, next) to去的页面信息from目标页面信息next执行之后的程序
     *
     * 路由名称为user、orders、product不跳转页面
     */
    router.beforeEach((to, from, next) => {
        switch (to.name) {
            case null:
                next({
                    name: 'home'
                })
                break
            default:
                next()
                break
        }
    })

    new Vue(Vue.util.extend({
        router
    }, App)).$mount('#app')
}
