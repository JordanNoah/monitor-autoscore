import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    autoscore_view_more:null,
    crons:[
      {
        title: 'Autoscore',
        abbreviation:'AUTOSCORE',
        running: false,
        nextRun: 1667529687,
        icon: 'fas fa-scroll'
      },
      {
        title: 'Cleaner',
        abbreviation:'CLEANER',
        running: false,
        nextRun: 1667529687,
        icon:'fas fa-recycle'
      },
      {
        title: 'Autoscore user not found',
        abbreviation:'USERNOTFOUND',
        running: true,
        nextRun: 1667529687,
        icon:'fas fa-user-times'
      }
    ]
  },
  getters: {
  },
  mutations: {
    autoscore_view_more_selected(state,item){
      state.autoscore_view_more = item
    },
    autoscore_view_more_removed(state){
      state.autoscore_view_more = null
    },
    change_cron_state(state,status){
      state.runCron = status
    }
  },
  actions: {
  },
  modules: {
  }
})
