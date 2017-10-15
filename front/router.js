import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'hash',
    routes: [
        {
            path: '/survey',
            component: require('./components/Survey.vue'),
            name: 'survey',
        }, {
            path: '',
            component: require('./components/newSurvey.vue'),
            name: 'home'
        }, {
            path: '*',
            redirect: '/'
        }
    ]
})
