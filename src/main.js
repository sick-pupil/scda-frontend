import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import router from '@/router'
import Vuex from 'vuex'
import store from '@/store'

Vue.config.devtools = true;

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
