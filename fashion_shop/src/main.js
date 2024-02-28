import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex'
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
    //element-plus
import ElementPlus from 'element-plus';
import VN from 'element-plus/dist/locale/vi.mjs';
// import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'element-plus/dist/index.css';

var store = createStore({
    state: {
        STATUS_LOGIN: false,
    },
    mutations: {
        setLoginStatus(state, status) {
            state.STATUS_LOGIN = status;
        },
    },
    // getters: {
    //     STATUS_LOGIN: (state) => state.STATUS_LOGIN,
    // },
});
window.axios = axios;

const APP = createApp(App);
APP.component('font-awesome-icon', FontAwesomeIcon);
APP.use(router);
APP.use(store);
APP.use(ElementPlus, {
    locale: VN,
});
APP.mount('#app');
export default { store };