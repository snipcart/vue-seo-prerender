import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { sync } from 'vuex-router-sync'
import store from './store'

sync(store, router)

const root = new Vue({
  store,
  router,
  render: h => h(App)
})

document.addEventListener('DOMContentLoaded', () => {
  root.$mount('#app');
})
