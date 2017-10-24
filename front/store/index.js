import Vue from 'vue';
import Vuex from 'vuex';
import Survey from './modules/survey';
import Questions from './modules/questions';
import * as ApiActions from './api/survey'

Vue.use(Vuex);

export const store = new Vuex.Store({
    actions: ApiActions,
    modules: {
        Survey,
        Questions
    },
    strict: true
});
