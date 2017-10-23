const state = {
    index_current_question: 0,
    questions: [],
};

const mutations = {
    'FETCH_SURVEY_QUESTIONS' (state, response) {
        state.questions = response.data;
    },
    'UPDATE_ANSWER_RESULT' (state, index_answer) {
        let answer = getAnswer(state.index_current_question, index_answer);

        if (!("result" in answer)) {
            answer.result = true;
        } else {
            let result = answer.result === true;
            answer.result = !result;
        }
    }
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
    toSelect: ({ commit }, index) => {
        commit('UPDATE_ANSWER_RESULT', index);
    },
    isSelectedAnswer: ({ commit }, indexAnswer) => {
        let answer = getAnswer(state.index_current_question, indexAnswer);
        console.log(!("result" in answer) ? false : answer.result);
        return !("result" in answer) ? false : answer.result
    }
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
