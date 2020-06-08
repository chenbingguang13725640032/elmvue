import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)
import home from "../page/home/home.vue"
import login from "../page/login/login.vue"
import city from "../page/city/city.vue"


let router = new VueRouter({
    routes: [
        { path: "/", redirect: "/home" },
        { path: "/home", component: home },
        { path: "/login", component: login },
        { path: "/city", component: city }
    ]
})


export default router;