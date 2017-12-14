import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import * as Utils from '../scripts/utils';

Vue.use(Vuex)

const state = {
  /**
   * -> Month & Date are for searching holiday's data
   *      Defaults defined at 'rest.js'
   *      Updated by 'Calendar.vue' 
   *      Used by 'Holiday.vue' 
   * -> View is for displaying one of 3 available 'screens':
   *      0. Welcome
   *      1. Calendar
   *      3. Holiday Data
   */
  params: {
    month: (new Date()).getMonth(),   
    date: (new Date()).getDate(),
    view: 0 
  },
  /**
   * This object is just a place holder to see the structure
   */
  holiday: {
    y: 2018,
    m: 1,
    d: 1,
    bg: 1,
    title: "New Year's Day",
    description: "Alcohol choice regret! But it's a new year and a clean slate!" 
  },

  /**
   * Used sometimes...
   * Updated sometimes... CalendarDesktop for instance
   */
  date: new Date(),

  /**
   * Used in some cases to update view
   */
  screen: {
    height: window.innerHeight,
    width: window.innerWidth
  },

  /**
   * Set limit for number of views (just in case) ¯\_(ツ)_/¯
   */
  limit: 2, // number of pages 3 => 0, 1, 2
}

const mutations = {
  // FORWARD (state) {
  //   state.views.current++;
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
});
 
export default store;
