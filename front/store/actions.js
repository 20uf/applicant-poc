import Vue from 'vue';

export const fetchCategories = ({ commit }) => {
    return Vue.http.get('/api/v1/categories')
        .then(response => {
            commit('FETCH_CATEGORIES', response);
        });
};

export const postSurvey = ({ commit }, payload) => {
    return Vue.http.post('/api/v1/survey', {nbQuestions: 20, categories: {}})
        .then(response => {
            console.log(response);
            // commit('POST_QUESTIONS', response);
        });
};

export const fetchSurvey = ({ commit }, payload) => {
    return Vue.http.post('/api/v1/survey', payload)
        .then(response => {
            console.log(response);
            // commit('POST_QUESTIONS', response);
        });
};

