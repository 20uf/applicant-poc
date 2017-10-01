const state = {
    questions: []
};

const mutations = {
    'FETCH_QUESTIONS' (state, response) {
        state.questions = response.data;
    },
    'FETCH_QUESTIONS_FAILURE' (state, error) {
        state.questions = {};
    },
};

const getters = {
    getQuestions: state => {
        return state.questions;
    },
};

export default {
    state,
    getters,
    mutations
};
