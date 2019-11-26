import Vue from "vue";
import Vuex from "vuex";

import * as modules from "@/models";

Vue.use(Vuex);

const GlobalState = {
  state: {},
  getters: {},
  actions: {},
  mutations: {}
};

const store = new Vuex.Store({
  ...GlobalState,
  modules
});

export default store;
