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
    import { mapActions } from 'vuex';

    export default {
        methods: mapActions([
            'fetchSurvey'
        ]),
        created() {
            const token = this.$route.params.token;

            if (token) {
                this.fetchSurvey(token);
            } else {
                this.$router.push({ name: 'home' });
            }
        }
    }
</script>
