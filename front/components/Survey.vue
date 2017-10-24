<template>
    <section id="services" class="bg-light">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 mx-auto">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';

    export default {
        data () {
            return {
                startedAt: new Date()
            }
        },
        methods: {
            ...mapActions({
                fetchSurvey: 'fetchSurvey'
            }),
        },
        created() {
            const token = this.$route.params.token;
            if (token) {
                this.fetchSurvey(token);
            }
        }
    }
</script>
