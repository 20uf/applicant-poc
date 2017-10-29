import * as types from '../mutation-types'
import * as api from '../api/survey'

const state = {
    categoriesOptions: [],
    totalTime: 0,
    survey: {
        categories: [],
        nbQuestions: 3,
        reviewMode: true,
        timePerQuestion: 45, // second
        startedAt: null,
        endedAt: null,
    }
};

const getters = {
    categoriesValue: state => {
        return state.survey.categories;
    },
    categoriesOptions: state => {
        return state.categoriesOptions;
    },
    nbQuestions: state => {
        return state.survey.nbQuestions;
    },
    survey: state => {
        return state.survey;
    },
    reviewMode: state => {
        return state.survey.reviewMode;
    },
    timePerQuestion: state => {
        return state.survey.timePerQuestion;
    },
    totalTime: state => {
        return state.totalTime;
    }
};

const actions = {
    addCategory ({ commit }, category) {
        commit(types.UPDATE_CATEGORIES_VALUE, category.slice(-1).pop());
    },
    updateNbQuestions ({ commit }, NbQuestions) {
        commit(types.UPDATE_NB_QUESTIONS, NbQuestions);
        commit(types.UPDATE_TOTAL_TIME);
    },
    updateReviewMode ({ commit }, reviewMode) {
        commit(types.UPDATE_REVIEW_MODE, reviewMode);
    },
    updateTimePerQuestion ({ commit }, timePerQuestion) {
        commit(types.UPDATE_TIME_PER_QUESTION, timePerQuestion);
        commit(types.UPDATE_TOTAL_TIME);
    },
    fetchSurvey (state, token) {
        api.fetchSurvey(state, token);
    },
    fetchCategories (state) {
        api.fetchCategories(state);
    },
    postSurvey (state, body) {
        return api.postSurvey(state, body);
    },
    reset({ commit }) {
        commit(types.RESET_QUESTIONS);
    }
};

const mutations = {
    [types.FETCH_CATEGORIES] (state, response) {
        state.categoriesOptions = response.data;
    },
    [types.FETCH_CATEGORIES_FAILURE] (state) {
        state.categoriesOptions = [];
    },
    [types.FETCH_SURVEY_QUESTIONS] (state, response) {
        state.survey.startedAt = new Date();
        state.totalTime = state.survey.timePerQuestion * state.survey.nbQuestions;
        state.survey.nbQuestions = Object.values(response.data).length;
    },
    [types.UPDATE_CATEGORIES_VALUE] (state, category) {
        state.survey.categories.push(category);
    },
    [types.UPDATE_NB_QUESTIONS] (state, nbQuestion) {
        state.survey.nbQuestions = nbQuestion;
    },
    [types.UPDATE_REVIEW_MODE] (state, reviewMode) {
        state.survey.reviewMode = reviewMode;
    },
    [types.UPDATE_TIME_PER_QUESTION] (state, timePerSecond) {
        state.survey.timePerQuestion = timePerSecond;
    },
    [types.UPDATE_TOTAL_TIME] (state) {
        state.totalTime = state.survey.timePerQuestion * state.survey.nbQuestions;
    },
    [types.UPDATE_TIME] (state, time) {
        state.totalTime = time;
    },
    [types.GO_TO_REPORT] (state) {
        state.survey.endedAt = new Date();
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
