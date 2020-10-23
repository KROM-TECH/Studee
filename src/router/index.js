import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "../views/Landing.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import("../views/auth/Signup.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/auth/Login.vue"),
  },
  {
    path: "/forget",
    name: "Forget",
    component: () => import("../views/auth/Forget.vue"),
  },
  {
    path: "/verify",
    name: "Verify",
    component: () => import("../views/auth/Verify.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/courses",
    name: "Courses",
    component: () => import("../views/Courses.vue"),
  },
  {
    path: "/tutor",
    name: "Tutor",
    component: () => import("../views/tutor/Tutor.vue"),
  },
  {
    path: "/chat",
    name: "Chat",
    component: () => import("../views/chat/Chat.vue"),
  },
  {
    path: "/tte",
    name: "Tte",
    component: () => import("../views/tte/Tte.vue"),
  },
  {
    path: "/note",
    name: "Note",
    component: () => import("../views/note/Note.vue"),
  },
  {
    path: "/Pastquestions",
    name: "PastQuestions",
    component: () => import("../views/PastQuestions.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/Profile.vue"),
  },
  {
    path: "/payment",
    name: "Payment",
    component: () => import("../views/Payment.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
