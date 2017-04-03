import VueRouter from 'vue-router'
import Vue from 'vue'
import ProductDetails from './../components/ProductDetails.vue'
import Home from './../components/Home.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/products/:id', component: ProductDetails },
    { path: '/', component: Home },
  ]
})
