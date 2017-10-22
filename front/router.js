import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'hash',
    routes: [
        {
            path: '/survey',
            name: 'survey',
            component: require('./components/Survey.vue'),
            children: [
                {
                    path: 'start/:token',
                    name: 'survey_start',
                    component: require('./components/Questions.vue'),
                },
                {
                    path: 'completed/:token',
                    name: 'survey_completed',
                    component: require('./components/Report.vue'),
                }
            ]
        }, {
            path: '',
            component: require('./components/NewSurvey.vue'),
            name: 'home'
        }, {
            path: '*',
            redirect: '/'
        }
    ]
})
