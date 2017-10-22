import Vue from 'vue'
import VueResource from 'vue-resource'
import router from './router'
import VueHighlightJS from 'vue-highlight.js';
import 'highlight.js/styles/default.css';
import App from './App.vue'
import { store } from './store/store'

Vue.use(VueResource);
Vue.http.options.emulateJSON = true;
Vue.use(VueHighlightJS);

export const Application = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
