import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router/index.js'
import fastclick from 'fastclick'

import 'common/stylus/index.styl'

Vue.config.productionTip = false
Vue.prototype.axios = axios
fastclick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  router,
  template: '<App/>'
})
