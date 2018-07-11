// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Icon from 'vue-awesome/components/Icon'
import routes from './routes'

import 'vue-awesome/icons/facebook-square'
import 'vue-awesome/icons/instagram'

// Vue configuration
Vue.config.productionTip = false

// Custom components registration
Vue.component('icon', Icon)

// Vue Integration
Vue.use(VueRouter)
const router = new VueRouter({
  routes
})
/* eslint-disable no-new */
new Vue({
  router,
  components: { App },
  template: '<App/>'
}).$mount('#vue')


