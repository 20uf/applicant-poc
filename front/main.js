import Vue from 'vue'
import VueResource from 'vue-resource'
import router from './router'
import App from './App.vue'
import { store } from './store/store'

Vue.use(VueResource);

export const Application = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
