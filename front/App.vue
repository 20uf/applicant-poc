<template>
    <div class="container-fluid">
        <app-header></app-header>
        <router-view></router-view>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import appHeader from './components/Header.vue'
    import appFooter from './components/Footer.vue'

    export default {
        components: {
            appHeader,
            appFooter
        }
    }
</script>
