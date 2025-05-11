import Vue from 'vue'
import App from '@system/App.vue'


import '@style/element-variables.scss'
import '@style/element-styles.scss'

Vue.config.devtools = true;

new Vue({
    render: h => h(App),
}).$mount('#app')
