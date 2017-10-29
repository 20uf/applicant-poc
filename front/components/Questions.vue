<template>
    <section v-if="currentSurveyQuestion">
        <div class="text-right">
            <CountDown :time="totalTime" @onProgress="countDownProgress"></CountDown>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading">
                Question #{{ currentIndexQuestion+1 }} / {{ nbQuestions }}
                <div class="pull-right">
                    <span class="label label-info">{{ currentSurveyQuestion.category }}</span>
                    <span class="label label-default" v-if="currentSurveyQuestion.multipleChoice">Multiple choice</span>
                    <span class="label label-default" v-else>Single choice</span>
                </div>
            </div>
            <div class="panel-body" v-html="$options.filters.nl2br(currentSurveyQuestion.question)"></div>
        </div>

        <div class="alert alert-danger" v-if="errors.length > 0">
            <ul>
                <li v-for="error in errors">{{ error }}</li>
            </ul>
        </div>

        <ul v-for="(answer, index) in currentSurveyQuestion.answers" class="list-unstyled anwers">
            <li :class="{active: answer.result}" @click="toSelect(answer)">
                <highlight-code lang="php" auto>
                    {{ answer.value }}
                </highlight-code>
            </li>
        </ul>
        <div class="form-group text-right">
            <button type="submit" class="btn btn-primary" @click.prevent="submit">Next question</button>
        </div>
    </section>
</template>

<script>
    import {mapActions, mapGetters } from 'vuex';
    import * as types from '../store/mutation-types'
    import CountDown from './CountDown.vue'

    export default {
        computed: mapGetters([
            'currentSurveyQuestion',
            'currentIndexQuestion',
            'startedAtToString',
            'totalTime',
            'nbQuestions',
            'errors'
        ]),
        methods: mapActions([
            'toSelect',
            'submit',
            'countDownProgress'
        ]),
        components: {
            CountDown
        },
        created() {
            this.$store.subscribe((mutation) => {
                if (mutation.type === types.GO_TO_REPORT) {
                    const token = this.$route.params.token;
                    this.$router.push({ name: 'survey_completed', params: { token: token }});
                }
            });
        }
    }
</script>

<style lang="scss">
    .anwers {
        > li {
            padding: 10px 10px 5px 10px;
            margin: 20px 0;
            border: 1px solid #eee;
            border-left-width: 5px;
            border-radius: 1px;
            cursor: pointer;

            &.active {
                border-left: 5px solid #5cb85c;
            }
        }

        pre {
            background-color: transparent;
            border: none;
        }
    }
</style>
