import { createStore } from "vuex";

const store = createStore({
  state: {
    score: 0,
    level: 0,
  },
  mutations: {},
  actions: {},
  getters: {
    getScore: (state) => {
      return state.score;
    },
    getLevel: (state) => {
      return state.level;
    },
  },
});

export default store;
