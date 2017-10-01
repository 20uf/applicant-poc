<template>
    <section id="services" class="bg-light">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 mx-auto">
                    <h1>État des workers de {{ $route.params.provider }}</h1>

                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';

    export default {
        computed: {
            ...mapGetters({
                questions: 'getQuestions'
            })
        },
        methods: {
            ...mapActions({
                fetchQuestions: 'fetchQuestions'
            }),
        },
        created() {
            this.fetchQuestions();
        }
    }
</script>
