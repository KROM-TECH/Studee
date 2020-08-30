import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "../views/Landing.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing
  },
  {
    path: "/signup",
    name: "Signup",
    component: () =>
      import( "../views/Signup.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import("../views/Login.vue")
  },
  {
    path: "/forget",
    name: "Forget",
    component: () =>
      import("../views/Forget.vue")
  },
  {
    path: "/verify",
    name: "Verify",
    component: () =>
      import("../views/Verify.vue")
  },
  {
    path: "/home",
    name: "Home",
    component: () =>
      import("../views/Home.vue")
  },
  {
    path: "/courses",
    name: "Courses",
    component: () =>
      import("../views/Courses.vue")
  },
  {
    path: "/support",
    name: "Support",
    component: () =>
      import("../views/Support.vue")
  },
  {
    path: "/Pastquestions",
    name: "PastQuestions",
    component: () =>
      import("../views/PastQuestions.vue")
  },
  {
    path: "/questions",
    name: "Questions",
    component: () =>
      import("../views/Questions.vue")
  },
  {
    path: "/profile",
    name: "Profile",
    component: () =>
      import("../views/Profile.vue")
  },
  {
    path: "/payment",
    name: "Payment",
    component: () =>
      import("../views/Payment.vue")
  },
  {
    path: "/price",
    name: "Price",
    component: () =>
      import("../views/Price.vue")
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
