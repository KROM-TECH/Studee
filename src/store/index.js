import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    timetable: []
  },
  mutations: {
    updateTimetable(state) {
      state.timetable = JSON.parse(localStorage.getItem("timeTable"));
    }
  },
  getters: {},
  actions: {}
});
