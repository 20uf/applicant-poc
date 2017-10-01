import Vue from 'vue';
import Vuex from 'vuex';
import categories from './modules/categories'
import questions from './modules/questions'
import * as actions from './actions'

Vue.use(Vuex);

export const store = new Vuex.Store({
    actions,
    modules: {
        categories,
        questions
    },
    strict: true
});
