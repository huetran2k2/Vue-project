import { createApp } from 'vue'
import router from './routes.js'
import App from './App.vue'
import './assets/style.css'
import VueAxios from 'vue-axios'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import './libs/fontawesome.js'
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
createApp(App)
    .use(VueAxios)
    .use(router)
    .component("font-awesome-icon", FontAwesomeIcon)
    .component('Datepicker', Datepicker)
    .mount("#app");
