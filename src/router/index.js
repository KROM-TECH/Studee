import Vue from "vue";
import VueRouter from "vue-router";
import firebase from "firebase/app";
import "firebase/auth";
import tutorRoutes from './tutor'
import askQuestionsRoutes from './askQuestions'
import tte from './tte'

Vue.use(VueRouter);

const routes = [
  ...tutorRoutes,
  ...askQuestionsRoutes,
  ...tte,
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
    component: () => import("@/views/auth/Signup.vue"),
    meta: {
      requiresGuest: true,
    },
  },
  { 
    path: "/login",
    name: "Login",
    component: () => import("@/views/auth/Login.vue"),
    meta: {
      requiresGuest: true,
    },
  },
  {
    path: "/forgot",
    name: "Forgot",
    component: () => import("@/views/auth/Forget.vue"),
    meta: {
      requiresGuest: true,
    },
  },
  {
    path: "/verify",
    name: "Verify",
    component: () => import("@/views/auth/Verify.vue"),
    meta: {
      requiresVerify: true,
    },
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/general/Home.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/submit",
    name: "Submit",
    component: () => import("@/views/general/Submit.vue"),
    // meta: {
    //   requiresAuth: true,
    // },
  },
  {
    path: "/courses",
    name: "Courses",
    component: () => import("@/views/general/Courses.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  
  {
    path: "/chat",
    name: "Chat",
    component: () => import("@/views/chat/"),
    meta: {
      requiresAuth: true,
    },
  },

  {
    path: "/note",
    name: "Note",
    component: () => import("@/views/note/"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/Pastquestions",
    name: "PastQuestions",
    component: () => import("@/views/general/PastQuestions.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("@/views/general/Profile.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/payment",
    name: "Payment",
    component: () => import("@/views/general/Payment.vue"),
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



router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !await firebase.getCurrentUser()){
    console.log(firebase.getCurrentUser())
    next({name: "Login"});
  }else if (
        to.matched.some((record) => record.meta.requiresAuth) &&
        !firebase.auth().currentUser.emailVerified
      ) {
        next({
          name: "Verify",
        });
      } else if (
        to.matched.some((record) => record.meta.requiresGuest) &&
        await firebase.getCurrentUser()
      ) {
        next({
          name: "Home",
        });
      } else next();
    });

export default router;
