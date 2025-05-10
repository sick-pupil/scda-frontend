import Vue from 'vue'
import App from '@/pages/bi/App.vue'


import '@/pages/bi/style/element-variables.scss'
import '@/pages/bi/style/element-styles.scss'

Vue.config.devtools = true;


new Vue({
    render: h => h(App),
}).$mount('#app')
