import Vue from "vue";
import VueRouter from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import login from "../components/login.vue";
import signup from "@/components/signup.vue";
import forgotPassword from "@/components/forgotPassword.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: login,
  },
  {
    path: "/signup",
    name: "signup",
    component: signup,
  },
  {
    path: "/forgot-password",
    name: "forgot-password",
    component: forgotPassword,
  },
];

const router = new VueRouter({
  mode: "history",
  linkActiveClass: "active",
  routes,
});

export default router;
