import Vue from 'vue';

export const fetchCategories = ({ commit }) => {
    return Vue.http.get('/api/v1/categories')
        .then(response => {
            commit('FETCH_CATEGORIES', response);
        });
};

export const fetchQuestions = ({ commit }, categories) => {
    return Vue.http.get('/api/v1/questions/'+categories)
        .then(response => {
            commit('FETCH_QUESTIONS', response);
        });
};
