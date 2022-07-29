import Vue from 'vue'
import Vuex from 'vuex'
import spotify from './modules/spotify'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    spotify
  },
  plugins: [
    // TODO : use persisted state
  ]
})
