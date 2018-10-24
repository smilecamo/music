import 'babel-polyfill';
import Vue from 'vue';
import fastclick from 'fastclick';
import 'common/stylus/index.styl';
import App from './App';
import router from './router';
// 解决300ms点击延时
fastclick.attach(document.body);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
