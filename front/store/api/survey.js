import Vue from 'vue';
import * as types from '../mutation-types'

export const fetchCategories = ({ commit }) => {
    return Vue.http.get('/api/v1/categories')
        .then(response => {
            commit(types.FETCH_CATEGORIES, response);
        });
};

export const postSurvey = ({ commit }, payload) => {
    return Vue.http.post('/api/v1/survey', payload);
};

export const fetchSurvey = ({ commit }, payload) => {
    return Vue.http.get('/api/v1/survey/'+payload)
        .then(response => {
            commit(types.FETCH_SURVEY_QUESTIONS, response);
        });
};
