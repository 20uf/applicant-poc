import Vue from 'vue'
import VueResource from 'vue-resource'
import router from './router'
import VueHighlightJS from 'vue-highlight.js';
import ToggleButton from 'vue-js-toggle-button';
import 'highlight.js/styles/default.css';
import App from './components/App.vue'
import { store } from './store/index'
import { twoDigits } from './filters/twoDigits'
import { nl2br } from './filters/nl2br'

Vue.filter('twoDigits', twoDigits);
Vue.filter('nl2br', nl2br);

Vue.use(VueResource);
Vue.http.options.emulateJSON = true;
Vue.use(VueHighlightJS);
Vue.use(ToggleButton);

export const Application = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
