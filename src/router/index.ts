import Vue from "vue";
import VueCompositionApi from "@vue/composition-api";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/Home.vue";
import Editor from "@/views/Editor.vue"
import Staff from "@/views/Staff.vue"
import SheetSetup from "@/views/SheetSetup.vue"
import Settings from "@/views/Settings.vue"

Vue.use(VueRouter);
Vue.use(VueCompositionApi);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Editor",
    component: Editor,
  },
  {
    path: "/staff",
    name: "Staff",
    component: Staff,
  },
  {
    path: "/setup",
    name: "Sheet setup",
    component: SheetSetup,
  },
  {
	path: "/settings",
	name: "Settings",
	component: Settings
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: process.env.IS_ELECTRON ? 'hash' : 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
