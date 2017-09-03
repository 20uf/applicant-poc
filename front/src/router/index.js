import Vue from 'vue';
import Router from 'vue-router';
import Homepage from '@/components/Homepage';
import Question from '@/components/Question';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Homepage,
    },
    {
        path: '/question',
        component: Question,
    },
  ],
});
