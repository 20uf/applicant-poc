import Vue from 'vue';
import Vuex from 'vuex';
import Alert from './modules/alert';
import Survey from './modules/survey';
import Questions from './modules/questions';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        Alert,
        Survey,
        Questions
    },
    strict: true
});
