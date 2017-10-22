import Vue from 'vue';

export const fetchCategories = ({ commit }) => {
    return Vue.http.get('/api/v1/categories')
        .then(response => {
            commit('FETCH_CATEGORIES', response);
        });
};

export const postSurvey = ({ commit }, payload) => {
    return Vue.http.post('/api/v1/survey', payload);
};

export const fetchSurvey = ({ commit }, payload) => {
    return Vue.http.get('/api/v1/survey/'+payload)
        .then(response => {
            commit('FETCH_SURVEY_QUESTIONS', response);
        });
};
