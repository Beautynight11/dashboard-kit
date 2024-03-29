import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Overview from "../views/Overview.vue";
import Tickets from "../views/Tickets.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/overview",
    name: "Overview",
    component: Overview
  },
  {
    path: "/tickets",
    name: "Tickets",
    component: Tickets
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
