const state = {
    value: [],
    options: [],
    nbQuestions: 20,
};

const mutations = {
    'FETCH_CATEGORIES' (state, response) {
        state.options = response.data;
    },
    'FETCH_CATEGORIES_FAILURE' (state, error) {
        state.options = [];
    },
    'UPDATE_CATEGORIES_VALUE' (state, category) {
        state.value.push(category[0]);
    },
    'UPDATE_NB_QUESTIONS' (state, nbQuestion) {
        state.nbQuestions = nbQuestion;
    },
};

const getters = {
    getCategoriesValue: state => {
        return state.value;
    },
    getCategoriesOptions: state => {
        return state.options;
    },
    getNbQuestions: state => {
        return state.nbQuestions;
    }
};

const actions = {
    addCategory ({ commit }, newCategory) {
        commit('UPDATE_CATEGORIES_VALUE', newCategory);
    },
    updateNbQuestions ({ commit }, nbQuestion) {
        commit('UPDATE_NB_QUESTIONS', nbQuestion);
    },
};

export default {
    state,
    getters,
    actions,
    mutations
};
