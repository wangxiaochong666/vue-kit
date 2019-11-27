import Vue from "vue";
import Vuex from "vuex";

import bgColor from './bgColor/index';
Vue.use(Vuex);

const store = new Vuex.Store({
  modules:{
    bgColor
  }
});

export default store;
