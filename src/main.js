import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import ElementUI from 'element-ui'
import '@/style/element-variables.scss'
import '@/style/element-styles.scss'

Vue.config.devtools = true;

Vue.use(ElementUI)

new Vue({
    render: h => h(App),
    router,
    store,
}).$mount('#app')
