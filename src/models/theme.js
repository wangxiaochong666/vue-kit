export const theme = {
  namespace: true,

  state: {
    curTheme: "default", // 当前主题

    // 默认主题
    default: {
      primaryColor: "#222222",
      secondaryColor: "#000000",
      auxiliaryColor: "#ffffff"
    },

    // 白色主题
    white: {
      primaryColor: "#ffffff",
      secondaryColor: "#ededed",
      auxiliaryColor: "#222222"
    }
  },

  getters: {
    getTheme(state) {
      return state[state.curTheme] || state.default;
    }
  },

  actions: {
    update({ commit }, payload) {
      return commit("update", payload);
    }
  },

  mutations: {
    update(state, payload) {
      state.curTheme = payload.curTheme;
    }
  }
};
