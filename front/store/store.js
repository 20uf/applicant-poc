import Vue from 'vue';
import Vuex from 'vuex';
import questions from './modules/questions'
import * as actions from './actions/questions'

Vue.use(Vuex);

export const store = new Vuex.Store({
    actions,
    modules: {
        questions
    },
    strict: true
});
