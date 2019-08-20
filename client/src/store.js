import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sideNav: {
      open: false
    }
  },
  mutations: {
    changeSideNavOpen(state, value) {
      state.sideNav.open = !!value;
    }
  }
});
