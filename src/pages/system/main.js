import Vue from 'vue'
import App from '@/pages/system/App.vue'


import '@/pages/system/style/element-variables.scss'
import '@/pages/system/style/element-styles.scss'

Vue.config.devtools = true;

new Vue({
    render: h => h(App),
}).$mount('#app')
