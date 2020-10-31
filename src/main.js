import Vue from "vue";
import App from "./App.vue";
// import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";

Vue.config.productionTip = false;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDG38NSzlGnLbhWGXYbfgmatIpJh2dYgng",
  authDomain: "questions-3b352.firebaseapp.com",
  databaseURL: "https://questions-3b352.firebaseio.com",
  projectId: "questions-3b352",
  storageBucket: "questions-3b352.appspot.com",
  messagingSenderId: "612556277926",
  appId: "1:612556277926:web:d41bd2af8c40cb05518c67",
  measurementId: "G-5YG3T45PTH",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("body");
  }
});
