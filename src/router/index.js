import Vue from 'vue'
import Router from 'vue-router'
import mockRouters from '@/mock/routers'

Vue.use(Router)

const router = new Router({
    mode: 'history', // 去掉url中的#
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            // 返回保存的滚动位置（比如点击浏览器后退按钮时）
            return savedPosition;
        } else {
            // 如果没有保存的位置，则滚动到顶部
            return { x: 0, y: 0 };
        }
    },
    routes: mockRouters
})

router.beforeEach((to, from, next) => {
    next()
})

router.afterEach(() => {
    
})

export default router