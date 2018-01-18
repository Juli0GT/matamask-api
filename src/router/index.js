import Vue from 'vue';
import Router from 'vue-router';
import mainContainer from '@/components/mainContainer';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainContainer',
      component: mainContainer,
    },
  ],
});
