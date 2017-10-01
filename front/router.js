import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'hash',
    routes: [
        {
            path: '/questions',
            component: require('./components/Questions.vue'),
            name: 'questions',

        }, {
            path: '',
            component: require('./components/Home.vue'),
            name: 'home'
        }, {
            path: '*',
            redirect: '/'
        }
    ]
})
