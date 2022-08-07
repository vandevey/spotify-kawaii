import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    searchValue: "",
    isLoading: true
  },

  mutations: {
    AUTH_SUCCES: (state, response) => state.token = response,
    SET_SEACH: (state, response) => {
      state.searchValue = response
    },
    // TMS = Transition Méga Stylé
    TMS_ENDED:(state) => state.isLoading = false
  },
  actions: {
  },
  modules: {
  }
})
