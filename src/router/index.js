import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
// 按需加载路由
const Rank = () => import('components/rank/rank');
const Search = () => import('components/search/search');
const Recommend = () => import('components/recommend/recommend');
const Singer = () => import('components/singer/singer');
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend',
    },
    {
      path: '/recommend',
      component: Recommend,
    },
    {
      path: '/rank',
      component: Rank,
    },
    {
      path: '/search',
      component: Search,
    },
    {
      path: '/singer',
      component: Singer,
    },
  ],
});
