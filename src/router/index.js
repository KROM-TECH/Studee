import Vue from "vue";
import VueRouter from "vue-router";
// import firebase from "firebase/app";
import store from "@/store";
// import "firebase/auth";
import tutorRoutes from './tutor'
import askQuestionsRoutes from './askQuestions'
import tte from './tte'
import auth from './auth'
import general from './general'

Vue.use(VueRouter);

const routes = [
  ...tutorRoutes,
  ...askQuestionsRoutes,
  ...tte,
  ...auth,
  ...general,
  
  
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



router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !store.getters.user){
    console.log('1')
    next({name: "Login"});
  }
  // else if (
  //   requiresAuth && !store.getters.verified
  //     ) {
  //       console.log('2')
  //       next({
  //         name: "Verify",
  //       });
  //     } 
      else if (
        to.matched.some((record) => record.meta.requiresGuest) &&
        store.getters.user
      ) {
        console.log('3')
        next({
          name: "Home",
        });
      } else {
        console.log('4')
        next();}
    });

export default router;
