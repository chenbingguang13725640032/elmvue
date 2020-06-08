import Vue from 'vue';
import App from "./App.vue";
import "./assets/global.css"
import "./assets/iconfont.css"
import router from "./router/router"
import "./config/rem"
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

new Vue({
    el:"#app",
    router,
    render:h=>h(App)
})