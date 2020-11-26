import Vue from "vue";
import Vuex from "vuex";
import user from './user'
import shared from './shared'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    timetable:[],
  },
  mutations: {
    updateTimetable(state){
      state.timetable = JSON.parse(localStorage.getItem("timeTable"))
    },


  },
  getters:{},
  actions: {},
  modules: {
    user: user,
    shared: shared
  }
});
