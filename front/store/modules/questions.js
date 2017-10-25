import * as types from '../mutation-types'

const state = {
    index_current_question: 0,
    questions: [],
    result: []
};

const getters = {
    currentIndexQuestion: state => {
        return state.index_current_question;
    },
    currentSurveyQuestions: state => {
        return state.questions;
    },
    currentSurveyQuestion: state => {
        return state.questions[state.index_current_question];
    }
};

const actions = {
    toSelect: ({ commit }, indexAnswer) => {
        commit(types.UPDATE_ANSWER_RESULT, indexAnswer);
    },
    isSelectedAnswer: ({ commit }, indexAnswer) => {
        let answer = getAnswer(state.index_current_question, indexAnswer);
        console.log(!("result" in answer) ? false : answer.result);
        return !("result" in answer) ? false : answer.result
    },
};

const mutations = {
    [types.FETCH_SURVEY_QUESTIONS] (state, response) {
        state.questions = response.data;
    },
    [types.UPDATE_ANSWER_RESULT] (state, index_answer) {
        let answer = getAnswer(state.index_current_question, index_answer);

        if (!("result" in answer)) {
            answer.result = true;
        } else {
            let result = answer.result === true;
            answer.result = !result;
        }
    },
};

function getAnswer(indexQuestion, indexAnswer) {
    let question = state.questions[indexQuestion];
    return question.answers[indexAnswer];
}

export default {
    state,
    getters,
    actions,
    mutations
};
