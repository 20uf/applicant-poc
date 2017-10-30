import * as types from '../mutation-types'

const state = {
    index_current_question: 0,
    questions: [],
    report: {
        good: 0,
        percent: 0
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
    },
    report: state => {
        return state.report;
    }
};

const actions = {
    toSelect: ({ commit }, answer) => {
        commit(types.UPDATE_ANSWER_RESULT, answer);
    },
    submit: ({ commit }) => {
        let question = state.questions[state.index_current_question];

        commit(types.REMOVE_ALERT_ERRORS, {});

        if (!isResultExists(question.answers)) {
            commit(types.ADD_ALERT_ERROR, 'You must select at least one question.');
            return false;
        }

        if (state.questions[state.index_current_question+1] !== undefined) {
            commit(types.GO_TO_NEXT_QUESTION, {});
            return true;
        }

        commit(types.GO_TO_REPORT, {});
        return true;
    },
    countDownProgress: ({ commit }, time) => {
        commit(types.UPDATE_TIME, time);
    }
};

const mutations = {
    [types.FETCH_SURVEY_QUESTIONS] (state, response) {
        state.questions = Object.values(response.data);
    },
    [types.RESET_QUESTIONS] (state) {
        state.questions = [];
        state.report = {
            good: 0,
            percent: 0
        };
    },
    [types.GO_TO_NEXT_QUESTION] (state) {
        state.index_current_question++;
    },
    [types.UPDATE_ANSWER_RESULT] (state, currentAnswer) {
        let question = state.questions[state.index_current_question];
        let resultAnswers = [];

        question.answers.forEach(function (answer, index) {
            if (answer.value === currentAnswer.value) {
                if (!("result" in currentAnswer)) {
                    answer.result = true;
                } else {
                    let result = answer.result === true;
                    answer.result = !result;
                }
            } else {
                if (!question.multipleChoice) {
                    answer.result = false;
                }
            }

            resultAnswers[index] = answer;
        });

        state.questions[state.index_current_question].answers = resultAnswers;
    },
    [types.GO_TO_REPORT] (state) {
        let report = state.report;

        state.questions.forEach(function (question) {

            if (state.questions.multipleChoice) {
                console.log(isResultCorrectOnMultipleChoice(question.answers));
                if (isResultCorrectOnMultipleChoice(question.answers)) {
                    report.good++;
                }
            } else {
                if (isResultCorrect(question.answers)) {
                    report.good++;
                }
            }
        });

        report.percent = (report.good * 100) / state.questions.length;

        state.index_current_question = 0;
        state.report = report;
    }
};

function isResultCorrectOnMultipleChoice(answers) {
    let result = {
        good: 0,
        bad: 0
    };

    answers.forEach(function (answer) {
        console.log(answer.result === answer.correct);
        if (answer.result === answer.correct  && answer.correct) {
            result.good++;
        } else {
            result.bad++;
        }
    });

    return (result.good > 0 && result.bad === 0);
}

function isResultCorrect(answers) {
    let result = false;

    answers.forEach(function (answer) {
        if (answer.result === answer.correct && answer.correct) {
            result = true;
        }
    });

    return result;
}

function isResultExists(answers) {
    let result = false;

    answers.forEach(function (answer) {
        if (answer.result) {
            result = true;
        }
    });

    return result;
}

export default {
    state,
    getters,
    actions,
    mutations
};
