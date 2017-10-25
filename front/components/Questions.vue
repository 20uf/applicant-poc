<template>
    <section v-if="currentSurveyQuestion">
        <div class="panel panel-default">
            <div class="panel-heading">
                Question #{{ currentIndexQuestion+1 }}
                <div class="pull-right">
                    <span class="label label-info">{{ currentSurveyQuestion.category }}</span>
                    <span class="label label-default" v-if="currentSurveyQuestion.multipleChoice">Multiple choice</span>
                    <span class="label label-default" v-else>Single choice</span>
                </div>
            </div>
            <div class="panel-body" v-html="$options.filters.nl2br(currentSurveyQuestion.question)"></div>
        </div>

        <ul v-for="(answer, index) in currentSurveyQuestion.answers" class="list-unstyled anwers">
            <li :class="{active: ''}" @click="toSelect(index)">
                <highlight-code lang="php" auto>
                    {{ answer.value }} {{ currentSurveyQuestion.answers[index] }}
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
        computed: mapGetters([
            'currentSurveyQuestion',
            'currentIndexQuestion'
        ]),
//        computed: {
//            ...mapGetters({
//                surveyQuestion: 'currentSurveyQuestion',
//                currentIndexQuestion: 'currentIndexQuestion',
//            }),
//        },
        methods: {
            ...mapActions([
                'toSelect',
            ]),
            submitted() {
            },
        },
        filters: {
            nl2br: function (value) {
                return value.replace(/(?:\r\n|\r|\n)/g, '<br />');
            }
        },
        updated() {
            console.log('ok');
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

    pre {
        background-color: transparent;
        border: none;
    }
</style>
