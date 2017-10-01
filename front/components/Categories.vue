<template>
    <section id="services" class="bg-light">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 mx-auto">
                    <h1>Start a test</h1>
                    <div class="form-group">
                        <label>Choose one or more categories:</label>
                        <multiselect :value="value" tag-placeholder="Add this as new category" placeholder="Search or add a category" label="name" track-by="code" :options="options" :multiple="true" :taggable="true" @tag="addCategory"></multiselect>
                    </div>
                    <div class="form-group">
                        <label>How many questions do you want?</label>
                        <input class="form-control" :value="nbQuestions" @input="updateNbQuestions">
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary" @input="onSubmit">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';
    import multiselect from 'vue-multiselect'

    export default {
        computed: {
            ...mapGetters({
                value: 'getValue',
                options: 'getCategories',
                nbQuestions: 'getNbQuestions',
            })
        },

        methods: {
            ...mapActions([
                'addCategory',
                'getCategories',
                'updateNbQuestions'
            ]),
            onSubmit () {
                alert('ok');
            }
        },
        components: {
            multiselect
        },
        created() {
            this.getCategories();
        }
    }
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>