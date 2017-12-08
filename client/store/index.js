import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

const state = {
  /**
   * Contains data on current view (page)
   * Sets the limit for views
   */
  views: {
    limit: 2, // number of pages 3 => 0, 1, 2
    current: 0
  },

  /**
   * Used for searching holiday's data
   * Defaults defined at 'rest.js'
   * Updated by 'Calendar.vue' 
   * Used by 'Holiday.vue' 
   */
  holiday: { 
    month: 0,
    date: 1
  }
}

const mutations = {
  FORWARD (state) {
    state.views.current++;
  },
  BACK (state) {
    state.views.current--;
  }
}

const actions = {
  /**
   * Show next view (page)
   * Push state
   */
  nextView({ commit }) {
    if (state.views.current < state.views.limit) {
      commit('FORWARD'); 
      router.push({ 
        path: `/view=${state.views.current}/params`, 
        query: store.state.route.query
      });
    }
  },
  /**
   * Show previous view (page)
   * Push state
   */
  prevView({ commit }) {
    if (state.views.current > 0) {
      commit('BACK');
      router.push({ 
        path: `/view=${state.views.current}/params`, 
        query: store.state.route.query 
      });
    }
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

console.log(store);
 
export default store
