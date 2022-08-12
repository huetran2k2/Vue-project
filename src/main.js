import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import './libs/fontawesome.js'
createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount("#app");