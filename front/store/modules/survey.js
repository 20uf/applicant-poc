const state = {
    categoriesOptions: [],
    survey: {
        categories: [],
        nbQuestions: 20,
    }
};

const mutations = {
    'FETCH_CATEGORIES' (state, response) {
        state.categoriesOptions = response.data;
    },
    'FETCH_CATEGORIES_FAILURE' (state, error) {
        state.categoriesOptions = [];
    },
    'UPDATE_CATEGORIES_VALUE' (state, category) {
        state.survey.categories.push(category);
    },
    'UPDATE_NB_QUESTIONS' (state, nbQuestion) {
        state.survey.nbQuestions = nbQuestion;
    },
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
        console.log(state.survey);
        return state.survey;
    }
};

const actions = {
    addCategory ({ commit }, payload) {
        commit('UPDATE_CATEGORIES_VALUE', payload.slice(-1).pop());
    },
    updateNbQuestions ({ commit }, payload) {
        commit('UPDATE_NB_QUESTIONS', payload);
    },
};

export default {
    state,
    getters,
    actions,
    mutations
};
