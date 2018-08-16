import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import fastclick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'
import router from './router/index.js'
import store from './store/index'
import 'common/stylus/index.styl'
require('swiper/dist/css/swiper.css')
Vue.use(VueAwesomeSwiper)
// 图片懒加载
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('components/m-header/logo@2x.png'),
  loading: require('components/m-header/logo@2x.png'),
  attempt: 1
})
Vue.config.productionTip = false
Vue.prototype.axios = axios
fastclick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  router,
  store,
  template: '<App/>'
})
