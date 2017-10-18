<template>
    <section id="services" class="bg-light">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 mx-auto">
                    <h1>Survey homepage</h1>

                    <router-view></router-view>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';

    export default {
//        computed: {
//            ...mapGetters({
//                survey: 'getSurvey'
//            })
//        },
//        methods: {
//            ...mapActions({
//                fetchSurvey: 'fetchSurvey'
//            }),
//        },
//        created() {
//            this.fetchSurvey();
//        }
    }
</script>
