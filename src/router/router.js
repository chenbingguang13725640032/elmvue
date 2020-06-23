import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)
import home from "../page/home/home.vue"
import login from "../page/login/login.vue"
import city from "../page/city/city.vue"
import square from "../page/square/square.vue"
import search from "../page/search/search.vue"
import food from "../page/food/food.vue"
import shop from "../page/shop/shop.vue"

let router = new VueRouter({
    routes: [
        { path: "/", redirect: "/home" },
        { path: "/home", component: home },
        { path: "/login", component: login },
        { path: "/city", component: city },
        { path: "/square", component: square },
        { path: "/search", component: search },
        { path: "/food", component: food },
        { path: "/shop", component: shop }
    ]
})


export default router;