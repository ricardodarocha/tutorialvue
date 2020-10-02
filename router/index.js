import Vue from "vue";
import Router from "vue-router";
import Dashboard from "../pages/Dashboard.vue";
import /*...(rest of pages) */

Vue.use(Router);
export default new Router({
 routes: [
 {
 path: "/",
 redirect: '/dashboard'
 },
 {
 path: "/dashboard",
 name: "Dashboard",
 component: Dashboard,
 },
 /*...(rest of pages) */ ],
 linkActiveClass: 'is-active' /* change to Bulma's active nav link */
});