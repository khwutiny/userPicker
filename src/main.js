// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index3'
import axios from 'axios'
import MessageBox from '@/components/MessageBox/index'
Vue.use(MessageBox)
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.prototype.$API = 'http://127.0.0.1:8088/api'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App //
  }
})
