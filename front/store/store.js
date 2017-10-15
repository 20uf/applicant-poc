import Vue from 'vue';
import Vuex from 'vuex';
import survey from './modules/survey'
import * as actions from './actions'

Vue.use(Vuex);

export const store = new Vuex.Store({
    actions,
    modules: {
        survey
    },
    strict: true
});
