import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShare, faComment, faThumbsUp, faHeart, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import './assets/main.css'
library.add(faShare);
library.add(faComment);
library.add(faThumbsUp);
library.add(faHeart);
library.add(faEllipsis);

createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount("#app");