import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import * as Utils from '../utils';

Vue.use(Vuex)

const state = {
  /**
   * -> Month & Date are for searching holiday's data
   *    Defaults defined at 'rest.js'
   *    Updated by 'Calendar.vue' 
   *    Used by 'Holiday.vue' 
   */
  params: {
    month: 0,   
    date: 1,
    view: 0   // welcome screen
  },

  /**
   * Set limit for number of views (just in case) ¯\_(ツ)_/¯
   */
  limit: 2, // number of pages 3 => 0, 1, 2
}

const mutations = {
  // FORWARD (state) {
  //   state.views.current++;
  // },
  // BACK (state) {
  //   state.views.current--;
  // }
}

const actions = {
  /**
   * Show next view (page)
   * Current view param + 1
   * Push state
   */
  nextView({ commit }) {
    Utils.setView(Number(state.params.view) + 1);
  },
  /**
   * Show previous view (page)
   * Current view param - 1
   * Push state
   */
  prevView({ commit }) {
    Utils.setView(Number(state.params.view) - 1);
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

console.log(store);
 
export default store
