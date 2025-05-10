import Vue from 'vue'
import App from '@/pages/spider/App.vue'
import router from '@/pages/spider/router'
import store from '@/pages/spider/store'
import ElementUI from 'element-ui'
import * as echarts from 'echarts';


import '@/pages/spider/style/element-variables.scss'
import '@/pages/spider/style/element-styles.scss'

Vue.config.devtools = true;

Vue.use(ElementUI)
Vue.prototype.$echarts = echarts

new Vue({
    render: h => h(App),
    router,
    store,
}).$mount('#app')
