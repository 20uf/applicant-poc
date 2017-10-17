import Vue from 'vue';

export const fetchCategories = ({ commit }) => {
    return Vue.http.get('/api/v1/categories')
        .then(response => {
            commit('FETCH_CATEGORIES', response);
        });
};

export const postSurvey = ({ commit }, payload) => {
    return Vue.http.post('/api/v1/survey', payload, {emulateJSON: true})
        .then(response => {
            console.log(response);
            commit('POST_SURVEY', response);
        });
};

export const fetchSurvey = ({ commit }, payload) => {
    return Vue.http.post('/api/v1/survey', payload)
        .then(response => {
            console.log(response);
            // commit('POST_QUESTIONS', response);
        });
};
