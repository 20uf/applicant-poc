import Vue from 'vue';

export const getCategories = ({ commit }) => {
    return Vue.http.get('/api/v1/categories')
        .then(response => {
            commit('FETCH_CATEGORIES', response);
        });
};

export const getQuestions = ({ commit }, categories) => {
    return Vue.http.get('/api/v1/questions/'+categories)
        .then(response => {
            commit('FETCH_QUESTIONS', response);
        });
};
