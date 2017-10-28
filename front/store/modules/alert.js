import * as types from '../mutation-types'

const state = {
    errors: []
};

const getters = {
    errors: state => {
        return state.errors;
    }
};

const actions = {};

const mutations = {
    [types.ADD_ALERT_ERROR] (state, message) {
        state.errors.push(message);
    },
    [types.REMOVE_ALERT_ERRORS] (state, message) {
        state.errors = [];
    },
};

export default {
    state,
    getters,
    actions,
    mutations
};
