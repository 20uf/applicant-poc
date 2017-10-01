import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'hash',
    routes: [
        {
            path: '/categories',
            component: require('./components/Categories.vue'),
            name: 'categories',
        },
        {
            path: '/questions',
            component: require('./components/Questions.vue'),
            name: 'questions',

        }, {
            path: '',
            component: require('./components/Categories.vue'),
            name: 'home'
        }, {
            path: '*',
            redirect: '/'
        }
    ]
})
