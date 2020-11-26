import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    timetable:[],
    user:null,
  },
  mutations: {
    updateTimetable(state){
      state.timetable = JSON.parse(localStorage.getItem("timeTable"))
    },
    setUser(state, userData){
      state.user = userData
      localStorage.setItem("userData", JSON.stringify(userData));
    },
    clearUserData(){
      localStorage.removeItem("userData");
    }


  },
  getters:{
    verified(){
      let userDetail = JSON.parse(localStorage.getItem("userData"))
     return userDetail.user.emailVerified
    },

    isloggedin(){
      return localStorage.getItem("userData")
    }

  },
  actions: {},
  modules: {
  }
});
