import * as types from '../mutation-types'

const state = {
    categoriesOptions: [],
    survey: {
        categories: [],
        nbQuestions: 20,
    }
};

const getters = {
    getCategoriesValue: state => {
        return state.survey.categories;
    },
    getCategoriesOptions: state => {
        return state.categoriesOptions;
    },
    getNbQuestions: state => {
        return state.survey.nbQuestions;
    },
    getSurvey: state => {
        return state.survey;
    }
};

const actions = {
    addCategory ({ commit }, category) {
        commit(types.UPDATE_CATEGORIES_VALUE, category.slice(-1).pop());
    },
    updateNbQuestions ({ commit }, NbQuestions) {
        commit(types.UPDATE_NB_QUESTIONS, NbQuestions);
    },
};

const mutations = {
    [types.FETCH_CATEGORIES] (state, response) {
        state.categoriesOptions = response.data;
    },
    [types.FETCH_CATEGORIES_FAILURE] (state) {
        state.categoriesOptions = [];
    },
    [types.UPDATE_CATEGORIES_VALUE] (state, category) {
        state.survey.categories.push(category);
    },
    [types.UPDATE_NB_QUESTIONS] (state, nbQuestion) {
        state.survey.nbQuestions = nbQuestion;
    },
};

export default {
    state,
    getters,
    actions,
    mutations
};
