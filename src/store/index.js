import Vue from 'vue'
import Vuex from 'vuex'
import pathStore from './modules/pathStore'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'vuex'
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    pathStore
  }
})
