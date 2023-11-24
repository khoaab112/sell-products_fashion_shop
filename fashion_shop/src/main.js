import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//axios
import axios from 'axios';
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
//font-awesome
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fas, fab, far)

window.axios = axios;

const APP = createApp(App);
APP.component('font-awesome-icon', FontAwesomeIcon);
APP.use(router);
APP.mount('#app');