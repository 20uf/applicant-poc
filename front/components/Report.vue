<template>
    <section id="services" class="bg-light">

        <div class="panel panel-default" :class="{ 'panel-success': report.percent > 80, 'panel-warning': report.percent < 80 }">
            <div class="panel-heading" >
                <h1>You have {{ report.good }} good responses</h1>
            </div>
            <div class="panel-body">

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
