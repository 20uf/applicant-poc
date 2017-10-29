<template>
    <section id="services" class="bg-light">

        <div class="panel panel-default" :class="{ 'panel-success': report.percent > 80, 'panel-warning': report.percent < 80 }">
            <div class="panel-heading" >
                <h1 v-if="report.percent > 80">You have {{ report.percent }}% success!</h1>
                <h1 v-else>You're done with {{ report.percent }}% good answers</h1>
            </div>
            <div class="panel-body">
                Your result: {{ report.good }} / {{ report.bad + report.good }}

                <hr />

                <router-link tag="a" :to="{ name: 'home'}" >Start a new test</router-link>
            </div>
        </div>
    </section>
</template>

<script>
    import {mapActions, mapGetters } from 'vuex';

    export default {
        computed: mapGetters([
            'report'
        ]),
    }
</script>
