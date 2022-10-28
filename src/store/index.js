import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    autoscore_view_more:null
  },
  getters: {
  },
  mutations: {
    autoscore_view_more_selected(state,item){
      state.autoscore_view_more = item
    },
    autoscore_view_more_removed(state){
      state.autoscore_view_more = null
    }
  },
  actions: {
  },
  modules: {
  }
})
