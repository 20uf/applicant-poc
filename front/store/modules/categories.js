const state = {
    value: null,
    options: [],
    nbQuestions: 20,
};

const mutations = {
    'FETCH_CATEGORIES' (state, response) {
        state.options = response.data;
    },
    'FETCH_CATEGORIES_FAILURE' (state, error) {
        state.options = {};
    },
    'UPDATE_CATEGORIES_VALUE' (state, newCategory) {
        const category = {
            name: newCategory,
            code: newCategory.substring(0, 2) + Math.floor((Math.random() * 10000000))
        };
        this.options.push(category);
        this.value.push(category);
    },
    'UPDATE_NB_QUESTIONS' (state, nbQuestion) {
        state.nbQuestions = nbQuestion;
    }
};

const getters = {
    getValue: state => {
        return state.value;
    },
    getCategories: state => {
        return state.options;
    },
    getNbQuestions: state => {
        return state.nbQuestions;
    }
};

const actions = {
    addCategory ({ commit }, newCategory) {
        console.log(newCategory);
        commit('UPDATE_CATEGORIES_VALUE', newCategory);
    },
    updateNbQuestions ({ commit }, nbQuestion) {
        commit('UPDATE_NB_QUESTIONS', nbQuestion)
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
