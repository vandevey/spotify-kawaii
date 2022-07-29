import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
  },

  mutations: {
    AUTH_SUCCES: (state, response) => state.token = response
  },
  actions: {
  },
  plugins: [
    // TODO : use persisted state
  ]
})
