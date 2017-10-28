import Vue from 'vue';
import * as types from '../mutation-types'

export const fetchCategories = ({ commit }) => {
    return Vue.http.get('/api/v1/categories')
        .then(response => {
            commit(types.FETCH_CATEGORIES, response);
        });
};

export const postSurvey = ({ commit }, body) => {
    return Vue.http.post('/api/v1/survey', body);
};

export const fetchSurvey = ({ commit }, token) => {
    return Vue.http.get('/api/v1/survey/'+token)
        .then(response => {
            commit(types.FETCH_SURVEY_QUESTIONS, response);
        });
};
