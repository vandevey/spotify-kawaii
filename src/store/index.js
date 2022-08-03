import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    searchValue: ""
  },

  mutations: {
    AUTH_SUCCES: (state, response) => state.token = response,
    SET_SEACH: (state, response) => {
      state.searchValue = response
    }
  },
  actions: {
  },
  plugins: [
    // TODO : use persisted state
  ]
})
