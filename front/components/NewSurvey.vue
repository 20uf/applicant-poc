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
                        <v-select label="name" multiple :options="getCategoriesOptions" :on-change="addCategory"></v-select>
                    </div>
                    <div class="form-group">
                        <label>How many questions do you want?</label>
                        <input class="form-control" v-model="nbQuestions" type="number">
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary" @click.prevent="submitted">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {mapActions, mapGetters } from 'vuex';
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
                'getCategoriesOptions',
                'getNbQuestions',
                'getCategoriesValue',
                'getSurvey'
            ]),
            nbQuestions: {
                get () { return this.getNbQuestions },
                set (value) { this.updateNbQuestions(value) }
            }
        },
        methods: {
            ...mapActions([
                'addCategory',
                'updateNbQuestions',
                'fetchCategories',
                'postSurvey'
            ]),
            submitted() {
                this.errors = [];

                if (this.getCategoriesValue.length === 0) {
                    this.errors.push('You must select at least one category.');
                }

                if (parseInt(this.getNbQuestions) === 0 || this.getNbQuestions.length === 0) {
                    this.errors.push('You must enter at least one question.');
                }

                if (this.errors.length === 0) {
                    this.postSurvey(this.getSurvey).then(response => {
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
            this.fetchCategories();
        }
    }
</script>
