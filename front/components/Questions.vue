<template>
    <section v-if="surveyQuestion">
        <h3> {{ surveyQuestion.question }}</h3>
        <div class="form-group">
            <span class="label label-info">{{ surveyQuestion.category }}</span>
            <span class="label label-default" v-if="surveyQuestion.multipleChoice">Multiple choice</span>
            <span class="label label-default" v-else>Single choice</span>
        </div>
        <ul v-for="(answer, index) in surveyQuestion.answers" class="list-unstyled anwers">
            <li :class="{active: answer.result}" @click="toSelect(index)">
                <highlight-code lang="php" auto>
                    {{ answer.value }} {{ isSelectedAnswer(index)  }}
                </highlight-code>
            </li>
        </ul>
        <div class="form-group text-right">
            <button type="submit" class="btn btn-primary" @click.prevent="submitted">Next question</button>
        </div>
    </section>
</template>

<script>
    import {mapActions, mapGetters } from 'vuex';

    export default {
        computed: {
            ...mapGetters({
                surveyQuestion: 'currentSurveyQuestion',
                isSelectedAnswer: 'isSelectedAnswer',
            }),
        },
        methods: {
            ...mapActions([
                'toSelect',
            ]),
            submitted() {
//                this.$store.dispatch('SURVEY_QUESTION_SUBMITTED', {});
            },
//            isSelected: (answer) => {
//                console.log(answer);
////                return !("result" in answer) ? false : answer.result
//            }
        }
    }
</script>

<style>
    .anwers > li {
        padding: 10px 10px 5px 10px;
        margin: 20px 0;
        border: 1px solid #eee;
        border-left-width: 5px;
        border-radius: 1px;
        cursor: pointer;
    }

    .anwers > li.active {
        border-left: 5px solid #5cb85c;
    }
</style>
