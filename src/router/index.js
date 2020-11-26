import Vue from "vue";
import VueRouter from "vue-router";
import firebase from "firebase/app";
import "firebase/auth";
import tutorRoutes from './tutor'
import askQuestionsRoutes from './askQuestions'
import tte from './tte'
import general from './general'
import auth from './auth'

Vue.use(VueRouter);

const routes = [
  ...tutorRoutes,
  ...askQuestionsRoutes,
  ...tte,
  ...general,
  ...auth,
  
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
