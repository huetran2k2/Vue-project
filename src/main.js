import { createApp } from 'vue'
import router from './routes.js'
import App from './App.vue'
import './assets/main.css'
import VueAxios from 'vue-axios'

import axios from 'axios'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import './libs/fontawesome.js'
createApp(App)
    .use(VueAxios, axios)
    .use(router)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount("#app");
