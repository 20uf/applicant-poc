<template>
    <section id="services" class="bg-light">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 mx-auto">
                    <h1>Start a test</h1>
                    <div class="alert alert-danger" v-if="errors.length > 0">
                        <ul>
                            <li v-for="error in errors">{{ error }}</li>
                        </ul>
                    </div>
                    <div class="form-group">
                        <label>Choose one or more categories:</label>
                        <v-select label="name" multiple :options="categoriesOptions" :on-change="addCategory"></v-select>
                    </div>
                    <div class="form-group">
                        <label>How many questions do you want?</label>
                        <input class="form-control" v-model="nbQuestions" type="number">
                    </div>
                    <div class="form-group">
                        <label>Review mode?</label>
                        <toggle-button v-model="reviewMode"/>
                    </div>
                    <div class="form-group" v-if="!reviewMode">
                        <label>Time per question (second)?</label>
                        <input class="form-control" v-model="timePerQuestion" type="number">
                    </div>
                    <div class="form-group text-right">
                        <button type="submit" class="btn btn-primary" @click.prevent="submitted">Start</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import VeeValidate from 'vee-validate';
    import vSelect from "vue-select"

    export default {
        data () {
            return {
                errors: []
            }
        },
        computed: {
            ...mapGetters([
                'categoriesOptions',
                'categoriesValue',
                'survey'
            ]),
            nbQuestions: {
                get () { return this.$store.getters.nbQuestions },
                set (value) { this.updateNbQuestions(value) }
            },
            reviewMode: {
                get () { return this.$store.getters.reviewMode },
                set (value) { this.updateReviewMode(value) }
            },
            timePerQuestion: {
                get () { return this.$store.getters.timePerQuestion },
                set (value) { this.updateTimePerQuestion(value) }
            }
        },
        methods: {
            ...mapActions([
                'addCategory',
                'updateNbQuestions',
                'updateReviewMode',
                'reset',
                'fetchCategories',
                'postSurvey'
            ]),
            submitted() {
                this.errors = [];

                if (this.categoriesValue.length === 0) {
                    this.errors.push('You must select at least one category.');
                }

                if (parseInt(this.nbQuestions) === 0 || this.nbQuestions.length === 0) {
                    this.errors.push('You must enter at least one question.');
                }

                if (this.errors.length === 0) {
                    this.postSurvey(this.survey).then(response => {
                        let token = response.data.token;
                        this.$router.push({ name: 'survey_start', params: { token: token }});
                    });
                }
            }
        },
        components: {
            vSelect
        },
        created() {
            this.reset();
            this.fetchCategories();
        }
    }
</script>
