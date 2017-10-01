import Vue from 'vue';

export const getQuestions = ({ commit }, provider) => {
    return Vue.http.get('/questions/'+provider)
        .then(response => {
            commit('FETCH_QUESTIONS', response);
        });
};
