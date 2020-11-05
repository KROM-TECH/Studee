import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "../views/Landing.vue";
import firebase from "firebase/app";
import "firebase/auth";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
    meta: {
      requiresGuest: true,
    },
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import("../views/auth/Signup.vue"),
    meta: {
      requiresGuest: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/auth/Login.vue"),
    meta: {
      requiresGuest: true,
    },
  },
  {
    path: "/forgot",
    name: "Forgot",
    component: () => import("../views/auth/Forget.vue"),
    meta: {
      requiresGuest: true,
    },
  },
  {
    path: "/verify",
    name: "Verify",
    component: () => import("../views/auth/Verify.vue"),
    meta: {
      requiresVerify: true,
    },
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/submit",
    name: "Submit",
    component: () => import("../views/Submit.vue"),
    // meta: {
    //   requiresAuth: true,
    // },
  },
  {
    path: "/courses",
    name: "Courses",
    component: () => import("../views/Courses.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/tutor",
    name: "Tutor",
    component: () => import("../views/tutor"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/tutor/find",
    name: "Find",
    component: () => import("../views/tutor/Find.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/tutor/profile/:id",
    name: "TutorProfile",
    component: () => import("../views/tutor/TutorProfile.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/tutor/find/:id",
    name: "Find",
    component: () => import("../views/tutor/Query_Tutors.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/chat",
    name: "Chat",
    component: () => import("../views/chat/"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/tte",
    name: "Tte",
    component: () => import("../views/tte/"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/note",
    name: "Note",
    component: () => import("../views/note/"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/Pastquestions",
    name: "PastQuestions",
    component: () => import("../views/PastQuestions.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/Profile.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/payment",
    name: "Payment",
    component: () => import("../views/Payment.vue"),
    meta: {
      requiresAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  //check for requiredAuth guard
  if (to.matched.some((record) => record.meta.requiresAuth) && !firebase.auth().currentUser) {
    next({
      name: "Login",
      query: { redirect: to.fullPath },
    });
  } else if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !firebase.auth().currentUser.emailVerified
  ) {
    // console.log(firebase.auth().currentUser.emailVerified)
    next({
      name: "Verify",
      query: { redirect: to.fullPath },
    });
  } else if (
    to.matched.some((record) => record.meta.requiresGuest) &&
    firebase.auth().currentUser
  ) {
    next({
      name: "Home",
      query: { redirect: to.fullPath },
    });
  } else next();
});

export default router;
