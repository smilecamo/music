import 'babel-polyfill';
import Vue from 'vue';
import fastclick from 'fastclick';
import axios from 'axios';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
// vuetify 的图标
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import VueLazyLoad from 'vue-lazyload';
import 'common/stylus/index.styl';
import App from './App';
import router from './router';

Vue.use(VueLazyLoad, {
  error: '@/common/image/err.png',
  loading: '@/common/image/default.png',
});
Vue.use(Vuetify);
// 解决300ms点击延时
fastclick.attach(document.body);
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
