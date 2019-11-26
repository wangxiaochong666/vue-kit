export const counter = {
  namespace: "counter",

  state: {
    count: 0
  },

  getters: {
    evenOrOdd: state => (state.count % 2 === 0 ? "even" : "odd")
  },

  actions: {
    increment: ({ commit }) => commit("increment"),
    decrement: ({ commit }) => commit("decrement")
  },

  mutations: {
    increment(state) {
      state.count++;
    },

    decrement(state) {
      state.count--;
    }
  }
};
