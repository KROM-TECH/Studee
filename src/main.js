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
  apiKey: "AIzaSyD3yvXIOXHzH4ncZPkDKf5vTeWJ2l1WkJM",
  authDomain: "studee-45f4b.firebaseapp.com",
  databaseURL: "https://studee-45f4b.firebaseio.com",
  projectId: "studee-45f4b",
  storageBucket: "studee-45f4b.appspot.com",
  messagingSenderId: "1081739793929",
  appId: "1:1081739793929:web:94b5fcb9f42e728cd54ad8",
  measurementId: "G-TRVMWW6FEP",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


 new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("body");
